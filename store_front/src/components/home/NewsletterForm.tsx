"use client";

import { Button } from "@/components/ui/button";

/**
 * Form đăng ký nhận thông tin khuyến mãi (Client Component)
 * @returns {JSX.Element} - Thành phần NewsletterForm được render
 */
export function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic gửi form ở đây
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex max-w-lg flex-col gap-4 sm:flex-row"
    >
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Địa chỉ email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Nhập địa chỉ email của bạn"
          className="h-14 w-full rounded-2xl border-0 bg-white/20 backdrop-blur-sm px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all text-lg"
          required
        />
      </div>
      <Button 
        variant="default" 
        size="lg"
        className="bg-white text-slate-900 hover:bg-white/90 font-bold text-lg px-8 py-4 h-14 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
      >
        Đăng ký
      </Button>
    </form>
  );
}
