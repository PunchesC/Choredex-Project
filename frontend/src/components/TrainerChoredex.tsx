import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AccountContext } from '../context/auth.context';
import { Chore } from '../model/model';
import { readAllChores, readAllChoresForTrainer } from '../service/pokemonService';
import CalendarCard from './CalendarCard';
import './TrainerChoredex'

interface RouteParams {
  name:string
}

function TrainerChoredex(){
  const {accounts} = useContext(AccountContext);
  const {name} = useParams<RouteParams>() ;

  const [chores, setChores] = useState<Chore[]>([]);

  // useEffect(() => {
  //   loadChores();
  // }, []);

  // function loadChores() {
  //   readAllChores().then((choresFromApi) => {
  //     setChores(choresFromApi);
  //   });
  // }

  useEffect(loadChores, [name]);
  function loadChores() {
    readAllChoresForTrainer(name).then(choresFromApi => {
      setChores(choresFromApi);
  
    });
  } 
  return (
    <div className="TrainerChoredex">
      <h2>{name} Choredex</h2>
      <div className="TrainerChoredex_calendar">
        {chores.map(eachchore => 
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
