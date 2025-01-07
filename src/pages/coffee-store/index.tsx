import { useState, useEffect } from "react";
import { fetchCoffeeShop } from "@/api/coffee-shop";
import Card from "@/components/Card";

// define the TypeScript interface for coffee stores
interface CoffeeStore {
    fsq_id: string;
    name: string;
    description: string;
    photos: string[];
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
        <div>
            <h1>Coffee Stores</h1>
            {loading && <p>Loading...</p>}
            {!loading && coffeeStores.length === 0 && <p>No coffee stores found.</p>}
            <div className="coffee-store-list grid grid-cols-4 gap-4">
                {coffeeStores.map((store) => (
                    <Card
                        key={store.fsq_id}
                        name={store.name}
                        description={store.description || "No description available"}
                        imageURL={store.photos[0] || 'https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_88.png'}
                        href={`/store/${store.fsq_id}`}
                        fsq_id={store.fsq_id}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoffeeStorePage;
