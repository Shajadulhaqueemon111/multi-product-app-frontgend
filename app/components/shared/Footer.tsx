/* eslint-disable react-hooks/refs */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// ── Animate-on-scroll hook ──────────────────────────────────────────────────
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    },
  };
}

// ── Data ────────────────────────────────────────────────────────────────────
const company = [
  "About Us",
  "Delivery Information",
  "Privacy Policy",
  "Terms & Conditions",
  "Contact Us",
  "Support Center",
  "Careers",
];
const account = [
  "Sign In",
  "View Cart",
  "My Wishlist",
  "Track My Order",
  "Help Ticket",
  "Shipping Details",
  "Compare products",
];
const corporate = [
  "Become a Vendor",
  "Affiliate Program",
  "Farm Business",
  "Farm Careers",
  "Our Suppliers",
  "Accessibility",
  "Promotions",
];
const popular = [
  "Milk & Flavoured Milk",
  "Butter and Margarine",
  "Eggs Substitutes",
  "Marmalades",
  "Sour Cream and Dips",
  "Tea & Kombucha",
  "Cheese",
];

// ── FooterCol ───────────────────────────────────────────────────────────────
function FooterCol({ title, links, bold, delay = 0 }: any) {
  const anim = useFadeIn(delay);
  return (
    <div ref={anim.ref} style={anim.style}>
      <h4
        className={`mb-5 ${bold ? "text-white font-bold text-base tracking-wide" : "text-xs text-green-400 uppercase tracking-[0.18em] font-semibold"}`}
      >
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((link: any) => (
          <li key={link}>
            <Link
              href="#"
              className="group text-gray-400 text-sm transition-colors duration-200 hover:text-green-400 flex items-center gap-1.5"
            >
              <span className="inline-block w-0 group-hover:w-2.5 h-px bg-green-400 transition-all duration-200 rounded-full flex-shrink-0" />
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main ────────────────────────────────────────────────────────────────────
export default function Footer() {
  const brandAnim = useFadeIn(0);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [dividerVisible, setDividerVisible] = useState(false);

  useEffect(() => {
    const el = dividerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDividerVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0d1f14 0%, #0a1a10 60%, #071510 100%)",
      }}
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58,170,96,0.13) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "10%",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58,170,96,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "45%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(58,170,96,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Top border glow */}
      <div
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, #3aaa60 30%, #52c878 50%, #3aaa60 70%, transparent 100%)",
          opacity: 0.7,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* ── Col 1: Brand ── */}
          <div
            className="lg:col-span-1"
            ref={brandAnim.ref}
            style={brandAnim.style}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-4 group w-fit">
              <div
                className="flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 44,
                  height: 44,
                  background: "linear-gradient(135deg,#3aaa60,#1e7a40)",
                  boxShadow: "0 4px 18px rgba(58,170,96,0.35)",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>🛒</span>
              </div>
              <div>
                <div
                  className="font-extrabold text-2xl leading-none text-white"
                  style={{
                    fontFamily: "Georgia,serif",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Nest
                </div>
                <div
                  className="text-xs font-semibold uppercase"
                  style={{ color: "#3aaa60", letterSpacing: "0.18em" }}
                >
                  Mart &amp; Grocery
                </div>
              </div>
            </Link>

            <p
              className="text-gray-500 text-sm mb-5 leading-relaxed"
              style={{ maxWidth: 220 }}
            >
              Fresh produce &amp; daily essentials delivered straight to your
              door.
            </p>

            {/* Contact */}
            <ul className="space-y-2.5 text-sm text-gray-400 mb-7">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  val: "5171 W Campbell Ave, Kent, Utah 53127 US",
                },
                { icon: "🎧", label: "Call Us", val: "(+91) 540-025-124553" },
                { icon: "✉️", label: "Email", val: "sale@Nest.com" },
                { icon: "🕐", label: "Hours", val: "10:00 - 18:00, Mon - Sat" },
              ].map(({ icon, label, val }) => (
                <li key={label} className="flex items-start gap-2.5 group">
                  <span className="text-base mt-px flex-shrink-0">{icon}</span>
                  <span>
                    <strong className="text-gray-300 font-medium">
                      {label}:
                    </strong>{" "}
                    <span className="group-hover:text-gray-300 transition-colors duration-200">
                      {val}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Install App */}
            <div className="mb-6">
              <h3 className="font-bold text-white text-sm mb-1 tracking-wide">
                Install App
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                From App Store or Google Play
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    minWidth: 118,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <div
                      className="text-gray-400"
                      style={{ fontSize: "0.6rem", lineHeight: 1 }}
                    >
                      Download on the
                    </div>
                    <div
                      className="text-white font-semibold"
                      style={{ fontSize: "0.78rem", lineHeight: 1.3 }}
                    >
                      App Store
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 rounded-xl px-3 py-2 transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    minWidth: 118,
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      fill="#EA4335"
                      d="M3.18 23.76c.3.16.64.24.99.24.43 0 .85-.12 1.22-.35l10.2-5.88-2.93-2.93-9.48 8.92z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M20.8 9.24l-2.93-1.69-3.29 3.29 3.29 3.29 2.96-1.71c.84-.49.84-1.69-.03-2.18z"
                    />
                    <path
                      fill="#4285F4"
                      d="M3.18.24L12.66 9.72l2.93-2.93L5.39.35C5.02.12 4.6 0 4.17 0c-.35 0-.69.08-.99.24z"
                    />
                    <path
                      fill="#34A853"
                      d="M3.18.24C2.34.72 1.82 1.62 1.82 2.62v18.76c0 1 .52 1.9 1.36 2.38l9.48-11.76L3.18.24z"
                    />
                  </svg>
                  <div>
                    <div
                      className="text-gray-400"
                      style={{ fontSize: "0.6rem", lineHeight: 1 }}
                    >
                      GET IT ON
                    </div>
                    <div
                      className="text-white font-semibold"
                      style={{ fontSize: "0.78rem", lineHeight: 1.3 }}
                    >
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Payment */}
            <div>
              <p className="text-xs text-gray-500 mb-2.5 uppercase tracking-widest">
                Secured Payment Gateways
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <div
                  className="rounded-lg px-2.5 py-1.5 font-extrabold text-blue-300 text-xs tracking-wider"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  VISA
                </div>
                <div
                  className="flex items-center rounded-lg px-2 py-1.5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-red-500"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-400 -ml-2"></div>
                </div>
                <div
                  className="flex items-center rounded-lg px-2 py-1.5"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                  <div className="w-5 h-5 rounded-full bg-red-400 -ml-2"></div>
                </div>
                <div
                  className="rounded-lg px-2.5 py-1.5 text-blue-200 font-bold text-xs tracking-wide"
                  style={{
                    background: "rgba(59,130,246,0.18)",
                    border: "1px solid rgba(59,130,246,0.25)",
                  }}
                >
                  AMEX
                </div>
              </div>
            </div>
          </div>

          {/* ── Link Columns ── */}
          <FooterCol title="Company" links={company} delay={100} />
          <FooterCol title="Account" links={account} bold delay={200} />
          <FooterCol title="Corporate" links={corporate} bold delay={300} />
          <FooterCol title="Popular" links={popular} bold delay={400} />
        </div>

        {/* Animated divider */}
        <div
          ref={dividerRef}
          className="mt-12 mb-6 overflow-hidden rounded-full"
          style={{ height: 1, background: "rgba(255,255,255,0.06)" }}
        >
          <div
            style={{
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, #3aaa60, #52c878, #3aaa60, transparent)",
              width: dividerVisible ? "100%" : "0%",
              transition: "width 1.2s ease 0.2s",
            }}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#3aaa60" }}>Nest Mart &amp; Grocery</span>.
            All rights reserved.
          </span>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Sitemap"].map((t) => (
              <Link
                key={t}
                href="#"
                className="hover:text-green-400 transition-colors duration-150"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
