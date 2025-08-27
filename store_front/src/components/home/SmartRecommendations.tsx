"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Target, ArrowRight, Star, ThumbsUp } from "lucide-react";

export function SmartRecommendations() {
  const [selectedPersona, setSelectedPersona] = useState<'gamer' | 'creator' | 'professional' | 'student'>('gamer');

  const personas = [
    {
      id: 'gamer',
      name: 'Game Thủ',
      icon: <Zap className="w-6 h-6" />,
      description: 'Hiệu suất cao cho gaming',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'creator',
      name: 'Content Creator',
      icon: <Sparkles className="w-6 h-6" />,
      description: 'Công cụ sáng tạo chuyên nghiệp',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'professional',
      name: 'Chuyên Gia',
      icon: <Target className="w-6 h-6" />,
      description: 'Năng suất làm việc tối đa',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'student',
      name: 'Sinh Viên',
      icon: <Star className="w-6 h-6" />,
      description: 'Học tập hiệu quả, giá cả hợp lý',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const recommendations = {
    gamer: [
      {
        id: 1,
        name: "Gaming Setup Pro Max",
        description: "RTX 4090 + i9-13900K + 32GB RAM",
        price: "89,999,000",
        originalPrice: "99,999,000",
        aiScore: 98,
        matchReason: "Phù hợp 98% với nhu cầu gaming của bạn",
        features: ["Ray Tracing Ultra", "4K 144Hz", "VR Ready"],
        image: "/api/placeholder/300/200",
        badge: "AI Choice"
      },
      {
        id: 2,
        name: "Mechanical Gaming Keyboard RGB",
        description: "Switch Cherry MX Blue, Full RGB",
        price: "3,999,000",
        aiScore: 95,
        matchReason: "Tốc độ phản hồi phù hợp game FPS",
        features: ["0.1ms Response", "N-Key Rollover", "RGB Backlit"],
        image: "/api/placeholder/300/200",
        badge: "Trending"
      },
      {
        id: 3,
        name: "Gaming Headset 7.1 Surround",
        description: "Audio 3D, Microphone chống ồn",
        price: "2,999,000",
        aiScore: 92,
        matchReason: "Âm thanh vòm hoàn hảo cho game",
        features: ["7.1 Surround", "Noise Cancelling", "RGB LED"],
        image: "/api/placeholder/300/200",
        badge: "Popular"
      }
    ],
    creator: [
      {
        id: 1,
        name: "MacBook Pro M3 Max 16-inch",
        description: "Chip M3 Max, 64GB RAM, 2TB SSD",
        price: "125,999,000",
        aiScore: 97,
        matchReason: "Hiệu năng render video tuyệt vời",
        features: ["M3 Max Chip", "64GB Unified Memory", "ProRes Support"],
        image: "/api/placeholder/300/200",
        badge: "AI Choice"
      },
      {
        id: 2,
        name: "Sony FX3 Cinema Camera",
        description: "Full-frame 4K, S-Log3, Dual ISO",
        price: "89,999,000",
        aiScore: 94,
        matchReason: "Chất lượng video chuyên nghiệp",
        features: ["4K 120fps", "S-Log3", "Dual Base ISO"],
        image: "/api/placeholder/300/200",
        badge: "Pro"
      },
      {
        id: 3,
        name: "Adobe Creative Cloud Suite",
        description: "Photoshop, Premiere, After Effects",
        price: "599,000",
        aiScore: 96,
        matchReason: "Bộ công cụ sáng tạo hoàn chỉnh",
        features: ["Cloud Sync", "AI Features", "Collaboration"],
        image: "/api/placeholder/300/200",
        badge: "Essential"
      }
    ],
    professional: [
      {
        id: 1,
        name: "ThinkPad X1 Carbon Gen 11",
        description: "i7-1365U, 32GB RAM, 1TB SSD",
        price: "45,999,000",
        aiScore: 96,
        matchReason: "Bảo mật và độ tin cậy cao",
        features: ["Business Grade", "14h Battery", "5G Ready"],
        image: "/api/placeholder/300/200",
        badge: "AI Choice"
      },
      {
        id: 2,
        name: "Dell UltraSharp 32\" 4K",
        description: "IPS, 99% sRGB, USB-C Hub",
        price: "18,999,000",
        aiScore: 93,
        matchReason: "Màn hình chuyên nghiệp cho công việc",
        features: ["4K IPS", "99% sRGB", "USB-C Hub"],
        image: "/api/placeholder/300/200",
        badge: "Business"
      },
      {
        id: 3,
        name: "Microsoft Surface Studio 2+",
        description: "Màn hình cảm ứng 28\", i7-11370H",
        price: "119,999,000",
        aiScore: 91,
        matchReason: "Hoàn hảo cho thiết kế và thuyết trình",
        features: ["28\" Touchscreen", "Surface Pen", "Zero Gravity Hinge"],
        image: "/api/placeholder/300/200",
        badge: "Innovation"
      }
    ],
    student: [
      {
        id: 1,
        name: "MacBook Air M2 13-inch",
        description: "Chip M2, 16GB RAM, 512GB SSD",
        price: "31,999,000",
        originalPrice: "35,999,000",
        aiScore: 95,
        matchReason: "Hiệu năng tốt, pin lâu, giá hợp lý",
        features: ["M2 Chip", "18h Battery", "Lightweight"],
        image: "/api/placeholder/300/200",
        badge: "Student Choice"
      },
      {
        id: 2,
        name: "iPad Air 5th Gen + Apple Pencil",
        description: "M1 Chip, 256GB, Wi-Fi + Cellular",
        price: "18,999,000",
        aiScore: 92,
        matchReason: "Ghi chú và học tập linh hoạt",
        features: ["M1 Chip", "Apple Pencil 2", "All-day Battery"],
        image: "/api/placeholder/300/200",
        badge: "Study"
      },
      {
        id: 3,
        name: "Student Software Bundle",
        description: "Office 365, Adobe CC, Windows 11",
        price: "2,999,000",
        aiScore: 98,
        matchReason: "Bộ phần mềm học tập hoàn chỉnh",
        features: ["Office 365", "Adobe Student", "Windows 11 Pro"],
        image: "/api/placeholder/300/200",
        badge: "Essential"
      }
    ]
  };

  const currentRecommendations = recommendations[selectedPersona];
  const currentPersona = personas.find(p => p.id === selectedPersona);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Gợi Ý Thông Minh
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI phân tích nhu cầu và đề xuất sản phẩm phù hợp nhất cho bạn
          </p>
          
          {/* AI Badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full px-6 py-3 border border-purple-200">
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-purple-700">
              Powered by AI Machine Learning
            </span>
          </div>
        </div>

        {/* Persona Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {personas.map((persona) => (
            <button
              key={persona.id}
              onClick={() => setSelectedPersona(persona.id as 'gamer' | 'creator' | 'professional' | 'student')}
              className={`p-6 rounded-3xl border-2 transition-all duration-300 ${
                selectedPersona === persona.id
                  ? `bg-gradient-to-r ${persona.color} text-white border-transparent shadow-xl scale-105`
                  : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:shadow-lg'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">
                  {persona.icon}
                </div>
                <h3 className="font-bold text-lg mb-1">{persona.name}</h3>
                <p className={`text-sm ${
                  selectedPersona === persona.id ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {persona.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* AI Analysis */}
        <Card className="p-8 mb-12 bg-gradient-to-r from-white to-gray-50 border-0 shadow-2xl rounded-3xl">
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 bg-gradient-to-r ${currentPersona?.color} rounded-2xl text-white`}>
              {currentPersona?.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Phân Tích AI cho {currentPersona?.name}
              </h3>
              <p className="text-gray-600">{currentPersona?.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <ThumbsUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">Độ Phù Hợp</span>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
              <p className="text-sm text-gray-600">Dựa trên hành vi mua sắm</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Sản Phẩm Phù Hợp</span>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{currentRecommendations.length}</div>
              <p className="text-sm text-gray-600">Được AI tuyển chọn</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Điểm AI</span>
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">
                {Math.max(...currentRecommendations.map(r => r.aiScore))}
              </div>
              <p className="text-sm text-gray-600">Độ chính xác cao nhất</p>
            </div>
          </div>
        </Card>

        {/* Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {currentRecommendations.map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="relative">
                {/* AI Score Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className={`bg-gradient-to-r ${currentPersona?.color} text-white border-0`}>
                    {product.badge}
                  </Badge>
                </div>
                
                {/* AI Score */}
                <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 border border-gray-200">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-bold text-purple-600">{product.aiScore}%</span>
                  </div>
                </div>

                {/* Product Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentPersona?.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-3">
                    {product.description}
                  </p>
                  
                  {/* AI Match */}
                  <div className="bg-purple-50 rounded-2xl p-3 mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">AI Phân Tích</span>
                    </div>
                    <p className="text-sm text-purple-600">{product.matchReason}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      {product.price}₫
                    </span>
                    {'originalPrice' in product && product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        {product.originalPrice}₫
                      </span>
                    )}
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${currentPersona?.color} text-white rounded-2xl hover:shadow-lg transition-all duration-300`}>
                    Thêm Vào Giỏ
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* See More */}
        <div className="text-center">
          <Button 
            size="lg"
            className={`bg-gradient-to-r ${currentPersona?.color} text-white px-12 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 text-lg font-semibold`}
          >
            Xem Thêm Gợi Ý AI
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}