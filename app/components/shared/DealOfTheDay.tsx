"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: number;
  name: string;
  rating: number;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  endsIn: number;
}

interface CountdownTimerProps {
  totalSeconds: number;
}

interface BoxProps {
  value: number;
  label: string;
}

interface StarRatingProps {
  rating: number;
}

interface ProductCardProps {
  product: Product;
  aiDescription: string | undefined;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4.0,
    brand: "NestFood",
    price: 32.85,
    originalPrice: 33.8,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=220&fit=crop",
    endsIn: 0,
  },
  {
    id: 2,
    name: "Perdue Simply Smart Organics Gluten Free",
    rating: 4.0,
    brand: "Old El Paso",
    price: 24.85,
    originalPrice: 26.8,
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=220&fit=crop",
    endsIn: 25 * 86400 + 1 * 3600 + 46 * 60 + 57,
  },
  {
    id: 3,
    name: "Signature Wood-Fired Mushroom and Caramelized",
    rating: 3.0,
    brand: "Progresso",
    price: 12.85,
    originalPrice: 13.8,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=220&fit=crop",
    endsIn: 359 * 86400 + 1 * 3600 + 46 * 60 + 57,
  },
  {
    id: 4,
    name: "Simply Lemonade with Raspberry Juice",
    rating: 3.0,
    brand: "Yoplait",
    price: 15.85,
    originalPrice: 16.8,
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=220&fit=crop",
    endsIn: 0,
  },
];

// ─── CountdownTimer ───────────────────────────────────────────────────────────

function CountdownTimer({ totalSeconds }: CountdownTimerProps) {
  const [seconds, setSeconds] = useState<number>(totalSeconds);

  useEffect(() => {
    setSeconds(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(
      () => setSeconds((s: number) => Math.max(0, s - 1)),
      1000,
    );
    return () => clearInterval(timer);
  }, [seconds]);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (n: number): string => String(n).padStart(2, "0");

  const Box = ({ value, label }: BoxProps) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow px-3 py-2 min-w-13">
      <span className="text-green-500 font-bold text-lg leading-tight">
        {pad(value)}
      </span>
      <span className="text-gray-400 text-xs">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-1.5">
      <Box value={days} label="Days" />
      <Box value={hours} label="Hours" />
      <Box value={mins} label="Mins" />
      <Box value={secs} label="Sec" />
    </div>
  );
}

// ─── StarRating ───────────────────────────────────────────────────────────────

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-200"}`}
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

// ─── ProductCard ──────────────────────────────────────────────────────────────

function ProductCard({ product, aiDescription }: ProductCardProps) {
  const [added, setAdded] = useState<boolean>(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-200">
      {/* Image with countdown overlay */}
      <div className="relative w-full h-44">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute bottom-3 left-3">
          <CountdownTimer totalSeconds={product.endsIn} />
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>
        <StarRating rating={product.rating} />
        <p className="text-sm text-gray-400 mt-1 mb-3">
          By <span className="text-green-500 font-medium">{product.brand}</span>
        </p>

        {/* AI description */}
        {aiDescription ? (
          <p className="text-xs text-gray-500 italic mb-3 line-clamp-2 bg-green-50 rounded-lg px-2 py-1.5 border border-green-100">
            {aiDescription}
          </p>
        ) : (
          <div className="mb-3 h-8 flex items-center">
            <div className="flex gap-1">
              <div
                className="w-2 h-2 bg-green-300 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <div
                className="w-2 h-2 bg-green-300 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <div
                className="w-2 h-2 bg-green-300 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-green-500 font-bold text-lg">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-gray-400 text-sm line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 bg-green-100 hover:bg-green-500 text-green-600 hover:text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function DealsOfTheDay() {
  const [aiDescriptions, setAiDescriptions] = useState<Record<number, string>>(
    {},
  );

  useEffect(() => {
    const fetchDescriptions = async () => {
      for (const product of PRODUCTS) {
        try {
          const response = await fetch(
            "https://api.anthropic.com/v1/messages",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                model: "claude-sonnet-4-20250514",
                max_tokens: 1000,
                messages: [
                  {
                    role: "user",
                    content: `Write a single short enticing product tagline (max 15 words) for: "${product.name}" by ${product.brand}. No quotes, no punctuation at end.`,
                  },
                ],
              }),
            },
          );
          const data = await response.json();
          const text: string = data.content?.[0]?.text ?? "";
          setAiDescriptions((prev) => ({ ...prev, [product.id]: text }));
        } catch (_err) {
          setAiDescriptions((prev) => ({
            ...prev,
            [product.id]: "Fresh quality you can trust.",
          }));
        }
      }
    };

    fetchDescriptions();
  }, []);

  return (
    <div className="bg-gray-50  p-8 font-sans">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Deals Of The Day</h1>
          <button className="text-sm text-gray-500 hover:text-green-500 flex items-center gap-1 transition-colors">
            All Deals
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              aiDescription={aiDescriptions[product.id]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
