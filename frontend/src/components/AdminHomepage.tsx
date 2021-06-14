import { useEffect, useState } from 'react';
import { Chore } from '../model/model';
import { createTask, readAllChores } from '../service/pokemonService';
import './AdminHomepage.css'
import CalendarCard from './CalendarCard'
import TaskForm from './TaskForm';

function AdminHomepage(){
    const [ chores, setChores ] = useState<Chore[]>([]);
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

  return (
    <div className="AdminHomepage">
      <h3>ADMIN HOMEPAGE</h3>
      <button>add trainer</button>
      { !choresLoaded ?
            <p className="AdminHomePage_message">Loading...</p>
            : chores.map(eachChore => 
            <CalendarCard key={eachChore._id} chore={eachChore}/>
            )}
            <TaskForm onSubmit={handleAddTask}/>
    </div>
  );

}

export default AdminHomepage;