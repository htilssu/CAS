"use client";

import { Button } from "@/components/ui/button";

export function MinimalistFooter() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SF</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                StoreFront
              </span>
            </div>
            
            <p className="text-lg text-gray-300 mb-6 max-w-md">
              Trải nghiệm mua sắm công nghệ thông minh với AI và thiết kế hiện đại. 
              Nơi tương lai công nghệ bắt đầu.
            </p>
            
            <div className="flex gap-4">
              <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-2xl">
                Tải App
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 rounded-2xl">
                Liên Hệ
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Liên Kết</h4>
            <ul className="space-y-3">
              {['Về Chúng Tôi', 'Sản Phẩm', 'Dịch Vụ', 'Blog', 'Hỗ Trợ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Liên Hệ</h4>
            <ul className="space-y-3 text-gray-300">
              <li>contact@storefront.vn</li>
              <li>+84 123 456 789</li>
              <li>Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 StoreFront. Thiết kế với ❤️ tại Việt Nam.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
              Chính Sách
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
              Bảo Mật
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200">
              Điều Khoản
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}