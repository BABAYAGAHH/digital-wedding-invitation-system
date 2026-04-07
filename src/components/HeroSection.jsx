export default function HeroSection({ data, displayDate, onNavigate }) {
  return (
    <section className="page-shell section-space pb-10 sm:pb-12" id="hero">
      <div className="surface-card overflow-hidden">
        <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="section-label">Wedding Card Preview</p>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8e735e]">
                  {data.introLine}
                </p>
              </div>

              <div className="space-y-5">
                <h1 className="text-balance text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
                  {data.brideName}
                  <span className="my-3 block text-3xl text-[#b59267] sm:text-4xl">
                    &
                  </span>
                  {data.groomName}
                </h1>

                <p className="max-w-xl text-base leading-8 text-[#5f4a3f] sm:text-lg">
                  {data.invitationMessage}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="soft-card p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
                    Date
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2f241f]">
                    {displayDate}
                  </p>
                </div>
                <div className="soft-card p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
                    Church
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2f241f]">
                    {data.churchTime}
                  </p>
                </div>
                <div className="soft-card p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
                    Reception
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#2f241f]">
                    {data.receptionTime}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => onNavigate('details')}
                className="button-primary"
              >
                View Wedding Details
              </button>
              <button
                type="button"
                onClick={() => onNavigate('venues')}
                className="button-secondary"
              >
                Church Directions
              </button>
              <button
                type="button"
                onClick={() => onNavigate('hotel')}
                className="button-secondary"
              >
                Reception Directions
              </button>
              <button
                type="button"
                onClick={() => onNavigate('rsvp')}
                className="button-secondary"
              >
                RSVP
              </button>
            </div>
          </div>

          <div className="soft-card flex flex-col overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,_rgba(250,241,233,0.88),_rgba(242,226,212,0.92))]">
              <img
                src={data.previewCardImage}
                alt="Wedding card preview placeholder"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3 px-2 pb-2 pt-5 sm:px-4">
              <p className="section-label">Preview Slot</p>
              <p className="text-sm leading-7 text-[#5f4a3f]">
                Replace this image later with a scanned wedding card, custom illustration, or polished cover artwork by updating
                {' '}
                <span className="font-semibold text-[#2f241f]">previewCardImage</span>
                {' '}
                in the central data file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
