import {Chore} from '../model/model'
import './EachChore.css';

interface Props{
    chore:Chore;
    onComplete?: (chore:Chore) => void;
}

function EachChore({onComplete, chore}:Props){

    return (
        <div className="EachChore">
        {chore.complete === true ?
        <div className=" Slash">
                {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                {chore.title}
                <br></br>
                {chore.description}
                <br></br>
                Difficulty: {chore.difficulty}
                <br></br>
               {onComplete && <button className="DoneButton noDisplay" onClick={() => onComplete(chore)}>DONE</button>}
        </div>
        : 
        <div className="EachChore">
                {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                {chore.title}
                <br></br>
                {chore.description}
                <br></br>
                Difficulty: {chore.difficulty}
                <br></br>
               {onComplete && <button className="DoneButton" onClick={() => onComplete(chore)}>DONE</button>}
        </div>}
        </div>
    )
}
export default EachChore;