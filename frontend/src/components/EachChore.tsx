import {Chore} from '../model/model'
import './EachChore.css';

interface Props{
    chore:Chore;
    onComplete?: (chore:Chore) => void;
}
let addNoDisplay = "";
let addSlash = "";
let onComplete;


function EachChore({onComplete, chore}:Props){

    return (
        <div className="EachChore">
        {chore.complete === true ?
        <div className=" Slash">
                {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                <p className="ChoreTitle">{chore.title}</p>
                <p className="ChoreDesc">{chore.description}</p>
                <p className="ChoreDiff">difficulty: {chore.difficulty}</p>
               {onComplete && <button className="DoneButton noDisplay" onClick={() => onComplete(chore)}>DONE</button>}
        </div>
        : 
        <div>
                {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                <p className="ChoreTitle">{chore.title}</p>
                <p className="ChoreDesc">{chore.description}</p>
                <p className="ChoreDiff">difficulty: {chore.difficulty}</p>
               {onComplete && <button className="DoneButton" onClick={() => onComplete(chore)}>DONE</button>}
        </div>}
        </div>
    )
}
export default EachChore;