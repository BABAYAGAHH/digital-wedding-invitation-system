import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { BedDouble, Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function HotelSection({ hotel }) {
  const [copiedCode, setCopiedCode] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(hotel.reservationCode);
      setCopiedCode(true);
      window.setTimeout(() => setCopiedCode(false), 2200);
    } catch {
      setCopiedCode(false);
    }
  };

  return (
    <div className="section-shell py-20 sm:py-24">
      <SectionTitle
        eyebrow="Accommodation"
        title="A refined place to stay, just moments from the venue."
        description="For guests traveling in, a reserved room block is available at our preferred hotel."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-card p-6 sm:p-8"
        >
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                <BedDouble className="h-3.5 w-3.5" />
                Suggested Stay
              </div>
              <h3 className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                {hotel.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-ink/75">{hotel.address}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                  Distance
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">
                  {hotel.distanceFromVenue}
                </p>
              </div>
              <div className="glass-card p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                  Booking Deadline
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">
                  {hotel.bookingDeadline}
                </p>
              </div>
              <div className="glass-card p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                  Check-In
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">{hotel.checkIn}</p>
              </div>
              <div className="glass-card p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                  Check-Out
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">{hotel.checkOut}</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-mist to-white p-6 ornate-ring">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                Reservation Code
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-display text-3xl font-semibold tracking-[0.08em] text-ink">
                  {hotel.reservationCode}
                </p>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="btn-secondary"
                >
                  {copiedCode ? (
                    <>
                      <Check className="h-4 w-4" />
                      Code Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-ink/70">{hotel.note}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
          className="section-card p-6 sm:p-8"
        >
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-gold/15 bg-gradient-to-br from-white to-mist p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                Room Options
              </p>
              <div className="mt-5 space-y-3">
                {hotel.roomOptions.map((room) => (
                  <div
                    key={room.name}
                    className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-4 shadow-sm"
                  >
                    <div>
                      <p className="font-semibold text-ink">{room.name}</p>
                      <p className="text-sm text-ink/60">Reserved wedding rate</p>
                    </div>
                    <p className="text-sm font-semibold text-ink">{room.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <a href={`tel:${hotel.phone}`} className="btn-secondary">
                <Phone className="h-4 w-4" />
                Call Hotel
              </a>
              <a href={`mailto:${hotel.email}`} className="btn-secondary">
                <Mail className="h-4 w-4" />
                Email Hotel
              </a>
              <a
                href={hotel.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MapPin className="h-4 w-4" />
                Open Map
              </a>
            </div>

            <div className="glass-card p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                Booking Support
              </p>
              <p className="mt-3 text-base leading-7 text-ink/75">
                If you need early arrival support or an extended stay, contact the hotel directly and mention the wedding reservation code above.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
