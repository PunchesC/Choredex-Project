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
