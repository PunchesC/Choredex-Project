import "./CalendarCard.css"
import {useContext} from "react"
import {ChoreContext} from "../context/chore.context"
import TaskForm from "./TaskForm";
import { Chore } from "../model/model";


function CalendarCard(){
const {chores} = useContext(ChoreContext);

function handleAddTask(){
  console.log("hi")
}




  return(
    <div className="CalendarCard">
      <h5>[trainer name] calendar</h5>
      <button>create a task for [trainer name]</button>
      <h5>[Trainer Name] Calendar</h5>
      <section >
      <button>Create a Task for [Trainer Name]</button>
      <section className="CalendarCard_taskform">
    <TaskForm onSubmit={handleAddTask} />
    </section>
    </section>
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