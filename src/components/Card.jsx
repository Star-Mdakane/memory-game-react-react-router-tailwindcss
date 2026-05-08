

const Card = ({ card, onClick, gridSize, disabled }) => {

    const isFaceUp = card.isFlipped || card.isMatched;

    const cardSize = gridSize === '4'
        ? "w-18 h-18 md:w-29.5 md:h-29.5 text-[40px] md:text-[56px]"
        : "w-12 h-12 md:w-20.5 md:h-20.5 text-[24px] md:text-[44px]";


    return (

        <button
            onClick={() => !disabled && onClick(card.id)}
            disabled={disabled}
            className={`relative ${cardSize}   rounded-full cursor-pointer`}>
            <div
                className={`absolute inset-0 w-full h-full transition-transform duration-300 [transform-style:preserve-3d] ${isFaceUp ? '[transform:rotateY(180deg)]' : ''}`}>
                <span
                    className="absolute inset-0 rounded-full bg-pri-blue hover:bg-hover-blue backface-hidden">

                </span>
                <span
                    className="absolute inset-0 rounded-full backface-hidden transform-[rotateY(180deg)] bg-sec-blue text-pri-gray grid place-content-center">
                    {card.content}
                </span>
            </div>
        </button>

    )
}

export default Card