import { useEffect, useState } from 'react';
import { AccountContext } from '../context/auth.context';
import { Chore, Trainer } from '../model/model';

import { createTask, readAllChores } from '../service/pokemonService';
import './AdminHomepage.css';
import CalendarCard from './CalendarCard';
import TaskForm from './TaskForm';
import { useContext } from "react";

function AdminHomepage(){
    const [ chores, setChores ] = useState<Chore[]>([]);
    const [ choresLoaded, setChoresLoaded ] = useState(false);
    const {accounts} = useContext(AccountContext);
    
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

  const [ trainer, setTrainer ] = useState<Trainer[]>([]);

  function handleAddTrainer(trainer: Trainer): void {
    setTrainer(prevTrainer => [ ...prevTrainer, trainer ]);
  }

  return (
    <div className="AdminHomepage">
      <h3> HOMEPAGE</h3>
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