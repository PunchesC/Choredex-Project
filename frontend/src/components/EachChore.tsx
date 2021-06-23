import { Chore } from '../model/model';
import { FormEvent, useState, useContext, useRef } from 'react';
import firebase from '../firebaseConfig';
import './EachChore.css';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

interface Props {
  chore: Chore;
  onComplete?: (chore: Chore) => void;
  onChangePhoto?: (chore: Chore, photoURL: string) => void;
}
let addNoDisplay = '';
let addSlash = '';
let onComplete;

function EachChore({ onComplete, chore, onChangePhoto }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function photoUpload() {
    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const rootRef = firebase.storage().ref();
      const file = files[0];
      const directoryRef = rootRef.child('task');
      directoryRef
        .child(file.name)
        .put(file)
        .then((snapshot) => {
          snapshot.ref.getDownloadURL().then((url) => {
            onChangePhoto!(chore, url);
          });
        });
    }
  }

  return (
    <div className="EachChore">
      {chore.complete === true ? (
        <div>
          {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
          <p className="ChoreTitle Slash">{chore.title}</p>
          <p className="ChoreDesc Slash">{chore.description}</p>
          <p className="ChoreDiff Slash">difficulty: {chore.difficulty}</p>
          <img src={chore.photo}></img>
          {onComplete && (
            <button
              className="DoneButton noDisplay"
              onClick={() => onComplete(chore)}
            >
              DONE
            </button>
          )}
          {onChangePhoto && (
            <div className="chooseFile">
              Send a Picka!
              <input
                className="Input"
                ref={fileInputRef}
                type="file"
                onChange={photoUpload}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
          <p className="ChoreTitle">{chore.title}</p>
          <p className="ChoreDesc">{chore.description}</p>
          <p className="ChoreDiff">difficulty: {chore.difficulty}</p>
          <p>{chore.photo}</p>
          {onComplete && (
            <button className="DoneButton" onClick={() => onComplete(chore)}>
              DONE
            </button>
          )}
          {onChangePhoto && (
            <div className="chooseFile noDisplay">
              <input
                className="Input"
                ref={fileInputRef}
                type="file"
                onChange={photoUpload}
                title="Send a Picture"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default EachChore;
