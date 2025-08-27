import { NewsletterForm } from "./NewsletterForm";
import Link from "next/link";

/**
 * Thành phần hiển thị form đăng ký nhận thông tin khuyến mãi
 * @returns {JSX.Element} - Thành phần NewsletterSection được render
 */
export function NewsletterSection() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Đăng ký nhận thông tin
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
            Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi và mã giảm giá
            độc quyền
          </p>

          <NewsletterForm />

          <p className="mt-6 text-sm text-white/70 max-w-md mx-auto">
            Bằng cách đăng ký, bạn đồng ý với{" "}
            <Link href="/privacy" className="underline hover:text-white transition-colors font-medium">
              chính sách bảo mật
            </Link>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>
    </section>
  );
}
