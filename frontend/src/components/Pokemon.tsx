import {Result} from '../model/pokemonAPI'

interface Props {
  result:Result
}


function Pokemon({result}: Props){
const pokemonName = result.name

  return(
    <div className="Pokemon">
        {result.name}
    </div>
  )
}

export default Pokemon;