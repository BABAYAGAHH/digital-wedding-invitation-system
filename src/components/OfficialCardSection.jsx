export default function OfficialCardSection({ data }) {
  return (
    <section className="section-tint mt-4 border-y border-slate-200/80" id="cards">
      <div className="page-shell section-space pt-10 sm:pt-12">
        <div className="space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="section-label">Official Wedding Card</p>
            <h2 className="text-4xl leading-none text-[#11284c] sm:text-5xl">
              The official invitation, presented as part of the experience.
            </h2>
            <p className="text-base sm:text-lg">
              These are the official wedding card views, framed into the digital invite so guests can enjoy the original design alongside the key event details and directions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <figure className="surface-card accent-frame border-slate-300 p-5 sm:p-6 lg:p-7">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_14px_30px_rgba(15,23,42,0.05)] sm:p-5">
                <img
                  src={data.frontCardImage}
                  alt="Official front wedding card for Emily Louise Jervis and Francis Akwukwaegbu"
                  className="w-full rounded-[1.2rem] object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-1 pb-1 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Front Card View
                </p>
              </figcaption>
            </figure>

            <figure className="surface-card accent-frame border-slate-300 p-5 sm:p-6 lg:p-7">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_14px_30px_rgba(15,23,42,0.05)] sm:p-5">
                <img
                  src={data.backCardImage}
                  alt="Official back wedding card with wedding details for Emily Louise Jervis and Francis Akwukwaegbu"
                  className="w-full rounded-[1.2rem] object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-1 pb-1 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Back Card View
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
