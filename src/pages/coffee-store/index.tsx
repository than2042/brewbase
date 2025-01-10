'use client'
import { useState, useEffect } from "react";
import { fetchCoffeeShop } from "@/app/api/coffee-store/route";
import Card from "@/components/Card";
import Loading from "@/app/loading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Define the TypeScript interface for coffee stores
interface CoffeeStore {
    id: string;
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
            {loading && <Loading />}
            {!loading && coffeeStores.length === 0 && <p>No coffee stores found.</p>}
            {!loading && coffeeStores.length > 0 && (
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={4} // Adjust for the number of cards visible at once
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {coffeeStores.map((store) => (
                        <SwiperSlide key={store.id}>
                            <Card
                                name={store.name}
                                description={store.description || "No description available"}
                                imageURL={store.photos}
                                href={`/coffee-store/${store.id}`}
                                fsq_id={store.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default CoffeeStorePage;
