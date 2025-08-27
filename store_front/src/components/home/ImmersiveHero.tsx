"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, TrendingUp } from "lucide-react";

export function ImmersiveHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Khám Phá Thế Giới Công Nghệ",
      subtitle: "Trải nghiệm mua sắm hoàn toàn mới",
      description: "Từ AI đến IoT, từ Gaming đến Lifestyle",
      cta: "Bắt Đầu Khám Phá",
      background: "from-purple-600 via-pink-600 to-blue-600",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Công Nghệ Thông Minh",
      subtitle: "Cho cuộc sống hiện đại",
      description: "Smart Home, AI Assistant, và nhiều hơn nữa",
      cta: "Xem Sản Phẩm",
      background: "from-blue-600 via-purple-600 to-cyan-600",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            {slides[currentSlide].icon}
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-2xl md:text-3xl mb-3 font-light text-white/90">
          {slides[currentSlide].subtitle}
        </p>
        
        <p className="text-lg md:text-xl mb-8 text-white/70 max-w-2xl mx-auto">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full"
          >
            {slides[currentSlide].cta}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 text-lg rounded-full"
          >
            Xem Video
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Cuộn xuống để khám phá</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}