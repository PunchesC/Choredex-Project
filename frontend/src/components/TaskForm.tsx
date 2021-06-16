import './TaskForm.css'
import { FormEvent, useState, useContext, useRef, useEffect} from "react";
import {Chore, Trainer} from "../model/model";
import firebase from "../firebaseConfig"
import { readAllTrainers } from '../service/pokemonService';

interface Props {
  onSubmit: (chore:Chore) => void;
  onClose:() => void;
}

function TaskForm({onSubmit, onClose}:Props){

  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ monday, setMonday ] = useState(false);
  const [ tuesday, setTuesday ] = useState(false);
  const [ wednesday, setWednesday ] = useState(false);
  const [ thursday, setThursday ] = useState(false);
  const [ friday, setFriday ] = useState(false);
  const [ saturday, setSaturday ] = useState(false);
  const [ sunday, setSunday ] = useState(false);
  const [ trainers, setTrainers ] = useState<Trainer[]>([]);
  const [ ourTrainer, setOurTrainer ] = useState("");
  const [ difficulty, setDifficulty ] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    loadTrainers();
  }, []);

  function loadTrainers() {
    readAllTrainers().then(trainersFromApi => {
      setTrainers(trainersFromApi);
    })
  }

  function handleSubmit(event:FormEvent): void {

    event.preventDefault();

    const chore: Chore = {
      title:title,
      description: description,
      trainer: ourTrainer,
      difficulty: difficulty,
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday
    }

    const files = fileInputRef.current?.files;
    if (files && files[0]){

      const rootRef = firebase.storage().ref();
      const file = files[0];
      const directoryRef = rootRef.child("task");

      directoryRef.child(file.name).put(file).then(snapshot => {
        snapshot.ref.getDownloadURL().then(url => {
          chore.trainer = url;
          onSubmit(chore);
          clearForm();
        });
      });
    } else {
      onSubmit(chore);
      clearForm();
    }

    function clearForm(){
      setTitle("");
      setDescription("");
      setOurTrainer("");
      setDifficulty("")
      formRef.current?.reset();
    }

  }

  return (
    <form className="TaskForm" onSubmit={handleSubmit} ref={formRef}>

      <h3 className="taskFormTitle">NEW TASK</h3>

      <div className="TaskForm_left_container">
        <label>Task Title:
          <input  value={title} onChange={e => setTitle(e.target.value)} required></input>
        </label>
        <label>Task Description(optional):
          <textarea value={description} onChange={e => setDescription(e.target.value)} rows={7}></textarea>
        </label>
      </div>

      <div className="TaskForm_right_container">
        <label>Select Day(s):
          <label>Monday
            <input type="checkbox" onClick={e => setMonday(true)}></input>
          </label>
          <label>Tuesday
            <input type="checkbox" onClick={e => setTuesday(true)}></input>
          </label>
          <label>Wednesday
            <input type="checkbox" onClick={e => setWednesday(true)}></input>
          </label>
          <label>Thursday
            <input type="checkbox" onClick={e => setThursday(true)}></input>
          </label>
          <label>Friday
            <input type="checkbox" onClick={e => setFriday(true)}></input>
          </label>
          <label>Saturday
            <input type="checkbox" onClick={e => setSaturday(true)}></input>
          </label>
          <label>Sunday
            <input type="checkbox" onClick={e => setSunday(true)}></input>
          </label>  
        </label>
      {/* Number of trainer dependent on the amount selected on Account Form */}
        <label>Select Trainer:
          <select value={ourTrainer} onChange={e=> setOurTrainer(e.target.value)}>
            {trainers.map((trainer,i )=> 
              <option> {trainer.name}</option>)}
          </select>
        </label>
        <label>Level of Difficulty:
          <select value={difficulty} onChange={e=> setDifficulty(e.target.value)}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
        </select>
        </label>
          <input ref={fileInputRef} type="file" />
        <button type="submit" onClick={onClose}>submit</button>
        <button onClick={onClose}>back</button>
      </div>

    </form>
  );

}

export default TaskForm;

function loadChores() {
  throw new Error('Function not implemented.');
}