import React from 'react';

import './App.css';
import Pokemon from './components/Pokemon'
import Header from './components/Header'
import AccountForm from './components/AccountForm';
import TaskForm from './components/TaskForm';

import TrainerChoredex from './components/TrainerChoredex';
import AdminHomepage from './components/AdminHomepage';

function App() {
  return (
    <div className="App">
    <Header />
    <AccountForm />
    <TaskForm />
    <AdminHomepage />
    <TrainerChoredex />
     <Pokemon />
    </div>
  );
}

export default App;
