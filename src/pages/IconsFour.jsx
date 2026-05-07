import { useContext } from "react";
import Card from "../components/Card"
import { THEMES } from "/data/themes"
import { GlobalContext } from "../contexts/GlobalContext";

const IconsFour = () => {

    const { startValues } = useContext(GlobalContext);
    const { gridSize } = startValues;

    const cards = THEMES.numbers.flatMap((item) => [
        { id: `${item.pairId}-a`, ...item },
        { id: `${item.pairId}-b`, ...item }
    ])

    return (
        <div className="grid grid-cols-4 gap-6 mx-auto">
            {cards.map(card => <Card gridSize={gridSize} key={card.id} />)}
        </div>
    )
}

export default IconsFour