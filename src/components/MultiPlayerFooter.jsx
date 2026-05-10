const MultiPlayerFooter = ({ players }) => {

    return (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(60px,1fr))] md:gap-2 items-center justify-between">
            {players.map((player, i) => (
                <div key={player.id}
                    className={`${player.isActive ? 'bg-pri-orange' : 'bg-tert-blue'} h-18 p-3 flex flex-col justify-between items-center rounded-[5px] md:rounded-[10px] `}>
                    <p className="md:h-20 text-[15px] text-center text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                        {player.name || `P${i + 1}`}
                    </p>
                    <p className=" md:h-20 text-[24px] text-center text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                        {player.score}
                    </p>
                </div>
            ))}

            {/* <div className="h-18 p-3 flex flex-col justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                < p className=" md:h-20 text-[15px] text-center text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold" >
                    p2
                </p >
                <p className=" md:h-20 text-[24px] text-center text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                    5
                </p>
            </div> */}


        </div>
    )
}

export default MultiPlayerFooter