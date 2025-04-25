import { HeroSection } from "@/components/home/hero-section";
import { CategoriesSection } from "@/components/home/categories-section";
import { FeaturedSection } from "@/components/home/featured-section";
import { PromoBanner } from "@/components/home/promo-banner";
import { NewsletterSection } from "@/components/home/newsletter-section";

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
