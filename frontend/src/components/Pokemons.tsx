import { useEffect, useState } from "react";
import Pokemon from "../model/Pokemon";
import { allPokemon } from "../service/pokemonService";


function Pokemons(){
 const [pokes, setPokes] = useState<Pokemon[]>([])

let easyPokes = []
let mediumPokes = []
let hardPokes = []
for (let poke of pokes){
  let points = poke.hpAmount + poke.defenseAmount + poke.attackAmount + poke.speedAmount
  if (points >= 150 && points < 280){
    easyPokes.push(poke)
  } else if (points >= 280 && points < 340){
    mediumPokes.push(poke)
  } else {
    hardPokes.push(poke)
  }
}
console.log(easyPokes.length)
console.log(mediumPokes.length)
console.log(hardPokes.length)


 useEffect(() => {
  allPokemon().then((data) => {
    setPokes(data);
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