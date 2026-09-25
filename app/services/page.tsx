import Link from "next/link";
import type { Metadata } from "next";

const services = [
  {
    name: "Signature Cut",
    price: "R250",
    duration: "45 min",
    description:
      "Our flagship service. Consultation, precision cut, hot towel finish, and styling with premium product.",
  },
  {
    name: "Skin Fade",
    price: "R280",
    duration: "50 min",
    description:
      "Sharp, seamless fade with detailed edging, line-up, and finish. Skin-close or low fade — your call.",
  },
  {
    name: "Beard Sculpt",
    price: "R180",
    duration: "30 min",
    description:
      "Trim, shape, and line-up with hot towel prep and beard oil treatment. Leaves your beard sharp and conditioned.",
  },
  {
    name: "Cut & Beard Package",
    price: "R400",
    duration: "75 min",
    description:
      "The full experience. Signature cut plus full beard sculpt. Our most popular booking.",
  },
  {
    name: "Kids Cut",
    price: "R150",
    duration: "30 min",
    description:
      "A proper cut for the young gentlemen (ages 5–12). Patient, professional, and finished sharp.",
  },
  {
    name: "Hot Towel Shave",
    price: "R220",
    duration: "40 min",
    description:
      "Traditional straight-razor shave with hot towel preparation, oils, and post-shave balm.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="relative bg-charcoal text-cream py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/services.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Services & Pricing
          </p>
          <h1 className="text-6xl lg:text-8xl leading-none mb-6">
            The full menu.
          </h1>
          <p className="text-lg text-cream/70 max-w-2xl">
            Every service is delivered with the same standard of craft.
            No shortcuts, no rushed cuts.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-cream text-charcoal py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="divide-y divide-charcoal/10">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group relative py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-charcoal/[0.02] transition-colors px-4"
              >
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="font-heading text-4xl text-gold/30 group-hover:text-gold transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Name + Description */}
                <div className="md:col-span-7">
                  <h2 className="text-3xl mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-charcoal/60 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Duration */}
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-widest text-charcoal/40">
                    {service.duration}
                  </p>
                </div>

                {/* Price */}
                <div className="md:col-span-2 text-right">
                  <span className="font-heading text-3xl text-gold">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/50 mb-6">
              Ready for a proper cut?
            </p>
            <Link
              href="/booking"
              className="inline-block bg-gold text-charcoal px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-charcoal hover:text-cream transition-colors"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}