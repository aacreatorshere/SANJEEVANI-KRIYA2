import React, { useEffect, useRef, useState } from 'react';

interface PrincipleItem {
  id: string;
  step: string;
  name: string;
  description: string;
}

const PRINCIPLES: PrincipleItem[] = [
  {
    id: 'load',
    step: '01',
    name: 'LOAD',
    description: 'Give the system an appropriate stimulus.',
  },
  {
    id: 'movement',
    step: '02',
    name: 'MOVEMENT',
    description: 'Explore useful ranges with control.',
  },
  {
    id: 'recovery',
    step: '03',
    name: 'RECOVERY',
    description: 'Allow adaptation to take place.',
  },
  {
    id: 'awareness',
    step: '04',
    name: 'AWARENESS',
    description: 'Understand how your body actually responds.',
  },
  {
    id: 'progression',
    step: '05',
    name: 'PROGRESSION',
    description: 'Increase demand gradually, not aggressively.',
  },
];

export const PrincipleOfAdaptation: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through section
      const totalDistance = rect.height + windowHeight * 0.4;
      const currentDistance = windowHeight * 0.7 - rect.top;
      const rawProgress = currentDistance / totalDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clamped);

      // Determine which principle is active based on scroll (1 to 5)
      const stepIndex = Math.min(
        PRINCIPLES.length - 1,
        Math.floor(clamped * PRINCIPLES.length * 1.1)
      );
      setActiveStep(stepIndex);
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

  return (
    <section
      id="adaptation"
      ref={sectionRef}
      className="relative bg-indiangreen text-ivory py-10 sm:py-12 md:py-14 border-t border-softgold/25 overflow-hidden selection:bg-saffron selection:text-midnight"
    >
      {/* Subtle Ambient Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-radial from-indiangreen-light/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-radial from-indiangreen-deep/60 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 z-10">
        
        {/* ========================================================= */}
        {/* 1. HEADER & BODY COPY                                     */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 mb-10 sm:mb-12 items-start">
          
          {/* Left Column: Heading & Label */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-saffron" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-softgold font-semibold">
                THE PRINCIPLE OF ADAPTATION
              </span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.08] text-ivory tracking-tight">
              YOUR BODY<br />
              <span className="italic font-light text-softgold">IS ALWAYS RESPONDING.</span>
            </h2>
          </div>

          {/* Right Column: Educational Body Copy */}
          <div className="lg:col-span-6 lg:pt-3">
            <div className="space-y-4 text-xs sm:text-sm md:text-base font-light text-ivory/90 leading-relaxed max-w-xl">
              <p>
                The body does not remain unchanged.
              </p>
              <p>
                Every movement, every period of inactivity, every load, and every recovery period becomes part of the environment to which the physical system adapts.
              </p>
              
              {/* 4 Physical System Realities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-softgold/20 font-sans text-xs sm:text-[13px] tracking-wide text-ivory">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                  <span>Your skeleton continuously remodels.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                  <span>Your muscles respond to demand.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                  <span>Your movement patterns adjust.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron shrink-0" />
                  <span>Your capacity changes with use.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. THE CONCEPTUAL INQUIRY (DEDICATED, BEAUTIFULLY SPACED) */}
        {/* ========================================================= */}
        <div className="my-10 sm:my-14 py-8 sm:py-10 border-y border-softgold/25 text-center max-w-4xl mx-auto relative bg-indiangreen-deep/30 px-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-4 h-[1px] bg-saffron/70" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-saffron font-semibold">
              THE INQUIRY
            </span>
            <span className="w-4 h-[1px] bg-saffron/70" />
          </div>

          <h3 className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory font-normal leading-[1.2] tracking-tight">
            WHAT AM I <span className="italic font-light text-softgold">REPEATEDLY ASKING</span><br />
            MY BODY TO BECOME <span className="text-saffron">CAPABLE OF?</span>
          </h3>
        </div>

        {/* ========================================================= */}
        {/* 3. THE FIVE PRINCIPLES — ARCHITECTURAL TENSEGRITY WAVE    */}
        {/* ========================================================= */}
        <div className="my-8 sm:my-12">
          
          {/* Subtle Label */}
          <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8 border-b border-softgold/20 pb-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-softgold font-semibold">
              THE FIVE PRINCIPLES OF ADAPTATION
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/60 font-mono hidden sm:block">
              STIMULUS &bull; RESPONSE &bull; INTEGRATION
            </div>
          </div>

          {/* DESKTOP VIEW: 5 Refined Connected Stations with Continuous Gold Wave Line */}
          <div className="hidden lg:block relative">
            
            {/* SVG Connecting Tension Line */}
            <div className="relative h-14 w-full mb-4">
              <svg
                className="w-full h-full"
                viewBox="0 0 1000 60"
                fill="none"
                preserveAspectRatio="none"
              >
                {/* Inactive Base Tension Line */}
                <path
                  d="M 100 30 C 250 10, 350 50, 500 30 C 650 10, 750 50, 900 30"
                  stroke="rgba(196, 161, 90, 0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />

                {/* Active Dynamic Saffron Force Line */}
                <path
                  d="M 100 30 C 250 10, 350 50, 500 30 C 650 10, 750 50, 900 30"
                  stroke="#D49A35"
                  strokeWidth="2.5"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset={100 - Math.min(100, Math.max(10, scrollProgress * 115))}
                  strokeLinecap="round"
                  className="transition-all duration-300 ease-out"
                />

                {/* 5 Structural Nodes along the path */}
                {[100, 300, 500, 700, 900].map((cx, idx) => {
                  const cy = idx % 2 === 0 ? 30 : idx === 1 ? 40 : 20;
                  const isPassed = activeStep >= idx;
                  return (
                    <g key={idx} className="cursor-pointer" onClick={() => setActiveStep(idx)}>
                      {isPassed && (
                        <circle
                          cx={cx}
                          cy={cy}
                          r="12"
                          fill="none"
                          stroke="#D49A35"
                          strokeWidth="1"
                          strokeOpacity="0.4"
                        />
                      )}
                      <circle
                        cx={cx}
                        cy={cy}
                        r="6"
                        fill={isPassed ? '#D49A35' : '#3E604C'}
                        stroke={isPassed ? '#F8F5ED' : '#C4A15A'}
                        strokeWidth="2"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* 5 Distinct Columns - 100% Crisp, High Contrast, Perfectly Legible */}
            <div className="grid grid-cols-5 gap-3 xl:gap-5">
              {PRINCIPLES.map((principle, idx) => {
                const isCurrent = activeStep === idx;
                return (
                  <div
                    key={principle.id}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`p-3.5 xl:p-5 transition-all duration-300 cursor-pointer rounded-sm border ${
                      isCurrent
                        ? 'bg-indiangreen-deep/90 border-saffron shadow-lg'
                        : 'bg-indiangreen-deep/40 border-softgold/25 hover:border-softgold/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2 xl:mb-3">
                      <span className={`font-mono text-xs tracking-wider transition-colors ${
                        isCurrent ? 'text-saffron font-semibold' : 'text-softgold/70'
                      }`}>
                        {principle.step}
                      </span>
                      <span className={`w-2 h-2 rounded-full transition-colors ${
                        isCurrent ? 'bg-saffron' : 'bg-softgold/30'
                      }`} />
                    </div>

                    <h4 className="font-sans font-bold text-xs xl:text-sm text-ivory uppercase tracking-[0.12em] xl:tracking-[0.16em] mb-1.5 xl:mb-2">
                      {principle.name}
                    </h4>

                    <p className="text-[11px] xl:text-[13px] font-light text-ivory/85 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TABLET PORTRAIT & MOBILE VIEW: Vertical Refined Progression — Clean, Beautiful, Completely Readable */}
          <div className="block lg:hidden relative pl-6 border-l border-softgold/30 space-y-5 sm:space-y-6 my-4 max-w-xl mx-auto">
            {PRINCIPLES.map((principle, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={principle.id}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-4 rounded-sm border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-indiangreen-deep/90 border-saffron'
                      : 'bg-indiangreen-deep/40 border-softgold/25'
                  }`}
                >
                  {/* Left Spine Node Indicator */}
                  <div
                    className={`absolute -left-[31px] top-5 w-3 h-3 rounded-full border-2 transition-colors ${
                      isCurrent
                        ? 'bg-saffron border-ivory'
                        : 'bg-indiangreen border-softgold/60'
                    }`}
                  />

                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] text-saffron tracking-wider">
                      {principle.step}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-softgold/50" />
                    <h4 className="font-sans font-bold text-sm text-ivory uppercase tracking-[0.18em]">
                      {principle.name}
                    </h4>
                  </div>

                  <p className="text-xs font-light text-ivory/90 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================= */}
        {/* 4. FINAL STATEMENT                                        */}
        {/* ========================================================= */}
        <div className="pt-6 sm:pt-8 text-center max-w-3xl mx-auto">
          <div className="w-12 h-[1.5px] bg-saffron mx-auto mb-4" />
          <h4 className="font-serif-editorial text-xl sm:text-2xl md:text-3xl text-ivory font-normal tracking-wide leading-snug">
            THE BODY ADAPTS TO DEMAND<br />
            <span className="italic font-light text-softgold">BUT ADAPTATION TAKES TIME.</span>
          </h4>
        </div>

      </div>
    </section>
  );
};
