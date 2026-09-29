import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TheConnection: React.FC = () => {
  return (
    <section className="bg-ivory text-midnight py-8 sm:py-10 md:py-12 border-t border-softgold/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[1.5px] bg-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-midnight/70 font-semibold">
              THE INTEGRATION
            </span>
          </div>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-midnight tracking-tight">
            THREE WAYS TO EXPLORE<br />
            <span className="italic font-light text-saffron-hover">THE HUMAN SYSTEM.</span>
          </h2>
        </div>

        {/* Visual Progression: BODY -> HUMAN SYSTEM -> INNER EXPERIENCE */}
        <div className="bg-ivory-warm border border-softgold/30 p-6 sm:p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            
            {/* Step 1 */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-softgold font-semibold block mb-1">
                FOUNDATION
              </span>
              <div className="font-serif-editorial text-2xl sm:text-3xl text-midnight font-normal tracking-wide">
                BODY
              </div>
              <p className="text-xs sm:text-sm text-midnight/70 font-light mt-2 leading-relaxed">
                Asthi Sanchalan explores the physical foundation.
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="text-softgold rotate-90 md:rotate-0">
              <ArrowRight className="w-6 h-6 stroke-1" />
            </div>

            {/* Step 2 */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-saffron font-semibold block mb-1">
                IMMERSION
              </span>
              <div className="font-serif-editorial text-2xl sm:text-3xl text-midnight font-normal tracking-wide">
                HUMAN SYSTEM
              </div>
              <p className="text-xs sm:text-sm text-midnight/70 font-light mt-2 leading-relaxed">
                Sanjeevani — The Antidote explores the broader human system through experiential practice.
              </p>
            </div>

            {/* Connecting Arrow */}
            <div className="text-softgold rotate-90 md:rotate-0">
              <ArrowRight className="w-6 h-6 stroke-1" />
            </div>

            {/* Step 3 */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-softgold font-semibold block mb-1">
                CALIBRATION
              </span>
              <div className="font-serif-editorial text-2xl sm:text-3xl text-midnight font-normal tracking-wide">
                INNER EXPERIENCE
              </div>
              <p className="text-xs sm:text-sm text-midnight/70 font-light mt-2 leading-relaxed">
                Surya Sanjeevani explores the idea of the Sun within and its relationship with life.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Thought */}
        <div className="max-w-2xl border-l-2 border-saffron pl-6">
          <p className="text-sm sm:text-base font-light text-midnight/80 italic leading-relaxed">
            Each course stands complete on its own merits, yet together they form a harmonious progression from structural stability to internal atmospheric mastery.
          </p>
        </div>

      </div>
    </section>
  );
};
