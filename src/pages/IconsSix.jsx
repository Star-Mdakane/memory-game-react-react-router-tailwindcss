import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { THEMES } from "/data/themes";
import Card from "../components/Card";

const IconsSix = () => {

    const { startValues } = useContext(GlobalContext);
    const { gridSize } = startValues;

    const cards = THEMES.numbers.flatMap((item) => [
        { id: `${item.pairId}-a`, ...item },
        { id: `${item.pairId}-b`, ...item }
    ])

    return (
        <div>
            <div className="grid grid-cols-6 gap-4 mx-auto">
                {cards.map(card => <Card gridSize={gridSize} key={card.id} />)}
            </div>
        </div>
    )
}

export default IconsSix