import { motion, useReducedMotion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function GallerySection({ data }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="section-shell py-20 sm:py-24">
      <SectionTitle
        eyebrow="Love Note"
        title="A graceful beginning to forever."
        description={data.storyBlurb}
        align="center"
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.figure
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="section-card overflow-hidden"
        >
          <img
            src={data.galleryImages[0].src}
            alt={data.galleryImages[0].alt}
            className="h-[20rem] w-full object-cover sm:h-[28rem]"
          />
          <figcaption className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              Cover Moment
            </p>
            <p className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              {data.galleryImages[0].caption}
            </p>
          </figcaption>
        </motion.figure>

        <div className="grid gap-5">
          <motion.figure
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="glass-card overflow-hidden"
          >
            <img
              src={data.galleryImages[1].src}
              alt={data.galleryImages[1].alt}
              className="h-[16rem] w-full object-cover"
            />
          </motion.figure>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
            className="section-card p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
              A Warm Welcome
            </p>
            <blockquote className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              “{data.welcomeMessage}”
            </blockquote>
            <div className="divider-ornament mt-8" />
            <p className="mt-8 text-base leading-7 text-ink/75">{data.guestNote}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
