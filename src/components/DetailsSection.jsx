export default function DetailsSection({ data, displayDate }) {
  const detailItems = [
    {
      label: 'Wedding Date',
      value: displayDate,
      note: `${data.brideName} & ${data.groomName}`,
    },
    {
      label: 'Church Service',
      value: data.churchTime,
      note: data.churchVenue,
    },
    {
      label: 'Reception',
      value: data.receptionTime,
      note: data.receptionVenue,
    },
    {
      label: 'Afterward',
      value: data.footerNote,
      note: 'Celebration continues at the reception',
    },
  ];

  return (
    <section className="page-shell section-space pt-10 sm:pt-12" id="details">
      <div className="space-y-6">
        <div className="max-w-2xl space-y-3">
          <p className="section-label">Wedding Details</p>
          <h2 className="text-4xl leading-none text-[#11284c] sm:text-5xl lg:text-6xl">
            Wedding Day Details
          </h2>
          <p className="text-base sm:text-lg">
            We would be honoured by your presence as our families and friends gather to witness our marriage and celebrate together.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {detailItems.map((item) => (
            <article key={item.label} className="soft-card accent-frame p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
                {item.label}
              </p>
              <p className="mt-4 text-2xl leading-tight text-[#111827]">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#475569]">
                {item.note}
              </p>
            </article>
          ))}
        </div>

        <div className="surface-card accent-frame border-slate-300 p-6 sm:p-8">
          <p className="section-label">Invitation Line</p>
          <p className="mt-4 text-xl text-[#111827] sm:text-2xl">
            {data.introLine}
          </p>
          <p className="mt-4 max-w-3xl text-base sm:text-lg">
            {data.invitationMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
