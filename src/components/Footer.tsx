import { ChefHat, Facebook, Instagram, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-crimson-900 flex items-center justify-center">
                <ChefHat size={18} className="text-gold-400" />
              </div>
              <div>
                <p className="font-serif text-warm-50 font-bold leading-tight">Super Horse</p>
                <p className="font-sans text-gold-400 text-xs tracking-[0.15em] uppercase">Chinese Takeaways</p>
              </div>
            </div>
            <p className="font-sans text-warm-100/55 text-sm leading-relaxed max-w-xs mb-6">
              Serving Panmure with authentic, freshly cooked Chinese takeaway. Generous portions,
              friendly service, and flavours that keep you coming back.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-gold-400/50 flex items-center justify-center text-warm-100/50 hover:text-gold-400 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-gold-400/50 flex items-center justify-center text-warm-100/50 hover:text-gold-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-warm-50 text-xs tracking-[0.25em] uppercase font-bold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-sans text-warm-100/55 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-crimson-700 group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-sans text-warm-50 text-xs tracking-[0.25em] uppercase font-bold mb-5">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-400 mt-0.5 shrink-0" />
                <p className="font-sans text-warm-100/55 text-sm leading-relaxed">
                  22 Queens Road<br />
                  Panmure, Auckland 1072
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold-400 shrink-0" />
                <a
                  href="tel:+6495709592"
                  className="font-sans text-warm-100/55 hover:text-gold-400 text-sm transition-colors"
                >
                  +64 9 570 9592
                </a>
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-white/5">
              <p className="font-sans text-warm-100/40 text-xs leading-relaxed">
                Mon–Sat: 11:30am–2pm &amp; 3pm–9:30pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-warm-100/30 text-xs">
            &copy; {year} Panmure Super Horse Chinese Takeaways. All rights reserved.
          </p>
          <p className="font-sans text-warm-100/20 text-xs">
            22 Queens Road, Panmure, Auckland 1072, New Zealand
          </p>
        </div>
      </div>
    </footer>
  );
}
