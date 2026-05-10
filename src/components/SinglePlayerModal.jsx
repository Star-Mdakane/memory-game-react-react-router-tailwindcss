import TimerDisplay from "./TimerDisplay"

const SinglePlayerModal = ({ moves }) => {
    return (
        <div className="w-full flex flex-col gap-6 md:gap-10">
            <div className="w-full flex flex-col items-center">
                <p className="text-bg-blue text-[24px] md:text-[48px] leading-[125%] tracking-normal font-bold">
                    You did it!
                </p>
                <p className="text-text-blue-blue text-[14px] md:text-[18px] leading-[125%] tracking-normal font-bold">
                    Game Over! Here's how you got on...
                </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
                <div className="h-18 p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                    <p className=" text-[14px] text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                        Time Elapsed
                    </p>
                    <p className=" text-[24px] text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                        <TimerDisplay />
                    </p>
                </div>
                <div className="h-18 p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                    <p className=" text-[14px] text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                        Moves Taken
                    </p>
                    <p className=" text-[24px] text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                        {moves} Moves
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SinglePlayerModal