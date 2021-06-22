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
                <p>{chore.title}</p>
                <p>{chore.description}</p>
                <p>difficulty: {chore.difficulty}</p>
               {onComplete && <button className="DoneButton noDisplay" onClick={() => onComplete(chore)}>DONE</button>}
        </div>
        : 
        <div>
                {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                <p>{chore.title}</p>
                <p>{chore.description}</p>
                <p>difficulty: {chore.difficulty}</p>
               {onComplete && <button className="DoneButton" onClick={() => onComplete(chore)}>DONE</button>}
        </div>}
        </div>
    )
}
export default EachChore;