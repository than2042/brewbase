
interface Photo {
    prefix: string;
    suffix: string;
}

export const fetchCoffeeShop = async () => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: process.env.FOURSQUARE_API,
        },
    };

    const response = await fetch(
        "https://api.foursquare.com/v3/places/search?query=coffee&ll=52.640889%2C1.1216884&limit=20", options
    );

    if (!response.ok) {
        throw new Error("Failed to fetch coffee stores");
    }

    const data = await response.json();
    console.log(data.results, 'data')

    return data.results.map((store: any) => ({
        fsq_id: store.fsq_id,
        name: store.name,
        description: store.location?.formatted_address || "No description available",
        photos: store.photos?.length
            ? store.photos.map((photo: Photo) => `${photo.prefix}original${photo.suffix}`)
            : store.categories?.[0]?.icon  // Using the icon from the first category
                ? [`${store.categories[0].icon.prefix}88${store.categories[0].icon.suffix}`]
                : [],
        location: {
            formatted_address: store.location?.formatted_address || "",
        },
    }));
};
