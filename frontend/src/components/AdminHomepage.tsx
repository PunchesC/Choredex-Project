import React, { useContext, useEffect, useState } from 'react';
import { Chore, Trainer } from '../model/model';
import { createTask, readAllChores, allPokemon} from '../service/pokemonService';
import './AdminHomepage.css';
import CalendarCard from './CalendarCard';
import TaskForm from './TaskForm';
import TrainerForm from './TrainerForm';
// import { Button, Modal } from 'react-bootstrap';
import { AccountContext } from '../context/auth.context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function AdminHomepage(){
    const [ showTaskForm, setShowTaskForm ] = useState(false);
    const [ showTrainerForm, setShowTrainerForm ] = useState(false);
    const [choresUpdateTrigger, setChoresUpdateTrigger] = useState(0);
    const {account, updateAccount, currentUser} = useContext(AccountContext);
    const trainers = account.trainers;

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
      createTask(chore).then(() => 
      setChoresUpdateTrigger(prev => prev + 1))
    }

    function handleAddTrainer(trainer: Trainer): void {
      account.trainers.push(trainer)
      updateAccount(account);
    }

    function scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }


  return (
    <div className="AdminHomepage">

      {/* <h3 className="Title">ADMIN HOMEPAGE</h3> */}
      <button className="AdminButtons" onClick={ handleShowTrainerForm }>add trainer</button>

      <Modal size="sm" centered show={ showTrainerForm } onHide={ handleHideTrainerForm } animation={ false }>
        {/* <Modal.Header>
          <Modal.Title><h3 className="trainerFormTitle">ADD NEW TRAINER</h3></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <TrainerForm onSubmit={handleAddTrainer} onClose={ ()=> setShowTrainerForm(false) }/>
        </Modal.Body>
      </Modal>
      {/* {showTrainerForm === true && <TrainerForm onSubmit={handleAddTrainer} onClose={ ()=> setShowTrainerForm(false) }/>} */}

      <button className="AdminButtons" onClick={ handleShowTaskForm }>add task</button>

      {trainers.map((eachTrainer, i) => 
      <CalendarCard key={i} ourTrainer={eachTrainer.name} choresUpdateTrigger={choresUpdateTrigger}/> )}

      <Modal size="lg" centered show={ showTaskForm } onHide={ handleHideTaskForm } animation={ false }>
        {/* <Modal.Header>
          <Modal.Title><h3 className="taskFormTitle">NEW TASK FORM</h3></Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="FormModal">
          <TaskForm onSubmit={ handleAddTask } onClose={ () => setShowTaskForm(false) }/>
        </Modal.Body>
      </Modal>
      {/* {showTaskForm === true && <TaskForm onSubmit={handleAddTask} onClose={ () => setShowTaskForm(false) }/>} */}

      <button className="TopButton" onClick={ scrollToTop } >back to top</button>

      {/* <div className="AdminFooter">
        <button onClick={ handleShowTrainerForm }>add trainer</button>
        <button onClick={ handleShowTaskForm }>add task</button>
        <button onClick={ scrollToTop } >back to top</button>
      </div> */}
    </div>
  );

}

export default AdminHomepage;