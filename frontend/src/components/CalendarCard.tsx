import "./CalendarCard.css"
import {useContext, useEffect, useState} from "react"
import {ChoreContext} from "../context/chore.context"
import TaskForm from "./TaskForm";
import { Chore } from "../model/model";
import {createTask, readAllChores, } from "../service/pokemonService"


function CalendarCard(){
// const {chores} = useContext(ChoreContext);
const [ Chores, setChores ] = useState<Chore[]>([]);
const [ choresLoaded, setChoresLoaded ] = useState(false);

useEffect(()=>{
  loadChores();
}, []);
function loadChores(){
  readAllChores().then(choresFromApi => {
    setChores(choresFromApi);
    setChoresLoaded(true);
  });
}


function handleAddTask(chore:Chore):void{
  createTask(chore).then(loadChores)
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
        <div>monday</div>
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