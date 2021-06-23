import { useContext, useState } from 'react';
import { Chore, Trainer } from '../model/model';
import { createTask, deleteTask } from '../service/pokemonService';
import './AdminHomepage.css';
import CalendarCard from './CalendarCard';
import TaskForm from './TaskForm';
import TrainerForm from './TrainerForm';
import { AccountContext } from '../context/auth.context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function AdminHomepage(){
    const [ showTaskForm, setShowTaskForm ] = useState(false);
    const [ showTrainerForm, setShowTrainerForm ] = useState(false);
    const [choresUpdateTrigger, setChoresUpdateTrigger] = useState(0);
    const {account, updateAccount} = useContext(AccountContext);
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

    function handleDeleteTask(choreId:string):void {
      deleteTask(choreId).then(() => {
        setChoresUpdateTrigger(prev => prev - 1)
      });
      console.log("Delete");
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
      <button className="AdminButtons" onClick={ handleShowTrainerForm }>add trainer</button>

      <Modal size="sm" centered show={ showTrainerForm } onHide={ handleHideTrainerForm } animation={ false }>
        <Modal.Body>
          <TrainerForm onSubmit={handleAddTrainer} onClose={ ()=> setShowTrainerForm(false) }/>
        </Modal.Body>
      </Modal>

      <button className="AdminButtons" onClick={ handleShowTaskForm }>add task</button>

      {trainers.map((eachTrainer, i) => 
      <CalendarCard key={i} ourTrainer={eachTrainer.name} choresUpdateTrigger={choresUpdateTrigger} onDelete={(chore) => handleDeleteTask(chore._id!)}/> )}

      <Modal size="lg" centered show={ showTaskForm } onHide={ handleHideTaskForm } animation={ false }>
        <Modal.Body className="FormModal">
          <TaskForm onSubmit={ handleAddTask } onClose={ () => setShowTaskForm(false) }/>
        </Modal.Body>
      </Modal>

      <button className="TopButton" onClick={ scrollToTop } >back to top</button>
    </div>
  );

}

export default AdminHomepage;