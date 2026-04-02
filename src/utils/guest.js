export function getGuestNameFromSearch(search) {
  const params = new URLSearchParams(search);
  const guest = params.get('guest');

  return guest ? guest.trim() : '';
}

export function buildGuestUrl(baseUrl, guestName) {
  if (!baseUrl) {
    return '';
  }

  const url = new URL(baseUrl);

  if (guestName) {
    url.searchParams.set('guest', guestName);
  } else {
    url.searchParams.delete('guest');
  }

  return url.toString();
}

export function buildGreeting(guestName) {
  return guestName ? `Dear ${guestName},` : 'Dear Esteemed Guest,';
}
