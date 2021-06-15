import axios from 'axios';
import { Chore, Trainer } from '../model/model';
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

export function addTrainer(trainer:Trainer):Promise<Trainer>{
  return axios.post(`${baseUrl}/trainers`, trainer).then(res =>res.data)
}

export function readAllTrainers():Promise<Trainer[]> {
  return axios.get(`${baseUrl}/trainers`).then(res => res.data);
}

export function readAllChoresForTrainer(name: string):Promise<Chore[]>{
  return axios.get(`${baseUrl}/chores`, {params: {name: name}}).then(res => res.data);
}

