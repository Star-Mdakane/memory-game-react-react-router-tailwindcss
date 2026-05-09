import Button from "./Button"

const MenuModal = () => {

    const btnWidth = "w-full"
    const btnColor = "bg-tert-blue hover:bg-pri-orange focus-visible:bg-pri-orange"

    return (
        <div className="z-10 fixed w-screen h-screen bg-black/50 flex items-center justify-center">
            <div className="w-81.75 h-56 md:w-163.5 md:h-127.5 p-6 md:p-15 flex flex-col items-center justify-center gap-4 md:gap-6 bg-pri-gray rounded-[10px] md:rounded-[20px]">
                <Button btnWidth={btnWidth} btnText="Restart" btnColor={btnColor} />
                <Button btnWidth={btnWidth} btnText="New Game" btnColor={btnColor} />
                <Button btnWidth={btnWidth} btnText="Resume Game" btnColor={btnColor} />
            </div>
        </div>
    )
}

export default MenuModal