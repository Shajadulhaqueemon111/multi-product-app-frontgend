"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabKey = "featured" | "popular" | "new-added";
type BadgeType = "Sale" | "Best sale" | "Save 15%" | null;

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  sold: number;
  total: number;
  image: string;
  badge: BadgeType;
  badgeColor: string;
  tab: TabKey[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const allProducts: Product[] = [
  {
    id: 1,
    category: "Hodo Foods",
    name: "Angie\u2019s Boomchickapop Sweet and womnies",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 90,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1609167830220-7164aa360951?w=300&q=80",
    badge: "Sale",
    badgeColor: "#3B82F6",
    tab: ["featured", "popular"],
  },
  {
    id: 2,
    category: "Hodo Foods",
    name: "Foster Farms Takeout Crispy Classic",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 90,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=300&q=80",
    badge: "Best sale",
    badgeColor: "#F97316",
    tab: ["featured", "new-added"],
  },
  {
    id: 3,
    category: "Hodo Foods",
    name: "Blue Diamond Almonds Lightly Salted",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 90,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&q=80",
    badge: "Save 15%",
    badgeColor: "#F43F5E",
    tab: ["featured", "popular"],
  },
  {
    id: 4,
    category: "Hodo Foods",
    name: "Seeds of Change Organic Quinoa, Brown",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 90,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=300&q=80",
    badge: "Save 15%",
    badgeColor: "#F43F5E",
    tab: ["featured", "new-added"],
  },
  {
    id: 5,
    category: "Hodo Foods",
    name: "Organic Green Tea Premium Blend Pack",
    price: 238.85,
    originalPrice: 245.8,
    rating: 5,
    sold: 105,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80",
    badge: "Sale",
    badgeColor: "#3B82F6",
    tab: ["popular", "new-added"],
  },
  {
    id: 6,
    category: "Hodo Foods",
    name: "Whole Grain Cracker Harvest Snack Mix",
    price: 238.85,
    originalPrice: 245.8,
    rating: 3,
    sold: 60,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=80",
    badge: "Best sale",
    badgeColor: "#F97316",
    tab: ["popular"],
  },
  {
    id: 7,
    category: "Hodo Foods",
    name: "Cold Brew Coffee Concentrate Dark Roast",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 80,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80",
    badge: null,
    badgeColor: "",
    tab: ["new-added"],
  },
  {
    id: 8,
    category: "Hodo Foods",
    name: "Cold Brew Coffee Concentrate Dark Roast",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 80,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80",
    badge: null,
    badgeColor: "",
    tab: ["new-added"],
  },
  {
    id: 9,
    category: "Hodo Foods",
    name: "Cold Brew Coffee Concentrate Dark Roast",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 80,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80",
    badge: null,
    badgeColor: "",
    tab: ["new-added"],
  },
  {
    id: 10,
    category: "Hodo Foods",
    name: "Cold Brew Coffee Concentrate Dark Roast",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 80,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80",
    badge: null,
    badgeColor: "",
    tab: ["new-added"],
  },
  {
    id: 11,
    category: "Hodo Foods",
    name: "Cold Brew Coffee Concentrate Dark Roast",
    price: 238.85,
    originalPrice: 245.8,
    rating: 4,
    sold: 80,
    total: 120,
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&q=80",
    badge: null,
    badgeColor: "",
    tab: ["new-added"],
  },
];

const tabs: { key: TabKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "popular", label: "Popular" },
  { key: "new-added", label: "New added" },
];

const ACCENT = "#20B560";
const VISIBLE = 4;
const CARD_W = 252;
const CARD_GAP = 16;
const AUTO_MS = 3200;

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={s <= rating ? "#FBBF24" : "#E5E7EB"}
            stroke={s <= rating ? "#FBBF24" : "#E5E7EB"}
            strokeWidth="0.5"
          />
        </svg>
      ))}
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  const pct = Math.round((product.sold / product.total) * 100);
  const [added, setAdded] = useState(false);

  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 flex flex-col overflow-visible h-full">
      {/* Badge */}
      {product.badge && (
        <span
          className="absolute -top-px left-5 z-10 text-white text-xs font-bold px-3 py-1.5 rounded-b-xl"
          style={{ background: product.badgeColor }}
        >
          {product.badge}
        </span>
      )}

      {/* Image */}
      <div
        className="flex items-center justify-center bg-gray-50 rounded-t-2xl overflow-hidden shrink-0"
        style={{ height: 220 }}
      >
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <p className="text-xs text-gray-400">{product.category}</p>
        <h3
          className="text-sm font-bold text-gray-800 leading-snug line-clamp-2"
          style={{ minHeight: "2.5rem" }}
        >
          {product.name}
        </h3>
        <StarRating rating={product.rating} />

        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="text-base font-black" style={{ color: ACCENT }}>
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-400 line-through">
            ${product.originalPrice.toFixed(1)}
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="w-full bg-gray-100 rounded-full overflow-hidden"
          style={{ height: 5 }}
        >
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: ACCENT }}
          />
        </div>
        <p className="text-xs text-gray-400">
          Sold: {product.sold}/{product.total}
        </p>

        {/* Add To Cart */}
        <button
          onClick={() => {
            setAdded(true);
            setTimeout(() => setAdded(false), 1400);
          }}
          className="mt-auto w-full flex items-center justify-center gap-2 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
          style={{ background: added ? "#16a34a" : ACCENT }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {added ? "Added!" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function DailyBestSells() {
  const [activeTab, setActiveTab] = useState<TabKey>("featured");
  const [idx, setIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const filtered = allProducts.filter((p) => p.tab.includes(activeTab));
  const maxIdx = Math.max(0, filtered.length - VISIBLE);

  const next = useCallback(
    () => setIdx((i) => (i >= maxIdx ? 0 : i + 1)),
    [maxIdx],
  );
  const prev = useCallback(
    () => setIdx((i) => (i <= 0 ? maxIdx : i - 1)),
    [maxIdx],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setIdx((i) => (i >= maxIdx ? 0 : i + 1)),
      AUTO_MS,
    );
  }, [maxIdx]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleTab = (key: TabKey) => {
    setActiveTab(key);
    setIdx(0);
  };

  return (
    <section className="w-full bg-white px-4 py-10">
      <div className="max-w-8xl mx-auto">
        {/* ── Header ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2
            className="text-2xl font-black text-gray-900"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Daily Best Sells
          </h2>
          <nav className="flex items-center gap-6">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => handleTab(t.key)}
                className="text-sm font-semibold pb-0.5 transition-colors duration-200"
                style={{
                  color: activeTab === t.key ? ACCENT : "#6B7280",
                  borderBottom:
                    activeTab === t.key
                      ? `2px solid ${ACCENT}`
                      : "2px solid transparent",
                }}
              >
                {t.label}
              </button>
            ))}
          </nav>
        </div>

        {/* ── Body: Banner + Slider ── */}
        <div className="flex gap-4 items-stretch">
          {/* Left Banner */}
          <div
            className="hidden lg:flex shrink-0 flex-col justify-between rounded-2xl overflow-hidden relative"
            style={{ width: 280 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80"
              alt="Green leaf"
              width={100}
              height={100}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(200,230,210,0.55)" }}
            />

            <div className="relative z-10 p-7 pt-9">
              <h3
                className="text-3xl font-black text-gray-900 leading-tight"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Bring nature
                <br />
                into your
                <br />
                home
              </h3>
            </div>

            <div className="relative z-10 p-7 pb-9">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:brightness-110 active:scale-95"
                style={{ background: ACCENT }}
              >
                Shop Now
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Right accent bar */}
            <div
              className="absolute right-0 top-1/3 bottom-1/3 w-1 rounded-l-full"
              style={{ background: ACCENT }}
            />
          </div>

          {/* ── Slider ── */}
          <div className="flex-1 min-w-0 relative">
            {/* Prev Arrow */}
            <button
              onClick={() => {
                prev();
                resetTimer();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-20 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center transition hover:shadow-lg active:scale-90"
              aria-label="Previous"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="#374151"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              onClick={() => {
                next();
                resetTimer();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-20 w-9 h-9 bg-white border border-gray-200 rounded-full shadow-md flex items-center justify-center transition hover:shadow-lg active:scale-90"
              aria-label="Next"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="#374151"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Track */}
            <div className="overflow-hidden">
              <div
                className="flex"
                style={{
                  gap: `${CARD_GAP}px`,
                  transform: `translateX(-${idx * (CARD_W + CARD_GAP)}px)`,
                  transition:
                    "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
                }}
              >
                {filtered.map((p) => (
                  <div
                    key={p.id}
                    className="shrink-0"
                    style={{ width: CARD_W }}
                  >
                    <ProductCard product={p} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
