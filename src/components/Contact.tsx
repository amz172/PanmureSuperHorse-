import { useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, ChevronRight } from 'lucide-react';
import { useOpenStatus } from '../hooks/useOpenStatus';

const hours = [
  { day: 'Monday', lunch: '11:30 AM – 2:00 PM', dinner: '3:00 PM – 9:30 PM' },
  { day: 'Tuesday', lunch: '11:30 AM – 2:00 PM', dinner: '3:00 PM – 9:30 PM' },
  { day: 'Wednesday', lunch: '11:30 AM – 2:00 PM', dinner: '3:00 PM – 9:30 PM' },
  { day: 'Thursday', lunch: '11:30 AM – 2:00 PM', dinner: '3:00 PM – 9:30 PM' },
  { day: 'Friday', lunch: '11:30 AM – 2:00 PM', dinner: '3:00 PM – 9:30 PM' },
  { day: 'Saturday', lunch: '11:30 AM – 2:00 PM', dinner: '3:00 PM – 9:30 PM' },
  { day: 'Sunday', lunch: 'Closed', dinner: null },
];

function getTodayName() {
  return new Date().toLocaleDateString('en-NZ', {
    timeZone: 'Pacific/Auckland',
    weekday: 'long',
  });
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isOpen, label } = useOpenStatus();
  const today = getTodayName();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#0D0505' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <p className="font-sans text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Find Us</p>
            <h2 className="section-title text-warm-50">
              Contact &amp; <span className="text-crimson-500">Location</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Info + Hours */}
          <div className="space-y-8">
            {/* Contact cards */}
            <div className="reveal space-y-4">
              {/* Address */}
              <a
                href="https://maps.google.com/?q=22+Queens+Road+Panmure+Auckland+1072"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 border border-white/5 hover:border-gold-400/25 bg-black/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-crimson-900 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-crimson-800 transition-colors">
                  <MapPin size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="font-sans text-warm-100/50 text-xs tracking-wider uppercase mb-1">Address</p>
                  <p className="font-sans text-warm-50 text-sm leading-relaxed">
                    22 Queens Road<br />
                    Panmure, Auckland 1072<br />
                    New Zealand
                  </p>
                  <p className="flex items-center gap-1 text-gold-400 text-xs font-sans mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    View on Google Maps <ChevronRight size={12} />
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+6495709592"
                className="flex items-start gap-4 p-5 border border-white/5 hover:border-gold-400/25 bg-black/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-crimson-900 flex items-center justify-center shrink-0 group-hover:bg-crimson-800 transition-colors">
                  <Phone size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="font-sans text-warm-100/50 text-xs tracking-wider uppercase mb-1">Phone</p>
                  <p className="font-sans text-warm-50 text-lg font-bold tracking-wide">+64 9 570 9592</p>
                  <p className="font-sans text-warm-100/40 text-xs mt-1">Tap to call</p>
                </div>
              </a>

              {/* Status */}
              <div className="flex items-start gap-4 p-5 border border-white/5 bg-black/40">
                <div className="w-10 h-10 rounded-full bg-crimson-900 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="font-sans text-warm-100/50 text-xs tracking-wider uppercase mb-1">Current Status</p>
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
                    <p className={`font-sans font-bold text-sm ${isOpen ? 'text-green-400' : 'text-red-400'}`}>
                      {label}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Table */}
            <div className="reveal">
              <h3 className="font-serif text-warm-50 text-xl mb-4">Opening Hours</h3>
              <div className="border border-white/5 overflow-hidden">
                {hours.map((row, idx) => {
                  const isToday = row.day === today;
                  return (
                    <div
                      key={row.day}
                      className={`flex items-center justify-between px-5 py-3.5 transition-colors ${
                        isToday
                          ? 'bg-crimson-900/40 border-l-2 border-crimson-600'
                          : idx % 2 === 0
                          ? 'bg-black/20'
                          : 'bg-transparent'
                      }`}
                    >
                      <span className={`font-sans text-sm ${isToday ? 'text-gold-400 font-bold' : 'text-warm-100/70'}`}>
                        {row.day}
                        {isToday && <span className="ml-2 text-xs text-gold-400/70">(Today)</span>}
                      </span>
                      <div className="text-right">
                        {row.dinner ? (
                          <div className="space-y-0.5">
                            <p className={`font-sans text-xs ${isToday ? 'text-warm-50' : 'text-warm-100/60'}`}>{row.lunch}</p>
                            <p className={`font-sans text-xs ${isToday ? 'text-warm-50' : 'text-warm-100/60'}`}>{row.dinner}</p>
                          </div>
                        ) : (
                          <p className="font-sans text-xs text-red-400/80">{row.lunch}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="reveal">
            <div className="relative h-80 lg:h-full min-h-80 overflow-hidden border border-white/5">
              <iframe
                title="Panmure Super Horse Location"
                src="https://maps.google.com/maps?q=22+Queens+Road,+Panmure,+Auckland+1072,+New+Zealand&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay label */}
              <div className="absolute bottom-4 left-4 bg-black/90 border border-gold-400/30 px-4 py-2.5">
                <p className="font-serif text-warm-50 text-sm font-semibold">Super Horse Takeaways</p>
                <p className="font-sans text-gold-400 text-xs mt-0.5">22 Queens Road, Panmure</p>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-5 p-6 bg-crimson-900/40 border border-crimson-800/40 text-center">
              <p className="font-serif text-warm-50 text-lg mb-1">Ready to Order?</p>
              <p className="font-sans text-warm-100/60 text-sm mb-4">
                Call us now or come visit us in Panmure. We can't wait to serve you!
              </p>
              <a
                href="tel:+6495709592"
                className="inline-flex items-center gap-3 bg-crimson-700 hover:bg-crimson-600 text-warm-50 font-sans font-bold px-6 py-3 uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-lg hover:shadow-crimson-900/50"
              >
                <Phone size={14} />
                +64 9 570 9592
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </section>
  );
}
