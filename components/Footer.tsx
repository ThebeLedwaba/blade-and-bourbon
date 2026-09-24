import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-heading text-2xl tracking-widest text-gold">
                BLADE & BOURBON
              </span>
              <span className="text-[10px] tracking-[0.3em] text-cream/60 uppercase">
                Sharp cuts · Smooth pours
              </span>
            </Link>
            <p className="text-sm text-cream/60 leading-relaxed">
              Premium barbershop in Rosebank, Johannesburg. Craft cuts,
              classic shaves, and a proper experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold mb-6">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-cream/70 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-cream/70 hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/70 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-cream/70 hover:text-gold transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-cream/70 hover:text-gold transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold mb-6">
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>42 Oxford Road</li>
              <li>Rosebank, Johannesburg</li>
              <li>
                <a href="tel:+27112345678" className="hover:text-gold transition-colors">
                  +27 11 234 5678
                </a>
              </li>
              <li>
                <a href="mailto:hello@bladeandbourbon.co.za" className="hover:text-gold transition-colors">
                  hello@bladeandbourbon.co.za
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold mb-6">
              Hours
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex justify-between">
                <span>Tue – Fri</span>
                <span>9:00 – 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 – 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sun – Mon</span>
                <span>Closed</span>
              </li>
            </ul>

            {/* Social — inline SVG icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream/60 hover:text-gold transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-cream/60 hover:text-gold transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-cream/60 hover:text-gold transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40 uppercase tracking-widest">
          <p>© 2026 Blade & Bourbon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}