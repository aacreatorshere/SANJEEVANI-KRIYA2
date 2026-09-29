import React from 'react';

export const TheIdea: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'UNDERSTAND',
      description: 'Explore how the human system functions.'
    },
    {
      number: '02',
      title: 'PRACTICE',
      description: 'Work with structured yogic processes.'
    },
    {
      number: '03',
      title: 'EXPERIENCE',
      description: 'Observe yourself through direct experience.'
    }
  ];

  return (
    <section className="bg-ivory text-midnight py-7 sm:py-8 md:py-10 border-t border-softgold/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Mini Header */}
        <div className="flex items-center gap-3 mb-10 sm:mb-12">
          <span className="w-5 h-[1.5px] bg-saffron" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-midnight/70 font-semibold">
            THE METHODOLOGY
          </span>
        </div>

        {/* Three Compact Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14 border-b border-softgold/30 pb-12 sm:pb-14">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="relative group">
              <div className="font-serif-editorial text-3xl sm:text-4xl text-softgold font-light tracking-wide mb-3">
                {pillar.number}
              </div>
              <h3 className="font-serif-editorial text-xl sm:text-2xl text-midnight font-normal tracking-[0.15em] uppercase mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-midnight/75 font-light leading-relaxed">
                {pillar.description}
              </p>
              <div className="w-12 h-[1px] bg-softgold/40 mt-5 transition-all duration-300 group-hover:w-20 group-hover:bg-saffron" />
            </div>
          ))}
        </div>

        {/* Bottom Highlight Statement */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h4 className="font-serif-editorial text-xl sm:text-2xl md:text-3xl text-midnight font-normal tracking-wide leading-tight">
            NOT JUST WHAT YOU KNOW.{' '}
            <span className="italic text-saffron font-light">WHAT YOU EXPERIENCE.</span>
          </h4>
          <span className="text-xs uppercase tracking-[0.22em] text-midnight/50 font-medium">
            STRUCTURED YOGIC SCIENCES
          </span>
        </div>
      </div>
    </section>
  );
};
