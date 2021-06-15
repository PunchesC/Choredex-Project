import { NavLink, useParams } from 'react-router-dom';
import { AccountContext } from '../context/auth.context';
import { useContext } from "react";
import './Header.css'

interface RouteParams {
  adminName:string
}


function Header(){
const {accounts} = useContext(AccountContext);
const adminName:string = useParams<RouteParams>().adminName ;

console.log(adminName)
let addNoDisplay=""
for(let account of accounts)

if(adminName===account.adminName){
  addNoDisplay= " noDisplay"
  console.log(account.adminName)
}


  return (
    <div className="Header">
   <NavLink to="/" className="navLogo">CHOREDEX</NavLink>
          <nav>
            <NavLink to="/sign-in-form" className={"navLinks"+ addNoDisplay}>sign in</NavLink>
            <NavLink to="/account-sign-up" className={"navLinks"+ addNoDisplay}>sign up</NavLink>
          </nav>
          
    </div>
  )
}

export default Header;