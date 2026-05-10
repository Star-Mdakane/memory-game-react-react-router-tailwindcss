import { useEffect, useState } from "react"
import { gameTimer } from "../../public/gameLogic"

const TimerDisplay = () => {

    const [, forceUpdate] = useState(0);

    useEffect(() => {
        let raf;
        const tick = () => {
            forceUpdate(x => x + 1)
            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [])

    return (
        <span>{gameTimer.formatted}</span>
    )
}

export default TimerDisplay