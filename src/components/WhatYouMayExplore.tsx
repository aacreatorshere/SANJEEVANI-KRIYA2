import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const WhatYouMayExplore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const observations = [
    { label: 'GREATER CLARITY', subtitle: 'Fluidity in thought & decision making' },
    { label: 'EMOTIONAL BALANCE', subtitle: 'Equanimity across changing circumstances' },
    { label: 'FOCUS', subtitle: 'Sustained, single-pointed awareness' },
    { label: 'ABILITY TO HANDLE STRESS', subtitle: 'Calibrated physiological resilience' },
    { label: 'ENERGY', subtitle: 'Unforced vitality throughout daily cycles' },
    { label: 'WELLBEING', subtitle: 'A natural sense of ease within the body' },
    { label: 'INNER PEACE', subtitle: 'Stillness that is independent of external events' },
  ];

  const handleScroll = () => {
    if (!scrollTrackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollTrackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(scrollLeft / maxScroll);
    }
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollTrackRef.current) return;
    const distance = scrollTrackRef.current.clientWidth * 0.75;
    scrollTrackRef.current.scrollBy({
      left: direction === 'left' ? -distance : distance,
      behavior: 'smooth'
    });
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollTrackRef.current) return;
    setIsMouseDown(true);
    setStartX(e.pageX - scrollTrackRef.current.offsetLeft);
    setScrollLeftState(scrollTrackRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollTrackRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollTrackRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    scrollTrackRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsMouseDown(false);
  };

  return (
    <section
      ref={containerRef}
      className="bg-indiangreen text-ivory py-7 sm:py-8 md:py-10 relative overflow-hidden select-none"
    >
      {/* Subtle organic background ring */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-ivory" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-ivory" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header with Minimal Arrow Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2.5">
              <span className="w-5 h-[1.5px] bg-saffron" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-ivory/80 font-semibold">
                POSSIBLE OBSERVATIONS
              </span>
            </div>

            <h2 className="font-serif-editorial text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-ivory tracking-tight mb-3">
              WHAT MIGHT YOU NOTICE<br />
              <span className="italic font-light text-softgold">WHEN YOU BEGIN TO LOOK WITHIN?</span>
            </h2>

            <p className="text-xs sm:text-sm font-light text-ivory/85 leading-relaxed max-w-xl">
              As the internal dimensions align, practitioners frequently observe qualitative shifts in their day-to-day experience of life.
            </p>
          </div>

          {/* Minimal Arrow Controls on Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollByAmount('left')}
              className="w-9 h-9 border border-ivory/25 hover:border-softgold text-softgold hover:text-ivory flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous observation"
            >
              <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
            </button>
            <button
              onClick={() => scrollByAmount('right')}
              className="w-9 h-9 border border-ivory/25 hover:border-softgold text-softgold hover:text-ivory flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next observation"
            >
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Viewport */}
        <div className="relative">
          {/* Subtle Right Edge Fade */}
          <div className="hidden md:block absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-indiangreen via-indiangreen/70 to-transparent pointer-events-none z-10" />

          {/* Scrolling Container */}
          <div
            ref={scrollTrackRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-3 px-1 ${
              isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {observations.map((item, idx) => (
              <div
                key={item.label}
                className={`w-[84vw] xs:w-[320px] sm:w-[350px] md:w-[380px] lg:w-[390px] min-h-[175px] sm:h-[185px] flex-shrink-0 snap-start p-5 sm:p-7 border border-ivory/20 bg-indiangreen-deep/60 backdrop-blur-sm flex flex-col justify-between hover:border-softgold/60 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Top Row with Saffron Accent Dot */}
                <div className="flex items-center justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif-editorial text-lg sm:text-xl lg:text-2xl text-ivory font-normal tracking-wide leading-snug mb-1.5">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ivory/75 font-light leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal Scroll Progress Indicator Line */}
        <div className="mt-6 mb-8 flex justify-center">
          <div className="w-48 sm:w-64 h-[1.5px] bg-ivory/20 relative overflow-hidden">
            <div
              className="absolute top-0 h-full bg-saffron transition-all duration-150 ease-out"
              style={{
                left: `${scrollProgress * 70}%`,
                width: '30%'
              }}
            />
          </div>
        </div>

        {/* Small Responsible Medical Disclaimer */}
        <div className="pt-4 border-t border-ivory/20 max-w-3xl">
          <p className="text-[11px] sm:text-xs text-ivory/60 font-light leading-relaxed tracking-wider">
            <strong className="text-ivory/80 uppercase font-medium">Please Note:</strong> Individual experiences vary. Sanjeevani — The Antidote is not a substitute for appropriate medical treatment. The program does not make medical or diagnostic claims.
          </p>
        </div>

      </div>
    </section>
  );
};
