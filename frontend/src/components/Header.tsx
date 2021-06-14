import { NavLink } from 'react-router-dom';
import { AccountContext } from '../context/auth.context';
import { useContext } from "react";
import './Header.css'

function Header(){
const {accounts} = useContext(AccountContext);

console.log(accounts);


  return (
    <div className="Header">
   <NavLink to="/" className="navLogo">CHOREDEX</NavLink>
          <nav>
            <NavLink to="/sign-in-form" className="navLinks">sign in</NavLink>
            <NavLink to="/account-sign-up" className="navLinks">sign up</NavLink>
          </nav>
    </div>
  )
}

export default Header;