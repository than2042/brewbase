"use client"
import { useEffect, useState } from "react";
import { fetchCoffeeShop } from "@/utils/fetchCoffeeShop";
import Link from "next/link";
import Image from "next/image";

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
        <div className="flex justify-center gap-6 mt-40 mx-auto w-10/12 ">
            {coffeeStores.slice(0, 4).map((store) => (
                <Link className="bg-gradient-to-r from-blue-500 to-transparent rounded" key={store.id} href={`/coffee-store/${store.id}`} id={store.id}>
                    <h1 className="text-xl font-bold m-3 text-white">{store.name}</h1>
                    <Image className="rounded" width={400} height={300} src={store.photos} alt={store.name} />
                </Link>

            ))}
        </div>
    );
};

export default CoffeeShop;
