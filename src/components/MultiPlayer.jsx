const MultiPlayer = () => {
    return (
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(80px,1fr))] md:gap-2 items-center justify-between">
            <div className="h-18 p-3 flex flex-col justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                <p className=" md:h-20 text-[15px] text-center text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                    P1
                </p>
                <p className=" md:h-20 text-[24px] text-center text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                    4
                </p>
            </div>
            <div className="h-18 p-3 flex flex-col justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">
                < p className=" md:h-20 text-[15px] text-center text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold" >
                    p2
                </p >
                <p className=" md:h-20 text-[24px] text-center text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                    5
                </p>
            </div>
            <div className="h-18 p-3 flex flex-col justify-between items-center rounded-[5px] md:rounded-[10px] bg-tert-blue">

                <p className=" md:h-20 text-[15px] text-center text-text-blue md:text-[18px] leading-[125%] tracking-normal font-bold">
                    P3
                </p>
                <p className=" md:h-20 text-[24px] text-center text-pri-blue md:text-[32px] leading-[125%] tracking-normal font-bold">
                    2
                </p>
            </div>

        </div>
    )
}

export default MultiPlayer