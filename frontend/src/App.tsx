import React from 'react';
import './App.css';
import Pokemons from './components/Pokemons'
import Header from './components/Header'
import AccountForm from './components/AccountForm';
import TaskForm from './components/TaskForm';
import TrainerChoredex from './components/TrainerChoredex';
import AdminHomepage from './components/AdminHomepage';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom';
import linkedinIcon from './assets/linkedinIcon.png';
import Homepage from './components/Homepage';
import { AccountContextProvider } from './context/auth.context';
import SignInForm from './components/SignInForm';

function App() {
  return (
    <div className="App">
  
      <Router>
        <AccountContextProvider>
      <Header />
        <Switch>
          <Route path="/account-sign-up">
            <AccountForm />
          </Route>
          <Route path="/sign-in-form">
            <SignInForm />
          </Route>
          <Route path="/homepage/admin">
            <AdminHomepage />
          </Route>
          <Route path="/choredex/:name">
            <TrainerChoredex />
          </Route>
          <Route path="/Pokemons">
            <Pokemons />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        {/* <footer>
          <img src={linkedinIcon} alt="linkedin icon" />{" "}<h2>yitz-hochstadt-386a831b6</h2>
          <img src={linkedinIcon} alt="linkedin icon" />{" "}<h2>curtispunches</h2>
          <img src={linkedinIcon} alt="linkedin icon" />{" "}<h2>kaleigh-griffin</h2>
        </footer> */}
        </AccountContextProvider>
      </Router>
    
    </div>
  );
}

export default App;

      {/* 
      <TaskForm />
      <Pokemon /> */}