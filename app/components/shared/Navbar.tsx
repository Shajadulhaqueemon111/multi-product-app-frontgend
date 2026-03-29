"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const categories = [
  "All Categories",
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Bakery",
  "Meat & Fish",
  "Snacks",
  "Beverages",
  "Frozen Foods",
];

export default function Navbar() {
  const [catOpen, setCatOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-green-100 ">
      {/* ════ MOBILE (sm) NAVBAR ════ */}
      <div className="flex md:hidden items-center justify-between  py-3">
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 hover:text-green-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo — Center */}
        <a
          href="#"
          className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2"
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9"
          >
            <ellipse
              cx="20"
              cy="28"
              rx="14"
              ry="8"
              fill="#3aaa5e"
              opacity="0.85"
            />
            <ellipse
              cx="14"
              cy="22"
              rx="9"
              ry="6"
              fill="#2d8a4c"
              opacity="0.7"
              transform="rotate(-20 14 22)"
            />
            <ellipse
              cx="26"
              cy="22"
              rx="9"
              ry="6"
              fill="#2d8a4c"
              opacity="0.7"
              transform="rotate(20 26 22)"
            />
            <ellipse cx="17" cy="14" rx="6" ry="7" fill="#f5c842" />
            <ellipse cx="25" cy="16" rx="5" ry="6" fill="#f0b429" />
            <circle cx="15" cy="12" r="1" fill="#1a2e1a" />
            <circle cx="19" cy="11" r="1" fill="#1a2e1a" />
          </svg>
          <div className="leading-tight">
            <span
              className="text-xl font-extrabold text-green-600 tracking-tight"
              style={{ fontFamily: "'Nunito',sans-serif" }}
            >
              Nest
            </span>
            <div className="text-[8px] font-semibold text-gray-400 tracking-widest uppercase -mt-1">
              Mart & Grocery
            </div>
          </div>
        </a>

        {/* Right: Wishlist + Cart */}
        <div className="flex items-center gap-4">
          <MobileIcon
            badge={4}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            }
          />
          <MobileIcon
            badge={2}
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            }
          />
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-green-100 px-4 pb-4 pt-3 bg-white flex flex-col gap-3">
          {/* Search */}
          <div className="flex items-center border-2 border-green-200 rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search for items..."
              className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none"
            />
            <button className="px-3 py-2 text-green-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
            </button>
          </div>
          {/* Category links */}
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ════ DESKTOP (md+) NAVBAR ════ */}
      <div className="hidden md:flex max-w-8xl mx-auto px-4 py-3 items-center gap-6">
        {/* ── LOGO ── */}
        <a href="#" className="flex items-center gap-2 min-w-fit">
          <div className="relative w-10 h-10">
            {/* Leaf base */}
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              <ellipse
                cx="20"
                cy="28"
                rx="14"
                ry="8"
                fill="#3aaa5e"
                opacity="0.85"
              />
              <ellipse
                cx="14"
                cy="22"
                rx="9"
                ry="6"
                fill="#2d8a4c"
                opacity="0.7"
                transform="rotate(-20 14 22)"
              />
              <ellipse
                cx="26"
                cy="22"
                rx="9"
                ry="6"
                fill="#2d8a4c"
                opacity="0.7"
                transform="rotate(20 26 22)"
              />
              {/* Potato */}
              <ellipse cx="17" cy="14" rx="6" ry="7" fill="#f5c842" />
              <ellipse cx="25" cy="16" rx="5" ry="6" fill="#f0b429" />
              {/* eyes */}
              <circle cx="15" cy="12" r="1" fill="#1a2e1a" />
              <circle cx="19" cy="11" r="1" fill="#1a2e1a" />
            </svg>
          </div>
          <div className="leading-tight">
            <span
              className="text-2xl font-extrabold text-green-600 tracking-tight"
              style={{ fontFamily: "'Nunito',sans-serif" }}
            >
              Nest
            </span>
            <div className="text-[9px] font-semibold text-gray-400 tracking-widest uppercase -mt-1">
              Mart & Grocery
            </div>
          </div>
        </a>

        {/* ── SEARCH BAR ── */}
        <div className="flex flex-1 items-center border-2 border-green-200 rounded-full overflow-hidden bg-white hover:border-green-400 focus-within:border-green-500 transition-all shadow-sm">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-green-50 border-r border-green-200 hover:bg-green-100 transition-colors whitespace-nowrap"
            >
              {selectedCat}
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform ${catOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {catOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-green-100 py-1 z-50">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCat(cat);
                      setCatOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700 transition-colors
                      ${selectedCat === cat ? "text-green-600 font-semibold bg-green-50" : "text-gray-700"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for items..."
            className="flex-1 px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />

          {/* Search Button */}
          <button className="px-4 py-2.5 text-green-500 hover:text-green-700 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </button>
        </div>

        {/* ── RIGHT ICONS ── */}
        <div className="flex items-center gap-5">
          {/* Compare */}
          <NavIcon
            badge={3}
            label="Compare"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01"
                />
              </svg>
            }
          />

          {/* Wishlist */}
          <NavIcon
            badge={6}
            label="Wishlist"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            }
          />

          {/* Cart */}
          <NavIcon
            badge={2}
            label="Cart"
            icon={
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            }
          />

          {/* Account */}
          <button className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-green-600 transition-colors group">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-[11px] font-medium">Account</span>
          </button>
        </div>
      </div>
      {/* end desktop */}
    </nav>
  );
}

interface MobileIconProps {
  icon: ReactNode;
  badge: number;
}

function MobileIcon({ icon, badge }: MobileIconProps) {
  return (
    <button className="relative text-gray-600 hover:text-green-600 transition-colors">
      {icon}
      {badge > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-green-500 text-white text-[9px] font-bold min-w-4 min-h-4 flex items-center justify-center rounded-full leading-none px-0.5">
          {badge}
        </span>
      )}
    </button>
  );
}

interface NavIconProps {
  icon: ReactNode;
  label: string;
  badge: number;
}

function NavIcon({ icon, label, badge }: NavIconProps) {
  return (
    <button className="relative flex flex-col items-center gap-0.5 text-gray-600 hover:text-green-600 transition-colors group">
      <div className="relative">
        {icon}
        {badge > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold w-4.5 h-4.5 min-w-4.5 min-h-4.5 flex items-center justify-center rounded-full leading-none px-1">
            {badge}
          </span>
        )}
      </div>
      <span className="text-[11px] font-medium">{label}</span>
    </button>
  );
}
