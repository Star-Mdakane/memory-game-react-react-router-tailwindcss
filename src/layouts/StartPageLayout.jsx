import { Outlet } from "react-router"

const StartPageLayout = () => {
    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-bg-blue">
            <div className="w-81.75 md:w-163.5 flex flex-col gap-12 md:gap-20">
                <header className="text-center">
                    <h1 className="text-[32px] md:text-[40px] text-pri-gray leading-[125%] tracking-normal font-bold ">memory</h1>
                </header>
                <Outlet />
            </div>
        </div>
    )
}

export default StartPageLayout