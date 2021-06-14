import { useEffect, useState } from "react";
import { Chore } from "../model/model";
import { readAllChores } from "../service/pokemonService";
import "./CalendarCard.css";
import TaskForm from "./TaskForm";

interface Props {
  chore: Chore;
  // onDelete: () => void;
}

function CalendarCard({ chore }: Props) {
  const [chores, setChores] = useState<Chore[]>([]);

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
      <h5>{chore.trainer} Calendar</h5>
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
            <div>
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  {chore.difficulty}
                </td>
              </tr>
            </div>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.tuesday ? (
            <div>
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  {chore.difficulty}
                </td>
              </tr>
            </div>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.wednesday ? (
            <div>
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  {chore.difficulty}
                </td>
              </tr>
            </div>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.thursday ? (
            <div>
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  {chore.difficulty}
                </td>
              </tr>
            </div>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.friday ? (
            <div>
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  {chore.difficulty}
                </td>
              </tr>
            </div>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.saturday ? (
            <div>
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  {chore.difficulty}
                </td>
              </tr>
            </div>
          ) : (
            <td>No chores for today.</td>
          )}
          {chore.sunday ? (
            <div>
              <tr>
                <td>
                  {chore.title}
                  <br></br>
                  {chore.description}
                  <br></br>
                  {chore.difficulty}
                </td>
              </tr>
            </div>
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
