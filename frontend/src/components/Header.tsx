import { NavLink, useHistory } from 'react-router-dom';
import { AccountContext } from '../context/auth.context';
import { useContext} from "react";
import './Header.css'

function Header(){
const {account, currentUser, setCurrentUser,setAccount} = useContext(AccountContext);
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

function goToAdminHomepage(){
  history.push(`/homepage/${currentUser}`);
}

function testing(){
  console.log("CLICKED")
}
  return (
  
    <div className="Header">
      <NavLink to="/" className="navLogo">CHOREDEX</NavLink>
          <nav>
            {!currentUser&&<NavLink to="/sign-in-form" className={"navLinks"+ addNoDisplay} onClick={testing}>sign in</NavLink>}
            {!currentUser&&<NavLink to="/account-sign-up" className={"navLinks"+ addNoDisplay}>sign up</NavLink>}
            {currentUser&& <span className="welcomeMessage">Welcome {currentUser}, to the {account.gymName}!</span>}
            {currentUser===account.adminName && <button className="NavLinkButton" onClick={goToAdminHomepage}>homepage</button>}
            {/* {currentUser && <button className="NavLinkButton" onClick={goToChoredex}>choredex</button>} */}
            {currentUser&&<button className="NavLinkButton" onClick={signOut}>sign out</button>}
          </nav>
    </div>
   
  )
}

export default Header;