'use client'
import { useState, useEffect } from "react";
import { fetchCoffeeShop } from "@/api/coffee-shop";
import Card from "@/components/Card";
import Loading from "@/app/loading";

// define the TypeScript interface for coffee stores
interface CoffeeStore {
    fsq_id: string;
    name: string;
    description: string;
    photos: string;
    location: {
        formatted_address: string;
    };
}

const CoffeeStorePage = () => {
    const [coffeeStores, setCoffeeStores] = useState<CoffeeStore[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCoffeeStores = async () => {
            try {
                const results = await fetchCoffeeShop();
                setCoffeeStores(results);
            } catch (error) {
                console.error("Error fetching coffee stores:", error);
            } finally {
                setLoading(false);
            }
        };
        getCoffeeStores();
    }, []);

    return (
        <div className="mt-60">
            {loading &&
                <Loading />
            };
            {!loading && coffeeStores.length === 0 && <p>No coffee stores found.</p>}
            <div className="flex flex-col md:grid grid-rows-2 grid-flow-col gap-2">
                {coffeeStores.slice(0, 8).map((store) => (
                    <Card
                        key={store.fsq_id}
                        name={store.name}
                        description={store.description || "No description available"}
                        imageURL={store.photos}
                        href={`/store/${store.fsq_id}`}
                        fsq_id={store.fsq_id}
                    />
                ))}
            </div>
        </div >
    );
};

export default CoffeeStorePage;
