import { ObjectId } from "mongodb";

export interface Pokemon{
    _id?: ObjectId;
    name: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    pic: string;
}

export interface PokemonResults {
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface PokeData {
  stats: Stats[];
  order: number;
  sprites: AlmostPic;
}

export interface AlmostPic {
  other: GrabPic;
}

export interface GrabPic {
  ['official-artwork']: Pic;
}

export interface Pic {
  front_default: string;
}

export interface Stats {
  base_stat: number;
  stat: Stat;
}

export interface Stat {
  name: string;
}

export interface Chore {
  _id?:ObjectId;
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
}

export interface Trainer {
  _id?: ObjectId;
  name: string;
  chores: Chore[];
}

export interface Account {
  _id?: ObjectId;
  adminName: string;
  adminPassword: string;
  gymName: string;
  gymPassword: string;
  calendarTitle: string;
  trainers: Trainer[];
}