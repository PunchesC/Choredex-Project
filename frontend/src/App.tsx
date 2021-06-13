import React from 'react';
import './App.css';
import Pokemons from './components/Pokemons'
import Header from './components/Header'
import AccountForm from './components/AccountForm';
import TaskForm from './components/TaskForm';
import TrainerChoredex from './components/TrainerChoredex';
import AdminHomepage from './components/AdminHomepage';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     
      <Router>
        <header>
          <h1>Site Title</h1>
          <nav>
            <NavLink to="/admin-homepage" className="navLinks">Sign In</NavLink>
            <NavLink to="/account-sign-up" className="navLinks">Sign Up</NavLink>
          </nav>
        </header>
        <Switch>
          <Route path="/account-sign-up">
            <AccountForm />
          </Route>
          <Route path="/admin-homepage">
            <AdminHomepage />
          </Route>
          <Route path="/trainer-choredex">
            <TrainerChoredex />
          </Route>
          <Route path="/Pokemons">
            <Pokemons />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;

      {/* 
      <TaskForm />
      <Pokemon /> */}