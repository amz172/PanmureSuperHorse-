import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
      {/* Expanded panel */}
      {expanded && (
        <div className="bg-black/95 border border-gold-400/30 px-5 py-4 shadow-2xl shadow-black/60 animate-fade-up">
          <p className="font-serif text-warm-50 text-sm font-semibold mb-1">Ready to Order?</p>
          <p className="font-sans text-warm-100/55 text-xs mb-3">Call us to place your order!</p>
          <a
            href="tel:+6495709592"
            className="flex items-center gap-2 bg-crimson-800 hover:bg-crimson-700 text-warm-50 text-sm font-sans font-bold px-4 py-2.5 transition-colors"
          >
            <Phone size={13} />
            +64 9 570 9592
          </a>
        </div>
      )}

      {/* Main button */}
      <button
        onClick={() => setExpanded(v => !v)}
        className={`w-14 h-14 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center ${
          expanded
            ? 'bg-warm-100/10 border border-white/20 text-warm-50'
            : 'bg-crimson-800 hover:bg-crimson-700 text-warm-50 hover:shadow-crimson-900/60 animate-float'
        }`}
        aria-label="Order Now"
      >
        {expanded ? <X size={20} /> : <Phone size={20} />}
      </button>

      {!expanded && (
        <span className="text-[10px] font-sans text-warm-100/50 tracking-wider uppercase text-center">
          Order
        </span>
      )}
    </div>
  );
}
