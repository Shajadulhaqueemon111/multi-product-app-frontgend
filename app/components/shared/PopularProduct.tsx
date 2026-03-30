"use client";

import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────────────

type TabKey =
  | "all"
  | "milks-dairies"
  | "coffees-teas"
  | "pet-foods"
  | "meats"
  | "vegetables"
  | "fruits";
type BadgeType = "Hot" | "Sale" | "New" | "-14%" | null;

interface Product {
  id: number;
  category: string;
  name: string;
  brand: string;
  brandColor: string;
  rating: number;
  ratingCount: number;
  price: number;
  originalPrice: number;
  image: string;
  badge: BadgeType;
  badgeColor: string;
  tab: TabKey[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: 1,
    category: "Snack",
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    brand: "NestFood",
    brandColor: "#20B560",
    rating: 4.0,
    ratingCount: 4.0,
    price: 28.85,
    originalPrice: 32.8,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&q=80",
    badge: "Hot",
    badgeColor: "#F43F5E",
    tab: ["all", "pet-foods"],
  },
  {
    id: 2,
    category: "Hodo Foods",
    name: "All Natural Italian-Style Chicken Meatballs",
    brand: "Stouffer",
    brandColor: "#20B560",
    rating: 3.5,
    ratingCount: 3.5,
    price: 52.85,
    originalPrice: 55.8,
    image:
      "https://images.unsplash.com/photo-1609167830220-7164aa360951?w=300&q=80",
    badge: "Sale",
    badgeColor: "#3B82F6",
    tab: ["all", "meats"],
  },
  {
    id: 3,
    category: "Snack",
    name: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
    brand: "StarKist",
    brandColor: "#20B560",
    rating: 4.0,
    ratingCount: 4.0,
    price: 48.85,
    originalPrice: 52.8,
    image:
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=300&q=80",
    badge: "New",
    badgeColor: "#20B560",
    tab: ["all", "pet-foods"],
  },
  {
    id: 4,
    category: "Vegetables",
    name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    brand: "NestFood",
    brandColor: "#20B560",
    rating: 4.0,
    ratingCount: 4.0,
    price: 17.85,
    originalPrice: 19.8,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&q=80",
    badge: null,
    badgeColor: "",
    tab: ["all", "vegetables"],
  },
  {
    id: 5,
    category: "Pet Foods",
    name: "Blue Diamond Almonds Lightly Salted Vegetables",
    brand: "NestFood",
    brandColor: "#20B560",
    rating: 4.0,
    ratingCount: 4.0,
    price: 23.85,
    originalPrice: 25.8,
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=300&q=80",
    badge: "-14%",
    badgeColor: "#F97316",
    tab: ["all", "pet-foods"],
  },
  {
    id: 6,
    category: "Milks & Dairies",
    name: "Organic Whole Milk Premium Fresh Farm",
    brand: "NestFood",
    brandColor: "#20B560",
    rating: 4.5,
    ratingCount: 4.5,
    price: 14.85,
    originalPrice: 18.0,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&q=80",
    badge: "New",
    badgeColor: "#20B560",
    tab: ["all", "milks-dairies"],
  },
  {
    id: 7,
    category: "Coffees & Teas",
    name: "Premium Arabica Ground Coffee Dark Roast Blend",
    brand: "StarKist",
    brandColor: "#20B560",
    rating: 4.0,
    ratingCount: 4.0,
    price: 19.85,
    originalPrice: 24.0,
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&q=80",
    badge: "Sale",
    badgeColor: "#3B82F6",
    tab: ["all", "coffees-teas"],
  },
  {
    id: 8,
    category: "Fruits",
    name: "Fresh Organic Strawberry Sweet & Juicy Pack",
    brand: "NestFood",
    brandColor: "#20B560",
    rating: 5.0,
    ratingCount: 5.0,
    price: 9.85,
    originalPrice: 12.0,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=80",
    badge: "Hot",
    badgeColor: "#F43F5E",
    tab: ["all", "fruits"],
  },
];

const tabs: { key: TabKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "milks-dairies", label: "Milks & Dairies" },
  { key: "coffees-teas", label: "Coffes & Teas" },
  { key: "pet-foods", label: "Pet Foods" },
  { key: "meats", label: "Meats" },
  { key: "vegetables", label: "Vegetables" },
  { key: "fruits", label: "Fruits" },
];

const ACCENT = "#20B560";
const PRODUCTS_PER_PAGE = 5;

// ─── Star Rating ─────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width="13" height="13" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={star <= Math.round(rating) ? "#FBBF24" : "#E5E7EB"}
            stroke={star <= Math.round(rating) ? "#FBBF24" : "#E5E7EB"}
            strokeWidth="1"
          />
        </svg>
      ))}
      <span className="text-xs text-gray-400 ml-1">({rating.toFixed(1)})</span>
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 flex flex-col overflow-hidden group transition-shadow duration-300 hover:shadow-lg">
      {/* Badge */}
      {product.badge && (
        <span
          className="absolute top-3 left-3 z-10 text-white text-xs font-bold px-2.5 py-1 rounded-md"
          style={{ background: product.badgeColor }}
        >
          {product.badge}
        </span>
      )}

      {/* Image Area */}
      <div
        className="relative bg-gray-50 flex items-center justify-center overflow-hidden"
        style={{ height: "220px" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          height={100}
          width={100}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover Action Icons */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {/* Wishlist */}
          <button
            onClick={() => setWished((w) => !w)}
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            aria-label="Wishlist"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={wished ? "#F43F5E" : "none"}
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                stroke={wished ? "#F43F5E" : "#9CA3AF"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Compare */}
          <button
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            aria-label="Compare"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 9l3 3-3 3M6 9l-3 3 3 3M21 12H3"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Quick View */}
          <button
            className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            aria-label="Quick View"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" stroke="#9CA3AF" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <span className="text-xs text-gray-400">{product.category}</span>
        <h3 className="text-sm font-bold text-gray-800 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <StarRating rating={product.rating} />
        <p className="text-xs text-gray-400">
          By{" "}
          <span className="font-semibold" style={{ color: product.brandColor }}>
            {product.brand}
          </span>
        </p>

        {/* Price + Add */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black" style={{ color: ACCENT }}>
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ${product.originalPrice.toFixed(1)}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 active:scale-95"
            style={{
              background: added ? ACCENT : "#E8F9F0",
              color: added ? "white" : ACCENT,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function PopularProducts() {
  const [activeTab, setActiveTab] = useState<TabKey>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = products.filter((p) => p.tab.includes(activeTab));
  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PRODUCTS_PER_PAGE),
  );
  const paginated = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  const handleTabChange = (key: TabKey) => {
    setActiveTab(key);
    setCurrentPage(1); // reset to page 1 on tab change
  };

  const handlePage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build page numbers with ellipsis
  const getPageNumbers = (): (number | "ellipsis")[] => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, "ellipsis", totalPages];
    if (currentPage >= totalPages - 2)
      return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
    return [
      1,
      "ellipsis",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "ellipsis",
      totalPages,
    ];
  };

  return (
    <section className="w-full bg-white px-4 py-10">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
          <h2
            className="text-2xl font-black text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Popular Products
          </h2>

          {/* Tabs */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 items-center">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className="text-sm font-semibold transition-colors duration-200 pb-0.5"
                style={{
                  color: activeTab === tab.key ? ACCENT : "#6B7280",
                  borderBottom:
                    activeTab === tab.key
                      ? `2px solid ${ACCENT}`
                      : "2px solid transparent",
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Product Grid */}
        {paginated.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-sm">
            No products found.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {paginated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center">
            <Pagination>
              <PaginationContent>
                {/* Previous */}
                <PaginationItem>
                  <PaginationPrevious
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePage(currentPage - 1);
                    }}
                    aria-disabled={currentPage === 1}
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-40" : ""
                    }
                  />
                </PaginationItem>

                {/* Page Numbers */}
                {getPageNumbers().map((page, idx) =>
                  page === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${idx}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePage(page);
                        }}
                        style={
                          page === currentPage
                            ? {
                                background: ACCENT,
                                color: "white",
                                borderColor: ACCENT,
                              }
                            : {}
                        }
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ),
                )}

                {/* Next */}
                <PaginationItem>
                  <PaginationNext
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePage(currentPage + 1);
                    }}
                    aria-disabled={currentPage === totalPages}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-40"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
}
