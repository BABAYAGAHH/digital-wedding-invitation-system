export default function DetailsSection({ data, displayDate }) {
  const detailItems = [
    { label: 'Wedding Date', value: displayDate },
    { label: 'Church Service', value: data.churchTime },
    { label: 'Reception', value: data.receptionTime },
    { label: 'Dress Code', value: data.dressCode },
  ];

  return (
    <section className="page-shell section-space pt-10 sm:pt-12" id="details">
      <div className="space-y-5">
        <div className="max-w-2xl space-y-3">
          <p className="section-label">Wedding Details</p>
          <h2 className="text-4xl leading-none sm:text-5xl">
            A clear and simple guide for the day.
          </h2>
          <p className="text-base sm:text-lg">
            Everything guests need at a glance, presented in a calm and elegant layout.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {detailItems.map((item) => (
            <article key={item.label} className="soft-card p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
                {item.label}
              </p>
              <p className="mt-4 text-2xl leading-tight text-[#2f241f]">
                {item.value}
              </p>
            </article>
          ))}
        </div>

        <div className="surface-card p-6 sm:p-8">
          <p className="text-xl text-[#2f241f] sm:text-2xl">
            {data.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
