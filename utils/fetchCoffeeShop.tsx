import { unsplash } from "../src/app/api/unsplash/route";

const getCoffeeImage = async () => {
    const photos = await unsplash.search.getPhotos({
        query: "coffee shop",
        page: 1,
        perPage: 20,
    });

    const photoResults = photos.response?.results || [];
    const desiredHeight = 300;
    const imageUrls = photoResults.map((result) => {
        const rawUrl = result.urls.raw; // use raw URL for transformation
        return `${rawUrl}&h=${desiredHeight}&fit=crop&q=80`; // add height and fit parameters
    });
    return imageUrls.length ? imageUrls : ["https://via.placeholder.com/150"];
};

export const fetchCoffeeShop = async () => {
    const images = await getCoffeeImage()

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API || "",
        },
    };

    const response = await fetch(
        "https://api.foursquare.com/v3/places/search?query=coffee&ll=52.640889%2C1.1216884&limit=20", options
    );

    if (!response.ok) {
        throw new Error("Failed to fetch coffee stores");
    }

    const data = await response.json();

    return data.results.map((store: any, index: number) => ({
        id: store.fsq_id,
        name: store.name,
        description: store.location?.formatted_address || "No description available",
        photos: images[index],
        location: {
            formatted_address: store.location?.formatted_address || "",
        },
    }));
};
