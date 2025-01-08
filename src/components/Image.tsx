import Link from 'next/link'

interface ImageProps {
    imageURL: string,
    href: string,
    name: string,
}
const Image: React.FC<ImageProps> = ({ imageURL, href, name }) => {
    return (
        <>
            <Link href={href}>
                <Image className="rounded" alt={name} src={imageURL} />
            </Link>
        </>
    )
}

export default Image
