export default function RSVPSection({ data }) {
  return (
    <section className="page-shell pb-16 sm:pb-20" id="rsvp">
      <div className="surface-card p-6 text-center sm:p-10">
        <p className="section-label">RSVP</p>
        <h2 className="mt-4 text-4xl leading-none sm:text-5xl">
          We would love to celebrate with you.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg">
          Kindly respond when convenient. This button can later be connected to any RSVP service or form link by editing the central data file only.
        </p>
        <a
          href={data.rsvpUrl}
          className="button-primary mt-8"
          aria-label="RSVP now"
        >
          RSVP Now
        </a>
      </div>
    </section>
  );
}
