"use client";

import { useState, useRef, useCallback } from "react";

type CategoryKey = "cake-milk" | "coffees-teas" | "pet-foods" | "vegetables";

interface ProductCard {
  id: number;
  name: string;
  items: number;
  image: string;
  bgColor: string;
}

interface Category {
  key: CategoryKey;
  label: string;
  products: ProductCard[];
}

const categories: Category[] = [
  {
    key: "cake-milk",
    label: "Cake & Milk",
    products: [
      {
        id: 1,
        name: "Whole Milk",
        items: 32,
        image:
          "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&q=80",
        bgColor: "#FEF9EC",
      },
      {
        id: 2,
        name: "Butter Cake",
        items: 18,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80",
        bgColor: "#FFF0F3",
      },
      {
        id: 3,
        name: "Cheese",
        items: 27,
        image:
          "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=200&q=80",
        bgColor: "#F0FFF4",
      },
      {
        id: 4,
        name: "Yogurt",
        items: 14,
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=80",
        bgColor: "#F5F0FF",
      },
      {
        id: 5,
        name: "Croissant",
        items: 22,
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&q=80",
        bgColor: "#FEF9EC",
      },
      {
        id: 6,
        name: "Chocolate Cake",
        items: 11,
        image:
          "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=200&q=80",
        bgColor: "#FFF0F3",
      },
      {
        id: 7,
        name: "Cream",
        items: 19,
        image:
          "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&q=80",
        bgColor: "#F0FFF4",
      },
    ],
  },
  {
    key: "coffees-teas",
    label: "Coffees & Teas",
    products: [
      {
        id: 1,
        name: "Espresso Beans",
        items: 43,
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&q=80",
        bgColor: "#FEF9EC",
      },
      {
        id: 2,
        name: "Green Tea",
        items: 67,
        image:
          "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&q=80",
        bgColor: "#F0FFF4",
      },
      {
        id: 3,
        name: "Cold Brew",
        items: 21,
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&q=80",
        bgColor: "#F5F0FF",
      },
      {
        id: 4,
        name: "Herbal Tea",
        items: 38,
        image:
          "https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?w=200&q=80",
        bgColor: "#FFF0F3",
      },
      {
        id: 5,
        name: "Latte Mix",
        items: 15,
        image:
          "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=200&q=80",
        bgColor: "#FEF9EC",
      },
      {
        id: 6,
        name: "Matcha",
        items: 29,
        image:
          "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=200&q=80",
        bgColor: "#F0FFF4",
      },
      {
        id: 7,
        name: "Chai Blend",
        items: 52,
        image:
          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=200&q=80",
        bgColor: "#FFF0F3",
      },
    ],
  },
  {
    key: "pet-foods",
    label: "Pet Foods",
    products: [
      {
        id: 1,
        name: "Peach",
        items: 14,
        image:
          "https://images.unsplash.com/photo-1595124789998-2f8bf25b7a9e?w=200&q=80",
        bgColor: "#F0FFF4",
      },
      {
        id: 2,
        name: "Red Apple",
        items: 54,
        image:
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=200&q=80",
        bgColor: "#FFF0F3",
      },
      {
        id: 3,
        name: "Snack",
        items: 56,
        image:
          "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&q=80",
        bgColor: "#FEF9EC",
      },
      {
        id: 4,
        name: "Vegetables",
        items: 72,
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=80",
        bgColor: "#F5F0FF",
      },
      {
        id: 5,
        name: "Strawberry",
        items: 36,
        image:
          "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&q=80",
        bgColor: "#FFF0F3",
      },
      {
        id: 6,
        name: "Black Plum",
        items: 123,
        image:
          "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=200&q=80",
        bgColor: "#F5F0FF",
      },
      {
        id: 7,
        name: "Custard Apple",
        items: 34,
        image:
          "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=200&q=80",
        bgColor: "#F0FFF4",
      },
      {
        id: 8,
        name: "Coffe & Tea",
        items: 89,
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&q=80",
        bgColor: "#FEF9EC",
      },
      {
        id: 9,
        name: "Headphone",
        items: 87,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
        bgColor: "#F0FFF4",
      },
      {
        id: 10,
        name: "Cake & Milk",
        items: 26,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&q=80",
        bgColor: "#FFF0F3",
      },
    ],
  },
  {
    key: "vegetables",
    label: "Vegetables",
    products: [
      {
        id: 1,
        name: "Broccoli",
        items: 41,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=200&q=80",
        bgColor: "#F0FFF4",
      },
      {
        id: 2,
        name: "Carrot",
        items: 88,
        image:
          "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=200&q=80",
        bgColor: "#FEF9EC",
      },
      {
        id: 3,
        name: "Tomato",
        items: 63,
        image:
          "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=200&q=80",
        bgColor: "#FFF0F3",
      },
      {
        id: 4,
        name: "Spinach",
        items: 29,
        image:
          "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&q=80",
        bgColor: "#F0FFF4",
      },
      {
        id: 5,
        name: "Bell Pepper",
        items: 47,
        image:
          "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=200&q=80",
        bgColor: "#FFF0F3",
      },
      {
        id: 6,
        name: "Cucumber",
        items: 35,
        image:
          "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=200&q=80",
        bgColor: "#F5F0FF",
      },
      {
        id: 7,
        name: "Onion",
        items: 92,
        image:
          "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=200&q=80",
        bgColor: "#FEF9EC",
      },
    ],
  },
];

const ACCENT = "#20B560";
const CARDS_PER_VIEW = 5; // visible cards at once (adjustable)

// ─── Component ───────────────────────────────────────────────────────────────

export default function FeaturedCategories() {
  const [activeKey, setActiveKey] = useState<CategoryKey>("pet-foods");
  const [slideIndex, setSlideIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find((c) => c.key === activeKey)!;
  const products = activeCategory.products;
  const maxIndex = Math.max(0, products.length - CARDS_PER_VIEW);

  const handleTabChange = (key: CategoryKey) => {
    setActiveKey(key);
    setSlideIndex(0);
  };

  const slidePrev = useCallback(() => {
    setSlideIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const slideNext = useCallback(() => {
    setSlideIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  // card width + gap in px — must match CSS
  const CARD_W = 160;
  const GAP = 16;

  return (
    <section className="w-full bg-white px-4 py-8 font-sans">
      {/* ── Header Row ── */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6">
        {/* Title */}
        <h2
          className="text-2xl font-black text-gray-900 shrink-0"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Featured Categories
        </h2>

        {/* Tabs */}
        <nav className="flex flex-wrap gap-x-5 gap-y-1">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleTabChange(cat.key)}
              className="text-sm font-semibold pb-0.5 transition-colors duration-200"
              style={{
                color: activeKey === cat.key ? ACCENT : "#6B7280",
                borderBottom:
                  activeKey === cat.key
                    ? `2px solid ${ACCENT}`
                    : "2px solid transparent",
              }}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Arrow Buttons */}
        <div className="flex gap-2 shrink-0">
          <button
            onClick={slidePrev}
            disabled={slideIndex === 0}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 disabled:opacity-40"
            style={{ background: slideIndex === 0 ? "#F3F4F6" : "white" }}
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={slideNext}
            disabled={slideIndex >= maxIndex}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-40"
            style={{ background: ACCENT }}
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18l6-6-6-6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Cards Slider ── */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${slideIndex * (CARD_W + GAP)}px)`,
            transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="shrink-0 rounded-2xl flex flex-col items-center justify-between cursor-pointer group"
              style={{
                width: `${CARD_W}px`,
                background: product.bgColor,
                padding: "20px 12px 16px",
              }}
            >
              {/* Image */}
              <div className="w-24 h-24 flex items-center justify-center mb-3 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="text-center">
                <p className="text-sm font-bold text-gray-800 leading-tight">
                  {product.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {product.items} items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
