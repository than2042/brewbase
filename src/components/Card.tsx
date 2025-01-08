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
        <div className="cardContainer" >
            <Link href={href} className="flex flex-col gap-2">
                <h1>{name}</h1>
                <p>{description}</p>
                <Image
                    width={300}
                    height={200}
                    style={{
                        objectFit: "cover",
                        borderRadius: "20px",
                    }}
                    className="rounded" alt={name} src={imageURL} />
            </Link>
        </div>
    )
}

export default Card
