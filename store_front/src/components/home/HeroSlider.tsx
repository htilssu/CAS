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
    <section className="relative overflow-hidden rounded-3xl mx-4 md:mx-8 mb-8 shadow-2xl">
      {/* Control buttons */}
      <button
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-lg transition-all hover:bg-white/30 hover:scale-110 shadow-lg border border-white/20"
        onClick={prevSlide}
        aria-label="Slide trước"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur-lg transition-all hover:bg-white/30 hover:scale-110 shadow-lg border border-white/20"
        onClick={nextSlide}
        aria-label="Slide tiếp theo"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 space-x-3">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-10 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-white shadow-lg scale-110" 
                : "bg-white/50 hover:bg-white/70"
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
            } relative h-[600px] w-full transition-all duration-700 ease-out`}
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
              <div className="container px-8 md:px-12">
                <div className="max-w-2xl space-y-6 text-white">
                  <h1 className="text-5xl font-black tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button size="lg" variant="gradient" asChild className="font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
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
            } relative aspect-[4/5] w-full transition-all duration-700 ease-out`}
          >
            <Image
              src={slide.mobileImage}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-end justify-center pb-20">
              <div className="container px-6 text-center">
                <div className="mx-auto space-y-4 text-white">
                  <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-white/90 font-medium">{slide.subtitle}</p>
                  <div className="mt-8 flex flex-col gap-3 pt-2">
                    <Button variant="gradient" asChild className="font-bold rounded-2xl">
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
