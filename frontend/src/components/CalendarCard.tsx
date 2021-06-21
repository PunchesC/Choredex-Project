import { useEffect, useState, useContext } from "react";
import { AccountContext } from "../context/auth.context";
import { Chore } from "../model/model";
import { readAllChoresForTrainer } from "../service/pokemonService";
import "./CalendarCard.css";

interface Props {
  ourTrainer: string;
  // onDelete: () => void;
  onComplete?: (chore:Chore) => void;
  choresUpdateTrigger?: any;
}

function CalendarCard({ ourTrainer, onComplete, choresUpdateTrigger }: Props) {
  const [chores, setChores] = useState<Chore[]>([]);
  const {currentUser,isAdmin,account} = useContext(AccountContext);

  useEffect(() => {
    loadTrainerChores();
  }, [choresUpdateTrigger]);

  function loadTrainerChores() {
    readAllChoresForTrainer(ourTrainer).then((choresFromApi) => {
      setChores(choresFromApi);
      console.log(choresFromApi);
    });
  }
  let addNoDisplay = "";
  let addSlash = "";

  return (
    <div className="CalendarCard">
      <h5 className="CalendarTitle">{ourTrainer}'s Calendar</h5>
      <div className="CalendarGrid">
        <h6>MONDAY</h6>
        <h6>TUESDAY</h6>
        <h6>WEDNESDAY</h6>
        <h6>THURSDAY</h6>
        <h6>FRIDAY</h6>
        <h6>SATURDAY</h6>
        <h6>SUNDAY</h6>
      </div>
      <div className="CalendarGridChores">
        <div>
          {chores
            .filter((eachChore) => eachChore.monday)
            .map((chore, i) => (
              <div key={i} className={addSlash}>
                {chore.title}
                <br></br>
                {chore.description}
                <br></br>
                Difficulty: {chore.difficulty}
                <br></br>
               {onComplete && <button className="DoneButton" onClick={() => onComplete(chore)}>DONE</button>}
              </div>
            ))}
        </div>
        <div>
            {chores
              .filter((eachChore) => eachChore.tuesday)
              .map((chore, i) => (
                <div key={i} className={addSlash}>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                </div>
              ))}
       {!onComplete && <button className={"DoneButton"+ addNoDisplay} onClick={onComplete}>DONE</button>}
        </div>
        <div>
            {chores
              .filter((eachChore) => eachChore.wednesday)
              .map((chore, i) => (
                <div key={i} className={addSlash}>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                </div>
              ))}
              {!onComplete && <button className={"DoneButton"+ addNoDisplay} onClick={onComplete}>DONE</button>}
        </div>
        <div>
            {chores
              .filter((eachChore) => eachChore.thursday)
              .map((chore, i) => (
                <div key={i} className={addSlash}>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                </div>
              ))}
              {!onComplete && <button className={"DoneButton"+ addNoDisplay} onClick={onComplete}>DONE</button>}
        </div>
        <div>
            {chores
              .filter((eachChore) => eachChore.friday)
              .map((chore, i) => (
                <div key={i} className={addSlash}>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                </div>
              ))}
              {!onComplete && <button className={"DoneButton"+ addNoDisplay} onClick={onComplete}>DONE</button>}
        </div>
        <div>
            {chores
              .filter((eachChore) => eachChore.saturday)
              .map((chore, i) => (
                <div key={i} className={addSlash}>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                </div>
              ))}
              {!onComplete && <button className={"DoneButton"+ addNoDisplay} onClick={onComplete}>DONE</button>}
        </div>
        <div>
            {chores
              .filter((eachChore) => eachChore.sunday)
              .map((chore, i) => (
                <div key={i} className={addSlash}>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                </div>
              ))}
              {!onComplete && <button className={"DoneButton"+ addNoDisplay} onClick={onComplete}>DONE</button>}
        </div>
      </div>
    </div>
  );
}

export default CalendarCard;