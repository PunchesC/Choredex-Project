import { Chore } from "../model/model";
import "./CalendarCard.css"
import TaskForm from "./TaskForm";

interface Props{
  chore: Chore;
  // onDelete: () => void;
}

function CalendarCard({chore}:Props){


  return(
    <div className="CalendarCard">
      <h5>{chore.trainer} Calendar</h5>
      
      <button>Create a Task for {chore.trainer}</button>
      <p>Chore: {chore.title}</p>
      <p>More Info: {chore.description}</p>
      <p>Difficulty: {chore.difficulty}</p>
      <div className="CalendarCard_days">
        {chore.monday === true ? <div>monday</div> : <div></div>}
        {chore.tuesday ? <div>teusday</div> : <div></div>}
        {chore.wednesday ? <div>wednesday</div> : <div></div>}
        {chore.thursday ? <div>thursday</div> : <div></div>}
        {chore.friday ? <div>friday</div> : <div></div>}
        {chore.saturday ? <div>saturday</div> : <div></div>}
        {chore.sunday ? <div>sunday</div> : <div></div>}
      </div>
    </div>
  )

}

export default CalendarCard;