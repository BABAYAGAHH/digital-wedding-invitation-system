export default function Footer({ coupleNames, hashtag, note, onNavigate }) {
  return (
    <footer className="section-shell pb-28 pt-8 sm:pb-12">
      <div className="section-card overflow-hidden px-6 py-10 text-center sm:px-8 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
          Thank You
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
          {coupleNames}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/75">{note}</p>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-ink/55">
          {hashtag}
        </p>
        <button type="button" onClick={() => onNavigate('hero')} className="btn-primary mt-8">
          Back to Top
        </button>
      </div>
    </footer>
  );
}
