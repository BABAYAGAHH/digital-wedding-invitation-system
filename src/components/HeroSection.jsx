import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CalendarDays, Clock3, MapPin, Sparkles } from 'lucide-react';

export default function HeroSection({ data, greeting, guestName, calendarUrl, onNavigate }) {
  const reduceMotion = useReducedMotion();
  const daysUntil = Math.max(
    0,
    Math.ceil((new Date(data.eventStart).getTime() - Date.now()) / 86400000),
  );

  return (
    <section className="section-shell pt-8 sm:pt-10" id="hero">
      <div className="section-card overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative flex min-h-[34rem] items-end overflow-hidden rounded-[2rem] border border-white/10 lg:min-h-[46rem]">
            <img
              src={data.heroImage}
              alt="Elegant floral wedding invitation cover"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-ink/20 to-ink/70" />

            <div className="relative z-10 w-full p-6 sm:p-8 lg:p-10">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-xl space-y-6"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  Wedding Invitation
                </span>

                <div className="space-y-4">
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/85">
                    {greeting}
                  </p>
                  <h1 className="text-balance text-6xl font-semibold leading-[0.88] text-white sm:text-7xl">
                    {data.coupleNames}
                  </h1>
                  <p className="max-w-lg text-base leading-7 text-white/85 sm:text-lg">
                    {data.weddingTitle}
                  </p>
                  {guestName ? (
                    <p className="rounded-3xl border border-white/15 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90 backdrop-blur sm:inline-flex">
                      We are honored to celebrate with you and your loved ones.
                    </p>
                  ) : null}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="glass-card bg-white/15 p-4 text-white">
                    <CalendarDays className="mb-3 h-5 w-5 text-champagne" />
                    <p className="text-sm font-semibold text-white">{data.eventDate}</p>
                    <p className="mt-1 text-sm text-white/70">Wedding day</p>
                  </div>
                  <div className="glass-card bg-white/15 p-4 text-white">
                    <Clock3 className="mb-3 h-5 w-5 text-champagne" />
                    <p className="text-sm font-semibold text-white">{data.ceremonyTime}</p>
                    <p className="mt-1 text-sm text-white/70">Ceremony begins</p>
                  </div>
                  <div className="glass-card bg-white/15 p-4 text-white">
                    <MapPin className="mb-3 h-5 w-5 text-champagne" />
                    <p className="text-sm font-semibold text-white">{data.venueName}</p>
                    <p className="mt-1 text-sm text-white/70">Lekki, Lagos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col justify-between px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
              className="space-y-7"
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-gold">
                  Celebrate With Us
                </p>
                <h2 className="text-balance text-4xl font-semibold leading-none sm:text-5xl">
                  An intimate day of vows, joy, and unforgettable memories.
                </h2>
                <p className="text-base leading-7 text-ink/75 sm:text-lg">
                  {data.welcomeMessage}
                </p>
              </div>

              <div className="glass-card p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                      Countdown
                    </p>
                    <p className="mt-2 text-5xl font-semibold leading-none text-ink">
                      {daysUntil}
                    </p>
                    <p className="mt-2 text-sm text-ink/65">days until “I do”</p>
                  </div>
                  <div className="rounded-3xl bg-gradient-to-br from-champagne/60 to-white p-4 text-right shadow-soft">
                    <p className="text-sm font-semibold text-ink">{data.eventDate}</p>
                    <p className="mt-1 text-sm text-ink/65">{data.ceremonyTime}</p>
                  </div>
                </div>
                <div className="divider-ornament mt-6" />
                <p className="mt-6 text-sm leading-6 text-ink/70">{data.guestNote}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => onNavigate('details')}
                  className="btn-primary"
                >
                  View Event Details
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('rsvp')}
                  className="btn-secondary"
                >
                  RSVP Now
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('hotel')}
                  className="btn-secondary"
                >
                  View Hotel Info
                </button>
                <a href={calendarUrl} target="_blank" rel="noreferrer" className="btn-muted">
                  Add to Calendar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
