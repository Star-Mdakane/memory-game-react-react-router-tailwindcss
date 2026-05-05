const SinglePlayer = () => {
    return (
        <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div className="h-18 p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                <p className=" text-[15px] text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                    Time
                </p>
                <p className=" text-[24px] text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                    0 : 00
                </p>
            </div>
            <div className="h-18 p-3 flex flex-col md:flex-row justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                <p className=" text-[15px] text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                    Moves
                </p>
                <p className=" text-[24px] text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                    0
                </p>
            </div>
        </div>
    )
}

export default SinglePlayer