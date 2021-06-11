import axios from 'axios';
import Pokemon from '../model/Pokemon'

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl){
  console.error("REACT_APP_API_URL environment variable not set.")
}

export function allPokemon():Promise<Pokemon[]> {
  return axios.get(baseUrl).then(res => res.data);
}