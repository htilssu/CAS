import { Hero } from "@/components/sections/Hero";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Categories } from "@/components/sections/Categories";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <Newsletter />
    </div>
  );
}