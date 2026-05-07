
const Card = ({ gridSize, children }) => {

    const cardSize = gridSize === '4' ? "w-18 h-18 md:w-29.5 md:h-29.5" : "w-12 h-12 md:w-20.5 md:h-20.5";
    const contentSize = gridSize === '4' ? "w-15 h-15" : "w-10 h-10";

    return (
        <button
            className={`${cardSize} text-white grid place-content-center bg-bg-blue rounded-full cursor-pointer`}>
            {children}
        </button>
    )
}

export default Card