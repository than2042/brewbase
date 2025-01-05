

const Banner = () => {
    return (
        <div className="flex mt-[250px] ml-20 w-2/5 p-6 backdrop-brightness-200 opacity-45 flex-col justify-center items-center rounded-bl-[50px] skew-x-[20deg] saturate-200 translate-x-1 font-bold gap-6">
            <h1 className="text-coffee-dark text-7xl opacity-100"><span className="text-coffee">Brew </span>Base</h1>
            <p className="text-4xl text-coffee-dark m-2 opacity-100">Your Local Coffee Compass.</p>
            <button className="opacity-100 w-3/5 h-10 bg-coffee text-gray-50 rounded-full text-2xl">Search Local Brews</button>
        </div>
    )
}

export default Banner
