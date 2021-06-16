import { NavLink, useHistory } from 'react-router-dom';
import { AccountContext } from '../context/auth.context';
import { useContext} from "react";
import './Header.css'
<<<<<<< Updated upstream
import TrainerChoredex from './TrainerChoredex';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
=======
>>>>>>> Stashed changes




function Header(){
const {account, currentUser, setCurrentUser} = useContext(AccountContext);
let history = useHistory();


// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
// let query = useQuery();
// console.log(query)

// console.log(adminName)
let addNoDisplay=""


if(currentUser){
  addNoDisplay= " noDisplay"
  
}

if(currentUser===account.adminName){
  addNoDisplay= " noDisplay"
}



// for(let user of account.trainers!){
//   if(user.name===currentUser){
//    addNoDisplay= " noDisplay"
//   }
// }
// EXTRA TRY TO GET  INDIVIDUAL GREETINGS IN HEADER
function signOut(){
setCurrentUser("");
history.push(`/`);
}

function goToChoredex(){
  for(let trainer of account.trainers!)
  history.push(`/choredex/${trainer.name}`);
}
  return (
    <Router>
    <div className="Header">
      <NavLink to="/" className="navLogo">CHOREDEX</NavLink>
          <nav>
            <p>hi</p>
            {!currentUser&&<NavLink to="/sign-in-form" className={"navLinks"+ addNoDisplay}>sign in</NavLink>}
            {!currentUser&&<NavLink to="/account-sign-up" className={"navLinks"+ addNoDisplay}>sign up</NavLink>}
            {currentUser&& <span className="welcomeMessage">Welcome {currentUser}, to the {account.gymName}!</span>}
            {currentUser && <button onClick={goToChoredex}>view my choredex</button>}
            {currentUser&&<button onClick={signOut}>sign out</button>}
          </nav>
          
    </div>
    </Router>
  )
}

export default Header;