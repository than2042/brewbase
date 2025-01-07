import { unsplash } from "./unsplash";

const getCoffeeImage = async () => {
    const photos = await unsplash.search.getPhotos({
        query: "coffee shop",
        page: 1,
        perPage: 20,
    });

    const photoResults = photos.response?.results || [];
    const imageUrls = photoResults.map((result) => result.urls["small"]);

    console.log("Unsplash image URLs:", imageUrls); // Debugging log

    return imageUrls.length ? imageUrls : ["https://via.placeholder.com/150"];
};


export const fetchCoffeeShop = async () => {
    const images = await getCoffeeImage()
    console.log(images)

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API || "",
        },
    };
    console.log("Foursquare API Key:", process.env.FOURSQUARE_API);

    const response = await fetch(
        "https://api.foursquare.com/v3/places/search?query=coffee&ll=52.640889%2C1.1216884&limit=20", options
    );

    if (!response.ok) {
        throw new Error("Failed to fetch coffee stores");
    }

    const data = await response.json();
    console.log(data.results, 'data')

    return data.results.map((store: any, index: number) => ({
        ...store,
        fsq_id: store.fsq_id,
        name: store.name,
        description: store.location?.formatted_address || "No description available",
        photos: images[index],
        location: {
            formatted_address: store.location?.formatted_address || "",
        },
    }));
};
