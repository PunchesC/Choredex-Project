import { NavLink, useLocation, useParams } from 'react-router-dom';
import { AccountContext } from '../context/auth.context';
import { useContext } from "react";
import './Header.css'




function Header(){
const {account,isAdmin,currentUser} = useContext(AccountContext);


// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }
// let query = useQuery();
// console.log(query)

// console.log(adminName)
let addNoDisplay=""


if(isAdmin){
  addNoDisplay= " noDisplay"
  
}
console.log(account)
console.log(isAdmin)
console.log(currentUser)



  return (
    <div className="Header">
      <NavLink to="/" className="navLogo">CHOREDEX</NavLink>
          <nav>
            {!currentUser&&<NavLink to="/sign-in-form" className={"navLinks"+ addNoDisplay}>sign in</NavLink>}
            <NavLink to="/account-sign-up" className={"navLinks"+ addNoDisplay}>sign up</NavLink>
          </nav>
          
    </div>
  )
}

export default Header;