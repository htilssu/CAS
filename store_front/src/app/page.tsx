import { HeroSection } from "@/components/home/HeroSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { PromoBanner } from "@/components/home/PromoBanner";
import { NewsletterSection } from "@/components/home/NewsletterSection";

/**
 * Trang chủ của ứng dụng
 * @returns {JSX.Element} - Thành phần trang chủ được render
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <PromoBanner />
      <NewsletterSection />
    </>
  );
}
