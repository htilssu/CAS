import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/types";
import { getSubcategories } from "@/lib/data";
import { truncateDescription } from "@/lib/utils/format";

/**
 * Props cho component CategoryFeatures
 * @interface CategoryFeaturesProps
 * @property {Category} category - Thông tin danh mục cần hiển thị
 * @property {string} [className] - Các lớp CSS tùy chỉnh
 * @property {number} [descriptionLength=150] - Độ dài tối đa của phần mô tả
 */
interface CategoryFeaturesProps {
  category: Category;
  className?: string;
  descriptionLength?: number;
}

/**
 * Component hiển thị chi tiết và tính năng của một danh mục sản phẩm
 * @param {CategoryFeaturesProps} props - Props cho component
 * @returns {React.ReactElement} - Phần hiển thị thông tin chi tiết danh mục
 */
export default function CategoryFeatures({
  category,
  className = "",
  descriptionLength = 150,
}: CategoryFeaturesProps) {
  // Lấy danh sách danh mục con
  const subcategories = getSubcategories(category.id);

  return (
    <section className={`my-8 ${className}`}>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">{category.name}</h2>
        {category.description && (
          <p className="mx-auto mt-3 max-w-3xl text-gray-600">
            {truncateDescription(category.description, descriptionLength)}
          </p>
        )}
      </div>

      <div className="relative overflow-hidden rounded-xl bg-gray-50">
        <div className="grid gap-8 p-8 md:grid-cols-2">
          {/* Phần thông tin và danh mục con */}
          <div>
            <div className="mb-6">
              <h3 className="mb-3 text-lg font-medium">Về danh mục này</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>

            {subcategories.length > 0 && (
              <div>
                <h3 className="mb-3 text-lg font-medium">Các danh mục con</h3>
                <div className="space-y-2">
                  {subcategories.map((subcat) => (
                    <Link
                      key={subcat.id}
                      href={`/category/${subcat.slug}`}
                      className="block rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow"
                    >
                      <div className="flex items-center">
                        {subcat.image && (
                          <div className="mr-3 h-10 w-10 overflow-hidden rounded">
                            <Image
                              src={subcat.image}
                              alt={subcat.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium">{subcat.name}</h4>
                          {subcat.description && (
                            <p className="text-xs text-gray-500 line-clamp-1">
                              {subcat.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Phần hình ảnh danh mục */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            {category.image ? (
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200">
                <span className="text-gray-400">Không có hình ảnh</span>
              </div>
            )}
            {category.featured && (
              <div className="absolute right-2 top-2 rounded bg-primary/80 px-2 py-1 text-xs font-medium text-white">
                Danh mục nổi bật
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
