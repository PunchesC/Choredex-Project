export  interface PokemonResults{
 results: Result[];
}

export interface Result{
  name:string;
}

export interface Chore{
  title: string;
  description?: string;
  Monday?: boolean;
  Tuesday: boolean;
  Wednesday?: boolean;
  Thursday?: boolean;
  Friday?: boolean;
  Saturday?: boolean;
  Sunday?: boolean;
  Trainer: string;
  difficulty: string;
}

export default interface Account {
  adminName: string;
  adminPassword: string;
  gymName: string;
  gymPassword: string;
  calendarTitle: string;
}