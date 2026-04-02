import clsx from 'clsx';
import { motion, useReducedMotion } from 'framer-motion';

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={clsx(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-gold">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold leading-none sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-ink/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
