const Button = ({ btnWidth, btnText, onClick, btnColor }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={`${btnWidth} h-10 md:h-13 text-[16px] md:text-[20px] leading-[125%] tracking-normal font-bold rounded-[26px] cursor-pointer text-pri-blue ${btnColor} ring-0  hover:text-pri-gray  focus-visible:text-pri-gray`}>
            {btnText}
        </button>

    )
}

export default Button;