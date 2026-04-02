import { useState } from 'react';
import clsx from 'clsx';
import { Heart, Menu, X } from 'lucide-react';

const links = [
  { label: 'Details', id: 'details' },
  { label: 'Stay', id: 'hotel' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'RSVP', id: 'rsvp' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ coupleNames, guestName, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/72 px-4 py-3 shadow-soft backdrop-blur-xl sm:px-6">
        <button
          type="button"
          onClick={() => handleNavigate('hero')}
          className="inline-flex items-center gap-2 text-left text-sm font-semibold text-ink"
          aria-label="Back to top"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-champagne to-ivory text-gold">
            <Heart className="h-4 w-4" />
          </span>
          <span className="font-display text-2xl leading-none">{coupleNames}</span>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavigate(link.id)}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/75 hover:bg-white hover:text-ink"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {guestName ? (
            <span className="rounded-full border border-gold/30 bg-white/80 px-3 py-2 text-sm text-ink/70">
              Invited: {guestName}
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => handleNavigate('rsvp')}
            className="btn-primary"
          >
            RSVP Now
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-white/70 text-ink lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={clsx(
          'mx-auto mt-3 max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 shadow-soft backdrop-blur-xl transition-all duration-300 lg:hidden',
          isOpen ? 'max-h-[24rem] p-4 opacity-100' : 'max-h-0 p-0 opacity-0',
        )}
      >
        <div className="space-y-2">
          {guestName ? (
            <div className="rounded-2xl bg-mist px-4 py-3 text-sm text-ink/70">
              Invite opened for <span className="font-semibold text-ink">{guestName}</span>
            </div>
          ) : null}

          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavigate(link.id)}
              className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-ink hover:bg-mist"
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </button>
          ))}

          <button
            type="button"
            onClick={() => handleNavigate('rsvp')}
            className="btn-primary mt-2 w-full"
          >
            RSVP Now
          </button>
        </div>
      </div>
    </header>
  );
}
