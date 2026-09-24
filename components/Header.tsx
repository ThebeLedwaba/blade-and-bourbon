"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/booking", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="font-heading text-2xl tracking-widest text-gold">
              BLADE & BOURBON
            </span>
            <span className="text-[10px] tracking-[0.3em] text-cream/60 uppercase">
              Sharp cuts · Smooth pours
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="bg-gold text-charcoal px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-cream transition-colors"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden flex flex-col gap-4 py-6 border-t border-cream/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-widest hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-charcoal px-6 py-3 text-sm font-bold uppercase tracking-widest text-center"
            >
              Book Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}