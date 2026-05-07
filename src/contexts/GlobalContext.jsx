import { createContext, useState } from "react";
import { THEMES } from "../../public/themes";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const initValues = { theme: "numbers", gridSize: "4", players: "1" }
    const [startValues, setstartValues] = useState(initValues);


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