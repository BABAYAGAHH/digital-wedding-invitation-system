export default function Footer({ data }) {
  return (
    <footer className="page-shell pb-12 sm:pb-16" id="contact">
      <div className="surface-card p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-label">Contact & Footer</p>
            <h2 className="text-4xl leading-none sm:text-5xl">
              Thank you for being part of our day.
            </h2>
            <p className="text-base sm:text-lg">
              {data.footerNote}
            </p>
            <p className="text-xl text-[#2f241f] sm:text-2xl">
              {data.coupleNames}
            </p>
          </div>

          <div className="soft-card p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8e735e]">
              Contact
            </p>
            <p className="mt-4 text-2xl text-[#2f241f]">{data.contactName}</p>
            <div className="mt-6 space-y-3 text-base">
              <p>
                <a href={`tel:${data.contactPhone}`} className="hover:text-[#2f241f]">
                  {data.contactPhone}
                </a>
              </p>
              <p>
                <a href={`mailto:${data.contactEmail}`} className="hover:text-[#2f241f]">
                  {data.contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
