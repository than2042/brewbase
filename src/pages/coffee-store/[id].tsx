import Link from "next/link"
import { useRouter } from "next/router"
import Head from "next/head"


const CoffeeStore = () => {
    const router = useRouter()
    const queryId = router.query.id

    console.log(router)
    return (
        <>
            <Head><title>{queryId}</title></Head>
            <Link href={'/'}>Back to Home</Link>
            <div>{queryId}</div>
        </>
    )
}

export default CoffeeStore