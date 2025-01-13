import { NextApiRequest, NextApiResponse } from "next";
import { fetchCoffeeShop } from "../../../../utils/fetchCoffeeShop";

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

    const idString = Array.isArray(id) ? id[0] : id;

    if (!idString) {
        console.error("Missing ID");
        return res.status(400).json({ message: "Missing coffee shop ID" });
    }

    try {
        const coffeeShops: CoffeeStore[] = await fetchCoffeeShop();
        console.log("Fetched coffee shops:", coffeeShops); // Debug

        const coffeeShop = coffeeShops.find((shop) => shop.id === idString);
        console.log("Filtered coffee shop:", coffeeShop); // Debug

        if (!coffeeShop) {
            return res.status(404).json({ message: "Coffee shop not found" });
        }

        res.status(200).json(coffeeShop);
    } catch (error: any) {
        console.error("Error fetching coffee shop:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
