import React, { useEffect, useRef, useState } from 'react';

export const ThePersonBehindThePractice: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="person-behind-practice"
      className="bg-midnight text-ivory py-7 sm:py-8 md:py-10 border-t border-softgold/25 relative overflow-hidden"
    >
      {/* Subtle oversized circular outline in background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-20 overflow-hidden">
        <div className="absolute -left-28 top-1/2 -translate-y-1/2 w-[550px] sm:w-[650px] h-[550px] sm:h-[650px] rounded-full border border-softgold/30" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: Polaroid Frame (Scaled to exact text height)    */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div
              className={`w-full max-w-[240px] xs:max-w-[265px] sm:max-w-[285px] lg:max-w-[305px] mt-2 sm:mt-4 transition-all duration-1000 ease-out transform ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-90'
              }`}
            >
              {/* Polaroid Frame */}
              <div className="bg-[#FAF7EE] p-3 sm:p-3.5 pb-6 sm:pb-7 shadow-xl shadow-black/80 -rotate-1 sm:-rotate-1.5 transition-transform duration-500 hover:rotate-0 w-full">
                
                {/* Photo Area with Portrait Image (object-top to preserve head and headroom) */}
                <div className="w-full aspect-[3/4] bg-white border border-midnight/15 relative overflow-hidden group">
                  <img
                    src="/5.png"
                    alt="The Person Behind The Practice"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 transition-transform duration-700 hover:scale-105"
                  />
                  {/* Gentle subtle vignette */}
                  <div className="absolute inset-0 bg-radial from-transparent to-midnight-deep/15 pointer-events-none" />
                </div>

                {/* Handwritten / Editorial Caption */}
                <div className="mt-3 text-center">
                  <span className="font-serif-editorial italic text-xs text-midnight/80 tracking-[0.18em] uppercase font-light">
                    The journey continues.
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: Written Content (Retained exactly as desired)  */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            
            {/* Small Gold Label with Extending Horizontal Line */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
              <span className="w-5 h-[1.5px] bg-saffron flex-shrink-0" />
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.25em] text-softgold font-semibold leading-snug">
                THE PERSON BEHIND THE PRACTICE
              </span>
              <span
                className={`h-[1px] bg-softgold/35 hidden sm:block transition-all duration-1000 ease-out ${
                  isInView ? 'w-14 md:w-20 opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </div>

            {/* Main Heading */}
            <h2 className="font-serif-editorial text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.12] text-ivory tracking-tight mb-4 sm:mb-5">
              FROM CORPORATE LIFE<br />
              <span className="italic font-light text-softgold">TO A LIFE OF PRACTICE.</span>
            </h2>

            {/* Supporting Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm md:text-[14.5px] font-light text-ivory/80 leading-relaxed max-w-xl mb-5 sm:mb-6">
              <p>
                For 16 years, he worked in the pharmaceutical and biotechnology sector before a deeply personal journey gradually changed the direction of his life.
              </p>
              <p>
                Beginning with profound experiences in 1993, his search led him through years of spiritual study, meditation, energy work and learning from teachers across India.
              </p>
              <p>
                Over time, the search became a way of life — moving from professional success and intellectual inquiry toward daily Sadhna, disciplined practice and direct experience.
              </p>
            </div>

            {/* Prominent Saffron Gold Highlight Sentence */}
            <div className="relative py-3 pl-3.5 sm:pl-4 border-l-2 border-saffron mb-5 sm:mb-6 overflow-hidden bg-midnight-surface/25">
              <p className="font-serif-editorial text-base sm:text-lg md:text-xl italic font-light text-softgold leading-snug">
                TODAY, HE SHARES WHAT HE HAS SPENT YEARS SEEKING, LEARNING AND PRACTISING.
              </p>
              
              {/* Single subtle light sweep once when entering viewport */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-saffron/15 to-transparent pointer-events-none transition-transform duration-1000 ease-out delay-500 ${
                  isInView ? 'translate-x-full' : '-translate-x-full'
                }`}
              />
            </div>

            {/* Final Small Editorial Line */}
            <div className="pt-3 border-t border-softgold/20">
              <p className="text-xs sm:text-[13px] font-light text-ivory/70 tracking-wide leading-relaxed">
                A journey from professional life → to seeking → to practice → to sharing.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ThePersonBehindThePractice;
