import { Button } from "@/components/ui/button";

/**
 * Thành phần hiển thị form đăng ký nhận thông tin khuyến mãi
 * @returns {JSX.Element} - Thành phần NewsletterSection được render
 */
export function NewsletterSection() {
  return (
    <section className="bg-indigo-50 py-12 dark:bg-indigo-950 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Đăng ký nhận thông tin
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi và mã giảm giá
            độc quyền
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
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

          <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
            Bằng cách đăng ký, bạn đồng ý với{" "}
            <a href="/privacy" className="underline hover:text-indigo-600">
              chính sách bảo mật
            </a>{" "}
            của chúng tôi.
          </p>
        </div>
      </div>
    </section>
  );
}
