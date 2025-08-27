"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users, ArrowRight } from "lucide-react";

export function TrendingNowSection() {
  const [activeTab, setActiveTab] = useState<'trending' | 'recent' | 'popular'>('trending');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const trendingItems = [
    {
      id: 1,
      type: 'product',
      title: "iPhone 15 Pro Max chính thức ra mắt",
      subtitle: "Chip A17 Pro và camera titanium mới",
      trend: "+45%",
      engagement: "2.3K",
      time: "2 giờ trước",
      category: "Tech News",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      type: 'review',
      title: "Review chi tiết Samsung Galaxy S24 Ultra",
      subtitle: "Camera AI và màn hình 200Hz ấn tượng",
      trend: "+32%",
      engagement: "1.8K",
      time: "4 giờ trước",
      category: "Review",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      type: 'deal',
      title: "Flash Sale 70% - MacBook Air M3",
      subtitle: "Chỉ còn 2 giờ nữa kết thúc",
      trend: "+89%",
      engagement: "5.2K",
      time: "30 phút trước",
      category: "Flash Sale",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      type: 'launch',
      title: "Tesla Model Y giảm giá 200 triệu",
      subtitle: "Cơ hội sở hữu xe điện premium",
      trend: "+67%",
      engagement: "3.7K",
      time: "1 giờ trước",
      category: "Auto",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      type: 'tech',
      title: "AI ChatGPT-5 sắp ra mắt với khả năng mới",
      subtitle: "Xử lý hình ảnh và video realtime",
      trend: "+124%",
      engagement: "8.9K",
      time: "3 giờ trước",
      category: "AI News",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      type: 'gaming',
      title: "PS5 Pro chính thức công bố",
      subtitle: "Hiệu năng gấp đôi, hỗ trợ 8K gaming",
      trend: "+78%",
      engagement: "4.1K",
      time: "5 giờ trước",
      category: "Gaming",
      image: "/api/placeholder/400/250"
    }
  ];

  const tabs = [
    { id: 'trending', name: 'Trending', icon: TrendingUp },
    { id: 'recent', name: 'Mới Nhất', icon: Clock },
    { id: 'popular', name: 'Phổ Biến', icon: Users }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Trending Now
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Theo dõi xu hướng công nghệ mới nhất và những sản phẩm hot nhất hiện tại
          </p>
          
          {/* Live Time */}
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Cập nhật lúc {currentTime.toLocaleTimeString('vi-VN')}
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'trending' | 'recent' | 'popular')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-purple-600 shadow-lg'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trendingItems.map((item) => (
            <Card key={item.id} className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-500 rounded-3xl overflow-hidden">
              <div className="relative">
                {/* Image */}
                <div className="aspect-[16/10] bg-gradient-to-br from-purple-600/20 to-blue-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <Badge className="absolute top-4 left-4 bg-purple-600/90 text-white border-0">
                    {item.category}
                  </Badge>
                  
                  {/* Trending Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-bold">{item.trend}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-white group-hover:text-purple-300 transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {item.subtitle}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {item.engagement}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.time}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl hover:shadow-lg transition-all duration-300 group">
                    Xem Chi Tiết
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Real-time Updates */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">
              Đang cập nhật realtime - {trendingItems.length} xu hướng mới
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}