import axios from 'axios';
import { Chore } from '../model/model';
import Pokemon from '../model/Pokemon'

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl){
  console.error("REACT_APP_API_URL environment variable not set.")
}

export function allPokemon():Promise<Pokemon[]> {
  return axios.get(baseUrl).then(res => res.data);
}

export function createTask(chore:Chore):Promise<Chore>{
  return axios.post(`${baseUrl}/chores`,chore).then(res =>res.data)
}

export function readAllChores():Promise<Chore[]> {
  return axios.get(`${baseUrl}/chores`).then(res => res.data);
}

