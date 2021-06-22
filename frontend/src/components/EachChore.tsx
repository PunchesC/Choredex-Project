import {Chore} from '../model/model'
import {FormEvent, useState, useContext, useRef} from "react";
import firebase from "../firebaseConfig"
import './EachChore.css';

interface Props{
    chore:Chore;
    onComplete?: (chore:Chore) => void;
}
let addNoDisplay = "";
let addSlash = "";
let onComplete;


function EachChore({onComplete, chore}:Props){
    const fileInputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    // const files = fileInputRef.current?.files;
    // if (files && files[0]){

    //   const rootRef = firebase.storage().ref();
    //   const file = files[0];
    //   const directoryRef = rootRef.child("task");

    //   directoryRef.child(file.name).put(file).then(snapshot => {
    //     snapshot.ref.getDownloadURL().then(url => {
    //              newChore.trainer = url;
    //             });  
    return (
        <div className="EachChore">
        {chore.complete === true ?
        <div className=" Slash">
                {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                <p>{chore.title}</p>
                <p>{chore.description}</p>
                <p>difficulty: {chore.difficulty}</p>
               {onComplete && <button className="DoneButton noDisplay" onClick={() => onComplete(chore)}>DONE</button>}
        </div>
        : 
        <div>
                {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                <p>{chore.title}</p>
                <p>{chore.description}</p>
                <p>difficulty: {chore.difficulty}</p>
               {onComplete && <button className="DoneButton" onClick={() => onComplete(chore)}>DONE</button>}
        </div>}
        {onComplete && <div className="chooseFile">
          <p>send a picka!!!</p>
          <input ref={fileInputRef} type="file" />
        </div>}
        </div>
    )
}
export default EachChore;