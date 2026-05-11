const MultiPlayerModal = ({ players }) => {

    const sortedPlayers = Array.from(players).sort((a, b) => b.score - a.score);

    const [first, second, third, fourth] = sortedPlayers;

    const noScore = first.score === 0;

    const allTied = !noScore && first.score === second.score && second.score === third.score && third.score === fourth.score;


    const threeWayTie = !noScore && first.score === second.score && second.score === third.score && third.score > fourth.score

    const twoWayTie = !noScore && first.score === second.score && first.score > third.score

    const soloWinner = !noScore && first.score > second.score

    const winner = threeWayTie || twoWayTie || soloWinner;

    const getWinners = () => {
        if (allTied) return sortedPlayers.filter(p => p.score > 0)
        if (threeWayTie) return sortedPlayers.filter(p => p.score === first.score)
        if (twoWayTie) return sortedPlayers.filter(p => p.score === first.score)
        if (soloWinner) return [first]
        return []
    }

    const winners = getWinners();

    const winnerIds = new Set(winners.map(w => w.id))

    const win = () => {
        if (soloWinner) {
            return sortedPlayers[0].name + " Wins!"
        } else {
            return "It's a Tie!"
        }
    }

    return (
        <div className="w-full flex flex-col gap-6 md:gap-10">

            <div className="flex flex-col items-center">
                <p className="text-bg-blue text-[24px] md:text-[48px] leading-[125%] tracking-normal font-bold">
                    {winner && win()}
                </p>
                <p className="text-text-blue-blue text-[14px] md:text-[18px] leading-[125%] tracking-normal font-bold">
                    Game Over! Here are the results...
                </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
                {sortedPlayers.map(player => {
                    const isWinner = winnerIds.has(player.id)
                    return (
                        <div
                            key={player.id}
                            className={`flex flex-col gap-2 md:gap-4`}>

                            <div className={`h-auto p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] ${isWinner ? 'bg-pri-blue' : 'bg-tert-blue'
                                }`}>
                                <p className={`text-[14px]  md:text-[18px] leading-[125%] tracking-normal font-bold ${isWinner ? 'text-pri-gray' : 'text-text-blue'
                                    }`}>
                                    {player.name}
                                </p>
                                <p className={`text-[20px]  md:text-[32px] leading-[125%] tracking-normal font-bold ${isWinner ? 'text-pri-gray' : 'text-pri-blue'
                                    }`}>
                                    {player.score} Pairs
                                </p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default MultiPlayerModal

// {
//     winner
//         ? (
//             <div className="h-12 md:h-18 p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] bg-pri-blue">
//                 <p className=" text-[14px] text-pri-gray md:text-[18px] leading-[125%] tracking-normal font-bold">
//                     {player.name}
//                 </p >
//                 <p className=" text-[20px] text-pri-gray md:text-[32px] leading-[125%] tracking-normal font-bold">
//                     {player.score}
//                 </p>
//             </div >
//         )
//         : (
//             <div className="h-12 md:h-18 p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
//                 <p className=" text-[14px] text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
//                     {player.name} Pairs
//                 </p >
//                 <p className=" text-[20px] text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
//                     {player.score} Pairs
//                 </p>
//             </div >
//         )
// }