"use client";

import { Button } from "@/components/ui/Button";

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
      className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Địa chỉ email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Nhập địa chỉ email của bạn"
          className="h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-950"
          required
        />
      </div>
      <Button variant="primary">Đăng ký</Button>
    </form>
  );
}
