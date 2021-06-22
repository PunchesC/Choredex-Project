import { useEffect, useState, useContext } from "react";
import { AccountContext } from "../context/auth.context";
import { Chore } from "../model/model";
import { readAllChoresForTrainer } from "../service/pokemonService";
import "./CalendarCard.css";
import EachChore from "./EachChore";

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
            .map((aChore, i) => (
              <EachChore key={i} chore={aChore} onComplete={onComplete}/>
            ))}
        </div>
        <div>
          {chores
            .filter((eachChore) => eachChore.tuesday)
            .map((aChore, i) => (
              <EachChore key={i} chore={aChore} onComplete={onComplete}/>
            ))}
        </div>
        <div>
          {chores
            .filter((eachChore) => eachChore.wednesday)
            .map((aChore, i) => (
              <EachChore key={i} chore={aChore} onComplete={onComplete}/>
            ))}
        </div>
        <div>
          {chores
            .filter((eachChore) => eachChore.thursday)
            .map((aChore, i) => (
              <EachChore key={i} chore={aChore} onComplete={onComplete}/>
            ))}
        </div>
        <div>
          {chores
            .filter((eachChore) => eachChore.friday)
            .map((aChore, i) => (
              <EachChore key={i} chore={aChore} onComplete={onComplete}/>
            ))}
        </div>
        <div>
          {chores
            .filter((eachChore) => eachChore.saturday)
            .map((aChore, i) => (
              <EachChore key={i} chore={aChore} onComplete={onComplete}/>
            ))}
        </div>
        <div>
          {chores
            .filter((eachChore) => eachChore.sunday)
            .map((aChore, i) => (
              <EachChore key={i} chore={aChore} onComplete={onComplete}/>
            ))}
        </div>
      </div>      
    </div>
  );
}

export default CalendarCard;