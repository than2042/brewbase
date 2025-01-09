'use client'
import Button from "./Button"

const Banner: React.FC = () => {

    const handleClick = () => {
        window.location.href = "/coffee-store";
    };

    return (
        <div className="flex mt-[250px] md:ml-20 w-5/5 md:w-2/4 p-6 md:backdrop-brightness-200 md:opacity-45 flex-col justify-center items-center rounded-bl-[50px] md:skew-x-[20deg] saturate-200 translate-x-1 font-bold gap-6">
            <h1 className="text-coffee-dark text-7xl opacity-100"><span className="text-coffee">Brew </span>Base</h1>
            <p className="text-4xl text-slate-50 md:text-coffee-dark m-2 opacity-100">Your Local Coffee Compass!</p>
            <Button className='opacity-100 w-3/5 h-10 bg-coffee hover:bg-blue-600/100 text-gray-50 rounded-full text-2xl' onClick={handleClick} children="Search Local Brews" />
        </div>
    )
}

export default Banner
