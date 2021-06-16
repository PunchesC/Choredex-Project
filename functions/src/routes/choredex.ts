import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import {Account, Chore, PokeData, PokemonResults, Trainer} from '../model/pokemonAPI';
import { Pokemon } from "../model/pokemonAPI";
import { getClient } from "../db";
import { ObjectId } from "mongodb";

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
  const trainer = String(req.query.trainer || "");
  const query: any = {};
  if (trainer){
    query.trainer = trainer;
  }
  try {
    const client = await getClient();
    const results = await client.db().collection<Chore>('chores').find(query).toArray();
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


app.get("/trainers", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection<Trainer>('trainers').find().toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

app.post("/trainers", async (req, res) => {
  const trainer = req.body as Trainer;
  try {
    const client = await getClient();
    const result = await client.db().collection<Trainer>('trainers').insertOne(trainer);
    trainer._id = result.insertedId;
    res.status(201).json(trainer);
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

app.get("/accounts", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection<Account>('accounts').find().toArray();
    res.json(results); // send JSON results
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

app.post("/accounts", async (req, res) => {
  const account = req.body as Account;
  try {
    const client = await getClient();
    const result = await client.db().collection<Account>('accounts').insertOne(account);
    account._id = result.insertedId;
    res.status(201).json(account);
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

app.get("/accounts/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const account = await client.db().collection<Account>('accounts').findOne({ _id : new ObjectId(id) });
    if (account) {
      res.json(account);
    } else {
      res.status(404).json({message: "Not Found"});
    }
  } catch (err) {
    console.error("FAIL", err);
    res.status(500).json({message: "Internal Server Error"});
  }
});

app.put("/accounts/:id", async (req, res) => {
  const id = req.params.id;
  const account = req.body as Account;
  delete account._id;
  try {
    const client = await getClient();
    const result = await client.db().collection<Account>('accounts').replaceOne({ _id: new ObjectId(id) }, account);
    if (result.modifiedCount === 0) {
      res.status(404).json({message: "Not Found"});
    } else {
      account._id = new ObjectId(id);
      res.json(account);
    }
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