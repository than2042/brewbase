import Link from "next/link"
import Image from "next/image"

const Navigation = () => {
    return (
        <div className="-mt-1 mx-6">
            <nav className="flex items-center gap-96 bg-transparent">
                <Image className="rounded-full" height={100} width={100} alt="logo" src="/static/BrewBase.png" />
                <div className="text-xl text-coffee">
                    <Link href={'/'}>Home</Link >
                </div>
            </nav>
        </div>
    )
}

export default Navigation
