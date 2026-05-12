import { createContext, useEffect, useState } from "react";
import { gameTimer, shuffle } from "../../public/gameLogic";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [startValues, setstartValues] = useState(() => {
        const saved = localStorage.getItem('savedValues');
        return saved ? JSON.parse(saved) : { players: 1, theme: 'numbers', gridSize: 4 }
    });

    useEffect(() => {
        localStorage.setItem('savedValues', JSON.stringify(startValues))
    }, [startValues]);

    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [isChecking, setIsChecking] = useState(false);
    const [moves, setMoves] = useState(0);

    const resetGameCtx = () => {
        setFlippedCards([]);
        setMoves(0);
        setIsChecking(false);
        gameTimer.reset();

        setCards(prev => {
            const resetCards = prev.map(c => ({
                ...c,
                isFlipped: false,
                isMatched: false,
            }))

            return shuffle(resetCards)
        })
    }



    const value = {
        startValues,
        setstartValues,
        cards,
        setCards,
        flippedCards,
        setFlippedCards,
        isChecking,
        setIsChecking,
        moves,
        setMoves,
        resetGameCtx,
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}