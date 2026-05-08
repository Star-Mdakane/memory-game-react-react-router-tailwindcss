import { THEMES } from "../public/themes.jsx";

export const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

export const createGameCards = (theme, gridSize) => {
    const pairsNeeded = (gridSize * gridSize) / 2;
    const themeData = THEMES[theme].slice(0, pairsNeeded);

    const cards = themeData.flatMap((item) => [
        { id: `${item.pairId}-a`, ...item },
        { id: `${item.pairId}-b`, ...item }
    ])

    return shuffle(cards);
}

export const checkMatch = (card1, card2) => card1.pairId === card2.pairId;
