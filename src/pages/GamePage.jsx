import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Card from "../components/Card";
import { createGameCards } from "../../public/gameLogic";
import { IconContext } from "react-icons";

const GamePage = () => {

    const { theme, gridSize } = useParams();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(createGameCards(theme, Number(gridSize)))
    }, [theme, gridSize])

    const contentSize = gridSize === '4' ? "60px" : "40px";

    return (
        <IconContext.Provider value={{ size: contentSize }}>
            <div className="grid grid-cols-4 gap-6 mx-auto">
                {cards.map(card => (
                    <Card gridSize={gridSize} key={card.id} >
                        {card.content}
                    </Card>
                ))}
            </div>
        </IconContext.Provider>
    )
}

export default GamePage