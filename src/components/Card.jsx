

const Card = ({ gridSize, pairId, content, isFlipped, setIsFlipped }) => {

    const handleClick = (id) => {
        id === pairId ? content.pairId(setIsFlipped(true)) : content.pairId(setIsFlipped(false));
    }

    const cardSize = gridSize === '4'
        ? "w-18 h-18 md:w-29.5 md:h-29.5 text-[40px] md:text-[56px]"
        : "w-12 h-12 md:w-20.5 md:h-20.5 text-[24px] md:text-[44px]";


    return (

        <button onClick={() => handleClick(pairId)}
            className={`relative ${cardSize} text-pri-gray grid place-content-center bg-sec-blue rounded-full cursor-pointer group isActive`}>
            {content}
            <div className={`w-full h-full rounded-full absolute  group-hover:bg-hover-blue ${isFlipped ? 'group-[.isActive]:bg-none' : 'bg-bg-blue'}`}></div>
        </button>

    )
}

export default Card