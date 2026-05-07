import { Outlet } from "react-router"
import SinglePlayer from "../components/SinglePlayer";
import MultiPlayer from "../components/MultiPlayer"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const InGameLayout = () => {

    const { startValues } = useContext(GlobalContext);
    const { players } = startValues;
    console.log(players);

    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-around bg-pri-gray">
            <header className="flex items-center justify-between w-81.5 md:w-172.5 lg:w-277.5 mx-auto">
                <h1 className="text-bg-blue text-[24px] md:text-[40px] leading-[125%] tracking-normal font-bold">memory</h1>
                <button type="button" className="w-19.5 md:w-31.75 h-10 md:h-13 text-[16px] md:text-[20px] leading-[125%] tracking-normal font-bold rounded-[26px] bg-pri-orange text-pri-gray">menu</button>
            </header>
            <Outlet />
            <div className="w-82 md:w-172">
                {players > 1 ? <MultiPlayer players={players} /> : <SinglePlayer />}
            </div>
        </div>
    )
}

export default InGameLayout

