import { createContext, ReactNode, useEffect, useState } from 'react';
import { Account, Chore } from '../model/model'
import { readAccountById, updateAccountInDatabase, updateChoreInDatabase } from '../service/pokemonService';

interface AccountContextValue {
    account: Account;
    updateAccount: (account: Account) => void;
    currentUser: string;
    isAdmin: boolean;
    setCurrentUser:(user:string) => void; 
}
const example: Account = 
    {
        _id: "60ca0d103e4534633954dd1c",
        adminName: "Ash",
        adminPassword: "123",
        gymName: "Cerulean Gym",
        gymPassword: "123",
        calendarTitle: "Galar League",
        trainers: [
            { name: "Jimmy", pokemons: [] },
            { name: "Billy", pokemons: [] },
            { name: "Samantha", pokemons: [] },
            { name: "Ash", pokemons: [] }
        ]
    };

    const defaultValue: AccountContextValue = {
    account: example,
    updateAccount: () => {},
    currentUser: "",
    isAdmin: false,
    setCurrentUser: ()=> {},
}
export const AccountContext = createContext(defaultValue);

export function AccountContextProvider({children}: {children:ReactNode;}) {

    const [ account, setAccount ] = useState<Account>(example);

    const [currentUser, setCurrentUser] = useState("");
    const isAdmin = currentUser===account.adminName;

    function updateAccount(account:Account) {
        setAccount(account);
        updateAccountInDatabase(account); 
    }

 

    useEffect(() => {
        readAccountById("60ca0d103e4534633954dd1c").then(accountFromApi => {
            setAccount(accountFromApi)
        });
    }, [])


    
   

    return (
        <AccountContext.Provider value={{account, updateAccount, currentUser, isAdmin, setCurrentUser}}>
            {children}
        </AccountContext.Provider>
    );

}