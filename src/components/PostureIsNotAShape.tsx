import React, { useEffect, useRef, useState } from 'react';

export const PostureIsNotAShape: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start progressing when section enters bottom half of screen
      // Complete when section has moved comfortably into view
      const startTrigger = windowHeight * 0.85;
      const endTrigger = -rect.height * 0.35;
      const totalScrollDistance = startTrigger - endTrigger;
      const currentScroll = startTrigger - rect.top;

      const rawProgress = currentScroll / totalScrollDistance;
      const clamped = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clamped);
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

  // Motion stages derived from scrollProgress (0 to 1)
  // Stage 1: Straightening of the axis (0.0 -> 0.62)
  // Straightness factor: 0 = irregular/curved, 1 = perfectly vertical
  const straightness = Math.min(1, Math.max(0, scrollProgress / 0.62));
  const curveOffset1 = (1 - straightness) * -18;
  const curveOffset2 = (1 - straightness) * 20;
  const curveOffset3 = (1 - straightness) * -14;

  // Structural axis dimensions
  const axisX = 64;
  const startY = 40;
  const endY = 460;
  const totalLength = endY - startY;

  // Soft Gold point travel position along vertical axis (0 to 1)
  // Reaches Station 1 at progress ~0.25, Station 2 at ~0.45, Station 3 at ~0.65
  const pointProgress = Math.min(1, Math.max(0, (scrollProgress - 0.08) / 0.62));
  const pointY = startY + pointProgress * (totalLength * 0.82);

  // Dynamic X position of the point following the current curve
  const currentT = pointProgress;
  const currentCurveX =
    axisX +
    (1 - straightness) *
      (Math.sin(currentT * Math.PI * 2.2) * 16);

  // Station reveal thresholds (progressive left-to-right wipe)
  const station1Reveal = Math.min(1, Math.max(0, (scrollProgress - 0.20) / 0.14));
  const station2Reveal = Math.min(1, Math.max(0, (scrollProgress - 0.38) / 0.14));
  const station3Reveal = Math.min(1, Math.max(0, (scrollProgress - 0.56) / 0.14));

  // Balanced vertical state
  const isAligned = straightness >= 0.95;

  // Expansion / relaxation outward (0.72 -> 1.0)
  const relaxationExpansion = Math.min(1, Math.max(0, (scrollProgress - 0.70) / 0.20));
  const closingReveal = Math.min(1, Math.max(0, (scrollProgress - 0.72) / 0.18));

  // SVG path definition: begins curved/irregular, straightens to pure vertical
  const p1X = axisX + curveOffset1;
  const p1Y = startY + totalLength * 0.28;
  const p2X = axisX + curveOffset2;
  const p2Y = startY + totalLength * 0.60;
  const p3X = axisX + curveOffset3;
  const p3Y = startY + totalLength * 0.85;

  const pathD = `M ${axisX} ${startY} C ${p1X} ${p1Y - 40}, ${p1X} ${p1Y + 40}, ${axisX} ${startY + totalLength * 0.45} C ${p2X} ${p2Y - 30}, ${p2X} ${p2Y + 30}, ${axisX} ${startY + totalLength * 0.75} C ${p3X} ${p3Y - 20}, ${p3X} ${p3Y + 20}, ${axisX} ${endY}`;

  return (
    <section
      ref={sectionRef}
      id="posture-ease"
      className="bg-midnight text-ivory py-10 sm:py-14 md:py-16 border-t border-softgold/25 relative overflow-hidden"
    >
      {/* Delicate low-contrast background geometry */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 overflow-hidden">
        <svg
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px]"
          viewBox="0 0 520 520"
          fill="none"
        >
          {/* Subtle partial circle */}
          <circle
            cx="260"
            cy="260"
            r="230"
            stroke="rgba(196, 161, 90, 0.3)"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
          <circle
            cx="260"
            cy="260"
            r="170"
            stroke="rgba(196, 161, 90, 0.2)"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Editorial Typography & Copy                  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category Label with Gold Dash */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-[1.5px] bg-saffron" />
                <span className="text-xs uppercase tracking-[0.25em] text-ivory/70 font-semibold">
                  THE ART OF EASE
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-ivory tracking-tight mb-4">
                POSTURE IS NOT<br />
                A SHAPE.
              </h2>

              {/* Gold Italic Continuation */}
              <div className="font-serif-editorial text-xl sm:text-2xl md:text-3xl italic font-light text-softgold leading-tight mb-6 sm:mb-8">
                IT IS A RELATIONSHIP<br />
                BETWEEN STABILITY AND EASE.
              </div>

              {/* Supporting Copy */}
              <div className="space-y-4 text-base sm:text-lg font-light text-ivory/80 leading-relaxed max-w-lg mb-8">
                <p>
                  A body can look perfectly straight and still be working too hard.
                </p>
                <p className="text-ivory font-normal">
                  The yogic approach asks a different question:
                </p>
                <p className="italic text-ivory/85 pl-3 border-l-2 border-softgold/40">
                  Can the body remain stable, comfortable and alert — without unnecessary muscular effort?
                </p>
              </div>
            </div>

            {/* Subtle Editorial Bottom Bar */}
            <div className="border-t border-softgold/20 pt-4 flex items-center justify-between text-xs text-ivory/60">
              <span className="uppercase tracking-[0.2em]">TENSION &bull; ALIGNMENT &bull; EASE</span>
              <span className="font-serif-editorial italic text-saffron">Sthira Sukham Asanam</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Interactive Structural Axis Motion          */}
          {/* ========================================================= */}
          <div className="lg:col-span-6">
            <div className="relative bg-midnight-deep/50 border border-softgold/20 rounded-none p-4 xs:p-6 sm:p-8 md:p-10 transition-colors duration-500 min-h-[480px] sm:min-h-[500px] flex flex-col justify-between">
              
              {/* Top Axis Header Note */}
              <div className="flex items-center justify-between border-b border-softgold/20 pb-3 mb-4 text-[10px] uppercase tracking-[0.22em] text-ivory/60">
                <span className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                      isAligned ? 'bg-saffron' : 'bg-softgold/40'
                    }`}
                  />
                  AXIS / STRUCTURAL BALANCE
                </span>
                <span className="font-serif-editorial italic lowercase text-xs text-softgold tracking-normal">
                  {scrollProgress < 0.3
                    ? 'tension'
                    : scrollProgress < 0.75
                    ? 'alignment'
                    : 'ease'}
                </span>
              </div>

              {/* Main Interactive Stage with SVG Line + Station Reveal */}
              <div className="relative flex items-center py-2">
                
                {/* SVG Axis Line with Points & Curvature */}
                <div className="w-20 sm:w-28 md:w-32 flex-shrink-0 relative h-[340px] sm:h-[400px]">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 120 500"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    {/* Low-contrast guide axis */}
                    <line
                      x1={axisX}
                      y1={startY}
                      x2={axisX}
                      y2={endY}
                      stroke="rgba(196, 161, 90, 0.18)"
                      strokeWidth="1"
                      strokeDasharray="2 3"
                    />

                    {/* Relaxed outward expansion lines (EASE stage) */}
                    {relaxationExpansion > 0.05 && (
                      <>
                        <line
                          x1={axisX - relaxationExpansion * 20}
                          y1={startY + 20}
                          x2={axisX - relaxationExpansion * 20}
                          y2={endY - 20}
                          stroke="rgba(196, 161, 90, 0.35)"
                          strokeWidth="1"
                          strokeDasharray="3 4"
                          style={{
                            opacity: relaxationExpansion,
                            transition: 'opacity 0.3s ease',
                          }}
                        />
                        <line
                          x1={axisX + relaxationExpansion * 20}
                          y1={startY + 20}
                          x2={axisX + relaxationExpansion * 20}
                          y2={endY - 20}
                          stroke="rgba(196, 161, 90, 0.35)"
                          strokeWidth="1"
                          strokeDasharray="3 4"
                          style={{
                            opacity: relaxationExpansion,
                            transition: 'opacity 0.3s ease',
                          }}
                        />
                      </>
                    )}

                    {/* The Structural Axis Path: slowly straightens */}
                    <path
                      d={pathD}
                      stroke={isAligned ? '#D49A35' : '#F8F5ED'}
                      strokeWidth={isAligned ? '1.75' : '1.25'}
                      strokeOpacity={isAligned ? '0.95' : '0.4'}
                      strokeLinecap="round"
                      className="transition-colors duration-300"
                    />

                    {/* Station 1 Anchor Tick */}
                    <g transform={`translate(${axisX}, 130)`}>
                      <line
                        x1="-4"
                        y1="0"
                        x2={station1Reveal > 0.2 ? '32' : '4'}
                        y2="0"
                        stroke={station1Reveal > 0.5 ? '#D49A35' : 'rgba(196, 161, 90, 0.3)'}
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="2.5"
                        fill={station1Reveal > 0.5 ? '#D49A35' : '#0F1A2A'}
                        stroke="#C4A15A"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Station 2 Anchor Tick */}
                    <g transform={`translate(${axisX}, 245)`}>
                      <line
                        x1="-4"
                        y1="0"
                        x2={station2Reveal > 0.2 ? '32' : '4'}
                        y2="0"
                        stroke={station2Reveal > 0.5 ? '#D49A35' : 'rgba(196, 161, 90, 0.3)'}
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="2.5"
                        fill={station2Reveal > 0.5 ? '#D49A35' : '#0F1A2A'}
                        stroke="#C4A15A"
                        strokeWidth="1"
                      />
                    </g>

                    {/* Station 3 Anchor Tick */}
                    <g transform={`translate(${axisX}, 360)`}>
                      <line
                        x1="-4"
                        y1="0"
                        x2={station3Reveal > 0.2 ? '32' : '4'}
                        y2="0"
                        stroke={station3Reveal > 0.5 ? '#D49A35' : 'rgba(196, 161, 90, 0.3)'}
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="2.5"
                        fill={station3Reveal > 0.5 ? '#D49A35' : '#0F1A2A'}
                        stroke="#C4A15A"
                        strokeWidth="1"
                      />
                    </g>

                    {/* The Travelling Soft Gold Point */}
                    <g transform={`translate(${currentCurveX}, ${pointY})`}>
                      {/* Soft ambient pulse ring */}
                      <circle
                        cx="0"
                        cy="0"
                        r="8"
                        fill="none"
                        stroke="#D49A35"
                        strokeWidth="0.75"
                        strokeOpacity="0.5"
                      />
                      {/* Active core point */}
                      <circle
                        cx="0"
                        cy="0"
                        r="3.5"
                        fill="#D49A35"
                        stroke="#0F1A2A"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </div>

                {/* Concepts revealed beside the moving point */}
                <div className="flex-1 space-y-10 sm:space-y-12 pl-2 sm:pl-4">
                  
                  {/* CONCEPT 1: STABLE */}
                  <div
                    className="transition-all duration-500 ease-out"
                    style={{
                      opacity: station1Reveal > 0.1 ? Math.min(1, station1Reveal * 1.3) : 0.12,
                      clipPath: `inset(0 ${Math.max(0, (1 - station1Reveal) * 100)}% 0 0)`,
                      transform: `translateX(${(1 - station1Reveal) * 8}px)`,
                    }}
                  >
                    <div className="font-serif-editorial text-xl xs:text-2xl sm:text-3xl text-ivory font-normal tracking-tight flex items-baseline gap-2">
                      <span>STABLE</span>
                      <span className="text-[11px] font-sans font-medium text-softgold uppercase tracking-widest">
                        01
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-light text-ivory/70 tracking-wide lowercase italic mt-0.5">
                      without rigidity
                    </div>
                  </div>

                  {/* CONCEPT 2: COMFORTABLE */}
                  <div
                    className="transition-all duration-500 ease-out"
                    style={{
                      opacity: station2Reveal > 0.1 ? Math.min(1, station2Reveal * 1.3) : 0.12,
                      clipPath: `inset(0 ${Math.max(0, (1 - station2Reveal) * 100)}% 0 0)`,
                      transform: `translateX(${(1 - station2Reveal) * 8}px)`,
                    }}
                  >
                    <div className="font-serif-editorial text-xl xs:text-2xl sm:text-3xl text-ivory font-normal tracking-tight flex items-baseline gap-2">
                      <span>COMFORTABLE</span>
                      <span className="text-[11px] font-sans font-medium text-softgold uppercase tracking-widest">
                        02
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-light text-ivory/70 tracking-wide lowercase italic mt-0.5">
                      without collapse
                    </div>
                  </div>

                  {/* CONCEPT 3: ALERT */}
                  <div
                    className="transition-all duration-500 ease-out"
                    style={{
                      opacity: station3Reveal > 0.1 ? Math.min(1, station3Reveal * 1.3) : 0.12,
                      clipPath: `inset(0 ${Math.max(0, (1 - station3Reveal) * 100)}% 0 0)`,
                      transform: `translateX(${(1 - station3Reveal) * 8}px)`,
                    }}
                  >
                    <div className="font-serif-editorial text-xl xs:text-2xl sm:text-3xl text-ivory font-normal tracking-tight flex items-baseline gap-2">
                      <span>ALERT</span>
                      <span className="text-[11px] font-sans font-medium text-softgold uppercase tracking-widest">
                        03
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-light text-ivory/70 tracking-wide lowercase italic mt-0.5">
                      without tension
                    </div>
                  </div>

                </div>
              </div>

              {/* ===================================================== */}
              {/* CLOSING STATEMENT                                     */}
              {/* ===================================================== */}
              <div className="mt-6 pt-5 border-t border-softgold/25">
                {/* Final Principle: Support over Holding */}
                <div
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: closingReveal > 0.05 ? Math.min(1, closingReveal * 1.2) : 0.15,
                    transform: `translateY(${(1 - closingReveal) * 4}px)`,
                  }}
                >
                  <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-ivory/80 font-medium leading-relaxed">
                    The aim is not to hold the body in place.{' '}
                    <span className="text-softgold font-semibold">
                      It is to let the structure support you.
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PostureIsNotAShape;
