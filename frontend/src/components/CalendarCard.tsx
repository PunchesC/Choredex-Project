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
                  <button className="DoneButton" onClick={onComplete}>DONE</button>
                </div>
              ))}

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
                  <button className="DoneButton" onClick={onComplete}>DONE</button>
                </div>
              ))}

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
                  <button className="DoneButton" onClick={onComplete}>DONE</button>
                </div>
              ))}

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
                  <button className="DoneButton" onClick={onComplete}>DONE</button>
                </div>
              ))}

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
                  <button className="DoneButton" onClick={onComplete}>DONE</button>
                </div>
              ))}

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
                  <button className="DoneButton" onClick={onComplete}>DONE</button>
                </div>
              ))}

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
                  <button className="DoneButton" onClick={onComplete}>DONE</button>
                </div>
              ))}
          </div>
      {/* <button>Create a Task for {chore.trainer}</button> */}
    </div>
  );
}

export default CalendarCard;


{/* <table>
<tr>
  <th>MONDAY</th>
  <th>TUESDAY</th>
  <th>WEDNESDAY</th>
  <th>THURSDAY</th>
  <th>FRIDAY</th>
  <th>SATURDAY</th>
  <th>SUNDAY</th>
</tr>
<tr>
  <td>
    {chores
      .filter((eachChore) => eachChore.monday)
      .map((chore) => (
        <div>
          {chore.title}
          <br></br>
          {chore.description}
          <br></br>
          Difficulty: {chore.difficulty}
          <br></br>
          <button className="DoneButton" onClick={onComplete}>DONE</button>
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
          <button className="DoneButton" onClick={onComplete}>DONE</button>
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
          <button className="DoneButton" onClick={onComplete}>DONE</button>
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
          <button className="DoneButton" onClick={onComplete}>DONE</button>
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
          <button className="DoneButton" onClick={onComplete}>DONE</button>
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
          <button className="DoneButton" onClick={onComplete}>DONE</button>
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
          <button className="DoneButton" onClick={onComplete}>DONE</button>
        </div>
      ))}
  </td>
</tr>
</table> */}
