import React from 'react';

import './App.css';
import Pokemon from './components/Pokemon'
import Header from './components/Header'
import AccountForm from './components/AccountForm';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
    <Header />
    <AccountForm />
    <TaskForm />
     <Pokemon />
    </div>
  );
}

export default App;
