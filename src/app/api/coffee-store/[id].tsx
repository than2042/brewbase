import { NextApiRequest, NextApiResponse } from "next";
import { fetchCoffeeShop } from "@/app/api/coffee-store/route";

interface CoffeeStore {
    id: string;
    name: string;
    description: string;
    photos: string;
    location: {
        formatted_address: string;
    };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id || Array.isArray(id)) {
        return res.status(400).json({ error: "Invalid id parameter" });
    }

    try {
        const coffeeShops: CoffeeStore[] = await fetchCoffeeShop();
        console.log("Fetched coffee shops:", coffeeShops); // Debug all coffee shops

        const coffeeStore = coffeeShops.find((store) => store.id === id.trim());
        console.log("Coffee store with id:", id, coffeeStore); // Debug specific store

        if (!coffeeStore) {
            return res.status(404).json({ error: "Coffee store not found" });
        }

        res.status(200).json(coffeeStore);
    } catch (error) {
        console.error("Error fetching coffee store:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

