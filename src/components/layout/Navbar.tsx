"use client";

import Link from "next/link";
import { useState } from "react";
import LevelSelector from "./LevelSelector";

const NAV_LINKS = [
  { href: "/rules", label: "Rules" },
  { href: "/training", label: "Training" },
  { href: "/progress", label: "Progress" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-emerald-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">&#9918;</span>
            <span>FriendlyUmp</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-emerald-100 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Level selector - desktop */}
          <div className="hidden md:block">
            <LevelSelector />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-emerald-700"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-emerald-100 hover:text-white py-2 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <p className="text-emerald-300 text-xs mb-2 uppercase tracking-wide">Playing Level</p>
              <LevelSelector />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
