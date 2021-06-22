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
  const [ ourTrainer, setOurTrainer ] = useState("Choose a trainer");
  const [ difficulty, setDifficulty ] = useState("easy");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const {account} = useContext(AccountContext);

  function handleSubmit(event:FormEvent): void {

    event.preventDefault();

    const newChore: Chore = {
      title:title,
      description: description,
      trainer: ourTrainer,
      difficulty: difficulty,
      complete: false
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
          onClose();
          clearForm();
        });
      });
    } else {
      if (monday) {
        onSubmit({...newChore, monday:true});
      } 
      if (tuesday) {
        onSubmit({...newChore, tuesday:true});
      }
      if (wednesday) {
        onSubmit({...newChore, wednesday:true});
      }
      if (thursday) {
          onSubmit({...newChore, thursday:true});
      }
      if (friday) {
        onSubmit({...newChore, friday:true});
      }
      if (saturday) {
        onSubmit({...newChore, saturday:true});
      }
      if (sunday) {
        onSubmit({...newChore, sunday:true});
      }
      onClose();
      clearForm();
    }

    function clearForm(){
      setTitle("");
      setDescription("");
      setOurTrainer("Choose a trainer");
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
        <div>select day(s):<br></br>
          <label>
            <input type="checkbox" name="day" onChange={e => setMonday(e.target.checked)}></input>{" "}monday
          </label>{" "}
          <label>
            <input type="checkbox" name="day" onChange={e => setTuesday(e.target.checked)}></input>{" "}tuesday
          </label>{" "}
          <label>
            <input type="checkbox" name="day" onChange={e => setWednesday(e.target.checked)}></input>{" "}wednesday
          </label>{" "}
          <label>
            <input type="checkbox" name="day" onChange={e => setThursday(e.target.checked)}></input>{" "}thursday
          </label>{" "}
          <label>
            <input type="checkbox" name="day" onChange={e => setFriday(e.target.checked)}></input>{" "}friday
          </label>{" "}
          <label>
            <input type="checkbox" name="day" onChange={e => setSaturday(e.target.checked)}></input>{" "}saturday
          </label>{" "}
          <label>
            <input type="checkbox" name="day" onChange={e => setSunday(e.target.checked)}></input>{" "}sunday
          </label>  
        </div><br></br>
      {/* Number of trainer dependent on the amount selected on Account Form */}
        <label>select trainer:
          <select value={ourTrainer} onChange={e=> setOurTrainer(e.target.value)} required>
            <option value="">Select a Trainer</option>
            {account.trainers.map((trainer,i )=> 
              <option key={i}>{trainer.name}</option>)}
          </select>
        </label><br></br>
        <label>level of difficulty:
          <select value={difficulty} onChange={e=> setDifficulty(e.target.value)}>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
        </select>
        </label><br></br>
        <div className="chooseFile">
          <p>choose a file if you would like to attach a picture to help describe a task</p>
          <input ref={fileInputRef} type="file" />
        </div>
        <button type="submit">submit</button>
        <button onClick={onClose}>close</button>
      </div>

    </form>
  );

}

export default TaskForm;