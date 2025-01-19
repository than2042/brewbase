'use client'
import { useState, useEffect } from "react";
import { fetchCoffeeShop } from "@/utils/fetchCoffeeShop";
import Card from "@/components/Card";
import Loading from "@/app/loading";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import styles from './coffee.module.css'

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
        <div>
            {loading && <Loading />}
            {!loading && coffeeStores.length === 0 && <p>No coffee stores found.</p>}
            {!loading && coffeeStores.length > 0 && (
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    className={styles.swiperWrapper}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={4} // the number of cards visible at once
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
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
