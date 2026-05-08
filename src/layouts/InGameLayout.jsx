import { Outlet } from "react-router"
import Footer from "../components/Footer";
import { useState } from "react";
import { checkMatch } from "../../public/gameLogic";
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const InGameLayout = () => {


    const { startValues } = useContext(GlobalContext);
    const { players } = startValues;

    const [gamePlayers, setGamePlayers] = useState(() => {
        const basePlayers = [
            { id: 1, name: 'P1', score: 0, isActive: true },
            { id: 2, name: 'P2', score: 0, isActive: false },
            { id: 3, name: 'P3', score: 0, isActive: false },
            { id: 4, name: 'P4', score: 0, isActive: false },
        ]

        return basePlayers.slice(0, players).map((p, i) => ({
            ...p,
            isActive: i === 0
        }))
    })

    const [currentPayerIndex, setCurrentPlayerIndex] = useState(0);

    const nextTurn = () => {
        setCurrentPlayerIndex(prev => (prev + 1) % gamePlayers.length);
    }

    // const handleMatch = (checkMatch) => {
    //     if (!checkMatch) {
    //         nextTurn()
    //     } else {
    //         setGamePlayers(prev => {
    //             prev.map((p, i) =>
    //                 i === currentPayerIndex
    //                     ? { ...p, score: p.score + 1 }
    //                     : p
    //             )
    //         })
    //     }
    // }

    const playersWithActive = gamePlayers.map((p, i) => ({
        ...p,
        isActive: i === currentPayerIndex
    }))

    return (
        <div className="max-w-360 min-w-93.75 w-screen min-h-screen flex flex-col items-center justify-around bg-pri-gray">
            <header className="flex items-center justify-between w-81.5 md:w-172.5 lg:w-277.5 mx-auto">
                <h1 className="text-bg-blue text-[24px] md:text-[40px] leading-[125%] tracking-normal font-bold">memory</h1>
                <button type="button" className="w-19.5 md:w-31.75 h-10 md:h-13 text-[16px] md:text-[20px] leading-[125%] tracking-normal font-bold rounded-[26px] bg-pri-orange text-pri-gray">menu</button>
            </header>
            <Outlet />
            <Footer players={playersWithActive} />
        </div>
    )
}

export default InGameLayout

