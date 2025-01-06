import Link from "next/link"
import { useRouter } from "next/router"


const CoffeeStore = () => {
    const router = useRouter()

    console.log(router)
    return (
        <>
            <Link href={'/'}>Back to Home</Link>
            <div>{router.query.id}</div>
        </>
    )
}

export default CoffeeStore