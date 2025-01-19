import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { fetchCoffeeShop } from "@/utils/fetchCoffeeShop";
import Loading from "@/app/loading";

interface CoffeeShop {
    id: string;
    name: string;
    description: string;
    photos: string;
    location: {
        formatted_address: string;
    };
}

// Fetch all coffee shops to generate paths
export const getStaticPaths: GetStaticPaths = async () => {
    const coffeeShops = await fetchCoffeeShop();

    const paths = coffeeShops.map((coffee: CoffeeShop) => ({
        params: { id: coffee.id.toString() },
    }));

    return {
        paths,
        fallback: true, // Enable fallback for non-prebuilt pages
    };
};

// Fetch data for a specific coffee shop
export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params!;

    const coffeeShops = await fetchCoffeeShop();
    const coffeeStore = coffeeShops.find(
        (coffee: CoffeeShop) => coffee.id.toString() === id
    );

    if (!coffeeStore) {
        return { notFound: true };
    }

    return {
        props: {
            coffeeStore,
        },
    };
};

const SingleCoffeePage = ({ coffeeStore }: { coffeeStore: CoffeeShop }) => {
    const router = useRouter();

    // Fallback loading state for non-prebuilt pages
    if (router.isFallback) {
        return <Loading />;
    }

    return (
        <div>
            <a href="/">Back to Home Page</a>
            <h1>{coffeeStore.name}</h1>
            <p>{coffeeStore.description}</p>
            <Image
                width={200}
                height={200}
                src={coffeeStore.photos}
                alt={coffeeStore.name}
            />
            <p>Address: {coffeeStore.location.formatted_address}</p>
        </div>
    );
};

export default SingleCoffeePage;
