import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah T.',
    rating: 4,
    date: 'March 2024',
    text: 'Service was good, portions are good value for money. Fish burger needed more seasoning, but overall decent experience.',
    avatar: 'S',
  },
  {
    id: 2,
    name: 'Marcus L.',
    rating: 5,
    date: 'January 2024',
    text: 'Super Horse has become one of my new favourite spots. Owners are hospitable, food is perfectly cooked, and service is excellent.',
    avatar: 'M',
  },
  {
    id: 3,
    name: 'Priya N.',
    rating: 5,
    date: 'February 2024',
    text: 'Food was very well seasoned and portions were worth the price. Service was brilliant and the place was spotless.',
    avatar: 'P',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i < rating ? '#D4AF37' : 'none'}
          stroke={i < rating ? '#D4AF37' : '#4B4030'}
          strokeWidth={1.5}
          className="w-4 h-4"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
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
    <section id="reviews" ref={sectionRef} className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-800/40 to-transparent" />

      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal">
            <p className="font-sans text-gold-400 text-sm tracking-[0.3em] uppercase mb-4">What People Say</p>
            <h2 className="section-title text-warm-50 mb-4">
              Customer <span className="text-crimson-500">Reviews</span>
            </h2>
          </div>

          {/* Aggregate rating */}
          <div className="reveal flex items-center justify-center gap-3 mt-6">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#D4AF37" className="w-5 h-5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="font-serif text-warm-50 text-2xl font-bold">4.7</span>
            <span className="font-sans text-warm-100/50 text-sm">Based on Google Reviews</span>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="reveal group relative bg-gradient-to-b from-white/3 to-transparent border border-white/5 hover:border-gold-400/20 p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-crimson-800/40 group-hover:text-crimson-700/60 transition-colors">
                <Quote size={32} />
              </div>

              {/* Top: avatar + name + rating */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-crimson-900 border border-crimson-700/50 flex items-center justify-center shrink-0">
                  <span className="font-serif text-gold-400 text-lg font-bold">{review.avatar}</span>
                </div>
                <div>
                  <p className="font-sans font-bold text-warm-50 text-sm">{review.name}</p>
                  <p className="font-sans text-warm-100/40 text-xs mt-0.5">{review.date}</p>
                </div>
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Review text */}
              <p className="font-sans text-warm-100/75 text-sm leading-relaxed mt-4">
                "{review.text}"
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
            </div>
          ))}
        </div>

        {/* CTA to leave review */}
        <div className="text-center mt-12 reveal">
          <p className="font-sans text-warm-100/50 text-sm">
            Enjoyed your meal? We'd love to hear from you!
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson-800/40 to-transparent" />
    </section>
  );
}
