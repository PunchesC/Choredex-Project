import { useEffect, useState } from "react";
import { Result } from "../model/pokemonAPI";
import { fetchAllPokemon } from "../service/pokemonService";


function Pokemon(){
 const [pokemonName, setPokemonName] = useState<Result[]>([])

 useEffect(() => {
  fetchAllPokemon().then((data) => {
    setPokemonName(data);
  });
}, []);


console.log(pokemonName)
  return(
    <div className="Pokemon">
        <ol>
          {pokemonName.map((result, i) => (
            <li key={i}>
              {result.name}
            </li>
          ))}
        </ol>
    </div>
  )
}

export default Pokemon;