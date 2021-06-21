import { checkPropTypes } from 'prop-types';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Chore } from "../model/model"

interface ChoreContextValue {
  chores: Chore[];
  addChore:(chore:Chore)=> void;
}

const defaultValue: ChoreContextValue = {
  chores: [],
  addChore: () => { },
}

const examples: Chore[] = [
  {
    title: "Take out the trash",
    description: "dont forget the recycling",
    monday: true,
    tuesday: false,
    wednesday: true,
    thursday: false,
    friday: true,
    saturday: true,
    sunday: false,
    trainer: "MJ",
    difficulty: "easy", 
  },
  {
    title: "Clean Dishes",
    description: "",
    monday: false,
    tuesday: true,
    wednesday: false,
    thursday: true,
    friday: false,
    saturday: true,
    sunday: false,
    trainer: "Lebron",
    difficulty: "hard", 
  }

];

export const ChoreContext = createContext( defaultValue);

export function ChoreContextProvider ({children}: {children:ReactNode;}){
  const[chores,setChores] = useState<Chore[]>(examples);

  function addChore(chore:Chore): number | undefined {
    setChores([...chores,chore]);
    return chores.length;
  }

return (
  <ChoreContext.Provider value={{chores, addChore}}>
  {children}
  </ChoreContext.Provider>
);

}