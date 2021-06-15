import { useEffect, useState } from "react";
import { Chore, Trainer } from "../model/model";
import { readAllChores } from "../service/pokemonService";
import "./CalendarCard.css";
import TaskForm from "./TaskForm";

interface Props {
  chore: Chore;
  // onDelete: () => void;
  onComplete?: () => void;
}

function CalendarCard({ chore, onComplete }: Props) {
  const [chores, setChores] = useState<Chore[]>([]);
  // const [ourTrainer, setOurTrainer] = useState<Trainer>(null)

  useEffect(() => {
    loadChores();
  }, []);

  function loadChores() {
    readAllChores().then((choresFromApi) => {
      setChores(choresFromApi);
    });
  }

  return (
    <div className="CalendarCard">
      <h5>{chore.trainer}'s Calendar</h5>
      <table>
        <tr>
          <th>Monday</th>
          <th>Teusday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          {chore.monday ? (
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
<<<<<<< Updated upstream
                  {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
=======
                  Difficulty: {chore.difficulty}
>>>>>>> Stashed changes
                </td>
              </tr>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.tuesday ? (
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
<<<<<<< Updated upstream
                  {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
=======
                  Difficulty: {chore.difficulty}
>>>>>>> Stashed changes
                </td>
              </tr>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.wednesday ? (
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
<<<<<<< Updated upstream
                  {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
=======
                  Difficulty: {chore.difficulty}
>>>>>>> Stashed changes
                </td>
              </tr>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.thursday ? (
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
<<<<<<< Updated upstream
                  {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
=======
                  Difficulty: {chore.difficulty}
>>>>>>> Stashed changes
                </td>
              </tr>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.friday ? (
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
<<<<<<< Updated upstream
                  {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
=======
                  Difficulty: {chore.difficulty}
>>>>>>> Stashed changes
                </td>
              </tr>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.saturday ? (
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
<<<<<<< Updated upstream
                  {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
=======
                  Difficulty: {chore.difficulty}
>>>>>>> Stashed changes
                </td>
              </tr>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.sunday ? (
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
<<<<<<< Updated upstream
                  {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
=======
                  Difficulty: {chore.difficulty}
>>>>>>> Stashed changes
                </td>
              </tr>
          ) : (
            <td>No chores for today.</td>
          )}
        </tr>
      </table>
      {/* <button>Create a Task for {chore.trainer}</button> */}
    </div>
  );
}

export default CalendarCard;
