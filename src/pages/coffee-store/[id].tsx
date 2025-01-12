import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface CoffeeShop {
    id: string;
    name: string;
    description: string;
    photos: string;
    location: {
        formatted_address: string;
    };
}

const SingleCoffeePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState<CoffeeShop | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                console.log(`/api/coffee-store/${id}`);
                const response = await fetch(`/api/coffee-store/${id}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result: CoffeeShop = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No data found</p>;

    return (
        <div>
            <a href="/">Back to Home Page</a>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <Image width={200} height={200} src={data.photos} alt={data.name} />
            <p>Address: {data.location.formatted_address}</p>
        </div>
    );
};

export default SingleCoffeePage;
