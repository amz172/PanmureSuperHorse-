import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    category: 'Fried Rice',
    description: 'Wok-tossed rice with eggs, spring onions, and your choice of protein. Light, fluffy and perfectly seasoned.',
    price: 'From $12.00',
    image: 'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Fan Favourite',
  },
  {
    id: 2,
    category: 'Fish & Chips',
    description: 'Golden battered fish fillets with thick-cut chips. A New Zealand classic done the Super Horse way.',
    price: 'From $10.00',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: null,
  },
  {
    id: 3,
    category: 'Burgers',
    description: 'Juicy, hand-pressed burgers loaded with fresh toppings and our secret sauce on a toasted bun.',
    price: 'From $9.50',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: null,
  },
  {
    id: 4,
    category: 'Noodles',
    description: 'Silky stir-fried noodles with crisp vegetables and your choice of beef, chicken, pork, or prawn.',
    price: 'From $13.00',
    image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Chef\'s Pick',
  },
  {
    id: 5,
    category: 'Seafood',
    description: 'Fresh catches of the day — prawns, calamari, and fish prepared with authentic Chinese sauces and spices.',
    price: 'From $16.00',
    image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: null,
  },
  {
    id: 6,
    category: 'Combo Meals',
    description: 'Mix and match your favourites. Choose two dishes with rice or chips for a satisfying full meal.',
    price: 'From $18.00',
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Best Value',
  },
  {
    id: 7,
    category: 'Family Packs',
    description: 'Feed the whole family with our generous packs — multiple dishes, rice, and sides to share and enjoy.',
    price: 'From $35.00',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Great for Groups',
  },
];

export default function Menu() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" style={{ background: '#0D0505' }}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <p className="font-sans text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">What We Serve</p>
            <h2 className="section-title text-warm-50 mb-4">
              Featured <span className="text-crimson-500">Menu</span>
            </h2>
            <p className="font-sans text-warm-100/60 text-base max-w-lg mx-auto leading-relaxed">
              Freshly cooked to order, every time. Explore our most popular dishes and discover your new favourite.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6 reveal">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="text-gold-400 text-sm">✦</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400" />
          </div>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map(item => (
            <div
              key={item.id}
              className="reveal group relative bg-black border border-white/5 hover:border-gold-400/25 transition-all duration-400 overflow-hidden cursor-pointer"
              style={{ transitionDuration: '350ms' }}
            >
              {/* Tag badge */}
              {item.tag && (
                <div className="absolute top-3 left-3 z-10 bg-crimson-800 text-warm-50 text-xs font-sans tracking-wider uppercase px-2.5 py-1">
                  {item.tag}
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-warm-50 text-lg font-semibold leading-tight group-hover:text-gold-300 transition-colors">
                    {item.category}
                  </h3>
                  <span className="font-sans text-gold-400 text-sm font-bold whitespace-nowrap shrink-0 mt-0.5">
                    {item.price}
                  </span>
                </div>
                <p className="font-sans text-warm-100/60 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Hover reveal */}
                <div className="flex items-center gap-1 mt-4 text-gold-400 text-xs font-sans tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="tel:+6495709592" className="flex items-center gap-1 hover:text-gold-300">
                    Order by Phone <ArrowRight size={12} />
                  </a>
                </div>
              </div>

              {/* Bottom gold line on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-crimson-700 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA below menu */}
        <div className="text-center mt-14 reveal">
          <p className="font-sans text-warm-100/60 text-sm mb-5">
            Our full menu is available in-store. Call ahead or visit us to see today's specials.
          </p>
          <a
            href="tel:+6495709592"
            className="inline-flex items-center gap-3 bg-crimson-800 hover:bg-crimson-700 text-warm-50 font-sans font-bold px-8 py-4 uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-xl hover:shadow-crimson-900/50 group"
          >
            <span>Call to Order</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
    </section>
  );
}
