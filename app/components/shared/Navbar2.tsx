"use client";
import { useState } from "react";
import type { FC } from "react";

/* ── CATEGORY SVG ICONS ── */
const MilkIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <rect
      x="12"
      y="16"
      width="24"
      height="28"
      rx="4"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path d="M16 16l2-8h12l2 8" stroke="#3aaa5e" strokeWidth="2" fill="none" />
    <ellipse cx="24" cy="30" rx="6" ry="4" fill="#f5c842" opacity="0.5" />
    <path
      d="M20 24h8M20 34h8"
      stroke="#3aaa5e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const WineIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <rect
      x="8"
      y="10"
      width="14"
      height="20"
      rx="3"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path d="M10 26h10" stroke="#f5c842" strokeWidth="2" />
    <rect
      x="26"
      y="8"
      width="14"
      height="24"
      rx="3"
      stroke="#f5c842"
      strokeWidth="2"
      fill="#fffbea"
    />
    <circle cx="33" cy="20" r="4" fill="#f5c842" opacity="0.4" />
    <path
      d="M14 30v8M30 32v6"
      stroke="#3aaa5e"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const ClothingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <path
      d="M16 10l-8 8 6 4v18h20V22l6-4-8-8c-2 4-6 6-12 0z"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path d="M12 38h24" stroke="#f5c842" strokeWidth="1.5" />
    <circle cx="24" cy="28" r="2" fill="#f5c842" opacity="0.6" />
  </svg>
);
const SeafoodIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <path
      d="M8 24c4-8 12-12 20-8s14 0 14 0-6 12-16 14-18-6-18-6z"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path
      d="M36 18l4-6M36 18l6-2"
      stroke="#f5c842"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="18" cy="24" r="2" fill="#3aaa5e" opacity="0.5" />
    <path
      d="M22 20c2 2 2 6 0 8"
      stroke="#3aaa5e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const PetIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <circle
      cx="24"
      cy="26"
      r="12"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <circle
      cx="18"
      cy="16"
      r="4"
      stroke="#f5c842"
      strokeWidth="2"
      fill="#fffbea"
    />
    <circle
      cx="30"
      cy="16"
      r="4"
      stroke="#f5c842"
      strokeWidth="2"
      fill="#fffbea"
    />
    <path
      d="M20 28c1 2 3 3 4 3s3-1 4-3"
      stroke="#3aaa5e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="20" cy="26" r="1.5" fill="#3aaa5e" />
    <circle cx="28" cy="26" r="1.5" fill="#3aaa5e" />
  </svg>
);
const FastFoodIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <rect
      x="10"
      y="28"
      width="28"
      height="10"
      rx="3"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path
      d="M14 28c0-6 4-10 10-10s10 4 10 10"
      stroke="#3aaa5e"
      strokeWidth="2"
    />
    <path d="M14 22h20" stroke="#f5c842" strokeWidth="2" />
    <rect
      x="18"
      y="36"
      width="4"
      height="4"
      rx="1"
      fill="#3aaa5e"
      opacity="0.4"
    />
    <rect
      x="26"
      y="36"
      width="4"
      height="4"
      rx="1"
      fill="#3aaa5e"
      opacity="0.4"
    />
  </svg>
);
const BakingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <rect
      x="10"
      y="20"
      width="28"
      height="20"
      rx="4"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path d="M16 20c0-6 16-6 16 0" stroke="#f5c842" strokeWidth="2" />
    <path
      d="M18 30h12M18 34h8"
      stroke="#3aaa5e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="24" cy="14" r="3" fill="#f5c842" opacity="0.5" />
  </svg>
);
const VeggieIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <path
      d="M24 38V20"
      stroke="#3aaa5e"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M24 20c0-8-10-10-12-6s4 10 12 6z"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path
      d="M24 24c0-8 10-10 12-6s-4 10-12 6z"
      stroke="#f5c842"
      strokeWidth="2"
      fill="#fffbea"
    />
    <ellipse cx="24" cy="38" rx="8" ry="2" fill="#3aaa5e" opacity="0.2" />
  </svg>
);
const FruitIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <circle
      cx="24"
      cy="28"
      r="12"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path
      d="M24 16c0-6 8-8 8-4"
      stroke="#3aaa5e"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M20 26c2-2 6-2 8 0"
      stroke="#f5c842"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M22 32c1 1 2 1 4 0"
      stroke="#3aaa5e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const BreadIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <rect
      x="8"
      y="22"
      width="32"
      height="18"
      rx="4"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path d="M8 26c4-8 28-8 32 0" stroke="#f5c842" strokeWidth="2" />
    <circle cx="18" cy="32" r="2" fill="#f5c842" opacity="0.5" />
    <circle cx="30" cy="32" r="2" fill="#3aaa5e" opacity="0.4" />
    <path
      d="M22 28h4"
      stroke="#3aaa5e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const TagIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <path
      d="M10 10h14l16 16-14 14L10 24V10z"
      stroke="#f5c842"
      strokeWidth="2"
      fill="#fffbea"
    />
    <circle cx="18" cy="18" r="2.5" fill="#f5c842" />
    <path
      d="M22 26l6-6"
      stroke="#3aaa5e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const InvoiceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <rect
      x="12"
      y="8"
      width="24"
      height="32"
      rx="3"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <circle
      cx="24"
      cy="22"
      r="6"
      stroke="#f5c842"
      strokeWidth="2"
      fill="#fffbea"
    />
    <path
      d="M16 36h16M16 12h8"
      stroke="#3aaa5e"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M22 20v4l2 2"
      stroke="#f5c842"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const OrgChartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-9 h-9">
    <rect
      x="18"
      y="8"
      width="12"
      height="8"
      rx="2"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <rect
      x="6"
      y="28"
      width="10"
      height="8"
      rx="2"
      stroke="#f5c842"
      strokeWidth="2"
      fill="#fffbea"
    />
    <rect
      x="19"
      y="28"
      width="10"
      height="8"
      rx="2"
      stroke="#f5c842"
      strokeWidth="2"
      fill="#fffbea"
    />
    <rect
      x="32"
      y="28"
      width="10"
      height="8"
      rx="2"
      stroke="#3aaa5e"
      strokeWidth="2"
      fill="#f0faf4"
    />
    <path
      d="M24 16v6M24 22H11M24 22h19M11 28v-6M43 28v-6"
      stroke="#3aaa5e"
      strokeWidth="1.5"
    />
  </svg>
);

/* ── DATA ── */
const categoryItems: { label: string; icon: FC }[] = [
  { label: "Milks and Dairies", icon: MilkIcon },
  { label: "Wines & Drinks", icon: WineIcon },
  { label: "Clothing & beauty", icon: ClothingIcon },
  { label: "Fresh Seafood", icon: SeafoodIcon },
  { label: "Pet Foods & Toy", icon: PetIcon },
  { label: "Fast food", icon: FastFoodIcon },
  { label: "Baking material", icon: BakingIcon },
  { label: "Vegetables", icon: VeggieIcon },
  { label: "Fresh Fruit", icon: FruitIcon },
  { label: "Bread and Juice", icon: BreadIcon },
  { label: "Milks and Dairies", icon: TagIcon },
  { label: "Wines & Drinks", icon: InvoiceIcon },
  { label: "Clothing & beauty", icon: OrgChartIcon },
  { label: "Fresh Seafood", icon: SeafoodIcon },
];

const navLinks: { label: string; hasDropdown: boolean; highlight?: boolean }[] =
  [
    { label: "Deals", hasDropdown: false },
    { label: "Home", hasDropdown: true, highlight: true },
    { label: "About", hasDropdown: false },
    { label: "Shop", hasDropdown: true },
    { label: "Vendors", hasDropdown: true },
    { label: "Mega menu", hasDropdown: true },
    { label: "Blog", hasDropdown: true },
    { label: "Pages", hasDropdown: true },
    { label: "Contact", hasDropdown: false },
  ];

/* ── COMPONENT ── */
export default function Navbar2() {
  const [catOpen, setCatOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? categoryItems : categoryItems.slice(0, 10);

  return (
    <nav className="bg-white border-b border-gray-100  sticky top-0 z-50 hidden lg:block">
      <div className="max-w-8xl mx-auto  flex items-center h-14 gap-0">
        {/* ── BROWSE ALL CATEGORIES ── */}
        <div className="relative">
          <button
            onClick={() => setCatOpen(!catOpen)}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 h-14 transition-colors whitespace-nowrap"
          >
            {/* grid icon */}
            <svg
              className="w-4 h-4 flex-shrink-0"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <rect x="0" y="0" width="6" height="6" rx="1" />
              <rect x="10" y="0" width="6" height="6" rx="1" />
              <rect x="0" y="10" width="6" height="6" rx="1" />
              <rect x="10" y="10" width="6" height="6" rx="1" />
            </svg>
            Browse All Categories
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown */}
          {catOpen && (
            <div className="absolute top-full left-0 mt-0 w-[380px] bg-white rounded-b-xl shadow-2xl border border-gray-100 z-50 py-4 px-4">
              <div className="grid grid-cols-2 gap-2">
                {visible.map((cat, i) => {
                  const Icon = cat.icon;
                  const isActive = i === 12; // "Clothing & beauty" in expanded list
                  return (
                    <button
                      key={`${cat.label}-${i}`}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all text-left group
                        ${
                          isActive
                            ? "border-green-300 bg-green-50"
                            : "border-transparent hover:bg-green-50 hover:border-green-100"
                        }`}
                    >
                      <span className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-white transition-colors flex-shrink-0">
                        <Icon />
                      </span>
                      <span
                        className={`text-sm font-semibold ${isActive ? "text-green-600" : "text-gray-700 group-hover:text-green-700"}`}
                      >
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Show more / Show less */}
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-3 w-full flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-green-600 font-medium transition-colors py-2"
              >
                <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center font-bold leading-none">
                  {showAll ? "−" : "+"}
                </span>
                {showAll ? "Show less..." : "Show more..."}
              </button>
            </div>
          )}
        </div>

        {/* ── NAV LINKS ── */}
        <div className="flex items-center flex-1 px-2">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <button
                className={`flex items-center gap-0.5 px-3 h-14 text-sm font-medium transition-colors whitespace-nowrap
                  ${
                    link.highlight || link.label === "Mega menu"
                      ? "text-green-500 hover:text-green-700"
                      : "text-gray-700 hover:text-green-600"
                  }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className="w-3.5 h-3.5 ml-0.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* ── MEGA MENU DROPDOWN ── */}
              {link.label === "Mega menu" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[860px] bg-white shadow-2xl border border-gray-100 z-50 hidden group-hover:flex rounded-b-xl overflow-hidden">
                  {/* Col 1 */}
                  <div className="flex-1 px-8 py-6">
                    <h3 className="text-green-500 font-bold text-sm mb-4">
                      Fruit & Vegetables
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Meat & Poultry",
                        "Fresh Vegetables",
                        "Herbs & Seasonings",
                        "Cuts & Sprouts",
                        "Exotic Fruits & Veggies",
                        "Packaged Produce",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-gray-100 my-6" />

                  {/* Col 2 */}
                  <div className="flex-1 px-8 py-6">
                    <h3 className="text-green-500 font-bold text-sm mb-4">
                      Breakfast & Dairy
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Milk & Flavoured Milk",
                        "Butter and Margarine",
                        "Eggs Substitutes",
                        "Marmalades",
                        "Sour Cream",
                        "Cheese",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="w-px bg-gray-100 my-6" />

                  {/* Col 3 */}
                  <div className="flex-1 px-8 py-6">
                    <h3 className="text-green-500 font-bold text-sm mb-4">
                      Meat & Seafood
                    </h3>
                    <ul className="space-y-3">
                      {[
                        "Breakfast Sausage",
                        "Dinner Sausage",
                        "Chicken",
                        "Sliced Deli Meat",
                        "Wild Caught Fillets",
                        "Crab and Shellfish",
                      ].map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Promo Banner */}
                  <div className="w-[240px] flex-shrink-0 bg-[#f5ede8] relative overflow-hidden flex flex-col justify-between p-6">
                    {/* 25% badge */}
                    <div className="absolute top-5 right-5 w-14 h-14 bg-yellow-400 rounded-full flex flex-col items-center justify-center text-center z-10 shadow-md">
                      <span className="text-xs font-extrabold text-gray-800 leading-tight">
                        25%
                      </span>
                      <span className="text-xs font-bold text-gray-800 leading-tight">
                        off
                      </span>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                        HOT DEALS
                      </p>
                      <h4 className="text-xl font-extrabold text-gray-800 leading-snug mb-1">
                        Dont miss
                        <br />
                        Trending
                      </h4>
                      <p className="text-green-500 font-bold text-base mb-4">
                        Save to 50%
                      </p>
                      <button className="bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                        Shop now
                      </button>
                    </div>

                    {/* Veggie illustration */}
                    <div className="absolute bottom-0 right-0 w-36 h-28 pointer-events-none select-none flex items-end justify-end">
                      <svg
                        viewBox="0 0 120 90"
                        fill="none"
                        className="w-full h-full opacity-90"
                      >
                        {/* basket */}
                        <ellipse
                          cx="60"
                          cy="72"
                          rx="44"
                          ry="12"
                          fill="#c8a882"
                        />
                        <path
                          d="M18 62 Q60 80 102 62 L98 42 Q60 58 22 42 Z"
                          fill="#d4b896"
                        />
                        <path
                          d="M22 42 Q60 56 98 42"
                          stroke="#b8956e"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        {/* veggies */}
                        <circle
                          cx="40"
                          cy="36"
                          r="10"
                          fill="#e05c3a"
                          opacity="0.9"
                        />
                        <path
                          d="M40 26 Q44 18 48 22"
                          stroke="#3aaa5e"
                          strokeWidth="2"
                          fill="none"
                        />
                        <ellipse
                          cx="62"
                          cy="30"
                          rx="8"
                          ry="12"
                          fill="#f5a623"
                          opacity="0.9"
                        />
                        <path
                          d="M62 18 Q66 12 68 16"
                          stroke="#3aaa5e"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          cx="80"
                          cy="38"
                          r="8"
                          fill="#9b59b6"
                          opacity="0.7"
                        />
                        <path
                          d="M80 30 Q84 24 86 28"
                          stroke="#3aaa5e"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M26 44 Q30 28 18 24 Q22 38 26 44Z"
                          fill="#3aaa5e"
                          opacity="0.8"
                        />
                        <path
                          d="M90 40 Q96 26 88 20 Q86 36 90 40Z"
                          fill="#3aaa5e"
                          opacity="0.8"
                        />
                        <circle
                          cx="55"
                          cy="46"
                          r="5"
                          fill="#fff"
                          opacity="0.6"
                        />
                        <circle
                          cx="70"
                          cy="50"
                          r="4"
                          fill="#c8a882"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── SUPPORT ── */}
        <div className="flex items-center gap-3 ml-auto pl-4 border-l border-gray-100">
          {/* headphone icon */}
          <div className="text-green-500">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm16 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-green-500 font-bold text-lg tracking-tight whitespace-nowrap">
              1900 - 888
            </div>
            <div className="text-gray-400 text-[11px] whitespace-nowrap">
              24/7 Support Center
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
