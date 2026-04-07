export default function RSVPSection({ data }) {
  return (
    <section className="page-shell pb-16 sm:pb-20" id="rsvp">
      <div className="surface-card accent-frame border-slate-300 bg-[#11284c] p-6 text-center text-white sm:p-10">
        <p className="section-label">RSVP</p>
        <h2 className="mt-4 text-4xl leading-none text-white sm:text-5xl">
          We would love to celebrate with you.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          Kindly respond when convenient. The RSVP button remains easy to update later by changing only the central data file.
        </p>
        <a
          href={data.rsvpUrl}
          className="button-secondary mt-8 border-white/50 bg-white text-[#11284c] hover:border-white hover:bg-[#eff6ff]"
          aria-label="RSVP now"
        >
          RSVP Now
        </a>
      </div>
    </section>
  );
}
