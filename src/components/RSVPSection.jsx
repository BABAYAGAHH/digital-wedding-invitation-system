export default function RSVPSection({ data }) {
  return (
    <section className="page-shell pb-16 sm:pb-20" id="rsvp">
      <div className="surface-card accent-frame border-slate-300 bg-[#11284c] p-6 text-center text-white sm:p-10">
        <p className="section-label">RSVP</p>
        <h2 className="mt-4 text-4xl leading-none text-white sm:text-5xl">
          Kindly Reply
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
          Your presence would mean so much to us. Please let us know if you will be joining us for this special day.
        </p>
        <a
          href={data.rsvpUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="button-secondary mt-8 border-white/50 bg-white text-[#11284c] hover:border-white hover:bg-[#eff6ff]"
          aria-label="RSVP now"
        >
          RSVP Now
        </a>
      </div>
    </section>
  );
}
