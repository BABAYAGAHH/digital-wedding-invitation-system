import { useState } from 'react';

const attendanceOptions = ['Attending', 'Not Attending'];
const guestOptions = ['1', '2', '3', '4', '5'];

export default function RSVPSection({ data }) {
  const [attendance, setAttendance] = useState('Attending');
  const [guestCount, setGuestCount] = useState('1');

  const attendingGuests = attendance === 'Attending' ? guestCount : '0';

  const handleReplyByEmail = () => {
    const subject = `Wedding RSVP for ${data.coupleNames}`;
    const body = [
      `Dear ${data.contactName},`,
      '',
      `Thank you for the invitation to celebrate the marriage of ${data.coupleNames}.`,
      `Wedding date: ${data.weddingDate}`,
      '',
      'Kindly accept this reply:',
      `Attendance: ${attendance}`,
      `Number attending: ${attendingGuests}`,
      '',
      'With warm regards,',
    ].join('\n');

    window.location.href = `mailto:${data.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="page-shell pb-16 sm:pb-20" id="rsvp">
      <div className="surface-card accent-frame border-slate-300 bg-[#11284c] p-6 text-white sm:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">RSVP</p>
          <h2 className="mt-4 text-4xl leading-none text-white sm:text-5xl">
            Kindly Reply
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Your presence would be a joy to us. Kindly share your reply below, and we will prepare a graceful email response for you.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-white/15 bg-white/8 p-4 backdrop-blur-sm sm:p-6">
          <fieldset>
            <legend className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">
              Kindly let us know your reply
            </legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {attendanceOptions.map((option) => {
                const isSelected = attendance === option;

                return (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-[1.5rem] border px-4 py-4 text-left transition ${isSelected ? 'border-white bg-white text-[#11284c] shadow-[0_14px_30px_rgba(15,23,42,0.18)]' : 'border-white/20 bg-white/6 text-white hover:border-white/40 hover:bg-white/10'}`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option}
                      checked={isSelected}
                      onChange={() => setAttendance(option)}
                      className="sr-only"
                    />
                    <span className="block text-lg font-semibold">{option}</span>
                    <span className={`mt-2 block text-sm ${isSelected ? 'text-slate-600' : 'text-slate-300'}`}>
                      {option === 'Attending'
                        ? 'We would be delighted to welcome you to our celebration.'
                        : 'You will be missed, and we are grateful for your reply.'}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {attendance === 'Attending' ? (
            <div className="mt-6 rounded-[1.5rem] border border-white/15 bg-white/6 p-4 sm:p-5">
              <label
                htmlFor="guest-count"
                className="block text-sm font-semibold uppercase tracking-[0.22em] text-slate-200"
              >
                Number in your party
              </label>
              <select
                id="guest-count"
                value={guestCount}
                onChange={(event) => setGuestCount(event.target.value)}
                className="mt-3 w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-base font-medium text-[#11284c] shadow-sm outline-none transition focus:border-[#9db4d1] focus:ring-2 focus:ring-white/30"
              >
                {guestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-200">
              Your reply will be addressed to {data.contactEmail} with the invitation details and your attendance response already included.
            </p>
            <button
              type="button"
              onClick={handleReplyByEmail}
              className="button-secondary border-white/50 bg-white text-[#11284c] hover:border-white hover:bg-[#eff6ff]"
              aria-label="Reply by email"
            >
              Send Reply by Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
