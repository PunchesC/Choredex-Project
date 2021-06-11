export interface PokemonResults{
  results: Result[];
 }
 
 export interface Result{
   name: string;
   url: string;
 }
 export interface PokeData{
   stats: Stats[];
   order:number;
 }
 export interface Stats{
   base_stat: number;
   stat: Stat;
 }
 export interface Stat{
   name:string;
 }