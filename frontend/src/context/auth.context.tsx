import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Account } from '../model/model'

interface AccountContextValue {
    accounts: Account[];
    addAccount: (account: Account) => void;
}

const defaultValue: AccountContextValue = {
    accounts: [],
    addAccount: () => {},
}

const example: Account[] = [
    {
        adminName: "Ash",
        adminPassword: "Pokemon4life",
        gymName: "Cerulean Gym",
        gymPassword: "Pokemon4Ever",
        calendarTitle: "Galar League"
    }
];
console.log(example)
export const AccountContext = createContext(defaultValue);

export function AccountContextProvider({children}: {children:ReactNode;}) {

    const [ accounts, setAccounts ] = useState<Account[]>(example);

    function addAccount(account:Account): number | undefined {
        setAccounts([...accounts, account]);
        return accounts.length
    }

    return (
        <AccountContext.Provider value={{accounts, addAccount}}>
            {children}
        </AccountContext.Provider>
    );

}