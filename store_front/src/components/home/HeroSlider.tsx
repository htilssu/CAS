"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Dữ liệu slider cho banner chính
 */
const sliderData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1600&auto=format&fit=crop&q=80",
    mobileImage:
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800&auto=format&fit=crop&q=80",
    title: "Siêu sale tháng 11",
    subtitle: "Giảm đến 70% hàng nghìn sản phẩm",
    buttonText: "Mua ngay",
    buttonLink: "/products?sort=price-asc",
    color:
      "bg-gradient-to-r from-orange-900/70 via-orange-800/60 to-transparent",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=1600&auto=format&fit=crop&q=80",
    mobileImage:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&auto=format&fit=crop&q=80",
    title: "Thiết bị điện tử mới nhất",
    subtitle: "Khám phá các sản phẩm công nghệ hiện đại",
    buttonText: "Khám phá",
    buttonLink: "/products?type=điện tử",
    color: "bg-gradient-to-r from-slate-900/70 via-slate-800/60 to-transparent",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?w=1600&auto=format&fit=crop&q=80",
    mobileImage:
      "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?w=800&auto=format&fit=crop&q=80",
    title: "Chăm sóc sức khỏe và sắc đẹp",
    subtitle: "Sản phẩm mỹ phẩm và chăm sóc cá nhân chất lượng cao",
    buttonText: "Xem sản phẩm",
    buttonLink: "/products?type=mỹ phẩm",
    color:
      "bg-gradient-to-r from-purple-900/70 via-purple-800/60 to-transparent",
  },
];

/**
 * Thành phần hiển thị slider banner chính trên trang chủ
 * @returns {JSX.Element} - Thành phần HeroSlider được render
 */
export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  // Tự động chuyển slide sau mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  // Chuyển đến slide trước đó
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Chuyển đến slide tiếp theo
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Control buttons */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50"
        onClick={prevSlide}
        aria-label="Slide trước"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/50"
        onClick={nextSlide}
        aria-label="Slide tiếp theo"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Chuyển đến slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides - Desktop */}
      <div className="hidden md:block">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`${
              index === current ? "block" : "hidden"
            } relative h-[500px] w-full transition-all duration-500 ease-in-out`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            <div className={`absolute inset-0 ${slide.color}`} />
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="container px-4">
                <div className="max-w-lg space-y-4 text-white">
                  <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="text-base md:text-lg">{slide.subtitle}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button size="lg" variant="primary" asChild>
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slides - Mobile */}
      <div className="md:hidden">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`${
              index === current ? "block" : "hidden"
            } relative aspect-[4/5] w-full transition-all duration-500 ease-in-out`}
          >
            <Image
              src={slide.mobileImage}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <div className="container px-4 text-center">
                <div className="mx-auto space-y-4 text-white">
                  <h1 className="text-3xl font-bold tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-sm">{slide.subtitle}</p>
                  <div className="mt-8 flex flex-col gap-3 pt-2">
                    <Button variant="primary" asChild>
                      <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
