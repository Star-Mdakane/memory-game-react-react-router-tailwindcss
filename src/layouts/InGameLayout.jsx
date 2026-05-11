import { Outlet } from "react-router"
import Footer from "../components/Footer";
import { useState } from "react";
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Button from "../components/Button";
import MenuModal from "../components/MenuModal";
import ResultsModal from "../components/ResultsModal";
import { gameTimer } from "../../public/gameLogic";

const InGameLayout = () => {


    const { startValues, moves, setMoves, resetGameCtx } = useContext(GlobalContext);
    const { players } = startValues;
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [menuModal, setMenuModal] = useState(false);
    const [gameOver, setgameOver] = useState(false);

    const [gamePlayers, setGamePlayers] = useState(() => {
        const basePlayers = [
            { id: 1, name: 'P1', score: 0, isFlipped: false, },
            { id: 2, name: 'P2', score: 0, isFlipped: false, },
            { id: 3, name: 'P3', score: 0, isFlipped: false, },
            { id: 4, name: 'P4', score: 0, isFlipped: false, },
        ]
        return basePlayers.slice(0, players)
    })

    const resetGame = () => {
        resetGameCtx();
        setMoves(0);
        setCurrentPlayerIndex(0);
        setGamePlayers(prev =>
            prev.map((p) => ({
                ...p,
                score: 0,
                isFlipped: false,
            }))
        )
        setgameOver(false);
        gameTimer.reset();
    }

    const handleMatch = (isMatch, allCards) => {
        if (!isMatch) {
            setCurrentPlayerIndex(prev => (prev + 1) % gamePlayers.length)
        } else {
            setGamePlayers(prevPlayers =>
                prevPlayers.map((p, i) =>
                    i === currentPlayerIndex
                        ? { ...p, score: p.score + 1 }
                        : p
                )
            )
        }

        if (allCards.every(c => c.isMatched)) {
            setgameOver(true);
            gameTimer.stop();
        }
    }

    const playersWithActive = gamePlayers.map((p, i) => ({
        ...p,
        isActive: i === currentPlayerIndex
    }))

    const btnWidth = "w-19.5 md:w-31.75"
    const btnColor = "bg-pri-orange hover:bg-hover-orange focus-visible:bg-hover-orange"

    const btnClicked = () => {
        setMenuModal(true);
        gameTimer.pause();
    }

    return (
        <div className="relative min-w-93.75 w-screen min-h-screen flex flex-col items-center justify-around bg-pri-gray">
            <header className="flex items-center justify-between w-81.5 md:w-172.5 lg:w-277.5 mx-auto">
                <h1 className="text-bg-blue text-[24px] md:text-[40px] leading-[125%] tracking-normal font-bold">memory</h1>
                <Button
                    btnText="Menu"
                    btnWidth={btnWidth}
                    btnColor={btnColor}
                    onClick={btnClicked}
                />
            </header>
            <Outlet context={{ handleMatch, currentPlayerIndex, gamePlayers, setMoves, resetGame }} />
            <Footer players={playersWithActive} moves={moves} />
            {menuModal && <MenuModal setModal={setMenuModal} resetGame={resetGame} />}
            {gameOver && <ResultsModal gamePlayers={playersWithActive} moves={moves} resetGame={resetGame} />}
        </div>
    )
}



export default InGameLayout

