import React, { useContext, useEffect, useState } from 'react';
import { Chore, Trainer } from '../model/model';
import { createTask, readAllChores, allPokemon} from '../service/pokemonService';
import './AdminHomepage.css';
import CalendarCard from './CalendarCard';
import TaskForm from './TaskForm';
import TrainerForm from './TrainerForm';
import { Button, Modal } from 'react-bootstrap';
import Pokemon from '../model/Pokemon';
import { AccountContext } from '../context/auth.context';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';

function AdminHomepage(){
    const [ chores, setChores ] = useState<Chore[]>([]);
    const [ choresLoaded, setChoresLoaded ] = useState(false);
    const [ showTaskForm, setShowTaskForm ] = useState(false);
    const [ showTrainerForm, setShowTrainerForm ] = useState(false);
    const [ complete, setComplete ] = useState(false);
    const [pokes, setPokes] = useState<Pokemon[]>([])
    const {account, updateAccount, currentUser} = useContext(AccountContext);
    const trainers = account.trainers;

    let easyPokes = []
    let mediumPokes = []
    let hardPokes = []
    for (let poke of pokes){
      let points = poke.hpAmount + poke.defenseAmount + poke.attackAmount + poke.speedAmount
      if (points >= 150 && points < 280){
        easyPokes.push(poke)
      } else if (points >= 280 && points < 340){
        mediumPokes.push(poke)
      } else {
        hardPokes.push(poke)
      }
    }
    const randomEasyPoke = easyPokes[Math.floor(Math.random() * easyPokes.length)];
    const randomMediumPoke = mediumPokes[Math.floor(Math.random() * mediumPokes.length)];
    const randomHardPoke = hardPokes[Math.floor(Math.random() * hardPokes.length)];
    
    useEffect(() => {
      loadChores();
      loadPokemon();
    }, []);

    function loadPokemon(){
      allPokemon().then((data) => {
        setPokes(data);
      });
    };
    
    function loadChores() {
      readAllChores().then(choresFromApi => {
        setChores(choresFromApi);
        setChoresLoaded(true);
      });
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
      account.trainers.push(trainer)
      updateAccount(account);
    }

   

    function handleCompleteTask() {
      console.log(account.trainers)
      for (let trainer of account.trainers){
        if (trainer.name === currentUser){
          trainer.pokemons.push(randomEasyPoke)
          updateAccount(account);
          console.log(trainer.pokemons)
          console.log(account.trainers)
        }
      }
      
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

      <button onClick={ handleShowTaskForm }>add task</button>

      { !choresLoaded ?
            <p className="AdminHomePage_message">Loading...</p>
            : trainers.map(eachTrainer => 
            <CalendarCard key={eachTrainer._id} ourTrainer={eachTrainer.name} onComplete={ () => handleCompleteTask() }/> )
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