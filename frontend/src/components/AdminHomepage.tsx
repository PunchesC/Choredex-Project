import React, { useEffect, useState } from 'react';
import { Chore, Trainer } from '../model/model';
import { createTask, readAllChores, addTrainer, readAllTrainers, readAllChoresForTrainer } from '../service/pokemonService';
import './AdminHomepage.css';
import CalendarCard from './CalendarCard';
import TaskForm from './TaskForm';
import TrainerForm from './TrainerForm';
import { Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';

function AdminHomepage(){
    const [ chores, setChores ] = useState<Chore[]>([]);
    const [ choresLoaded, setChoresLoaded ] = useState(false);
    const [ showTaskForm, setShowTaskForm ] = useState(false);
    const [ showTrainerForm, setShowTrainerForm ] = useState(false);
    const [ complete, setComplete ] = useState(false);
    const [ trainers, setTrainers ] = useState<Trainer[]>([]);
    
    useEffect(() => {
      loadChores();
      loadTrainers();
    }, []);
    
    function loadChores() {
      readAllChores().then(choresFromApi => {
        setChores(choresFromApi);
        setChoresLoaded(true);
      });
    }

    function loadTrainers() {
      readAllTrainers().then(trainersFromApi => {
        setTrainers(trainersFromApi);
      })
    }

    function handleShowTaskForm() {
      setShowTaskForm(true);
    }

    function handleHideTaskForm() {
      setShowTaskForm(false);
    }

    function handleShowTrainerForm() {
      setShowTrainerForm(true);
    }

    function handleHideTrainerForm() {
      setShowTrainerForm(false);
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
      <button onClick={ handleShowTrainerForm }>add trainer</button>

      <Modal size="sm" centered show={ showTrainerForm } onHide={ handleHideTrainerForm } animation={ false }>
        {/* <Modal.Header>
          <Modal.Title><h3 className="trainerFormTitle">ADD NEW TRAINER</h3></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <TrainerForm onSubmit={handleAddTrainer} onClose={ ()=> setShowTrainerForm(false) }/>
        </Modal.Body>
      </Modal>
      {/* {showTrainerForm === true && <TrainerForm onSubmit={handleAddTrainer} onClose={ ()=> setShowTrainerForm(false) }/>} */}

      <button onClick={ handleShowTaskForm }>Create a Task</button>

      { !choresLoaded ?
            <p className="AdminHomePage_message">Loading...</p>
            : chores.map(eachChore => 
            <CalendarCard key={eachChore._id} chore={eachChore} onComplete={ () => handleCompleteTask() }/> )
      }

      <Modal size="lg" centered show={ showTaskForm } onHide={ handleHideTaskForm } animation={ false }>
        {/* <Modal.Header>
          <Modal.Title><h3 className="taskFormTitle">NEW TASK FORM</h3></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <TaskForm onSubmit={ handleAddTask } onClose={ () => setShowTaskForm(false) }/>
        </Modal.Body>
      </Modal>
      {/* {showTaskForm === true && <TaskForm onSubmit={handleAddTask} onClose={ () => setShowTaskForm(false) }/>} */}

    </div>
  );

}

export default AdminHomepage;