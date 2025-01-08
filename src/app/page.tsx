import Banner from '../components/Banner'
import CoffeeStorePage from '@/pages/coffee-store';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Banner />
      <CoffeeStorePage />
    </div>
  );
}
