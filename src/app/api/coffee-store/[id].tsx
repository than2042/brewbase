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

    if (Array.isArray(id)) {
        return res.status(400).json({ error: "Invalid id parameter" });
    }

    try {
        const coffeeShops = await fetchCoffeeShop();
        console.log("Fetched coffee shops:", coffeeShops);

        const coffeeStore = coffeeShops.find(
            (store: CoffeeStore) => store.id === id?.trim()
        );
        console.log("Single coffee shop:", coffeeStore);

        if (!coffeeStore) {
            console.error("No coffee store found for id:", id);
            return res.status(404).json({ error: "Coffee store not found" });
        }

        res.status(200).json({ results: coffeeStore });
    } catch (error) {
        console.error("Error in single coffee store route:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
