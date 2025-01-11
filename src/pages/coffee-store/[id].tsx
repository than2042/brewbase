import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SingleCoffeePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            console.warn("No ID provided");
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`/api/coffee-store/[id]`);
                console.log("Response status:", response.status); // Debugging
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result = await response.json();
                console.log("Fetched coffee shop data:", result); // Debugging
                setData(result);
            } catch (err) {
                console.error("Error fetching coffee shop data:", err.message || err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id]);
    console.log(data, 'data')

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <a href="/">Back to Home Page</a>
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <img src={data.photos} alt={data.name} />
            <p>Address: {data.location.formatted_address}</p>
        </div>
    );
};

export default SingleCoffeePage;
