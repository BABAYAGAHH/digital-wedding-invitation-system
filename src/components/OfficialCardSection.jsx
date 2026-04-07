export default function OfficialCardSection({ data }) {
  return (
    <section className="section-tint mt-4 border-y border-slate-200/80" id="cards">
      <div className="page-shell section-space pt-12 sm:pt-16 lg:pt-20">
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="section-label">Our Invitation</p>
            <h2 className="text-4xl leading-none text-[#11284c] sm:text-5xl">
              With joyful hearts, we invite you to celebrate with us.
            </h2>
            <p className="text-base sm:text-lg">
              Please keep these invitation details close as we gather for a beautiful day of vows, dinner, and dancing.
            </p>
          </div>

          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
            <figure className="surface-card accent-frame border-slate-300 p-5 sm:p-7 lg:p-8">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_14px_30px_rgba(15,23,42,0.05)] sm:p-6">
                <img
                  src={data.frontCardImage}
                  alt={`Official front wedding card for ${data.coupleNames}`}
                  className="w-full rounded-[1.2rem] object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-1 pb-1 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Invitation Front
                </p>
              </figcaption>
            </figure>

            <figure className="surface-card accent-frame border-slate-300 p-5 sm:p-7 lg:p-8">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_14px_30px_rgba(15,23,42,0.05)] sm:p-6">
                <img
                  src={data.backCardImage}
                  alt={`Official back wedding card with wedding details for ${data.coupleNames}`}
                  className="w-full rounded-[1.2rem] object-contain"
                  loading="lazy"
                />
              </div>
              <figcaption className="px-1 pb-1 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                  Invitation Details
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
