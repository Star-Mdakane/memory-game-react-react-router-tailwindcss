import { useNavigate } from "react-router";
import Button from "./Button"
import MultiPlayerModal from "./MultiPlayerModal";
import SinglePlayerModal from "./SinglePlayerModal";

const ResultsModal = ({ gamePlayers, moves, resetGame }) => {

    const navigate = useNavigate();

    const btnWidth = "w-full";
    const btnColor = "bg-tert-blue hover:bg-pri-orange focus-visible:bg-pri-orange";

    const handleRestart = () => {
        resetGame();
        navigate("/");
    };
    const handleNew = () => {
        resetGame();
    };

    return (
        <div className="z-10 fixed w-screen h-screen bg-black/50 flex items-center justify-center">
            <div className="w-81.75 md:w-163.5 p-13 md:p-15 flex flex-col items-center justify-center gap-4 md:gap-6 bg-pri-gray rounded-[10px] md:rounded-[20px]">

                {gamePlayers.length > 1 ? <MultiPlayerModal players={gamePlayers} /> : <SinglePlayerModal players={gamePlayers} moves={moves} />}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-14">
                    <Button btnWidth={btnWidth} btnText="Restart" btnColor={btnColor} onClick={handleRestart} />
                    <Button btnWidth={btnWidth} btnText="Setup New Game" btnColor={btnColor} onClick={handleNew} />
                </div>
            </div>
        </div>
    )
}

export default ResultsModal;