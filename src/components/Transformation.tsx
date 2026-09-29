import React, { useEffect, useRef, useState } from 'react';

interface CardData {
  initialLabel: string;
  fromText: string;
  shiftLabel: string;
  toText: string;
}

export const Transformation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards: CardData[] = [
    {
      initialLabel: 'INITIAL STATE',
      fromText: 'FROM REACTION',
      shiftLabel: 'INTERNAL SHIFT',
      toText: 'TO AWARENESS'
    },
    {
      initialLabel: 'INITIAL STATE',
      fromText: 'FROM INFORMATION',
      shiftLabel: 'INTERNAL SHIFT',
      toText: 'TO EXPERIENCE'
    },
    {
      initialLabel: 'INITIAL STATE',
      fromText: 'FROM EXTERNAL DEPENDENCE',
      shiftLabel: 'INTERNAL SHIFT',
      toText: 'TO INNER UNDERSTANDING'
    },
    {
      initialLabel: 'INITIAL STATE',
      fromText: 'FROM HABIT',
      shiftLabel: 'INTERNAL SHIFT',
      toText: 'TO CONSCIOUSNESS'
    }
  ];

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, offsetWidth } = scrollContainerRef.current;
    const newIndex = Math.round(scrollLeft / (offsetWidth * 0.8 || 1));
    setActiveMobileIndex(Math.min(Math.max(newIndex, 0), cards.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardsElements = scrollContainerRef.current.children;
    if (cardsElements[index]) {
      (cardsElements[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-midnight text-ivory py-8 sm:py-9 md:py-11 relative overflow-hidden border-t border-softgold/20 select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header - Exact wording kept */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[1.5px] bg-saffron" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-softgold font-semibold">
              SHIFT IN PERCEPTION
            </span>
          </div>

          <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-ivory tracking-tight mb-4">
            WHAT CHANGES<br />
            WHEN YOUR EXPERIENCE<br />
            <span className="italic font-light text-softgold">OF LIFE CHANGES?</span>
          </h2>

          <p className="text-xs sm:text-sm font-light text-ivory/70 leading-relaxed max-w-xl">
            This is an experiential inquiry into self-perception — not a promise of miraculous change, but an invitation to conscious engagement.
          </p>
        </div>

        {/* Four-Card Horizontal Flip Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar pb-3 px-1"
        >
          {cards.map((card, index) => {
            const isFlipped = Boolean(flippedCards[index] || hoveredIndex === index);

            return (
              <div
                key={card.fromText}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(index)}
                className={`w-[84vw] xs:w-[280px] sm:w-[310px] md:w-[270px] lg:w-auto flex-shrink-0 lg:flex-shrink snap-center h-[260px] sm:h-[280px] cursor-pointer perspective-[1000px] transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{
                  perspective: '1000px',
                  transitionDelay: `${index * 120}ms`
                }}
              >
                {/* 3D Rotating Card Container */}
                <div
                  className="relative w-full h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* FRONT FACE (Initial State) */}
                  <div
                    className="absolute inset-0 bg-midnight border border-softgold/30 hover:border-softgold/60 p-6 sm:p-7 flex flex-col justify-between shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)'
                    }}
                  >
                    <div>
                      {/* Small Label */}
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-ivory/50 font-medium">
                        {card.initialLabel}
                      </div>
                    </div>

                    {/* Main Statement (Ivory Serif) */}
                    <div>
                      <div className="font-serif-editorial text-xl sm:text-2xl lg:text-2xl xl:text-3xl text-ivory font-normal tracking-wide leading-snug">
                        {card.fromText}
                      </div>
                    </div>

                    {/* Subtle Base Line */}
                    <div className="pt-2 border-t border-softgold/20 flex items-center justify-between">
                      <span className="w-6 h-[1px] bg-softgold/40" />
                      <span className="text-[9px] uppercase tracking-[0.2em] text-softgold/40">
                        HOVER / TAP
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE (Internal Shift) */}
                  <div
                    className="absolute inset-0 bg-midnight-surface border border-saffron/60 p-6 sm:p-7 flex flex-col justify-between shadow-2xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div>
                      {/* Small Label */}
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-saffron font-semibold">
                        {card.shiftLabel}
                      </div>
                    </div>

                    {/* Main Statement (Soft Gold / Saffron Italic Serif) */}
                    <div>
                      <div className="font-serif-editorial text-xl sm:text-2xl lg:text-2xl xl:text-3xl text-softgold font-normal italic tracking-wide leading-snug">
                        {card.toText}
                      </div>
                    </div>

                    {/* Subtle Base Line */}
                    <div className="pt-2 border-t border-saffron/30 flex items-center justify-between">
                      <span className="w-8 h-[1px] bg-saffron" />
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Carousel Progress Indicator for Mobile/Tablet */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-5">
          {cards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-1 transition-all duration-300 ${
                activeMobileIndex === idx
                  ? 'w-6 bg-saffron'
                  : 'w-2 bg-softgold/30'
              }`}
              aria-label={`Scroll to card ${idx + 1}`}
            />
          ))}
        </div>

        {/* Responsible Disclaimer Footnote */}
        <div className="mt-8 text-[11px] uppercase tracking-[0.2em] text-ivory/40 font-light">
          AN EXPLORATION ROOTED IN RIGOROUS SELF-OBSERVATION AND YOGIC DISCIPLINE.
        </div>
      </div>
    </section>
  );
};
