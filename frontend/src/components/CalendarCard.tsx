import "./CalendarCard.css"
import {useContext} from "react"
import {ChoreContext} from "../context/chore.context"


function CalendarCard(){
const {chores} = useContext(ChoreContext);

  return(
    <div className="CalendarCard">
      <h5>[Trainer Name] Calendar</h5>
      <button>Create a Task for [Trainer Name]</button>
      <div className="CalendarCard_days">
        Monday
        {chores.map((chores)=> (
          <div>chore</div>
        ))}
      </div>
      <div className="CalendarCard_days">Tuesday
      </div>
      <div className="CalendarCard_days">Wednesday
      </div>
      <div className="CalendarCard_days">Thursday
      </div>
      <div className="CalendarCard_days">Friday
      </div>
      <div className="CalendarCard_days">Saturday
      </div>
      <div className="CalendarCard_days">Sunday
      </div>
    </div>
  )

}

export default CalendarCard;