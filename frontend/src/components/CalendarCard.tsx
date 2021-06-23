import { useEffect, useState } from "react";
import { Chore } from "../model/model";
import { readAllChoresForTrainer } from "../service/pokemonService";
import "./CalendarCard.css";
import EachChore from "./EachChore";

interface Props {
  ourTrainer: string;
  onComplete?: (chore:Chore) => void;
  onChangePhoto?:(chore:Chore, photoURL:string) => void;
  choresUpdateTrigger?: any;
}

function CalendarCard({ ourTrainer, onComplete, choresUpdateTrigger, onChangePhoto }: Props) {
  const [chores, setChores] = useState<Chore[]>([]);

  useEffect(() => {
    loadTrainerChores();
  }, [choresUpdateTrigger]);

  function loadTrainerChores() {
    readAllChoresForTrainer(ourTrainer).then((choresFromApi) => {
      setChores(choresFromApi);
      console.log(choresFromApi);
    });
  }

  return (
    <div className="CalendarCard">
      <h5 className="CalendarTitle">{ourTrainer}'s Calendar</h5>
        <div className="Calendar">
          <div className="Day">
            <p className="DayTitle">MONDAY</p>
            <div>
              {chores
                .filter((eachChore) => eachChore.monday)
                .map((aChore, i) => (
                  <EachChore key={i} chore={aChore} onComplete={onComplete} onChangePhoto={onChangePhoto}/>
                ))}
            </div>
          </div>
          <div className="Day">
            <p className="DayTitle">TUESDAY</p>
            <div>
              {chores
                .filter((eachChore) => eachChore.tuesday)
                .map((aChore, i) => (
                  <EachChore key={i} chore={aChore} onComplete={onComplete} onChangePhoto={onChangePhoto}/>
                ))}
            </div>
          </div>
          <div className="Day">
            <p className="DayTitle">WEDNESDAY</p>
            <div>
              {chores
                .filter((eachChore) => eachChore.wednesday)
                .map((aChore, i) => (
                  <EachChore key={i} chore={aChore} onComplete={onComplete} onChangePhoto={onChangePhoto}/>
                ))}
            </div>
          </div>
          <div className="Day">
            <p className="DayTitle">THURSDAY</p>
            <div>
              {chores
                .filter((eachChore) => eachChore.thursday)
                .map((aChore, i) => (
                  <EachChore key={i} chore={aChore} onComplete={onComplete} onChangePhoto={onChangePhoto}/>
                ))}
            </div>
          </div>
          <div className="Day">
            <p className="DayTitle">FRIDAY</p>
            <div>
              {chores
                .filter((eachChore) => eachChore.friday)
                .map((aChore, i) => (
                  <EachChore key={i} chore={aChore} onComplete={onComplete} onChangePhoto={onChangePhoto}/>
                ))}
            </div>
          </div>
          <div className="Day">
            <p className="DayTitle">SATURDAY</p>
            <div>
              {chores
                .filter((eachChore) => eachChore.saturday)
                .map((aChore, i) => (
                  <EachChore key={i} chore={aChore} onComplete={onComplete} onChangePhoto={onChangePhoto}/>
                ))}
            </div>
          </div>
          <div className="Day">
            <p className="DayTitle">SUNDAY</p>
            <div>
              {chores
                .filter((eachChore) => eachChore.sunday)
                .map((aChore, i) => (
                  <EachChore key={i} chore={aChore} onComplete={onComplete} onChangePhoto={onChangePhoto}/>
                ))}
            </div>
          </div>
        </div>

    </div>
  );
}

export default CalendarCard;