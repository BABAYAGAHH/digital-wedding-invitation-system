export default function HeroSection({ data, displayDate, onNavigate }) {
  return (
    <section className="page-shell section-space pb-10 sm:pb-12" id="hero">
      <div className="surface-card accent-frame overflow-hidden border-slate-300">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="flex flex-col justify-between">
            <div className="space-y-7">
              <div className="space-y-4">
                <p className="section-label">Wedding Invitation</p>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#1e4d8f]">
                  {data.introLine}
                </p>
              </div>

              <div className="space-y-5">
                <h1 className="text-balance text-5xl leading-[0.88] text-[#11284c] sm:text-6xl lg:text-7xl">
                  {data.brideName}
                  <span className="my-3 block text-3xl text-[#2563eb] sm:text-4xl">
                    &
                  </span>
                  {data.groomName}
                </h1>

                <p className="max-w-2xl text-base leading-8 text-[#334155] sm:text-lg">
                  {data.invitationMessage}
                </p>
              </div>

              <div className="soft-card border-l-4 border-l-[#11284c] bg-[#f8fbff] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Save the Date
                </p>
                <p className="mt-3 text-3xl text-[#11284c] sm:text-4xl">
                  {displayDate}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                      Church Service
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#111827]">
                      {data.churchTime}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#64748b]">
                      Reception
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#111827]">
                      {data.receptionTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => onNavigate('cards')}
                className="button-primary"
              >
                View Card
              </button>
              <button
                type="button"
                onClick={() => onNavigate('details')}
                className="button-secondary"
              >
                Wedding Details
              </button>
              <a
                href={data.churchGoogleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="button-secondary"
              >
                Church Directions
              </a>
              <a
                href={data.receptionGoogleMapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="button-secondary"
              >
                Reception Directions
              </a>
              <button
                type="button"
                onClick={() => onNavigate('rsvp')}
                className="button-primary"
              >
                RSVP Now
              </button>
            </div>
          </div>

          <div className="soft-card overflow-hidden border-slate-300 bg-[#f8fbff] p-4 sm:p-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-[0_14px_34px_rgba(15,23,42,0.08)]">
              <img
                src={data.frontCardImage}
                alt="Official front wedding card for Emily Louise Jervis and Francis Akwukwaegbu"
                className="w-full rounded-[1.2rem] object-contain"
              />
            </div>
            <div className="space-y-3 px-2 pb-2 pt-6 sm:px-3">
              <p className="section-label">Official Wedding Card</p>
              <p className="text-sm leading-7 text-[#334155]">
                The landing page is designed to complement the official card artwork with clean editorial spacing, navy accents, and a refined digital presentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
