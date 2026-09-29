import React, { useEffect, useRef, useState } from 'react';

export const TheQuestion: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealedPart1, setRevealedPart1] = useState(false);
  const [revealedPart2, setRevealedPart2] = useState(false);
  const [revealedBody, setRevealedBody] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealedPart1(true);
            setTimeout(() => setRevealedPart2(true), 400);
            setTimeout(() => setRevealedBody(true), 800);
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

  return (
    <section
      id="the-approach"
      ref={sectionRef}
      className="relative bg-ivory text-midnight py-8 sm:py-10 md:py-12 border-t border-softgold/25"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Label & Editorial Framing */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-saffron" />
              <span className="text-xs uppercase tracking-[0.25em] text-midnight/70 font-semibold">
                THE HUMAN SYSTEM
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-midnight/50 font-light leading-relaxed">
              AN INQUIRY INTO DIRECT EXPERIENCE
            </p>
            <div className="mt-8 hidden lg:block w-20 h-[1px] bg-softgold/40" />
          </div>

          {/* Right Column: Major Typography Statement & Narrative */}
          <div className="lg:col-span-8">
            {/* Primary Question Statement */}
            <div className="space-y-4 sm:space-y-6">
              {/* Line 1 */}
              <div
                className={`transition-all duration-1000 ease-out transform ${
                  revealedPart1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="font-serif-editorial text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] text-midnight tracking-tight">
                  YOU KNOW HOW TO<br />MANAGE YOUR WORLD.
                </h2>
              </div>

              {/* Line 2 (reveals slightly later) */}
              <div
                className={`transition-all duration-1000 ease-out transform ${
                  revealedPart2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="font-serif-editorial text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] text-saffron-hover italic tracking-tight">
                  BUT HOW WELL<br />DO YOU UNDERSTAND<br />YOURSELF?
                </h3>
              </div>
            </div>

            {/* Concise Supporting Editorial Paragraph */}
            <div
              className={`mt-10 sm:mt-12 space-y-6 max-w-2xl transition-all duration-1000 delay-300 ease-out ${
                revealedBody ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p className="text-base sm:text-lg md:text-xl font-light text-midnight/80 leading-relaxed">
                We spend years learning how to navigate the world around us. Yet the system through which we experience that world — our body, mind, emotions and life energies — often remains unexplored.
              </p>

              {/* Final Highlighted Line */}
              <div className="pt-4 border-l-2 border-softgold pl-5 sm:pl-6 my-6">
                <p className="text-xs sm:text-sm uppercase tracking-[0.22em] text-midnight font-semibold leading-relaxed">
                  SANJEEVANI KRIYA BEGINS WITH THAT EXPLORATION.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
