import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CalendarDays, Check, Clock3, Copy, MapPin, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function EventDetails({ data, directionsUrl, calendarUrl }) {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(data.venueAddress);
      setCopiedAddress(true);
      window.setTimeout(() => setCopiedAddress(false), 2200);
    } catch {
      setCopiedAddress(false);
    }
  };

  return (
    <div className="section-shell py-20 sm:py-24">
      <SectionTitle
        eyebrow="Event Details"
        title="Everything you need for a seamless celebration."
        description="From the first vow to the final dance, here is the schedule, style, and setting for our wedding day."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-card p-6 sm:p-8"
        >
          <div className="grid gap-4">
            <div className="glass-card p-5">
              <CalendarDays className="h-5 w-5 text-gold" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                Ceremony Date
              </p>
              <p className="mt-2 text-2xl font-semibold text-ink">{data.eventDate}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card p-5">
                <Clock3 className="h-5 w-5 text-gold" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                  Ceremony
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">{data.ceremonyTime}</p>
              </div>

              <div className="glass-card p-5">
                <Clock3 className="h-5 w-5 text-gold" />
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                  Reception
                </p>
                <p className="mt-2 text-xl font-semibold text-ink">{data.receptionTime}</p>
              </div>
            </div>

            <div className="glass-card p-5">
              <Sparkles className="h-5 w-5 text-gold" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
                Dress Code
              </p>
              <p className="mt-2 text-xl font-semibold text-ink">{data.dressCode}</p>
              <p className="mt-4 text-sm leading-6 text-ink/70">
                Wedding palette: {data.themeColors.join(' • ')}
              </p>
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
          <div className="flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                <MapPin className="h-3.5 w-3.5" />
                Venue
              </div>
              <h3 className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
                {data.venueName}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink/75">
                {data.venueAddress}
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-mist to-white p-6 ornate-ring">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                Note to Guests
              </p>
              <p className="mt-4 text-base leading-7 text-ink/75">{data.guestNote}</p>
              <p className="mt-4 text-base leading-7 text-ink/75">{data.receptionNote}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Get Directions
              </a>
              <a
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Add to Calendar
              </a>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="btn-secondary"
              >
                {copiedAddress ? (
                  <>
                    <Check className="h-4 w-4" />
                    Address Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy Venue Address
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
