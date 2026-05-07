import { Phone, UtensilsCrossed } from 'lucide-react';

export default function CTABanner() {
  return (
    <section
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-crimson-950/70 via-transparent to-crimson-950/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Decorative */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400" />
          <UtensilsCrossed size={18} className="text-gold-400" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400" />
        </div>

        <h2 className="font-serif text-3xl md:text-5xl font-bold text-warm-50 mb-4 leading-tight">
          Hungry? We're Ready<br />
          <span className="shimmer-gold">to Cook for You</span>
        </h2>

        <p className="font-sans text-warm-100/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Fresh, hot, and delicious — every time. Call us now and have your favourite Chinese meal
          ready for pick-up. No shortcuts, just great food.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+6495709592"
            className="group inline-flex items-center gap-3 bg-crimson-800 hover:bg-crimson-700 text-warm-50 font-sans font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-xl hover:shadow-crimson-900/50 w-full sm:w-auto justify-center"
          >
            <Phone size={16} className="group-hover:animate-pulse" />
            Call Now: +64 9 570 9592
          </a>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black font-sans px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Browse Menu
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/10">
          {['Fresh Daily', 'Generous Portions', 'Friendly Service', 'Affordable Prices'].map(item => (
            <div key={item} className="flex items-center gap-2 text-warm-100/60 text-xs font-sans tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
