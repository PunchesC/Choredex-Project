import { useEffect, useState } from "react";
import { Chore, Trainer } from "../model/model";
import {readAllChoresForTrainer} from "../service/pokemonService";
import "./CalendarCard.css";

interface Props {
  ourTrainer: Trainer;
  // onDelete: () => void;
  onComplete?: () => void;
}

function CalendarCard({ ourTrainer, onComplete }: Props) {
  const [chores, setChores] = useState<Chore[]>([]);
  // const [ourTrainer, setOurTrainer] = useState<Trainer>(null)

  useEffect(() => {
    loadTrainerChores();
  }, []);

  function loadTrainerChores() {
    readAllChoresForTrainer(ourTrainer.name).then((choresFromApi) => {
      setChores(choresFromApi);
    });
  }

  return (
    <div className="CalendarCard">
      <h5>{ourTrainer.name}'s Calendar</h5>
      <table>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr>
          <td>
            {chores
              .filter((eachChore) => eachChore.monday)
              .map((chore) => (
                <div>
                  {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
                </div>
              ))}
          </td>
          <td>
            {chores
              .filter((eachChore) => eachChore.tuesday)
              .map((chore) => (
                <div>
                  {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
                </div>
              ))}
          </td>
          <td>
            {chores
              .filter((eachChore) => eachChore.wednesday)
              .map((chore) => (
                <div>
                  {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
                </div>
              ))}
          </td>
          <td>
            {chores
              .filter((eachChore) => eachChore.thursday)
              .map((chore) => (
                <div>
                  {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
                </div>
              ))}
          </td>
          <td>
            {chores
              .filter((eachChore) => eachChore.friday)
              .map((chore) => (
                <div>
                  {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
                </div>
              ))}
          </td>
          <td>
            {chores
              .filter((eachChore) => eachChore.saturday)
              .map((chore) => (
                <div>
                  {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
                </div>
              ))}
          </td>
          <td>
            {chores
              .filter((eachChore) => eachChore.sunday)
              .map((chore) => (
                <div>
                  {/* <pre>{JSON.stringify(chore, null, 2)}</pre> */}
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  Difficulty: {chore.difficulty}
                  <br></br>
                  <button onClick={onComplete}>DONE!</button>
                </div>
              ))}
          </td>
        </tr>
      </table>
      {/* <button>Create a Task for {chore.trainer}</button> */}
    </div>
  );
}

export default CalendarCard;
