import { useEffect, useRef, useState } from 'react';
import { Phone, UtensilsCrossed, ChevronDown } from 'lucide-react';
import { useOpenStatus } from '../hooks/useOpenStatus';

export default function Hero() {
  const { isOpen, label } = useOpenStatus();
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY;
        heroRef.current.style.transform = `translateY(${y * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        ref={heroRef}
        className="absolute inset-0 scale-110 will-change-transform"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Open status badge */}
        <div
          className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 border text-xs font-sans tracking-[0.2em] uppercase transition-all duration-700 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          } ${
            isOpen
              ? 'border-green-500/60 text-green-400 bg-green-950/40'
              : 'border-red-500/60 text-red-400 bg-red-950/40'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
          {label}
        </div>

        {/* Restaurant name */}
        <div
          className={`transition-all duration-700 delay-150 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-sans text-gold-400 text-sm md:text-base tracking-[0.4em] uppercase mb-3">
            Panmure, Auckland
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-warm-50 text-shadow-lg leading-tight mb-2">
            Super Horse
          </h1>
          <p className="font-serif italic text-gold-300 text-xl md:text-2xl lg:text-3xl text-shadow mb-6">
            Chinese Takeaways
          </p>
        </div>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-4 mb-8 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-gold-400" />
          <span className="text-gold-400 text-lg">✦</span>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-gold-400" />
        </div>

        {/* Tagline */}
        <p
          className={`font-sans text-warm-100 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 text-shadow transition-all duration-700 delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Authentic Chinese Takeaways in the Heart of Panmure — freshly cooked, generously portioned, and always delicious.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => scrollToSection('menu')}
            className="group inline-flex items-center gap-3 bg-crimson-800 hover:bg-crimson-700 text-warm-50 font-sans font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-xl hover:shadow-crimson-900/50 w-full sm:w-auto justify-center"
          >
            <UtensilsCrossed size={16} className="group-hover:rotate-12 transition-transform" />
            View Menu
          </button>
          <a
            href="tel:+6495709592"
            className="group inline-flex items-center gap-3 border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black font-sans px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <Phone size={16} className="group-hover:animate-bounce" />
            Call Now
          </a>
        </div>

        {/* Quick info */}
        <div
          className={`flex flex-wrap items-center justify-center gap-6 text-warm-100/70 text-xs font-sans tracking-wider transition-all duration-700 delay-[600ms] ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span>22 Queens Road, Panmure</span>
          <span className="text-gold-400/50">|</span>
          <span>Mon–Sat: 11:30am – 9:30pm</span>
          <span className="text-gold-400/50">|</span>
          <span>Sunday Closed</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400/70 hover:text-gold-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
