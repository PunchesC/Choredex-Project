import "./CalendarCard.css"
import {useContext} from "react"
import {ChoreContext} from "../context/chore.context"


function CalendarCard(){
const {chores} = useContext(ChoreContext);

  return(
    <div className="CalendarCard">
      <h5>[trainer name] calendar</h5>
      <button>create a task for [trainer name]</button>
      <div className="CalendarCard_days">
        <div>monday
          {chores.map((chores)=> (
            <div>chore</div>
          ))}
        </div>
        <div>tuesday</div>
        <div>wednesday</div>
        <div>thursday</div>
        <div>friday</div>
        <div>saturday</div>
        <div>sunday</div>
      </div>
    </div>
  )

}

export default CalendarCard;