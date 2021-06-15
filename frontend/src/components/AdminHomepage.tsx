import React, { useEffect, useState } from 'react';
import { Chore, Trainer } from '../model/model';
import { createTask, readAllChores, addTrainer, readAllTrainers, readAllChoresForTrainer } from '../service/pokemonService';
import './AdminHomepage.css';
import CalendarCard from './CalendarCard';
import TaskForm from './TaskForm';
import TrainerForm from './TrainerForm';

function AdminHomepage(){
    const [ chores, setChores ] = useState<Chore[]>([]);
    const [ choresLoaded, setChoresLoaded ] = useState(false);
    const [ showTaskForm, setShowTaskForm ] = useState(false);
    const [ showTrainerForm, setShowTrainerForm ] = useState(false);
<<<<<<< Updated upstream
    const [ trainer, setTrainer ] = useState<Trainer[]>([]);
    const [ complete, setComplete ] = useState(false);
=======
>>>>>>> Stashed changes
    const [ trainers, setTrainers ] = useState<Trainer[]>([]);
    
    useEffect(() => {
      loadChores();
      loadTrainers();
    }, []);
    
    function loadChores() {
      readAllChores().then(choresFromApi => {
        setChores(choresFromApi);
        addChoresByTrainer();
        setChoresLoaded(true);
      });
    }
    
    function addChoresByTrainer(){
      for (let chore of chores){
        for (let trainer of trainers)
        if (chore.trainer === trainer.name){
          trainer.chores?.push(chore);
        }
      }
    }

    function loadTrainers() {
      readAllTrainers().then(trainersFromApi => {
        setTrainers(trainersFromApi);
      })
    }

    function handleShowTaskForm() {
      setShowTaskForm(true);
    }

    function handleShowTrainerForm() {
      setShowTrainerForm(true);
    }

    function handleAddTask(chore:Chore):void {
      createTask(chore).then(loadChores);
    }

    function handleAddTrainer(trainer: Trainer): void {
      addTrainer(trainer).then(loadTrainers);
    }

    function handleCompleteTask() {
      setComplete(true);
      console.log(complete);
    }

  return (
    <div className="AdminHomepage">
      <h3>ADMIN HOMEPAGE</h3>
      <button onClick={handleShowTrainerForm}>add trainer</button>
      {showTrainerForm === true && <TrainerForm onSubmit={handleAddTrainer} onClose={ ()=> setShowTrainerForm(false) }/>}
      <button onClick={handleShowTaskForm}>Create a Task</button>
      { !choresLoaded ?
            <p className="AdminHomePage_message">Loading...</p>
            : chores.map(eachChore => 
            <CalendarCard key={eachChore._id} chore={eachChore} onComplete={ () => handleCompleteTask() }/>
            )}
      {showTaskForm === true && <TaskForm onSubmit={handleAddTask} onClose={ () => setShowTaskForm(false) }/>}
    </div>
  );

}

export default AdminHomepage;