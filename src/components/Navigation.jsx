// import Link from "next/link"
import Image from "next/image"

const Navigation = () => {
    return (
        <div className="bg-transparent">
            <nav className="flex items-center gap-100 -mt-1 -ml-2 ">
                <Image className="rounded-e-full" height={100} width={100} alt="logo" src="/static/BrewBase.png" />
                {/* <div className="flex rounded-lg items-center text-xl text-coffee  bg-gradient-to-r from-cyan-50 to-blue-400 gap-10 w-100 h-24 p-6">
                    <Link href={'/'}>Home</Link >
                    <Link href={'/'}>About</Link >
                    <Link href={'/'}>Gallery</Link >
                    <Link href={'/'}>Contact</Link >
                </div> */}
            </nav>
        </div>
    )
}

export default Navigation
