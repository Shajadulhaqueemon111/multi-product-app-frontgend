"use client";

import { useState, useEffect, useCallback } from "react";

type PatternType = "citrus" | "leaf" | "wave";

interface Slide {
  id: number;
  headline: string;
  subtext: string;
  accentColor: string;
  bgFrom: string;
  bgTo: string;
  badge: string;
  image: string;
  imageAlt: string;
  pattern: PatternType;
}

const slides: Slide[] = [
  {
    id: 1,
    headline: "Don\u2019t miss amazing grocery deals",
    subtext: "Sign up for the daily newsletter",
    accentColor: "#4CAF84",
    bgFrom: "#FEF3C7",
    bgTo: "#FDE68A",
    badge: "🛒 Daily Deals",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80",
    imageAlt: "Fresh apples in a mesh bag",
    pattern: "citrus",
  },
  {
    id: 2,
    headline: "Fresh produce, delivered fast",
    subtext: "Farm to table \u2014 every single day",
    accentColor: "#3B82F6",
    bgFrom: "#EFF6FF",
    bgTo: "#DBEAFE",
    badge: "🚀 Fast Delivery",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    imageAlt: "Assorted colorful vegetables",
    pattern: "leaf",
  },
  {
    id: 3,
    headline: "Exclusive weekly offers await",
    subtext: "Save up to 40% on seasonal picks",
    accentColor: "#EC4899",
    bgFrom: "#FDF2F8",
    bgTo: "#FCE7F3",
    badge: "✨ Weekly Offers",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
    imageAlt: "Fresh berries and fruits",
    pattern: "wave",
  },
];

const AUTO_SLIDE_INTERVAL = 4500;

function PatternBg({ type }: { type: PatternType }) {
  const patterns: Record<PatternType, React.ReactElement> = {
    citrus: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 250"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="80"
          cy="60"
          r="50"
          fill="none"
          stroke="#7C6A2A"
          strokeWidth="1.5"
        />
        <circle
          cx="80"
          cy="60"
          r="30"
          fill="none"
          stroke="#7C6A2A"
          strokeWidth="1"
        />
        <line
          x1="80"
          y1="10"
          x2="80"
          y2="110"
          stroke="#7C6A2A"
          strokeWidth="0.8"
        />
        <line
          x1="30"
          y1="60"
          x2="130"
          y2="60"
          stroke="#7C6A2A"
          strokeWidth="0.8"
        />
        <circle
          cx="280"
          cy="180"
          r="60"
          fill="none"
          stroke="#7C6A2A"
          strokeWidth="1.5"
        />
        <circle
          cx="280"
          cy="180"
          r="35"
          fill="none"
          stroke="#7C6A2A"
          strokeWidth="1"
        />
        <line
          x1="280"
          y1="120"
          x2="280"
          y2="240"
          stroke="#7C6A2A"
          strokeWidth="0.8"
        />
        <line
          x1="220"
          y1="180"
          x2="340"
          y2="180"
          stroke="#7C6A2A"
          strokeWidth="0.8"
        />
      </svg>
    ),
    leaf: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 250"
        preserveAspectRatio="xMidYMid slice"
      >
        {[...Array(6)].map((_, i) => (
          <ellipse
            key={i}
            cx={60 + i * 60}
            cy={125 + (i % 2 === 0 ? -30 : 30)}
            rx="25"
            ry="12"
            transform={`rotate(${i * 30} ${60 + i * 60} ${125 + (i % 2 === 0 ? -30 : 30)})`}
            fill="none"
            stroke="#1E40AF"
            strokeWidth="1.2"
          />
        ))}
      </svg>
    ),
    wave: (
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 250"
        preserveAspectRatio="xMidYMid slice"
      >
        {[0, 40, 80, 120, 160].map((y, i) => (
          <path
            key={i}
            d={`M0 ${y} Q100 ${y - 20} 200 ${y} Q300 ${y + 20} 400 ${y}`}
            fill="none"
            stroke="#9D174D"
            strokeWidth="1.5"
          />
        ))}
      </svg>
    ),
  };
  return patterns[type] ?? null;
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [imgLoaded, setImgLoaded] = useState<boolean[]>([false, false, false]);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning || idx === current) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(idx);
        setIsTransitioning(false);
      }, 350);
    },
    [current, isTransitioning],
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo],
  );
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo],
  );

  useEffect(() => {
    const timer = setInterval(next, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const handleSubscribe = (idx: number) => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;
    const updated = [...subscribed];
    updated[idx] = true;
    setSubscribed(updated);
  };

  const slide = slides[current];

  return (
    <div className="w-full flex items-center justify-center  bg-gray-100 p-4 font-sans">
      <div
        className="relative w-full max-w-8xl rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgTo} 100%)`,
          transition: "background 0.6s ease",
          minHeight: "320px",
        }}
      >
        {/* Pattern Background */}
        <PatternBg type={slide.pattern} />

        {/* Main Content Grid */}
        <div className="relative z-10 flex flex-col md:flex-row items-center min-h-80">
          {/* Left: Text Content */}
          <div
            className="flex-1 p-8 md:p-12 flex flex-col justify-center"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning
                ? "translateX(-20px)"
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {/* Badge */}
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 self-start"
              style={{
                background: slide.accentColor + "22",
                color: slide.accentColor,
                border: `1.5px solid ${slide.accentColor}44`,
              }}
            >
              {slide.badge}
            </span>

            {/* Headline */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-3"
              style={{
                color: "#1F3A2E",
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.02em",
              }}
            >
              {slide.headline}
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-gray-500 mb-7 font-medium">
              {slide.subtext}
            </p>

            {/* Email Subscribe */}
            {subscribed[current] ? (
              <div
                className="flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-2xl self-start"
                style={{
                  background: slide.accentColor + "22",
                  color: slide.accentColor,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                You&apos;re subscribed!
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <div className="flex items-center gap-2 bg-white rounded-2xl px-4 py-3 flex-1 shadow-sm border border-white/80">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-400 shrink-0"
                  >
                    <path
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleSubscribe(current)
                    }
                    className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
                  />
                </div>
                <button
                  onClick={() => handleSubscribe(current)}
                  className="px-6 py-3 rounded-2xl text-white text-sm font-bold shadow-lg active:scale-95 transition-all duration-150 whitespace-nowrap"
                  style={{
                    background: slide.accentColor,
                    boxShadow: `0 4px 20px ${slide.accentColor}55`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.filter =
                      "brightness(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.filter =
                      "brightness(1)";
                  }}
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>

          {/* Right: Image */}
          <div
            className="w-full md:w-auto md:shrink-0 flex items-center justify-center p-4 md:pr-8"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateX(20px)" : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: "clamp(220px, 28vw, 340px)",
                height: "clamp(200px, 25vw, 300px)",
              }}
            >
              {!imgLoaded[current] && (
                <div className="absolute inset-0 bg-white/40 animate-pulse rounded-2xl" />
              )}
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.imageAlt}
                className="w-full h-full object-cover rounded-2xl"
                style={{
                  boxShadow: `0 16px 48px ${slide.accentColor}33`,
                  opacity: imgLoaded[current] ? 1 : 0,
                  transition: "opacity 0.4s ease",
                }}
                onLoad={() => {
                  const updated = [...imgLoaded];
                  updated[current] = true;
                  setImgLoaded(updated);
                }}
              />
            </div>
          </div>
        </div>

        {/* Prev Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all active:scale-90"
          aria-label="Previous slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-all active:scale-90"
          aria-label="Next slide"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="#374151"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                background: i === current ? slide.accentColor : "#ccc",
                boxShadow:
                  i === current ? `0 0 8px ${slide.accentColor}88` : "none",
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.75 bg-black/5 z-20">
          <div
            key={current}
            className="h-full rounded-full"
            style={{
              background: slide.accentColor,
              animation: `progressBar ${AUTO_SLIDE_INTERVAL}ms linear forwards`,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
