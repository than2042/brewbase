import Image from "next/image"
import Link from "next/link"

interface Cardprops {
    name: string,
    description: string,
    imageURL: string,
    href: string,
    fsq_id: string,

}

const Card: React.FC<Cardprops> = ({ name, description, imageURL, href }) => {

    return (
        <div className="grid-cols-4 mt-48">
            <div className="cardContainer" >
                <Link href={href}>
                    <div className="flex flex-col gap-2">
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <Image width={"200"} height={"200"} className="rounded" alt={name} src={imageURL} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Card
