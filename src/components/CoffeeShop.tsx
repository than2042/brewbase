"use client"
import { useEffect, useState } from "react";
import { fetchCoffeeShop } from "@/utils/fetchCoffeeShop";
import Link from "next/link";
import Image from "next/image";


// import Card from "./Card";

interface CoffeeStore {
    id: string;
    name: string;
    description: string;
    photos: string;
    location: {
        formatted_address: string;
    };
}

const CoffeeShop = () => {
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

    if (loading) return <div>Loading...</div>;
    if (!coffeeStores.length) return <div>No coffee stores found</div>;

    return (
        <div className="flex gap-6 mt-40">
            {coffeeStores.slice(0, 4).map((store) => (
                <Link key={store.id} href={`/coffee-store/${store.id}`} id={store.id}>
                    <h1>{store.name}</h1>
                    <Image width={200} height={200} src={store.photos} alt={store.name} />
                </Link>

            ))}
        </div>
    );
};

export default CoffeeShop;
