import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Music2, Pause } from 'lucide-react';

export default function MusicToggle({ musicSrc }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setStatusMessage('Music paused');
      window.setTimeout(() => setStatusMessage(''), 1600);
      return;
    }

    audioRef.current.volume = 0.45;
    audioRef.current.muted = false;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setStatusMessage('Music playing');
      window.setTimeout(() => setStatusMessage(''), 1600);
    } catch {
      setStatusMessage('Add your MP3 to /public/music to enable playback.');
      setIsPlaying(false);
      window.setTimeout(() => setStatusMessage(''), 2400);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={musicSrc} loop preload="none" muted />
      <div className="fixed bottom-24 right-4 z-40 sm:bottom-6 sm:right-6">
        <AnimatePresence>
          {statusMessage ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="mb-3 max-w-[15rem] rounded-2xl border border-white/70 bg-white/88 px-4 py-3 text-sm text-ink shadow-soft backdrop-blur"
              role="status"
            >
              {statusMessage}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          onClick={toggleMusic}
          className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/88 px-4 py-3 text-sm font-semibold text-ink shadow-soft backdrop-blur hover:-translate-y-0.5"
          aria-pressed={isPlaying}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-champagne to-ivory text-gold">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Music2 className="h-4 w-4" />}
          </span>
          <span>{isPlaying ? 'Pause Music' : 'Play Music'}</span>
        </button>
      </div>
    </>
  );
}
