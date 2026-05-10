const MultiPlayerModal = ({ players }) => {
    console.log(players);

    const sortedPlayers = Array.from(players).sort((a, b) => b.scores - a.scores);

    const [first, second, third, fourth] = sortedPlayers;

    const allTied = first.score === second.score && second.score === third.score && third.score === fourth.score && first.score > 0;

    const threeWayTie = first.score === second.score &&
        second.score === third.score &&
        third.score > fourth.score &&
        first.score > 0;

    const twoWayTie = first.score === second.score &&
        first.score > third.score &&
        first.score > 0;

    const soloWinner = first.score > second.score && first.score > 0;

    const winner = threeWayTie || twoWayTie || soloWinner;

    return (
        <div className="w-full flex flex-col gap-6 md:gap-10">

            <div className="flex flex-col">
                <p className="text-bg-blue text-[24px] md:text-[48px] leading-[125%] tracking-normal font-bold">
                    It's a tie
                </p>
                <p className="text-text-blue-blue text-[14px] md:text-[18px] leading-[125%] tracking-normal font-bold">
                    Game Over! Here are the results...
                </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
                {sortedPlayers.map(player => (
                    <div
                        key={player.id}
                        className="flex flex-col gap-2 md:gap-4">
                        <div className="h-12 md:h-18 p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                            <p className=" text-[14px] text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                                Player 1 (Winner)
                            </p>
                            <p className=" text-[20px] text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                                6 Pairs
                            </p>
                        </div>
                    </div>
                ))}
                <div className="h-12 md:h-18 p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                    <p className=" text-[14px] text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                        Player 2 (Winner)
                    </p>
                    <p className=" text-[20px] text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                        3 Pairs
                    </p>
                </div>

            </div>

        </div>
    )
}

export default MultiPlayerModal