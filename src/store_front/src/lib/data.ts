export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  slug: string;
  rating?: number;
  reviews?: number;
  inStock?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  sizes?: string[];
  colors?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

// Sample data for the new store
export const categories: Category[] = [
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and tech accessories",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500&h=300&fit=crop",
    slug: "electronics"
  },
  {
    id: "clothing",
    name: "Clothing",
    description: "Fashion and apparel for everyone",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
    slug: "clothing"
  },
  {
    id: "home",
    name: "Home & Living",
    description: "Everything for your home",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
    slug: "home"
  },
  {
    id: "sports",
    name: "Sports & Fitness",
    description: "Gear up for your active lifestyle",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    slug: "sports"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    description: "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    slug: "wireless-bluetooth-headphones",
    rating: 4.8,
    reviews: 324,
    inStock: true,
    isFeatured: true,
    colors: ["Black", "White", "Blue"]
  },
  {
    id: "2",
    name: "Premium Cotton T-Shirt",
    description: "Soft, comfortable premium cotton t-shirt perfect for everyday wear.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    slug: "premium-cotton-tshirt",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray", "Navy"]
  },
  {
    id: "3",
    name: "Smart Watch Series X",
    description: "Advanced smartwatch with health monitoring, GPS, and 7-day battery life.",
    price: 399.99,
    originalPrice: 449.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Electronics",
    slug: "smart-watch-series-x",
    rating: 4.9,
    reviews: 892,
    inStock: true,
    isFeatured: true,
    colors: ["Black", "Silver", "Gold"]
  },
  {
    id: "4",
    name: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and USB charging port.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    category: "Home & Living",
    slug: "minimalist-desk-lamp",
    rating: 4.7,
    reviews: 203,
    inStock: true,
    colors: ["White", "Black"]
  },
  {
    id: "5",
    name: "Running Shoes Pro",
    description: "Professional running shoes with advanced cushioning and breathable design.",
    price: 149.99,
    originalPrice: 179.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
    category: "Sports & Fitness",
    slug: "running-shoes-pro",
    rating: 4.8,
    reviews: 567,
    inStock: true,
    isFeatured: true,
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "White", "Red", "Blue"]
  },
  {
    id: "6",
    name: "Vintage Leather Jacket",
    description: "Classic vintage-style leather jacket made from genuine leather.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
    category: "Clothing",
    slug: "vintage-leather-jacket",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"]
  }
];

export const getFeaturedProducts = () => products.filter(p => p.isFeatured);
export const getNewProducts = () => products.filter(p => p.isNew);
export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));