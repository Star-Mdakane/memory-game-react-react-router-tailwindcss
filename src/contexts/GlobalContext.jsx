import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const initValues = { theme: "", gridSize: "4", players: "1" }
    const [startValues, setstartValues] = useState(initValues);

    console.log(startValues);



    const value = {
        startValues,
        setstartValues,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}