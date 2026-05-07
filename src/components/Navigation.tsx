import { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-full bg-crimson-800 flex items-center justify-center group-hover:bg-crimson-700 transition-colors">
            <ChefHat size={18} className="text-gold-400" />
          </div>
          <div className="hidden sm:block">
            <p className="font-serif text-warm-50 text-sm font-bold leading-tight">Super Horse</p>
            <p className="font-sans text-gold-400 text-xs tracking-[0.15em] uppercase leading-tight">Chinese Takeaways</p>
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 font-sans text-sm tracking-widest uppercase transition-all duration-200 relative group ${
                  activeSection === link.href.slice(1)
                    ? 'text-gold-400'
                    : 'text-warm-100 hover:text-gold-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold-400 transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="tel:+6495709592"
          className="hidden md:inline-flex items-center gap-2 bg-crimson-800 hover:bg-crimson-700 text-warm-50 text-sm font-sans tracking-wider uppercase px-5 py-2.5 transition-all duration-300 hover:shadow-lg hover:shadow-crimson-900/50"
        >
          Call Now
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-warm-50 hover:text-gold-400 transition-colors p-1"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(10, 5, 5, 0.98)' }}
      >
        <div className="px-4 py-4 border-t border-crimson-900/50 space-y-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`block w-full text-left px-4 py-3 font-sans text-sm tracking-widest uppercase transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-gold-400'
                  : 'text-warm-100 hover:text-gold-400'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+6495709592"
            className="block mt-3 text-center bg-crimson-800 hover:bg-crimson-700 text-warm-50 text-sm font-sans tracking-wider uppercase px-5 py-3 transition-all"
          >
            Call Now: +64 9 570 9592
          </a>
        </div>
      </div>
    </header>
  );
}
