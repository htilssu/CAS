import { categories } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Product Categories
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Browse our carefully curated categories to find exactly what you're looking for
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="group"
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center text-white group-hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Featured Categories Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Why Shop by Category?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Targeted Shopping
            </h3>
            <p className="text-gray-600">
              Find exactly what you need without browsing through unrelated products
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Save Time
            </h3>
            <p className="text-gray-600">
              Quickly navigate to your preferred product types and make faster decisions
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Discover New Items
            </h3>
            <p className="text-gray-600">
              Explore products within your interests that you might not have found otherwise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}