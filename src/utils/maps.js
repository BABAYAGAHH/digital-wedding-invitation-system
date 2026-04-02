export function buildGoogleMapsSearchUrl(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function getMapsLink(explicitLink, address) {
  return explicitLink || buildGoogleMapsSearchUrl(address);
}
