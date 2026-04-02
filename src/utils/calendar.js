const formatGoogleCalendarDate = (value) =>
  new Date(value).toISOString().replace(/[-:]|\.\d{3}/g, '');

export function buildGoogleCalendarUrl({
  title,
  start,
  end,
  location,
  description,
}) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${formatGoogleCalendarDate(start)}/${formatGoogleCalendarDate(end)}`,
    location,
    details: description,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
