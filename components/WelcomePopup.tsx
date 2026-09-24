"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds, only if user hasn't seen it this session
    const hasSeen = sessionStorage.getItem("welcome-popup-seen");
    if (hasSeen) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("welcome-popup-seen", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/80 backdrop-blur-sm px-4">
      <div className="relative bg-charcoal text-cream border border-gold/30 max-w-md w-full p-10">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="absolute top-4 right-4 text-cream/50 hover:text-gold transition-colors"
        >
          <X size={20} />
        </button>

        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
          First Visit?
        </p>
        <h2 className="text-4xl leading-none mb-6">
          Enjoy 15% off
          <br />
          your first cut.
        </h2>
        <p className="text-cream/70 text-sm leading-relaxed mb-8">
          Book your first appointment at Blade & Bourbon and receive 15% off
          any service. Mention code <span className="text-gold font-bold">FIRST15</span> at checkout.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/booking"
            onClick={() => setIsOpen(false)}
            className="bg-gold text-charcoal py-4 text-center font-bold uppercase tracking-widest text-sm hover:bg-cream transition-colors"
          >
            Claim Offer
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xs uppercase tracking-widest text-cream/50 hover:text-cream transition-colors"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}