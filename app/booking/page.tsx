"use client";

import { useState } from "react";

const services = [
  "Signature Cut — R250",
  "Skin Fade — R280",
  "Beard Sculpt — R180",
  "Cut & Beard Package — R400",
  "Kids Cut — R150",
  "Hot Towel Shave — R220",
];

const barbers = ["Any available", "Marco", "Sipho", "Thabo"];

const times = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00",
];

export default function BookingPage() {
  const [form, setForm] = useState({
    service: "",
    barber: "Any available",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.service || !form.date || !form.time || !form.name || !form.email) {
      alert("Please fill in all required fields.");
      return;
    }
    setConfirmed(true);
  };

    if (confirmed) {
    // Build calendar data
    const [year, month, day] = form.date.split("-");
    const [hour, minute] = form.time.split(":");
    const startDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // +1 hour

    const formatICSDate = (d: Date) =>
      d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const googleStart = formatICSDate(startDate);
    const googleEnd = formatICSDate(endDate);

    const title = encodeURIComponent(`${form.service} at Blade & Bourbon`);
    const details = encodeURIComponent(
      `Barber: ${form.barber}\nBooking: Blade & Bourbon`
    );
    const location = encodeURIComponent("42 Oxford Road, Rosebank, Johannesburg");

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${googleStart}/${googleEnd}&details=${details}&location=${location}`;

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Blade & Bourbon//Booking//EN
BEGIN:VEVENT
UID:${Date.now()}@bladeandbourbon.co.za
DTSTAMP:${formatICSDate(new Date())}
DTSTART:${formatICSDate(startDate)}
DTEND:${formatICSDate(endDate)}
SUMMARY:${form.service} at Blade & Bourbon
DESCRIPTION:Barber - ${form.barber}
LOCATION:42 Oxford Road, Rosebank, Johannesburg
END:VEVENT
END:VCALENDAR`;

    const downloadICS = () => {
      const blob = new Blob([icsContent], {
        type: "text/calendar;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "blade-and-bourbon-booking.ics";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };

    return (
      <main className="min-h-screen bg-charcoal text-cream flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Booking Confirmed
          </p>
          <h1 className="text-5xl lg:text-7xl leading-none mb-8">
            See you soon, {form.name.split(" ")[0]}.
          </h1>

          <div className="border border-cream/20 p-8 space-y-4 mb-8">
            <div className="flex justify-between border-b border-cream/10 pb-4">
              <span className="text-cream/50 text-sm uppercase tracking-widest">Service</span>
              <span>{form.service}</span>
            </div>
            <div className="flex justify-between border-b border-cream/10 pb-4">
              <span className="text-cream/50 text-sm uppercase tracking-widest">Barber</span>
              <span>{form.barber}</span>
            </div>
            <div className="flex justify-between border-b border-cream/10 pb-4">
              <span className="text-cream/50 text-sm uppercase tracking-widest">Date</span>
              <span>{form.date}</span>
            </div>
            <div className="flex justify-between border-b border-cream/10 pb-4">
              <span className="text-cream/50 text-sm uppercase tracking-widest">Time</span>
              <span>{form.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-cream/50 text-sm uppercase tracking-widest">Location</span>
              <span>42 Oxford Road, Rosebank</span>
            </div>
          </div>

          {/* CALENDAR ACTIONS */}
          <div className="space-y-3 mb-8">
            <p className="text-xs uppercase tracking-widest text-cream/50 mb-3">
              Add to your calendar
            </p>

            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full border border-cream/20 px-6 py-4 hover:border-gold transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest">
                Add to Google Calendar
              </span>
              <span className="text-gold group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <button
              onClick={downloadICS}
              className="flex items-center justify-between w-full border border-cream/20 px-6 py-4 hover:border-gold transition-colors group"
            >
              <span className="text-sm uppercase tracking-widest">
                Download .ics (Apple / Outlook)
              </span>
              <span className="text-gold group-hover:translate-x-1 transition-transform">↓</span>
            </button>
          </div>

          <button
            onClick={() => setConfirmed(false)}
            className="text-sm uppercase tracking-widest text-gold hover:text-cream transition-colors"
          >
            ← Make another booking
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* PAGE HEADER */}
      <section className="bg-charcoal text-cream py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
            Booking
          </p>
          <h1 className="text-6xl lg:text-8xl leading-none mb-6">
            Book your chair.
          </h1>
          <p className="text-lg text-cream/70 max-w-2xl">
            Pick a service, choose your barber, and lock in your time.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-cream text-charcoal py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-3">
                Service *
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Barber */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-3">
                Barber
              </label>
              <select
                name="barber"
                value={form.barber}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
              >
                {barbers.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-3">
                Date *
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-3">
                Time *
              </label>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
              >
                <option value="">Select a time</option>
                {times.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-3">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-3">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-3">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-charcoal/30 py-3 text-lg focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-charcoal py-5 font-bold uppercase tracking-widest text-sm hover:bg-charcoal hover:text-cream transition-colors"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}