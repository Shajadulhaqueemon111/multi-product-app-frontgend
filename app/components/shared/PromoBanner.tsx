"use client";

import Image from "next/image";

interface PromoBanner {
  id: number;
  headline: string;
  bg: string;
  image: string;
  imageAlt: string;
  imagePosition: "right" | "bottom-right";
}

const banners: PromoBanner[] = [
  {
    id: 1,
    headline: "Everyday Fresh &\nClean with Our\nProducts",
    bg: "#EDE8D0",
    image:
      "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400&q=80",
    imageAlt: "Fresh onions",
    imagePosition: "right",
  },
  {
    id: 2,
    headline: "Make your Breakfast\nHealthy and Easy",
    bg: "#F5E8E8",
    image:
      "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&q=80",
    imageAlt: "Strawberry juice bottle",
    imagePosition: "right",
  },
  {
    id: 3,
    headline: "The best Organic\nProducts Online",
    bg: "#E8ECF0",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
    imageAlt: "Fresh vegetables basket",
    imagePosition: "right",
  },
];

export default function PromoBannerSection() {
  return (
    <section className="w-full bg-white px-4 py-8">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-2xl overflow-hidden flex items-center justify-between"
            style={{
              background: banner.bg,
              minHeight: "200px",
              padding: "32px 0 32px 32px",
            }}
          >
            {/* Left: Text + Button */}
            <div className="flex flex-col gap-5 z-10 flex-1 pr-2">
              <h3
                className="text-xl font-bold text-gray-800 leading-snug whitespace-pre-line"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {banner.headline}
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg self-start transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ background: "#20B560" }}
              >
                Shop Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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

            {/* Right: Product Image */}
            <div className="relative shrink-0 flex items-end justify-end h-full">
              <Image
                src={banner.image}
                alt={banner.imageAlt}
                height={100}
                width={100}
                className="object-cover w-40 h-40 md:w-44 md:h-44 drop-shadow-lg"
                style={{ objectPosition: "center" }}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
