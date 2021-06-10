import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import {PokeData, Result} from '../model/pokemonAPI';
// import { Result } from '../model/pokemonAPI';

const app = express();
app.use(cors());
app.use(express.json());

// pokemonRoutes.get("/stuff", (req, res) => {
//     getPokeStuff();
// });


app.get("/", async (req, res) => {
    try {
      await getPokeStuff()
      res.send('Success');
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
});

async function getPokeStuff(){
  let pokes:Result[] = (await axios.get('https://pokeapi.co/api/v2/pokemon?limit=3')).data;
  console.log(pokes);
  let dbArray: { name: string; hp: string; hpAmount: number; attack: string; attackAmount: number; defense: string; defenseAmount: number; speed: string; speedAmount: number; }[]= [];
  for (let poke of pokes){
    let pokeData:PokeData = (await axios.get(poke.url)).data
    let dbPoke = {
      name: poke.name,
      hp: pokeData.stats[0].stat.name,
      hpAmount: pokeData.stats[0].base_stat,
      attack: pokeData.stats[1].stat.name,
      attackAmount: pokeData.stats[1].base_stat,
      defense: pokeData.stats[2].stat.name,
      defenseAmount: pokeData.stats[2].base_stat,
      speed: pokeData.stats[5].stat.name,
      speedAmount: pokeData.stats[5].base_stat,
    }
    dbArray.push(dbPoke);
    console.log(dbArray)
  }
}



export default functions.https.onRequest(app);