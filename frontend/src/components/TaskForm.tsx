import './TaskForm'
import { FormEvent, useState, useContext, useRef} from "react";
import {Chore} from "../model/model";
import firebase from "../firebaseConfig"

interface Props {
  onSubmit: (chore:Chore) => void;
}

function TaskForm({onSubmit}:Props){
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [monday, setMonday] = useState("");
const [tuesday, setTuesday] = useState("");
const [wednesday, setWednesday] = useState("");
const [thursday, setThursday] = useState("");
const [friday, setFriday] = useState("");
const [saturday, setSaturday] = useState("");
const [sunday, setSunday] = useState("");
const [trainer, setTrainer] = useState("");
const [difficulty, setDifficulty] = useState("");
const fileInputRef = useRef<HTMLInputElement>(null);
const formRef = useRef<HTMLFormElement>(null);

function handleSubmit(event:FormEvent): void {
  event.preventDefault();
  const chore: Chore = {
    title:title,
    description: description,
    trainer: trainer,
    difficulty: difficulty
  }
  const files = fileInputRef.current?.files;
  if (files && files[0]){
    const rootRef = firebase.storage().ref();
 
    const file = files[0];
    const directoryRef = rootRef.child("task")
    directoryRef.child(file.name).put(file).then(snapshot => {
      snapshot.ref.getDownloadURL().then(url => {
        chore.trainer = url;
        onSubmit(chore);
        clearForm();
      })
    })
  }else {
    onSubmit(chore);
    clearForm();
  }
  function clearForm(){
    setTitle("");
    setDescription("");
    setTrainer("");
    setDifficulty("")
    formRef.current?.reset();
  }
}



  return (
    <form className="TaskForm" onSubmit={handleSubmit} ref={formRef}>
      <h3>New Task Form</h3>
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
        <input type="checkbox" value={monday} onChange={e => setMonday(e.target.value)}></input>
        </label>
        <label>Tuesday
        <input type="checkbox" value={tuesday} onChange={e => setTuesday(e.target.value)}></input>
        </label>
        <label>Wednesday
        <input type="checkbox" value={wednesday} onChange={e => setWednesday(e.target.value)}></input>
        </label>
        <label>Thursday
        <input type="checkbox" value={thursday} onChange={e => setThursday(e.target.value)}></input>
        </label>
        <label>Friday
        <input type="checkbox" value={friday} onChange={e => setFriday(e.target.value)}></input>
        </label>
        <label>Saturday
        <input type="checkbox" value={saturday} onChange={e => setSaturday(e.target.value)}></input>
        </label>
        <label>Sunday
        <input type="checkbox" value={sunday} onChange={e => setSunday(e.target.value)}></input>
        </label>  
      </label>
      {/* Number of trainer dependent on the amount selected on Account Form */}
      <label>Select Trainer:
      <select value={trainer} onChange={e=> setTrainer(e.target.value)}>
        <option> Trainer Example1</option>
        <option> Trainer Example2</option>
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
      <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default TaskForm;