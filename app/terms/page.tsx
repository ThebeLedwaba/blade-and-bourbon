export default function TermsPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-charcoal text-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Legal
          </p>
          <h1 className="text-6xl lg:text-8xl leading-none mb-6">
            Terms & Conditions.
          </h1>
          <p className="text-lg text-cream/70 max-w-2xl">
            Last updated: 24 September 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-cream text-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-10 text-charcoal/80 leading-relaxed">

            <div>
              <h2 className="text-2xl mb-4">1. Bookings</h2>
              <p>
                All appointments must be booked through our online booking
                system or by telephone. A booking is confirmed once you receive
                a confirmation screen or email. We reserve the right to refuse
                or reschedule bookings at our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">2. Cancellations</h2>
              <p>
                We ask that you provide at least 24 hours' notice for
                cancellations or rescheduling. Late cancellations or no-shows
                may incur a fee of 50% of the booked service price. Repeat
                no-shows may result in the requirement of prepayment for future
                bookings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">3. Late Arrivals</h2>
              <p>
                If you arrive more than 15 minutes late for your appointment,
                we may need to shorten the service or reschedule your booking
                to avoid impacting other clients. In such cases, the full
                service price may still apply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">4. Pricing</h2>
              <p>
                All prices displayed on this website are in South African Rand
                (ZAR) and include VAT where applicable. Prices are subject to
                change without prior notice. The price confirmed at the time of
                booking is the price that will be honoured for that appointment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">5. Services</h2>
              <p>
                Our services are provided by qualified barbers. If you are
                unsatisfied with a service, please notify us within 48 hours
                and we will arrange an opportunity to correct the issue at no
                additional cost.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">6. Health & Safety</h2>
              <p>
                Clients are asked to disclose any skin conditions, allergies,
                or sensitivities prior to their appointment. Blade & Bourbon
                uses professional-grade products and sterilised equipment.
                We cannot be held liable for reactions arising from
                undisclosed conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">7. Personal Information</h2>
              <p>
                Personal information collected through our booking system is
                used solely to process your appointment and provide
                confirmation. We do not sell, share, or distribute your
                information to third parties, in compliance with the Protection
                of Personal Information Act (POPIA) of South Africa.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">8. Liability</h2>
              <p>
                Blade & Bourbon is not liable for any loss, damage, or injury
                arising from the use of our website or services, except where
                such liability cannot be excluded by South African law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">9. Amendments</h2>
              <p>
                We reserve the right to update these Terms & Conditions at any
                time. Any changes will be posted on this page with an updated
                revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">10. Contact</h2>
              <p>
                For any questions regarding these terms, please contact us at{" "}
                <a
                  href="mailto:hello@bladeandbourbon.co.za"
                  className="text-gold hover:underline"
                >
                  hello@bladeandbourbon.co.za
                </a>{" "}
                or call{" "}
                <a href="tel:+27112345678" className="text-gold hover:underline">
                  +27 11 234 5678
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}