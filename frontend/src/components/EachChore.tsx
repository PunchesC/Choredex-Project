import {Chore} from '../model/model'

interface Props{
    chore:Chore;
    onComplete?: (chore:Chore) => void;
}

function EachChore({onComplete, chore}:Props){

    return (
        <div className="EachChore">
                {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                {chore.title}
                <br></br>
                {chore.description}
                <br></br>
                Difficulty: {chore.difficulty}
                <br></br>
               {onComplete && <button className="DoneButton" onClick={() => onComplete(chore)}>DONE</button>}
        </div>
    )
}
export default EachChore;