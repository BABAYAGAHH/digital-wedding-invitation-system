import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function ContactSection({ data, directionsUrl }) {
  const reduceMotion = useReducedMotion();
  const whatsappHref = `https://wa.me/${data.contacts.whatsapp}?text=${encodeURIComponent(
    `Hello ${data.contacts.plannerName}, I have a question about ${data.coupleNames}'s wedding invitation.`,
  )}`;

  return (
    <div className="section-shell py-20 sm:py-24">
      <SectionTitle
        eyebrow="Contact & Directions"
        title="Need help on the day? We are only one message away."
        description="For travel questions, ceremony timing, or last-minute assistance, please reach out to our planner or family representatives below."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid gap-5 sm:grid-cols-2"
        >
          <div className="section-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Planner
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-ink">
              {data.contacts.plannerName}
            </h3>
            <p className="mt-2 text-sm text-ink/65">Wedding coordination & guest support</p>
            <div className="mt-6 space-y-3 text-sm text-ink/75">
              <p>{data.contacts.plannerPhone}</p>
              <p>{data.contacts.plannerEmail}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${data.contacts.plannerPhone}`} className="btn-secondary">
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a href={`mailto:${data.contacts.plannerEmail}`} className="btn-secondary">
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="section-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Bride&apos;s Family Rep
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-ink">
              {data.contacts.brideRepName}
            </h3>
            <p className="mt-2 text-sm text-ink/65">Guest arrivals & seating assistance</p>
            <div className="mt-6 space-y-3 text-sm text-ink/75">
              <p>{data.contacts.brideRepPhone}</p>
            </div>
            <div className="mt-6">
              <a href={`tel:${data.contacts.brideRepPhone}`} className="btn-secondary">
                <Phone className="h-4 w-4" />
                Call Bride&apos;s Rep
              </a>
            </div>
          </div>

          <div className="section-card p-6 sm:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Groom&apos;s Family Rep
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-ink">{data.contacts.groomRepName}</h3>
                <p className="mt-2 text-sm text-ink/65">
                  Logistics, transport updates, and on-the-day coordination
                </p>
                <p className="mt-4 text-sm text-ink/75">{data.contacts.groomRepPhone}</p>
              </div>
              <a href={`tel:${data.contacts.groomRepPhone}`} className="btn-secondary">
                <Phone className="h-4 w-4" />
                Call Groom&apos;s Rep
              </a>
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
          <div className="rounded-[1.75rem] bg-gradient-to-br from-mist to-white p-6 ornate-ring">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              <MapPin className="h-3.5 w-3.5" />
              Directions
            </div>
            <h3 className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
              {data.venueName}
            </h3>
            <p className="mt-4 text-base leading-7 text-ink/75">{data.venueAddress}</p>
            <p className="mt-6 text-base leading-7 text-ink/75">
              Save the route in advance so your arrival feels effortless and unhurried.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Open Map
              </a>
              <a href={`tel:${data.contacts.plannerPhone}`} className="btn-secondary">
                <Phone className="h-4 w-4" />
                Call Planner
              </a>
              <a href={`mailto:${data.contacts.plannerEmail}`} className="btn-secondary">
                <Mail className="h-4 w-4" />
                Email Planner
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
