"use client";

import { useState } from "react";

export default function NewsLetterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-6">
      {/* Banner Container */}
      <div
        className="relative w-full max-w-8xl rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #c8f0d8 0%, #d6f5e3 60%, #b8ecd0 100%)",
          minHeight: "200px",
        }}
      >
        {/* Subtle background pattern circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border opacity-10"
              style={{
                borderColor: "#4caf6e",
                width: `${120 + i * 40}px`,
                height: `${120 + i * 40}px`,
                top: `${-30 + i * 10}%`,
                left: `${10 + i * 8}%`,
              }}
            />
          ))}
        </div>

        {/* Floating veggie emojis (decorative) */}
        <span
          className="absolute text-4xl select-none pointer-events-none"
          style={{
            top: "12%",
            right: "38%",
            transform: "rotate(-15deg)",
            fontSize: "2.2rem",
          }}
        >
          🥦
        </span>
        <span
          className="absolute text-4xl select-none pointer-events-none"
          style={{
            top: "55%",
            right: "44%",
            transform: "rotate(10deg)",
            fontSize: "2rem",
          }}
        >
          🧄
        </span>
        <span
          className="absolute text-4xl select-none pointer-events-none"
          style={{
            top: "30%",
            right: "30%",
            transform: "rotate(-8deg)",
            fontSize: "1.8rem",
          }}
        >
          🍅
        </span>
        <span
          className="absolute text-4xl select-none pointer-events-none"
          style={{
            top: "62%",
            right: "33%",
            transform: "rotate(12deg)",
            fontSize: "2rem",
          }}
        >
          🌿
        </span>
        <span
          className="absolute text-4xl select-none pointer-events-none"
          style={{
            top: "10%",
            right: "25%",
            transform: "rotate(-5deg)",
            fontSize: "1.6rem",
          }}
        >
          🥕
        </span>
        <span
          className="absolute text-4xl select-none pointer-events-none"
          style={{
            top: "50%",
            right: "22%",
            transform: "rotate(8deg)",
            fontSize: "1.8rem",
          }}
        >
          🫑
        </span>

        {/* Right side: delivery person emoji stand-in */}
        <div
          className="absolute right-0 bottom-0 flex flex-col items-center justify-end select-none pointer-events-none"
          style={{ width: "220px", height: "100%" }}
        >
          <div style={{ fontSize: "7rem", lineHeight: 1, marginBottom: "0px" }}>
            🧑‍🍳
          </div>
        </div>

        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 py-10 max-w-lg">
          {/* Heading */}
          <h1
            className="font-extrabold leading-tight mb-2"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#1a3c2a",
              fontFamily: "'Georgia', serif",
            }}
          >
            Stay home &amp; get your daily
            <br />
            needs from our shop
          </h1>

          {/* Subtext */}
          <p
            className="mb-6"
            style={{
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              color: "#4a6a58",
              fontFamily: "sans-serif",
            }}
          >
            Start Your Daily Shopping with{" "}
            <span style={{ color: "#3aaa60", fontWeight: "600" }}>
              Nest Mart
            </span>
          </p>

          {/* Subscribe input */}
          <div
            className="flex items-center gap-0"
            style={{ maxWidth: "420px" }}
          >
            <div
              className="flex items-center flex-1"
              style={{
                background: "white",
                borderRadius: "999px 0 0 999px",
                padding: "10px 18px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            >
              {/* Paper plane icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#aac5b5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 flex-shrink-0"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="outline-none border-none bg-transparent flex-1 text-gray-600 placeholder-gray-400"
                style={{ fontSize: "0.92rem", minWidth: 0 }}
              />
            </div>
            <button
              onClick={handleSubscribe}
              className="font-semibold text-white transition-all duration-200 active:scale-95"
              style={{
                background: subscribed
                  ? "#22c55e"
                  : "linear-gradient(135deg, #3aaa60 0%, #2d8f50 100%)",
                borderRadius: "0 999px 999px 0",
                padding: "10px 26px",
                fontSize: "0.95rem",
                letterSpacing: "0.01em",
                boxShadow: "0 2px 8px rgba(58,170,96,0.3)",
                whiteSpace: "nowrap",
                border: "none",
                cursor: "pointer",
              }}
            >
              {subscribed ? "✓ Done!" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
