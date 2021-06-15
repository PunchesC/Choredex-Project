import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Account } from '../model/model'

interface AccountContextValue {
    account: Account;
    setAccount: (account: Account) => void;
    currentUser: string;
    isAdmin: boolean;
    setCurrentUser:(user:string) => void; 
}
const example: Account = 
    {
        adminName: "Ash",
        adminPassword: "Pokemon4life",
        gymName: "Cerulean Gym",
        gymPassword: "Pokemon4Ever",
        calendarTitle: "Galar League",
        trainers: [
            { name: "Jimmy" }
        ]
    };

    const defaultValue: AccountContextValue = {
    account: example,
    setAccount: () => {},
    currentUser: "",
    isAdmin: false,
    setCurrentUser: ()=> {}
}


console.log(example)
export const AccountContext = createContext(defaultValue);

export function AccountContextProvider({children}: {children:ReactNode;}) {

    const [ account, setAccount ] = useState<Account>(example);
    const [currentUser, setCurrentUser] = useState("");
    const isAdmin = currentUser===account.adminName;

    function changeAccount(account:Account) {
        setAccount(account);    
    }

    

    
   

    return (
        <AccountContext.Provider value={{account, setAccount, currentUser, isAdmin, setCurrentUser}}>
            {children}
        </AccountContext.Provider>
    );

}