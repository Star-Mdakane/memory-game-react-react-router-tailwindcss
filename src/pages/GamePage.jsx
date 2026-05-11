import { useContext, useEffect } from "react"
import { useOutletContext, useParams } from "react-router";
import Card from "../components/Card";
import { createGameCards } from "../../public/gameLogic";
import { IconContext } from "react-icons";
import { GlobalContext } from "../contexts/GlobalContext";

const GamePage = () => {

    const { handleMatch } = useOutletContext();
    const { cards, setCards, setMoves, flippedCards, setFlippedCards, isChecking, setIsChecking } = useContext(GlobalContext);
    const { theme, gridSize } = useParams();


    useEffect(() => {
        setCards(createGameCards(theme, Number(gridSize)))
    }, [theme, gridSize, setCards])

    const handleCardClick = (id) => {
        if (isChecking || flippedCards.length === 2) return

        const card = cards.find(c => c.id === id)
        if (card.isFlipped || card.isMatched) return

        const newCards = cards.map(c =>
            c.id === id ? { ...c, isFlipped: true } : c
        )
        setCards(newCards)

        const newFlipped = [...flippedCards, id]
        setFlippedCards(newFlipped)

        if (newFlipped.length === 2) {
            setMoves(m => m + 1)
            setIsChecking(true)
            setTimeout(() => checkForMatch(newFlipped, newCards), 1000)
        }
    }

    const checkForMatch = (flippedIds, currentCards) => {
        const [first, second] = flippedIds.map(id => currentCards.find(c => c.id === id))

        const isMatch = first.pairId === second.pairId

        const updatedCards = currentCards.map(c => {
            if (flippedIds.includes(c.id)) {
                return { ...c, isFlipped: false, isMatched: isMatch }
            }
            return c
        })

        setCards(updatedCards)
        handleMatch(isMatch, updatedCards)

        setFlippedCards([])
        setIsChecking(false)
    }

    const gridClass = gridSize === '4' ? "grid-cols-4 gap-6" : "grid-cols-6 gap-4";
    const contentSize = gridSize === '4' ? "60px" : "40px";

    return (
        <IconContext.Provider value={{ size: contentSize, className: "pri-gray" }}>
            <div className={`grid ${gridClass} mx-auto`}>
                {cards.map(card => (
                    <Card gridSize={gridSize}
                        key={card.id}
                        card={card}
                        onClick={handleCardClick}
                        disabled={isChecking || card.isFlipped || card.isMatched}
                    >
                    </Card>
                ))}
            </div>
        </IconContext.Provider>
    )
}

export default GamePage;
