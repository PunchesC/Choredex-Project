import './TaskForm.css'
import {FormEvent, useState, useContext, useRef} from "react";
import {Chore} from "../model/model";
import firebase from "../firebaseConfig"
import {AccountContext} from '../context/auth.context';

interface Props {
  onSubmit: (chore:Chore) => void;
  onClose: () => void;
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
  const [ ourTrainer, setOurTrainer ] = useState("Jimmy");
  const [ difficulty, setDifficulty ] = useState("easy");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const {account} = useContext(AccountContext);



  // function loadChores() {
  //   readAllChores().then(choresFromApi => {
  //     setChores(choresFromApi);
  //   })
  // }

  function handleSubmit(event:FormEvent): void {

    event.preventDefault();

    const newChore: Chore = {
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
          newChore.trainer = url;
          onSubmit(newChore);
          newChore.trainer = url;
          onSubmit(newChore);
          onClose();
          clearForm();
        });
      });
    } else {
      onSubmit(newChore);
      onClose();
      clearForm();
    }

    function clearForm(){
      setTitle("");
      setDescription("");
      setOurTrainer("Jimmy");
      setDifficulty("easy")

      formRef.current?.reset();
    }

  }

  return (
    <form className="TaskForm" onSubmit={handleSubmit} ref={formRef}>

      <h3 className="taskFormTitle">NEW TASK</h3>

      <div className="TaskForm_left_container">
        <label>task title:{" "}
          <input  value={title} onChange={e => setTitle(e.target.value)} required></input>
        </label><br></br>
        <label>task description(optional):{" "}
          <input value={description} onChange={e => setDescription(e.target.value)}></input>
        </label><br></br>
      </div>

      <div className="TaskForm_right_container">
        <label>select day(s):<br></br>
          <label>
            <input type="checkbox" onClick={e => setMonday(true)}></input>monday
          </label>{" "}
          <label>
            <input type="checkbox" onClick={e => setTuesday(true)}></input>tuesday
          </label>{" "}
          <label>
            <input type="checkbox" onClick={e => setWednesday(true)}></input>wednesday
          </label>{" "}
          <label>
            <input type="checkbox" onClick={e => setThursday(true)}></input>thursday
          </label>{" "}
          <label>
            <input type="checkbox" onClick={e => setFriday(true)}></input>friday
          </label>{" "}
          <label>
            <input type="checkbox" onClick={e => setSaturday(true)}></input>saturday
          </label>{" "}
          <label>
            <input type="checkbox" onClick={e => setSunday(true)}></input>sunday
          </label>  
        </label><br></br>
      {/* Number of trainer dependent on the amount selected on Account Form */}
        <label>select trainer:
          <select value={ourTrainer} onChange={e=> setOurTrainer(e.target.value)}>
            {account.trainers.map((trainer,i )=> 
              <option>{trainer.name}</option>)}
          </select>
        </label><br></br>
        <label>level of difficulty:
          <select value={difficulty} onChange={e=> setDifficulty(e.target.value)}>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
        </select>
        </label><br></br>
          {/* <input ref={fileInputRef} type="file" /> */}
        <button type="submit">submit</button>
        <button onClick={onClose}>close</button>
      </div>

    </form>
  );

}

export default TaskForm;