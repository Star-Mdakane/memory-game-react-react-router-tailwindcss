import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Card from "../components/Card";
import { createGameCards } from "../../public/gameLogic";
import { IconContext } from "react-icons";

const GamePage = () => {

    const { theme, gridSize } = useParams();
    const [cards, setCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    const [players, setPlayers] = useState([
        { id: 1, name: 'P1', score: 0, isActive: true },
        { id: 2, name: 'P2', score: 0, isActive: false },
        { id: 3, name: 'P3', score: 0, isActive: false },
        { id: 4, name: 'P4', score: 0, isActive: false },
    ])

    const [currentPayerIndex, setCurrentPlayerIndex] = useState();

    const nextTurn = () => {
        setCurrentPlsyerIndex(prev => (prev + 1) % players.length);
    }

    const playersWithActive = players.map((p, i) => ({
        ...p,
        isActive: i === currentPayerIndex
    }))

    useEffect(() => {
        setCards(createGameCards(theme, Number(gridSize)))
    }, [theme, gridSize])

    const gridClass = gridSize === '4' ? "grid-cols-4 gap-6" : "grid-cols-6 gap-4";
    const contentSize = gridSize === '4' ? "60px" : "40px";

    return (
        <IconContext.Provider value={{ size: contentSize, className: "pri-gray" }}>
            <div className={`grid ${gridClass} mx-auto`}>
                {cards.map(card => (
                    <Card gridSize={gridSize} key={card.id} {...card} isFlipped={isFlipped} setIsFlipped={setIsFlipped} >

                    </Card>
                ))}
            </div>
        </IconContext.Provider>
    )
}

export default GamePage