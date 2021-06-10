import { PokemonResults, Result} from "../model/pokemonAPI"

export function fetchAllPokemon():Promise<Result[]>{
  return fetch(
    `https://pokeapi.co/api/v2/pokemon/`
  )
  .then (res =>res.json())
  .then((data)=> {
    console.log(data);
    return data;
   

  })

}


