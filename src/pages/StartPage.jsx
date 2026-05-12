import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router";

const StartPage = () => {

    const { register, handleSubmit } = useForm();
    const { setstartValues } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setstartValues(data);
        navigate(`/game/${data.theme}/${data.gridSize}`)
    }

    return (
        <div className="w-full bg-pri-gray rounded-[10px] md:rounded-[20px]">
            <form onSubmit={handleSubmit(onSubmit)} className="w-69 md:w-136.25 py-6.25 md:py-14.25 flex flex-col gap-10 md:gap-8 mx-auto text-pri-gray">
                <div className="flex flex-col gap-6 md:gap-8">
                    <fieldset className="flex flex-col">
                        <legend className="text-[15px] md:text-[20px] leading-[125%] tracking-normal font-bold text-text-blue mb-4">Select Theme</legend>
                        <div className="grid grid-cols-2 h-10 md:h-13 gap-2 md:gap-8">
                            <label htmlFor="numbers" className="h-full grid justify-center self-center cursor-pointer bg-sec-blue hover:bg-hover-blue has-checked:bg-pri-blue rounded-[26px]">
                                <input type="radio" name="theme" id="numbers" value="numbers" className="appearance-none h-0" {...register('theme')} defaultChecked />
                                <span className="text-[15px] md:text-[20px] leading-[125%] tracking-normal font-bold">Numbers</span>
                            </label>
                            <label htmlFor="icons" className="h-full grid justify-center self-center cursor-pointer bg-sec-blue hover:bg-hover-blue has-checked:bg-pri-blue rounded-[26px]">
                                <input type="radio" name="theme" id="icons" value="icons" className="appearance-none h-0" {...register('theme')} />
                                <span className="text-[15px] md:text-[20px] leading-[125%] tracking-normal font-bold">Icons</span>
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <legend className="text-[15px] md:text-[20px] leading-[125%] tracking-normal font-bold text-text-blue mb-4">Number of Players</legend>
                        <div className="grid grid-cols-4 h-10 md:h-13 gap-2 md:gap-6">
                            <label htmlFor="one" className="h-full grid justify-center self-center cursor-pointer bg-sec-blue hover:bg-hover-blue has-checked:bg-pri-blue rounded-[26px]">
                                <input type="radio" name="players" id="one" value="1" className="appearance-none h-0"  {...register('players')} defaultChecked />
                                <span className="text-[16px] text-center md:text-[20px] leading-[125%] tracking-normal font-bold">1</span>
                            </label>
                            <label htmlFor="two" className="h-full grid justify-center self-center cursor-pointer bg-sec-blue hover:bg-hover-blue has-checked:bg-pri-blue rounded-[26px]">
                                <input type="radio" name="players" id="two" value="2" className="appearance-none h-0" {...register('players')} />
                                <span className="text-[16px] text-center md:text-[20px] leading-[125%] tracking-normal font-bold">2</span>
                            </label>
                            <label htmlFor="three" className="h-full grid justify-center self-center cursor-pointer bg-sec-blue hover:bg-hover-blue has-checked:bg-pri-blue rounded-[26px]">
                                <input type="radio" name="players" id="three" value="3" className="appearance-none h-0" {...register('players')} />
                                <span className="text-[16px] text-center md:text-[20px] leading-[125%] tracking-normal font-bold">3</span>
                            </label>
                            <label htmlFor="four" className="h-full grid justify-center self-center cursor-pointer bg-sec-blue hover:bg-hover-blue has-checked:bg-pri-blue rounded-[26px]">
                                <input type="radio" name="players" id="four" value="4" className="appearance-none h-0" {...register('players')} />
                                <span className="text-[16px] text-center md:text-[20px] leading-[125%] tracking-normal font-bold">4</span>
                            </label>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <legend className="text-[15px] md:text-[20px] leading-[125%] tracking-normal font-bold text-text-blue mb-4">Grid Size</legend>
                        <div className="grid grid-cols-2 h-10 md:h-13 gap-2 md:gap-8">
                            <label htmlFor="grid-4" className="h-full grid justify-center self-center cursor-pointer bg-sec-blue hover:bg-hover-blue has-checked:bg-pri-blue rounded-[26px]">
                                <input type="radio" name="gridSize" id="grid-4" value="4" className="appearance-none h-0" {...register('gridSize')} defaultChecked />
                                <span className="text-[16px] text-center md:text-[20px] leading-[125%] tracking-normal font-bold">4x4</span>
                            </label>
                            <label htmlFor="grid-6" className="h-full grid justify-center self-center cursor-pointer bg-sec-blue hover:bg-hover-blue has-checked:bg-pri-blue rounded-[26px]">
                                <input type="radio" name="gridSize" id="grid-6" value="6" className="appearance-none h-0" {...register('gridSize')} />
                                <span className="h-full text-[16px] text-center md:text-[20px] leading-[125%] tracking-normal font-bold">6x6</span>
                            </label>
                        </div>
                    </fieldset>
                </div>

                <button type="submit" className="h-12 md:h-17.5 flex items-center justify-center text-[18px] md:text-[32px] leading-[125%] tracking-normal font-bold cursor-pointer bg-pri-orange hover:bg-orange-300 text-pri-gray rounded-[26px] md:rounded-[35px]">
                    Start Game
                </button>

            </form>
        </div>
    )
}

export default StartPage