import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AccountContext } from '../context/auth.context';
import { Chore } from '../model/model';
import { readAllChores, readAllChoresForTrainer } from '../service/pokemonService';
import CalendarCard from './CalendarCard';
import './TrainerChoredex'



function TrainerChoredex(){
  const {account,currentUser} = useContext(AccountContext);


  const [chores, setChores] = useState<Chore[]>([]);

  // useEffect(() => {
  //   loadChores();
  // }, []);

  // function loadChores() {
  //   readAllChores().then((choresFromApi) => {
  //     setChores(choresFromApi);
  //   });
  // }

  let trainerChores = chores.filter(chore => chore.trainer===currentUser)
console.log(trainerChores)
  useEffect(loadChores, [currentUser]);
  function loadChores() {
    readAllChoresForTrainer(currentUser).then(choresFromApi => {
      setChores(choresFromApi);
  
    });
  } 
  return (
    <div className="TrainerChoredex">
      <h2>{currentUser} Choredex</h2>
      <div className="TrainerChoredex_calendar">
        {trainerChores.map(eachchore => 
        <CalendarCard chore={eachchore}/>)} 
      {/* This is where the specific trainer calendar card will go! */}
      </div>
    </div>
  )
}

export default TrainerChoredex;

function loadChores(loadChores: any, arg1: string[]) {
  throw new Error('Function not implemented.');
}
