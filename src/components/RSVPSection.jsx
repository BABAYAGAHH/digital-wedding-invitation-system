import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';

const createInitialForm = (guestName, options) => ({
  fullName: guestName || '',
  email: '',
  phone: '',
  attendance: options.attendance[0],
  guestCount: '1',
  mealPreference: options.mealPreferences[0],
  notes: '',
});

function validateForm(form) {
  const nextErrors = {};

  if (!form.fullName.trim()) {
    nextErrors.fullName = 'Please enter your full name.';
  }

  if (!form.email.trim()) {
    nextErrors.email = 'Please enter an email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    nextErrors.email = 'Please enter a valid email address.';
  }

  if (!form.attendance) {
    nextErrors.attendance = 'Please choose your attendance status.';
  }

  return nextErrors;
}

export default function RSVPSection({ data, guestName }) {
  const [form, setForm] = useState(() =>
    createInitialForm(guestName, data.rsvpOptions),
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setForm((current) =>
      current.fullName ? current : { ...current, fullName: guestName || '' },
    );
  }, [guestName]);

  const whatsappHref = `https://wa.me/${data.contacts.whatsapp}?text=${encodeURIComponent(
    `Hello ${data.contacts.plannerName}, this is ${
      form.fullName || guestName || 'a guest'
    }. I would like to RSVP for ${data.coupleNames}'s wedding.`,
  )}`;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => {
      if (name === 'attendance' && value === 'Decline') {
        return {
          ...current,
          attendance: value,
          guestCount: '0',
          mealPreference: 'Not applicable',
        };
      }

      if (
        name === 'attendance' &&
        value !== 'Decline' &&
        current.mealPreference === 'Not applicable'
      ) {
        return {
          ...current,
          attendance: value,
          guestCount: current.guestCount === '0' ? '1' : current.guestCount,
          mealPreference: data.rsvpOptions.mealPreferences[0],
        };
      }

      return { ...current, [name]: value };
    });

    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const handleReset = () => {
    setForm(createInitialForm(guestName, data.rsvpOptions));
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Swap this demo adapter with Formspree, EmailJS, Supabase, Firebase, or a custom API later.
      await new Promise((resolve) => window.setTimeout(resolve, 900));
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-shell py-20 sm:py-24">
      <SectionTitle
        eyebrow="RSVP"
        title="Kindly let us know if you will be joining us."
        description="The RSVP form currently works in polished demo mode with local success handling, and it is structured to connect to a live backend later."
        align="center"
      />

      <div className="mx-auto mt-12 max-w-4xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-card p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-col gap-3 rounded-[1.75rem] bg-gradient-to-r from-mist to-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Demo Mode
              </p>
              <p className="mt-2 text-sm text-ink/70">
                Submissions stay in frontend state for now, so the design is easy to preview before wiring up storage.
              </p>
            </div>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary">
              <MessageCircle className="h-4 w-4" />
              WhatsApp RSVP
            </a>
          </div>

          {isSubmitted ? (
            <div
              className="rounded-[1.75rem] border border-gold/20 bg-gradient-to-br from-white to-mist p-6 text-center shadow-soft sm:p-8"
              role="status"
            >
              <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
              <h3 className="mt-5 text-3xl font-semibold text-ink">
                Thank you, {form.fullName}.
              </h3>
              <p className="mt-4 text-base leading-7 text-ink/75">
                Your response has been recorded in demo mode as{' '}
                <span className="font-semibold text-ink">{form.attendance}</span>.
              </p>
              <div className="mt-6 grid gap-3 rounded-[1.5rem] bg-white/80 p-5 text-left sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/55">
                    Guests
                  </p>
                  <p className="mt-2 font-semibold text-ink">{form.guestCount}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/55">
                    Meal
                  </p>
                  <p className="mt-2 font-semibold text-ink">{form.mealPreference}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink/55">
                    Contact
                  </p>
                  <p className="mt-2 font-semibold text-ink">{form.email}</p>
                </div>
              </div>
              <button type="button" onClick={handleReset} className="btn-primary mt-8">
                Submit Another Response
              </button>
            </div>
          ) : (
            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="field-label">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName ? (
                    <p className="mt-2 text-sm text-rose">{errors.fullName}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="field-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="name@example.com"
                  />
                  {errors.email ? (
                    <p className="mt-2 text-sm text-rose">{errors.email}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="field-label">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="attendance" className="field-label">
                    Attendance Status
                  </label>
                  <select
                    id="attendance"
                    name="attendance"
                    value={form.attendance}
                    onChange={handleChange}
                    className="field-input"
                  >
                    {data.rsvpOptions.attendance.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.attendance ? (
                    <p className="mt-2 text-sm text-rose">{errors.attendance}</p>
                  ) : null}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="guestCount" className="field-label">
                    Number of Guests
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={form.guestCount}
                    onChange={handleChange}
                    className="field-input"
                    disabled={form.attendance === 'Decline'}
                  >
                    {data.rsvpOptions.guestCount.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mealPreference" className="field-label">
                    Meal Preference
                  </label>
                  <select
                    id="mealPreference"
                    name="mealPreference"
                    value={form.mealPreference}
                    onChange={handleChange}
                    className="field-input"
                    disabled={form.attendance === 'Decline'}
                  >
                    {form.attendance === 'Decline' ? (
                      <option value="Not applicable">Not applicable</option>
                    ) : (
                      data.rsvpOptions.mealPreferences.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="field-label">
                  Special Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="5"
                  value={form.notes}
                  onChange={handleChange}
                  className="field-input resize-none"
                  placeholder="Allergies, travel questions, or anything else you would love us to know."
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Sending Your RSVP...' : 'Submit RSVP'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
