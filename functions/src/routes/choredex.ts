// import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import axios from 'axios';
// import { Result } from '../model/pokemonAPI';

const pokemonRoutes = express.Router();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message:"Hello"});
});

pokemonRoutes.get("/", async (req, res) => {
    try {
      const results = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.data);
        res.json(results); // send JSON results
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
});

export default pokemonRoutes;