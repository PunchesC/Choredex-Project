import { useEffect, useState } from "react";
import Pokemon from "../model/Pokemon";
import { allPokemon } from "../service/pokemonService";


function Pokemons(){
 const [pokes, setPokes] = useState<Pokemon[]>([])

 useEffect(() => {
  allPokemon().then((data) => {
    setPokes(data);
    console.log(data);
  });
}, []);


  return(
    <div className="Pokemons">
        <ol>
          {pokes.map((poke, i) => (
            <li key={i}>
              <img src={poke.picUrl} alt=''/>
              Name: {poke.name}, 
              HP: {poke.hpAmount}, 
              Attack: {poke.attackAmount}, 
              Defense: {poke.defenseAmount}, 
              Speed: {poke.speedAmount}
            </li>
          ))}
        </ol>
    </div>
  )
}

export default Pokemons;