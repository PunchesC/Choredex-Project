import axios from 'axios';
import {Account, Chore} from '../model/model';
import Pokemon from '../model/Pokemon'

const baseUrl = process.env.REACT_APP_API_URL || "";
if (!baseUrl){
  console.error("REACT_APP_API_URL environment variable not set.")
}

export function allPokemon():Promise<Pokemon[]> {
  return axios.get(`${baseUrl}/pokemon`).then(res => res.data);
}

export function createTask(chore:Chore):Promise<Chore>{
  return axios.post(`${baseUrl}/chores`, chore).then(res => res.data)
}

export function deleteTask(choreId:string):Promise<void>{
  return axios.delete(`${baseUrl}/chores/${encodeURIComponent(choreId)}`)
}

export function readAllChores():Promise<Chore[]> {
  return axios.get(`${baseUrl}/chores`).then(res => res.data);
}

export function readAllChoresForTrainer(trainer: string):Promise<Chore[]>{
  return axios.get(`${baseUrl}/chores`, {params: {trainer: trainer}}).then(res => res.data);
}

export function readAccountById(id:string):Promise<Account>{
  return axios.get(`${baseUrl}/accounts/${encodeURIComponent(id)}`).then(res => res.data);
}

export function createAccount(account:Account):Promise<Account>{
  return axios.post(`${baseUrl}/accounts`,account).then(res =>res.data)
}

export function updateAccountInDatabase(account:Account):Promise<Account>{
  return axios.put(`${baseUrl}/accounts/${encodeURIComponent(account._id!)}`, account).then(res => res.data);
}

export function updateChoreInDatabase(chore:Chore):Promise<Chore>{
  return axios.put(`${baseUrl}/chores/${encodeURIComponent(chore._id!)}`,chore).then(res => res.data);
}

export function readAccountByGymName(gymName:string):Promise<Account>{
 return axios.get(`${baseUrl}/accounts/by-gym-name/${gymName}`).then(res => res.data);
  
}