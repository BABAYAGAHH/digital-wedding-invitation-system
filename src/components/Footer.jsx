export default function Footer({ data }) {
  return (
    <footer className="page-shell pb-12 sm:pb-16" id="contact">
      <div className="surface-card accent-frame border-slate-300 p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="section-label">Contact & Footer</p>
            <h2 className="text-4xl leading-none text-[#11284c] sm:text-5xl">
              Thank you for being part of our day.
            </h2>
            <p className="text-base sm:text-lg">
              We look forward to celebrating with you.
            </p>
            <p className="text-xl text-[#111827] sm:text-2xl">
              {data.coupleNames}
            </p>
            <p className="text-base font-medium text-[#1e4d8f]">
              {data.footerNote}
            </p>
          </div>

          <div className="soft-card border-slate-300 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1e4d8f]">
              Contact
            </p>
            <p className="mt-4 text-2xl text-[#111827]">{data.contactName}</p>
            <div className="mt-6 space-y-3 text-base">
              <p>
                <a href={`tel:${data.contactPhone}`} className="hover:text-[#11284c]">
                  {data.contactPhone}
                </a>
              </p>
              <p>
                <a href={`mailto:${data.contactEmail}`} className="hover:text-[#11284c]">
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
