"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Eye, Heart, Share2, BookOpen } from "lucide-react";

export function CuratedCollections() {
  const [activeCollection, setActiveCollection] = useState(0);

  const collections = [
    {
      id: 1,
      title: "Future Tech 2024",
      subtitle: "Những công nghệ định hình tương lai",
      description: "Khám phá các sản phẩm công nghệ tiên tiến nhất năm 2024",
      curator: "Tech Insider",
      items: 12,
      views: "45K",
      likes: "3.2K",
      theme: "from-cyan-600 to-blue-600",
      featured: true,
      products: [
        { name: "AI Smart Glasses", price: "15,999,000", image: "/api/placeholder/200/200" },
        { name: "Holographic Display", price: "89,999,000", image: "/api/placeholder/200/200" },
        { name: "Neural Interface", price: "12,999,000", image: "/api/placeholder/200/200" },
        { name: "Quantum Computer", price: "599,999,000", image: "/api/placeholder/200/200" }
      ]
    },
    {
      id: 2,
      title: "Smart Living Essentials",
      subtitle: "Ngôi nhà thông minh hoàn hảo",
      description: "Biến đổi không gian sống với công nghệ IoT hiện đại",
      curator: "Home Tech Pro",
      items: 8,
      views: "32K",
      likes: "2.8K",
      theme: "from-green-600 to-emerald-600",
      featured: false,
      products: [
        { name: "Smart Thermostat", price: "3,999,000", image: "/api/placeholder/200/200" },
        { name: "AI Security Camera", price: "2,799,000", image: "/api/placeholder/200/200" },
        { name: "Voice Assistant Hub", price: "1,999,000", image: "/api/placeholder/200/200" },
        { name: "Smart Lighting Kit", price: "4,999,000", image: "/api/placeholder/200/200" }
      ]
    },
    {
      id: 3,
      title: "Gaming Universe",
      subtitle: "Trải nghiệm gaming đỉnh cao",
      description: "Trang bị gaming setup chuyên nghiệp cho mọi game thủ",
      curator: "Gaming Master",
      items: 15,
      views: "67K",
      likes: "5.1K",
      theme: "from-purple-600 to-pink-600",
      featured: true,
      products: [
        { name: "RTX 4090 Graphics Card", price: "45,999,000", image: "/api/placeholder/200/200" },
        { name: "Gaming Mechanical Keyboard", price: "5,999,000", image: "/api/placeholder/200/200" },
        { name: "Ultra-wide Gaming Monitor", price: "18,999,000", image: "/api/placeholder/200/200" },
        { name: "Pro Gaming Chair", price: "8,999,000", image: "/api/placeholder/200/200" }
      ]
    },
    {
      id: 4,
      title: "Content Creator Studio",
      subtitle: "Bộ kit creator chuyên nghiệp",
      description: "Tất cả những gì bạn cần để tạo content chất lượng cao",
      curator: "Creator Hub",
      items: 10,
      views: "28K",
      likes: "2.1K",
      theme: "from-orange-600 to-red-600",
      featured: false,
      products: [
        { name: "4K Studio Camera", price: "25,999,000", image: "/api/placeholder/200/200" },
        { name: "Professional Microphone", price: "7,999,000", image: "/api/placeholder/200/200" },
        { name: "LED Ring Light", price: "2,999,000", image: "/api/placeholder/200/200" },
        { name: "Video Editing Workstation", price: "89,999,000", image: "/api/placeholder/200/200" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-purple-600" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Bộ Sưu Tập Được Chọn Lọc
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những bộ sưu tập sản phẩm được tuyển chọn kỹ lưỡng bởi các chuyên gia
          </p>
        </div>

        {/* Collection Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {collections.map((collection, index) => (
            <button
              key={collection.id}
              onClick={() => setActiveCollection(index)}
              className={`relative px-6 py-3 rounded-2xl transition-all duration-300 ${
                activeCollection === index
                  ? `bg-gradient-to-r ${collection.theme} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300 hover:shadow-md'
              }`}
            >
              {collection.featured && (
                <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-2 py-1">
                  Featured
                </Badge>
              )}
              <span className="font-semibold">{collection.title}</span>
              <span className="ml-2 text-sm opacity-75">({collection.items} items)</span>
            </button>
          ))}
        </div>

        {/* Active Collection */}
        {collections.map((collection, index) => (
          <div
            key={collection.id}
            className={`transition-all duration-500 ${
              activeCollection === index ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            {/* Collection Header */}
            <Card className="p-8 mb-8 bg-gradient-to-r from-white to-gray-50 border-0 shadow-2xl rounded-3xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${collection.theme} bg-clip-text text-transparent`}>
                      {collection.title}
                    </h3>
                    {collection.featured && (
                      <Badge className="bg-yellow-500 text-white">
                        Nổi Bật
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-2xl text-gray-700 mb-3 font-medium">
                    {collection.subtitle}
                  </p>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {collection.description}
                  </p>
                  
                  <div className="flex items-center gap-6 text-gray-500">
                    <span className="flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      {collection.views} lượt xem
                    </span>
                    <span className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      {collection.likes} yêu thích
                    </span>
                    <span className="font-medium">
                      Curated by {collection.curator}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className={`bg-gradient-to-r ${collection.theme} text-white px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300`}>
                    Xem Toàn Bộ
                  </Button>
                  <Button variant="outline" className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-4 rounded-2xl">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {collection.products.map((product, productIndex) => (
                <Card key={productIndex} className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl">
                  <div className="relative">
                    {/* Product Image */}
                    <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${collection.theme} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      
                      {productIndex === 0 && (
                        <Badge className="absolute top-4 left-4 bg-yellow-500 text-white">
                          Bestseller
                        </Badge>
                      )}
                      
                      <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200 opacity-0 group-hover:opacity-100">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-6">
                      <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                        {product.name}
                      </h4>
                      
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-purple-600">
                          {product.price}₫
                        </span>
                      </div>
                      
                      <Button className={`w-full bg-gradient-to-r ${collection.theme} text-white rounded-2xl hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}>
                        Thêm Vào Giỏ
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Collection Actions */}
            <div className="text-center">
              <Button 
                size="lg"
                className={`bg-gradient-to-r ${collection.theme} text-white px-12 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 text-lg font-semibold`}
              >
                Khám Phá Toàn Bộ Bộ Sưu Tập
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}