"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List, Heart, Star } from "lucide-react";

export function DiscoverySection() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất Cả', count: 156 },
    { id: 'tech', name: 'Công Nghệ', count: 45 },
    { id: 'gaming', name: 'Gaming', count: 32 },
    { id: 'smart-home', name: 'Smart Home', count: 28 },
    { id: 'ai', name: 'AI & ML', count: 19 },
    { id: 'lifestyle', name: 'Lifestyle', count: 32 }
  ];

  const products = [
    {
      id: 1,
      name: "AI Smart Speaker Gen 4",
      price: "2,999,000",
      originalPrice: "3,499,000",
      rating: 4.8,
      reviews: 1247,
      image: "/api/placeholder/300/200",
      badges: ['AI-Powered', 'Best Seller'],
      category: 'ai'
    },
    {
      id: 2,
      name: "Gaming Headset Pro X",
      price: "1,599,000",
      rating: 4.9,
      reviews: 892,
      image: "/api/placeholder/300/200",
      badges: ['Gaming', 'New'],
      category: 'gaming'
    },
    {
      id: 3,
      name: "Smart Home Hub V3",
      price: "2,199,000",
      rating: 4.7,
      reviews: 654,
      image: "/api/placeholder/300/200",
      badges: ['IoT', 'Connected'],
      category: 'smart-home'
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      price: "899,000",
      originalPrice: "1,199,000",
      rating: 4.6,
      reviews: 423,
      image: "/api/placeholder/300/200",
      badges: ['Wireless', 'Fast Charge'],
      category: 'tech'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Khám Phá & Tìm Kiếm
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Công cụ tìm kiếm thông minh với AI giúp bạn tìm được sản phẩm hoàn hảo
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm, thương hiệu, hoặc danh mục..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none text-lg"
              />
            </div>

            {/* Filter Button */}
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300">
              <Filter className="w-5 h-5 mr-2" />
              Bộ Lọc
            </Button>

            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-2xl p-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  viewMode === 'grid' ? 'bg-white shadow-md text-purple-600' : 'text-gray-500'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all duration-200 ${
                  viewMode === 'list' ? 'bg-white shadow-md text-purple-600' : 'text-gray-500'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-lg'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:shadow-md'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {product.badges.map((badge, index) => (
                      <Badge key={index} className="bg-white/90 text-gray-800 border-0">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-medium text-gray-700">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} đánh giá)</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      {product.price}₫
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {product.originalPrice}₫
                      </span>
                    )}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300">
                    Thêm Vào Giỏ
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-12 py-4 rounded-2xl text-lg font-semibold"
          >
            Xem Thêm Sản Phẩm
          </Button>
        </div>
      </div>
    </section>
  );
}