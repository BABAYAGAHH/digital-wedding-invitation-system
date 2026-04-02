import { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, QrCode } from 'lucide-react';
import QRCode from 'qrcode';

export default function QRCodeCard({ url, sampleGuestUrl }) {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const generateCode = async () => {
      try {
        const imageUrl = await QRCode.toDataURL(url, {
          width: 300,
          margin: 2,
          color: {
            dark: '#3f3326',
            light: '#fffaf2',
          },
        });

        if (isMounted) {
          setQrDataUrl(imageUrl);
        }
      } catch {
        if (isMounted) {
          setQrDataUrl('');
        }
      }
    };

    if (url) {
      generateCode();
    }

    return () => {
      isMounted = false;
    };
  }, [url]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="section-card flex flex-col items-center justify-center p-6 text-center sm:p-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-mist to-white p-5 ornate-ring">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="QR code for opening the wedding invitation"
              className="h-56 w-56 rounded-2xl object-cover sm:h-64 sm:w-64"
            />
          ) : (
            <div className="flex h-56 w-56 items-center justify-center rounded-2xl bg-white text-ink/50 sm:h-64 sm:w-64">
              <QrCode className="h-10 w-10" />
            </div>
          )}
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          Scan to Open Invitation
        </p>
      </div>

      <div className="section-card p-6 sm:p-8">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Shareable Link
            </p>
            <p className="mt-3 text-base leading-7 text-ink/75">
              This QR code points to the current invite URL. If you open the page with a guest query string, the personalized greeting is preserved automatically.
            </p>
          </div>

          <div className="rounded-[1.75rem] bg-gradient-to-br from-white to-mist p-5 ornate-ring">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
              Current Invite URL
            </p>
            <p className="mt-3 break-all text-sm leading-6 text-ink">{url}</p>
          </div>

          <div className="rounded-[1.75rem] bg-white/80 p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/60">
              Guest-Specific Example
            </p>
            <p className="mt-3 break-all text-sm leading-6 text-ink/75">{sampleGuestUrl}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={handleCopy} className="btn-primary">
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Link Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy Invite Link
                </>
              )}
            </button>
            <a href={url} target="_blank" rel="noreferrer" className="btn-secondary">
              <ExternalLink className="h-4 w-4" />
              Open Invite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
