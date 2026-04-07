export default function VenueSection({ data }) {
  const churchAddress = `${data.churchAddress}, ${data.churchPostcode}`;
  const receptionAddress = `${data.receptionAddress}, ${data.receptionPostcode}`;

  return (
    <>
      <section className="section-tint border-y border-slate-200/80" id="venues">
        <div className="page-shell section-space space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="section-label">Venue & Directions</p>
            <h2 className="text-4xl leading-none text-[#11284c] sm:text-5xl lg:text-6xl">
              Clear venue details with direct navigation links.
            </h2>
            <p className="text-base sm:text-lg">
              Use the official links below for quick navigation to the church service and reception venue.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="surface-card accent-frame border-slate-300 p-6 sm:p-8">
              <p className="section-label">Church Service</p>
              <h3 className="mt-4 text-3xl leading-tight text-[#11284c] sm:text-4xl">
                {data.churchVenue}
              </h3>
              <p className="mt-4 text-base sm:text-lg">{churchAddress}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#64748b]">
                {data.churchTime}
              </p>
              <a
                href={data.churchGoogleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="button-primary mt-8"
                aria-label="Open church in Google Maps"
              >
                Open Church Directions
              </a>
            </article>

            <article className="surface-card accent-frame border-slate-300 p-6 sm:p-8">
              <p className="section-label">Reception</p>
              <h3 className="mt-4 text-3xl leading-tight text-[#11284c] sm:text-4xl">
                {data.receptionVenue}
              </h3>
              <p className="mt-4 text-base sm:text-lg">{receptionAddress}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#64748b]">
                {data.receptionTime}
              </p>
              <a
                href={data.receptionGoogleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="button-primary mt-8"
                aria-label="Open reception in Google Maps"
              >
                Open Reception Directions
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20" id="hotel">
        <div className="surface-card accent-frame border-slate-300 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              <p className="section-label">Reception / Hotel Info</p>
              <h2 className="text-4xl leading-none text-[#11284c] sm:text-5xl">
                Reception at {data.receptionVenue}
              </h2>
              <p className="text-base sm:text-lg">
                The reception takes place at {data.receptionVenue}. Guests can use the official directions link below for straightforward arrival details.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="soft-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Reception Venue
                </p>
                <p className="mt-3 text-xl text-[#111827]">{data.receptionVenue}</p>
              </div>
              <div className="soft-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Location
                </p>
                <p className="mt-3 text-xl text-[#111827]">
                  {data.receptionAddress}, {data.receptionPostcode}
                </p>
              </div>
              <div className="soft-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Reception Time
                </p>
                <p className="mt-3 text-xl text-[#111827]">{data.receptionTime}</p>
              </div>
              <div className="soft-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Note
                </p>
                <p className="mt-3 text-xl text-[#111827]">{data.footerNote}</p>
              </div>
            </div>
          </div>

          <a
            href={data.receptionGoogleMapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="button-primary mt-8"
          >
            Get Reception Directions
          </a>
        </div>
      </section>
    </>
  );
}
