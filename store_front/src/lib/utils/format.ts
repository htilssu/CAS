/**
 * Hàm định dạng số thành chuỗi tiền tệ
 * @param {number} amount - Số tiền cần định dạng
 * @param {string} [currency='₫'] - Ký hiệu tiền tệ (mặc định là đồng Việt Nam)
 * @param {string} [locale='vi-VN'] - Mã ngôn ngữ định dạng
 * @returns {string} - Chuỗi định dạng tiền tệ
 */
export function formatCurrency(
  amount: number,
  currency = "₫",
  locale = "vi-VN"
): string {
  return (
    new Intl.NumberFormat(locale, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount) + currency
  );
}

/**
 * Tạo đường dẫn thân thiện từ chuỗi
 * @param {string} text - Chuỗi cần chuyển đổi
 * @returns {string} - Chuỗi đã được chuyển đổi thành slug URL
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Định dạng tên danh mục từ id
 * @param {string} id - ID của danh mục
 * @returns {string} - Tên đã được định dạng
 */
export function formatCategoryName(id: string): string {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Rút gọn mô tả xuống một số ký tự nhất định
 * @param {string} text - Mô tả cần rút gọn
 * @param {number} maxLength - Độ dài tối đa
 * @returns {string} - Mô tả đã được rút gọn
 */
export function truncateDescription(text: string, maxLength = 100): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}
