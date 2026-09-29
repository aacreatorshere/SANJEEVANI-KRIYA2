import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  onExploreCourses?: () => void;
  onOpenWhatsApp?: (courseName?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = () => {
  const courses = [
    { name: 'ASTHI SANCHALAN', id: 'asthi-sanchalan' },
    { name: 'THE ANTIDOTE', id: 'the-antidote' },
    { name: 'SURYA SANJEEVANI', id: 'surya-sanjeevani' },
  ];

  return (
    <section className="bg-midnight text-ivory py-8 sm:py-9 md:py-10 relative overflow-hidden border-t border-softgold/25">
      {/* Background Subtle Circles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-softgold/30" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-[1px] bg-saffron" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-softgold font-semibold">
            AN INVITATION
          </span>
          <span className="w-6 h-[1px] bg-saffron" />
        </div>

        {/* Large Serif Headline */}
        <h2 className="font-serif-editorial text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] text-ivory tracking-tight mb-8 sm:mb-10">
          PERHAPS THE NEXT THING<br />
          TO UNDERSTAND<br />
          <span className="italic font-light text-softgold">IS WITHIN YOU.</span>
        </h2>

        {/* Compact Horizontal Layout for the Three Courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto">
          {courses.map((course, idx) => (
            <div
              key={course.id}
              className="p-4 sm:p-5 bg-midnight-surface/70 border border-softgold/25 hover:border-softgold/50 transition-all duration-300 text-left"
            >
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-softgold/70 mb-1.5 font-mono">
                COURSE 0{idx + 1}
              </div>
              <div className="font-serif-editorial text-lg sm:text-xl text-ivory font-normal tracking-wide">
                {course.name}
              </div>
            </div>
          ))}
        </div>

        {/* Prominent Centered Saffron Gold "SPEAK WITH US" CTA */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/message/QN3GGJAH6P5VO1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-saffron hover:bg-saffron-hover text-midnight font-semibold px-6 sm:px-11 py-3.5 sm:py-4 text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.24em] transition-all duration-300 shadow-xl hover:shadow-saffron/25 cursor-pointer active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-midnight stroke-[2]" />
            <span>SPEAK WITH US</span>
          </a>
        </div>

      </div>
    </section>
  );
};
