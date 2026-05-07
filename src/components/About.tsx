import { useEffect, useRef } from 'react';
import { Award, Clock, Heart, Leaf } from 'lucide-react';

const highlights = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    desc: 'Every dish cooked fresh to order using quality ingredients sourced daily.',
  },
  {
    icon: Award,
    title: 'Generous Portions',
    desc: "You'll never leave hungry — our portions are legendary in Panmure.",
  },
  {
    icon: Heart,
    title: 'Friendly Service',
    desc: 'Our welcoming team treats every customer like family.',
  },
  {
    icon: Clock,
    title: 'Quick & Reliable',
    desc: 'Fast turnaround without compromising on taste or quality.',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-crimson-950/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative reveal">
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Delicious Chinese food being prepared"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 lg:right-0 bg-crimson-900 border border-crimson-700/50 p-5 shadow-2xl">
              <p className="font-serif text-4xl font-bold text-gold-400">20+</p>
              <p className="font-sans text-warm-100 text-sm tracking-wider uppercase mt-1">Years Serving</p>
              <p className="font-sans text-warm-100 text-sm tracking-wider uppercase">Panmure</p>
            </div>

            {/* Gold border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold-400/50 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 lg:right-4 w-24 h-24 border-r-2 border-b-2 border-gold-400/50 pointer-events-none" />
          </div>

          {/* Text side */}
          <div>
            <div className="reveal">
              <p className="font-sans text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
              <h2 className="section-title text-warm-50 mb-6 leading-tight">
                A Local Favourite<br />
                <span className="text-crimson-500">Since Day One</span>
              </h2>
            </div>

            <div className="divider-gold w-16 mb-8 reveal" />

            <div className="space-y-5 reveal">
              <p className="font-sans text-warm-100/80 text-base leading-[1.8]">
                Nestled in the heart of Panmure, <strong className="text-warm-50">Super Horse Chinese Takeaways</strong> has been
                feeding the local community with authentic, home-style Chinese cooking that keeps people coming back.
              </p>
              <p className="font-sans text-warm-100/80 text-base leading-[1.8]">
                We believe great food starts with fresh ingredients and genuine care. Every meal is cooked to order —
                no shortcuts, no compromises — just honest, flavoursome Chinese takeaway at prices that won't break the bank.
              </p>
              <p className="font-sans text-warm-100/80 text-base leading-[1.8]">
                From our famous fried rice and crispy fish to hearty combo meals and family packs, there's something
                for everyone on our menu. Come in, say hi, and taste the difference.
              </p>
            </div>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="reveal group p-4 border border-warm-50/5 hover:border-gold-400/30 bg-white/2 transition-all duration-300 hover:bg-crimson-950/20"
                >
                  <Icon size={20} className="text-gold-400 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-sans font-bold text-warm-50 text-sm mb-1">{title}</p>
                  <p className="font-sans text-warm-100/60 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
