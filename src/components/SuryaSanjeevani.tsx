import React, { useEffect, useRef, useState } from 'react';

export const SuryaSanjeevani: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight * 0.9;
      const endTrigger = -rect.height * 0.25;
      const totalDistance = startTrigger - endTrigger;
      const currentDistance = startTrigger - rect.top;

      const rawProgress = currentDistance / totalDistance;
      setScrollProgress(Math.max(0, Math.min(1, rawProgress)));
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Subtle floating offset driven by scroll + gentle oscillation
  const floatOffset1 = Math.sin(scrollProgress * Math.PI * 4) * 6;
  const floatOffset2 = Math.cos(scrollProgress * Math.PI * 4) * 6;
  const floatOffset3 = Math.sin((scrollProgress + 0.33) * Math.PI * 4) * 6;

  // Final statement reveal as user scrolls past the middle
  const finalStatementReveal = Math.min(1, Math.max(0, (scrollProgress - 0.70) / 0.18));

  return (
    <section
      ref={sectionRef}
      id="surya-sanjeevani"
      className="bg-midnight text-ivory py-12 sm:py-16 md:py-20 border-t border-softgold/25 relative overflow-hidden"
    >
      {/* Subtle background ambient geometry */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-15 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-softgold/25" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">

        {/* ================================================================= */}
        {/* SUBSECTION 1: THE PRACTICE                                        */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-6 sm:mb-8">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-5 h-[1.5px] bg-saffron" />
              <span className="text-xs uppercase tracking-[0.25em] text-ivory/70 font-semibold">
                THE PRACTICE
              </span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-ivory tracking-tight mb-3">
              SURYA SANJEEVANI.
            </h2>

            <div className="font-serif-editorial text-xl sm:text-2xl md:text-3xl italic font-light text-softgold leading-tight mb-4">
              A STRUCTURED PRACTICE OF THE WHOLE HUMAN SYSTEM.
            </div>
          </div>

          {/* Right Column: Narrative Body Copy */}
          <div className="lg:col-span-6 pt-1 lg:pt-6">
            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg font-light text-ivory/80 leading-relaxed max-w-xl">
              <p>
                Surya Sanjeevani is a structured Hatha Yoga process that brings movement, breath, stability and attention into one practice.
              </p>
              <p>
                It works with the body as an interconnected system — not simply as a collection of postures or stretches.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* CENTRAL CIRCLE WITH THREE FLOATING BOXES                          */}
        {/* ================================================================= */}
        <div className="mt-0 mb-6 sm:mb-8 relative">
          
          {/* DESKTOP & TABLET LANDSCAPE VIEW */}
          <div className="hidden md:block relative h-[330px] sm:h-[360px] max-w-4xl mx-auto">
            
            {/* Center Simple Circle representing Surya */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              {/* Outer delicate dashed guide ring */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-softgold/20 border-dashed" />
              
              {/* Secondary subtle ring */}
              <div className="absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-softgold/25" />

              {/* Core Solar Circle */}
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-softgold/45 bg-midnight-surface/80 flex items-center justify-center shadow-[0_0_24px_rgba(212,154,53,0.18)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-saffron shadow-[0_0_10px_rgba(212,154,53,0.7)]" />
                </div>
              </div>
            </div>

            {/* Connecting radial hairlines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              fill="none"
            >
              {/* Line toward Box 1 (Top Left) */}
              <line
                x1="50%"
                y1="50%"
                x2="24%"
                y2="24%"
                stroke="rgba(196, 161, 90, 0.22)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              {/* Line toward Box 2 (Top Right) */}
              <line
                x1="50%"
                y1="50%"
                x2="76%"
                y2="24%"
                stroke="rgba(196, 161, 90, 0.22)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
              {/* Line toward Box 3 (Bottom Center) */}
              <line
                x1="50%"
                y1="50%"
                x2="50%"
                y2="82%"
                stroke="rgba(196, 161, 90, 0.22)"
                strokeWidth="1"
                strokeDasharray="2 3"
              />
            </svg>

            {/* BOX 1: MOVEMENT (Floating Top Left) */}
            <div
              className="absolute top-4 left-4 lg:left-8 w-56 sm:w-60 bg-midnight-deep/85 border border-softgold/30 p-4 sm:p-5 shadow-lg transition-transform duration-500 ease-out"
              style={{
                transform: `translateY(${floatOffset1}px)`,
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory font-sans">
                  MOVEMENT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-softgold/70" />
              </div>
              <p className="text-xs font-light text-ivory/70 leading-relaxed">
                Physical coordination and mobility
              </p>
            </div>

            {/* BOX 2: BREATH (Floating Top Right) */}
            <div
              className="absolute top-4 right-4 lg:right-8 w-56 sm:w-60 bg-midnight-deep/85 border border-softgold/30 p-4 sm:p-5 shadow-lg transition-transform duration-500 ease-out text-right sm:text-left"
              style={{
                transform: `translateY(${floatOffset2}px)`,
              }}
            >
              <div className="flex items-center justify-between mb-2 sm:flex-row-reverse">
                <span className="w-1.5 h-1.5 rounded-full bg-softgold/70" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory font-sans">
                  BREATH
                </span>
              </div>
              <p className="text-xs font-light text-ivory/70 leading-relaxed">
                Rhythm and coordination
              </p>
            </div>

            {/* BOX 3: ATTENTION (Floating Bottom Center) */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-64 sm:w-72 bg-midnight-deep/85 border border-softgold/30 p-4 sm:p-5 shadow-lg text-center transition-transform duration-500 ease-out"
              style={{
                transform: `translate(-50%, ${floatOffset3}px)`,
              }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-softgold/70" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory font-sans">
                  ATTENTION
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-softgold/70" />
              </div>
              <p className="text-xs font-light text-ivory/70 leading-relaxed">
                Awareness and involvement
              </p>
            </div>

          </div>

          {/* MOBILE & TABLET PORTRAIT VIEW (< md) */}
          <div className="md:hidden flex flex-col items-center gap-6 py-4">
            
            {/* Center Circle */}
            <div className="relative w-28 h-28 rounded-full border border-softgold/35 flex items-center justify-center my-2">
              <div className="w-16 h-16 rounded-full border border-softgold/25 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-saffron shadow-[0_0_10px_rgba(212,154,53,0.7)]" />
              </div>
            </div>

            {/* Three Floating Boxes stacked neatly */}
            <div className="w-full space-y-3">
              <div className="w-full bg-midnight-deep/85 border border-softgold/30 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory font-sans">
                    MOVEMENT
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-softgold/70" />
                </div>
                <p className="text-xs font-light text-ivory/70 leading-relaxed">
                  Physical coordination and mobility
                </p>
              </div>

              <div className="w-full bg-midnight-deep/85 border border-softgold/30 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory font-sans">
                    BREATH
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-softgold/70" />
                </div>
                <p className="text-xs font-light text-ivory/70 leading-relaxed">
                  Rhythm and coordination
                </p>
              </div>

              <div className="w-full bg-midnight-deep/85 border border-softgold/30 p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory font-sans">
                    ATTENTION
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-softgold/70" />
                </div>
                <p className="text-xs font-light text-ivory/70 leading-relaxed">
                  Awareness and involvement
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ================================================================= */}
        {/* SUBSECTION: WHY “SURYA”? (Translucent Editorial Box)               */}
        {/* ================================================================= */}
        <div className="relative bg-midnight-surface/35 border border-softgold/25 backdrop-blur-sm p-6 sm:p-8 md:p-10 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Left: Section Label & Heading */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-5 h-[1.5px] bg-saffron" />
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/70 font-semibold">
                  WHY “SURYA”?
                </span>
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-ivory tracking-tight">
                FROM THE SUN.<br />
                <span className="italic font-light text-softgold">INTO THE HUMAN SYSTEM.</span>
              </h3>
            </div>

            {/* Right: Explanatory Copy */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-base sm:text-lg font-light text-ivory/80 leading-relaxed max-w-xl">
              <p className="font-serif-editorial text-xl sm:text-2xl text-ivory/90 italic font-light">
                Surya means Sun.
              </p>
              <p>
                In the yogic understanding, the human being is not separate from the larger system of life. The Sun represents energy, life, light and cycles within that larger existence.
              </p>
              <p>
                Surya Sanjeevani therefore explores the relationship between the individual human system and the larger solar dimension of life.
              </p>
            </div>

          </div>

          {/* =============================================================== */}
          {/* FINAL CULMINATING STATEMENT                                     */}
          {/* =============================================================== */}
          <div
            className="mt-8 pt-6 border-t border-softgold/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-700 ease-out"
            style={{
              opacity: finalStatementReveal > 0.05 ? Math.min(1, finalStatementReveal * 1.3) : 0.35,
              transform: `translateY(${(1 - finalStatementReveal) * 4}px)`,
            }}
          >
            <div className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.14em] sm:tracking-[0.22em] text-ivory font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-saffron flex-shrink-0" />
              <span>FROM THE SOLAR DIMENSION → INTO THE HUMAN SYSTEM.</span>
            </div>
            <div className="font-serif-editorial italic text-saffron text-sm tracking-wide">
              The Solar Dimension
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuryaSanjeevani;
