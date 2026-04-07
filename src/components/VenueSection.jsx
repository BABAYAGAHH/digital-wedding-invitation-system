export default function VenueSection({ data }) {
  const churchAddress = `${data.churchAddress}, ${data.churchPostcode}`;
  const receptionAddress = `${data.receptionAddress}, ${data.receptionPostcode}`;

  return (
    <>
      <section className="page-shell section-space" id="venues">
        <div className="space-y-5">
          <div className="max-w-2xl space-y-3">
            <p className="section-label">Venue & Directions</p>
            <h2 className="text-4xl leading-none sm:text-5xl">
              Ceremony and reception details, kept easy to follow.
            </h2>
            <p className="text-base sm:text-lg">
              Both locations are linked directly to Google Maps for a straightforward journey on the day.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="surface-card p-6 sm:p-8">
              <p className="section-label">Church Service</p>
              <h3 className="mt-4 text-3xl leading-tight sm:text-4xl">
                {data.churchVenue}
              </h3>
              <p className="mt-4 text-base sm:text-lg">{churchAddress}</p>
              <a
                href={data.churchGoogleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary mt-8"
                aria-label="Open church in Google Maps"
              >
                Open Church in Google Maps
              </a>
            </article>

            <article className="surface-card p-6 sm:p-8">
              <p className="section-label">Reception</p>
              <h3 className="mt-4 text-3xl leading-tight sm:text-4xl">
                {data.receptionVenue}
              </h3>
              <p className="mt-4 text-base sm:text-lg">{receptionAddress}</p>
              <a
                href={data.receptionGoogleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="button-primary mt-8"
                aria-label="Open reception in Google Maps"
              >
                Open Reception in Google Maps
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16 sm:pb-20" id="hotel">
        <div className="surface-card p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-3">
              <p className="section-label">{data.hotelTitle}</p>
              <h2 className="text-4xl leading-none sm:text-5xl">
                Reception at {data.receptionVenue}
              </h2>
              <p className="text-base sm:text-lg">{data.hotelNote}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="soft-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
                  Reception Venue
                </p>
                <p className="mt-3 text-xl text-[#2f241f]">{data.receptionVenue}</p>
              </div>
              <div className="soft-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
                  Location
                </p>
                <p className="mt-3 text-xl text-[#2f241f]">
                  {data.receptionAddress}, {data.receptionPostcode}
                </p>
              </div>
              <div className="soft-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
                  Reception Starts
                </p>
                <p className="mt-3 text-xl text-[#2f241f]">{data.receptionTime}</p>
              </div>
              <div className="soft-card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
                  Note
                </p>
                <p className="mt-3 text-xl text-[#2f241f]">{data.footerNote}</p>
              </div>
            </div>
          </div>

          <a
            href={data.receptionGoogleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary mt-8"
          >
            Get Directions
          </a>
        </div>
      </section>
    </>
  );
}
