import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Card from "../components/Card";
import { createGameCards } from "../../public/gameLogic";
import { IconContext } from "react-icons";

const GamePage = () => {

    const { theme, gridSize } = useParams();
    const [cards, setCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

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