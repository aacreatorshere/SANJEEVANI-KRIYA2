import React from 'react';

export const RootedInYoga: React.FC = () => {
  const principles = [
    'NO PREVIOUS YOGA EXPERIENCE REQUIRED',
    'NO ADVANCED FLEXIBILITY REQUIRED',
    'NO PARTICULAR RELIGIOUS IDENTITY REQUIRED',
    'BEGIN WITH CURIOSITY'
  ];

  return (
    <section className="bg-ivory text-midnight py-8 sm:py-10 md:py-12 border-t border-softgold/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-5 h-[1.5px] bg-saffron" />
              <span className="text-xs uppercase tracking-[0.25em] text-midnight/70 font-semibold">
                UNIVERSAL APPLICABILITY
              </span>
            </div>

            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-midnight tracking-tight mb-6">
              ROOTED IN YOGA.<br />
              <span className="italic font-light text-saffron-hover">OPEN TO EVERYONE.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg font-light text-midnight/80 leading-relaxed max-w-lg">
              <p>
                Sanjeevani Kriya is presented as a yogic-science-based approach rather than a religious conversion program.
              </p>
              <p>
                You do not need previous yoga experience or advanced flexibility to begin.
              </p>
            </div>
          </div>

          {/* Right Column: Four Minimal Statements */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="p-6 bg-ivory-warm border border-softgold/30 hover:border-saffron/60 transition-all duration-300 flex flex-col justify-between min-h-[140px]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-editorial text-lg text-softgold font-light">
                      0{index + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-saffron/60" />
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-midnight font-medium leading-snug">
                    {principle}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-softgold/20 pt-4 flex items-center justify-between text-xs text-midnight/60">
              <span className="uppercase tracking-[0.2em]">ACCESSIBLE TO ALL SEEKERS</span>
              <span className="font-serif-editorial italic text-saffron">Pure Inquiry</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
