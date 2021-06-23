import {useContext, useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import {AccountContext} from '../context/auth.context';
import { Chore } from '../model/model';
import Pokemon from '../model/Pokemon';
import { allPokemon, updateChoreInDatabase } from '../service/pokemonService';
import CalendarCard from './CalendarCard';
import './TrainerChoredex.css'



function TrainerChoredex(){
  const {currentUser, account, updateAccount} = useContext(AccountContext);
  const [pokes, setPokes] = useState<Pokemon[]>([]);
  const trainers = account.trainers;
  const currentTrainer = trainers.find(trainer => trainer.name === currentUser);
  const [choresUpdateTrigger, setChoresUpdateTrigger] = useState(0);

  useEffect(() => {
    loadPokemon();
  }, []);

  if (!currentTrainer){
    return <Redirect to="/sign-in-form"/>
  }

  let easyPokes = []
  let mediumPokes = []
  let hardPokes = []
  for (let poke of pokes){
    let points = poke.hpAmount + poke.defenseAmount + poke.attackAmount + poke.speedAmount
    if (points >= 150 && points < 280){
      easyPokes.push(poke)
    } else if (points >= 280 && points < 340){
      mediumPokes.push(poke)
    } else {
      hardPokes.push(poke)
    }
  }
  const randomEasyPoke = easyPokes[Math.floor(Math.random() * easyPokes.length)];
  const randomMediumPoke = mediumPokes[Math.floor(Math.random() * mediumPokes.length)];
  const randomHardPoke = hardPokes[Math.floor(Math.random() * hardPokes.length)];



  function loadPokemon(){
    allPokemon().then((data) => {
      setPokes(data);
    });
  };

  function handleCompleteTask(chore:Chore):void {
    let randomPoke: Pokemon;
    if (chore.difficulty === "easy"){
      randomPoke = randomEasyPoke
    } else if (chore.difficulty === "medium"){
      randomPoke = randomMediumPoke
    } else {
      randomPoke = randomHardPoke
    }
    
        const newAccount = { // copy of account
          ...account,
          trainers: account.trainers.map(trainer => { // copy of trainers
            if (trainer.name === currentUser) {
              return { // copy of current trainer
                ...trainer,
                pokemons: [ ...trainer.pokemons, randomPoke ] // copy of pokemons
              }
            } else {
              return trainer;
            }
          })
        };
        updateAccount(newAccount);
        chore.complete = true;
        updateChoreInDatabase(chore).then(() => {
          setChoresUpdateTrigger(prev => prev + 1)
        })
        console.log(currentTrainer);
        console.log(chore.complete);
        console.log(randomPoke);
        console.log(randomEasyPoke);
        console.log(randomMediumPoke);
        console.log(randomHardPoke);
      }


      // function updateChore(chore:Chore){
       
      //   updateChoreInDatabase(chore).then((ourChore)=>
      //   setChore(ourChore)
      //   )};


      function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }

  return (
    <div className="TrainerChoredex">
      <h2 className="TrainerTitle">{currentUser}'s Choredex</h2>
      <div className="TrainerChoredex_calendar">
      <CalendarCard ourTrainer={currentUser} choresUpdateTrigger={choresUpdateTrigger} onComplete={ (chore) => handleCompleteTask(chore)}/>
      </div>
      {currentTrainer!.pokemons.slice(0).reverse().map((poke, i) => (
            <p key={i} className="pokemonCard">
              <p className="PokeName">{poke.name}</p> 
              <div className="pokemonPic"><img src={poke.picUrl} alt='' className="pokemonCard_pic"/></div>
              HP: {poke.hpAmount}<br/>
              Attack: {poke.attackAmount}<br/>
              Defense: {poke.defenseAmount}<br/>
              Speed: {poke.speedAmount}
            </p>))} <br></br>
      {/* This is where the specific trainer calendar card will go! */}
      <button className="TopButton" onClick={ scrollToTop } >back to top</button>
    </div>
  )
}

export default TrainerChoredex;