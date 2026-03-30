"use client";

import Image from "next/image";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: number;
  name: string;
  rating: number;
  price: number;
  originalPrice: number;
  image: string;
}

interface CategorySection {
  title: string;
  products: Product[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SECTIONS: CategorySection[] = [
  {
    title: "Top Selling",
    products: [
      {
        id: 1,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1447175008436-054170c2e979?w=80&h=80&fit=crop",
      },
      {
        id: 2,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=80&h=80&fit=crop",
      },
      {
        id: 3,
        name: "Nestle Original Coffee-Mate Coffee Creamer",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=80&h=80&fit=crop",
      },
    ],
  },
  {
    title: "Trending Products",
    products: [
      {
        id: 4,
        name: "Organic Cage-Free Grade A Large Brown Eggs",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=80&h=80&fit=crop",
      },
      {
        id: 5,
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1563699057-bbacb7dfeb38?w=80&h=80&fit=crop",
      },
      {
        id: 6,
        name: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=80&h=80&fit=crop",
      },
    ],
  },
  {
    title: "Recently added",
    products: [
      {
        id: 7,
        name: "Pepperidge Farm Farmhouse Hearty White Bread",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=80&h=80&fit=crop",
      },
      {
        id: 8,
        name: "Organic Frozen Triple Berry Blend",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=80&h=80&fit=crop",
      },
      {
        id: 9,
        name: "Oroweat Country Buttermilk Bread",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=80&h=80&fit=crop",
      },
    ],
  },
  {
    title: "Top Rated",
    products: [
      {
        id: 10,
        name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=80&h=80&fit=crop",
      },
      {
        id: 11,
        name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=80&h=80&fit=crop",
      },
      {
        id: 12,
        name: "All Natural Italian-Style Chicken Meatballs",
        rating: 4.0,
        price: 32.85,
        originalPrice: 33.8,
        image:
          "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=80&h=80&fit=crop",
      },
    ],
  },
];

// ─── StarRating ───────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-gray-400 text-xs ml-1">({rating.toFixed(1)})</span>
    </div>
  );
}

// ─── ProductRow ───────────────────────────────────────────────────────────────

function ProductRow({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  return (
    <div
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 group cursor-pointer"
      onClick={() => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="64px"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-green-600 transition-colors">
          {product.name}
        </h4>
        <StarRating rating={product.rating} />
        <div className="flex items-center gap-2 mt-1">
          <span className="text-green-500 font-bold text-sm">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-gray-400 text-xs line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          {added && (
            <span className="text-xs text-green-500 font-medium animate-pulse">
              ✓ Added!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── CategoryColumn ───────────────────────────────────────────────────────────

function CategoryColumn({ section }: { section: CategorySection }) {
  return (
    <div className="flex flex-col">
      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">{section.title}</h2>
      {/* Divider */}
      <div className="h-px bg-gray-200 mb-4" />
      {/* Products */}
      <div className="flex flex-col gap-1">
        {section.products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SellingCategoryProducts() {
  return (
    <section className="bg-white  px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SECTIONS.map((section) => (
            <CategoryColumn key={section.title} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}
