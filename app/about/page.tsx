import Link from "next/link";

const barbers = [
  {
    name: "Marco",
    role: "Founder & Master Barber",
    years: "12 years",
    bio: "Trained in London, obsessed with the perfect fade. Marco opened Blade & Bourbon to bring proper barbering back to Rosebank.",
  },
  {
    name: "Sipho",
    role: "Senior Barber",
    years: "8 years",
    bio: "Beard specialist. If your beard isn't shaped properly, Sipho will tell you — and then fix it.",
  },
  {
    name: "Thabo",
    role: "Barber & Stylist",
    years: "5 years",
    bio: "Handles our younger clients and anyone wanting a sharp, modern style. Patient, precise, professional.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-charcoal text-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Our Story
          </p>
          <h1 className="text-6xl lg:text-8xl leading-none mb-6">
            Built on craft.
          </h1>
          <p className="text-lg text-cream/70 max-w-2xl">
            Blade & Bourbon was opened in 2018 with one goal — bring proper
            barbering back to Rosebank. No rushed cuts. No shortcuts.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-cream text-charcoal py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl mb-8">The story.</h2>
          <div className="space-y-6 text-lg leading-relaxed text-charcoal/80">
            <p>
              We opened on Oxford Road in 2018 with two chairs, one espresso
              machine, and a simple promise: every client leaves sharper than
              they arrived.
            </p>
            <p>
              Seven years later, that promise hasn't changed. Our barbers are
              trained, certified, and obsessed with the details — from the
              first consultation to the final style.
            </p>
            <p>
              Whether you're after a classic cut, a skin fade, or a full
              gentleman's grooming session — you'll get the same standard of
              craft every single visit.
            </p>
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section className="bg-brown text-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              The Team
            </p>
            <h2 className="text-5xl lg:text-6xl">The barbers.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {barbers.map((barber) => (
              <div key={barber.name} className="border-t border-cream/20 pt-8">
                <h3 className="text-3xl mb-2">{barber.name}</h3>
                <p className="text-gold text-sm uppercase tracking-widest mb-1">
                  {barber.role}
                </p>
                <p className="text-cream/50 text-xs uppercase tracking-widest mb-6">
                  {barber.years} experience
                </p>
                <p className="text-cream/70 leading-relaxed text-sm">
                  {barber.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream text-charcoal py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl mb-8">
            Ready when you are.
          </h2>
          <Link
            href="/booking"
            className="inline-block bg-gold text-charcoal px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-charcoal hover:text-cream transition-colors"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}