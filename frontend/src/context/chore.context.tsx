import { checkPropTypes } from 'prop-types';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import {Chore} from "../model/model"

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
    Monday: true,
    Tuesday: false,
    Wednesday: true,
    Thursday: false,
    Friday: true,
    Saturday: true,
    Sunday: false,
    Trainer: "MJ",
    difficulty: "easy", 
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