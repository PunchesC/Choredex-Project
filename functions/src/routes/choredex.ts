import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import {Chore, PokeData, PokemonResults} from '../model/pokemonAPI';
import { Pokemon } from "../model/pokemonAPI";
import { getClient } from "../db";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/setData", async (req, res) => {
    try {
      await getPokeStuff();
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
});
app.get("/pokemon", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection<Pokemon>('Pokemon').find().toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});
app.get("/chores", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection<Chore>('chores').find().toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

app.post("/chores", async (req, res) => {
  const chore = req.body as Chore;
  try {
    const client = await getClient();
    const result = await client.db().collection<Chore>('chores').insertOne(chore);
    chore._id = result.insertedId;
    res.status(201).json(chore);
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

async function getPokeStuff(){
  let pokeResults:PokemonResults = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')).data;
  let pokes = pokeResults.results
  console.log(pokes);
  let dbArray: { id: number; name: string; hp: string; hpAmount: number; attack: string; attackAmount: number; defense: string; defenseAmount: number; speed: string; speedAmount: number; picUrl: string;}[]= [];
  for (let poke of pokes){
    let pokeData:PokeData = (await axios.get(poke.url)).data
    let dbPoke = {
      id: pokeData.order,
      name: poke.name,
      hp: pokeData.stats[0].stat.name,
      hpAmount: pokeData.stats[0].base_stat,
      attack: pokeData.stats[1].stat.name,
      attackAmount: pokeData.stats[1].base_stat,
      defense: pokeData.stats[2].stat.name,
      defenseAmount: pokeData.stats[2].base_stat,
      speed: pokeData.stats[5].stat.name,
      speedAmount: pokeData.stats[5].base_stat,
      picUrl: pokeData.sprites.other['official-artwork'].front_default
    }
    dbArray.push(dbPoke);

  }
  getClient().then(client => {
  client.db().collection('Pokemon').insertMany(dbArray);
  })
}



export default functions.https.onRequest(app);