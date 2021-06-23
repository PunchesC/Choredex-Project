import Pokemon from "./Pokemon";
// import ObjectId from 'mongodb'

export interface PokemonResults {
 results: Result[];
}

export interface Result {
  name:string;
}
export interface Trainer {
  _id?:string;
  name: string;
  pokemons: Pokemon[];
}

export interface Chore {
  _id?:string;
  title: string;
  description?: string;
  monday?: boolean;
  tuesday?: boolean;
  wednesday?: boolean;
  thursday?: boolean;
  friday?: boolean;
  saturday?: boolean;
  sunday?: boolean;
  trainer: string;
  difficulty: string;
  complete: boolean;
  photo?: string;
}

export interface Account {
  _id?:string;
  adminName: string;
  adminPassword: string;
  gymName: string;
  gymPassword: string;
  calendarTitle: string;
  trainers: Trainer[];
}