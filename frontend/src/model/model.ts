export interface PokemonResults{
 results: Result[];
}

export interface Result{
  name:string;
}

export interface Chore{
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
}

export interface Account {
  adminName: string;
  adminPassword: string;
  gymName: string;
  gymPassword: string;
  calendarTitle: string;
}