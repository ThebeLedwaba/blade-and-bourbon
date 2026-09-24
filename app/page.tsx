import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-charcoal text-cream min-h-[90vh] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-48">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Est. 2018 · Rosebank, Johannesburg
            </p>
            <h1 className="text-6xl lg:text-8xl leading-none mb-6">
              Where sharp cuts
              <br />
              meet smooth pours.
            </h1>
            <p className="text-lg text-cream/70 mb-10 max-w-lg">
              A premium barbershop experience. Precision cuts, classic shaves,
              and a glass of something good while you wait.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="bg-gold text-charcoal px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-cream transition-colors"
              >
                Book Your Cut
              </Link>
              <Link
                href="/services"
                className="border border-cream/30 px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-gold hover:text-gold transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO BAR */}
      <section className="bg-brown text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm uppercase tracking-widest">
            <div className="flex items-center gap-3">
              <span className="text-gold text-xs">◆</span>
              <span>Tue–Fri 9:00–19:00</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold text-xs">◆</span>
              <span>Sat 8:00–17:00</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold text-xs">◆</span>
              <span>42 Oxford Road, Rosebank</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
{/* SERVICES PREVIEW */}
<section className="bg-cream text-charcoal py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mb-16 max-w-2xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
        Our Craft
      </p>
      <h2 className="text-5xl lg:text-6xl mb-6">
        Services built for sharp men.
      </h2>
      <p className="text-lg text-charcoal/70">
        From precision fades to full gentleman's grooming — every service is
        delivered with the same attention to detail.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Signature Cut",
          price: "R250",
          description:
            "Consultation, precision cut, hot towel finish and style.",
        },
        {
          name: "Skin Fade",
          price: "R280",
          description:
            "Sharp, seamless fade with detailed edging and styling.",
        },
        {
          name: "Beard Sculpt",
          price: "R180",
          description:
            "Trim, shape, hot towel and beard oil treatment.",
        },
      ].map((service) => (
        <div
          key={service.name}
          className="border border-charcoal/10 p-8 hover:border-gold transition-colors group"
        >
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="text-2xl">{service.name}</h3>
            <span className="text-gold font-heading text-xl">
              {service.price}
            </span>
          </div>
          <p className="text-charcoal/60 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>

    <div className="mt-12 text-center">
      <Link
        href="/services"
        className="inline-block border border-charcoal px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-charcoal hover:text-cream transition-colors"
      >
        View All Services
      </Link>
    </div>
  </div>
</section>