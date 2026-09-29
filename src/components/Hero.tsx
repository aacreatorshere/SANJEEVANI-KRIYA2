import React, { useEffect, useState } from 'react';
import { Compass } from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses }) => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-midnight text-ivory pt-20 pb-10 lg:py-0">
      {/* Cinematic Background Image with Slow Zoom & Parallax */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`
        }}
      >
        <img
          src="/4.png"
          alt="Contemplative setting in morning light"
          className={`w-full h-full object-cover object-[64%_center] sm:object-center origin-[64%_center] sm:origin-center transition-transform duration-[12000ms] ease-out filter brightness-[0.62] sm:brightness-[0.42] contrast-[1.08] sm:contrast-[1.1] ${
            loaded ? 'scale-105' : 'scale-100'
          }`}
        />
        {/* Editorial Gradients & Midnight Blue Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent sm:via-midnight/55 sm:to-midnight/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/50 to-transparent sm:from-midnight/85 sm:via-midnight/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-8 md:pt-12 pb-6">
        <div className="max-w-3xl">
          {/* Main Headline: Appears line by line */}
          <h1 className="font-serif-editorial text-[2.2rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] text-ivory tracking-tight mb-6 sm:mb-8">
            <span
              className={`block transition-all duration-1000 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              UNDERSTAND
            </span>
            <span
              className={`block transition-all duration-1000 delay-500 text-ivory/95 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              WHAT MOVES
            </span>
            <span
              className={`block transition-all duration-1000 delay-700 italic font-light text-softgold ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              WITHIN YOU.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            className={`text-sm sm:text-base md:text-lg lg:text-xl font-light text-ivory/85 leading-relaxed max-w-2xl transition-all duration-1000 delay-900 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            A contemporary experiential approach rooted in yogic science — exploring the human system through body, mind, emotions and life energies.
          </p>

          {/* Small Supporting Statement */}
          <div
            className={`mt-4 sm:mt-6 flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.12em] sm:tracking-[0.2em] text-softgold/90 font-medium transition-all duration-1000 delay-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Compass className="w-4 h-4 text-saffron flex-shrink-0" />
            <span className="leading-snug">ANCIENT UNDERSTANDING. CONTEMPORARY EXPERIENCE.</span>
          </div>

          {/* CTA */}
          <div
            className={`mt-8 sm:mt-10 md:mt-12 flex items-center transition-all duration-1000 delay-[1150ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <button
              onClick={onExploreCourses}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center bg-saffron hover:bg-saffron-hover text-midnight font-semibold px-8 py-4 text-xs uppercase tracking-[0.22em] transition-all duration-500 ease-out shadow-lg hover:shadow-saffron/25 rounded-[22px_6px_22px_6px] hover:rounded-[6px_22px_6px_22px] cursor-pointer active:scale-[0.98]"
            >
              <span>EXPLORE THE JOURNEY</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
