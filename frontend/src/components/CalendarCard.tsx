import {useEffect, useState} from "react";
import {Chore} from "../model/model";
import {readAllChoresForTrainer} from "../service/pokemonService";
import "./CalendarCard.css";

interface Props {
  ourTrainer: string;
  // onDelete: () => void;
  onComplete?: () => void;
}

function CalendarCard({ ourTrainer, onComplete }: Props) {
  const [chores, setChores] = useState<Chore[]>([]);

  useEffect(() => {
    loadTrainerChores();
  }, []);

  function loadTrainerChores() {
    readAllChoresForTrainer(ourTrainer).then((choresFromApi) => {
      setChores(choresFromApi);
    });
  }

  return (
    <div className="CalendarCard">
      <h5>{ourTrainer}'s Calendar</h5>
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
    </div>
  );
}

export default CalendarCard;