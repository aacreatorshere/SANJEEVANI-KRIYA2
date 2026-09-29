import React, { useState, useEffect } from 'react';
import { CourseItem } from '../types';
import { ArrowUpRight, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface CourseSliderProps {
  courses: CourseItem[];
}

export const CourseSlider: React.FC<CourseSliderProps> = ({ courses }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [mouseStart, setMouseStart] = useState<number | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const total = courses.length;
  const currentCourse = courses[currentIndex];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  // Mouse Drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsMouseDown(true);
    setMouseStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isMouseDown || mouseStart === null) return;
    setIsMouseDown(false);
    const distance = mouseStart - e.clientX;
    if (distance > 60) handleNext();
    else if (distance < -60) handlePrev();
    setMouseStart(null);
  };

  return (
    <section
      id="courses"
      className="relative bg-midnight text-ivory py-10 sm:py-12 md:py-14 overflow-hidden border-t border-softgold/20 select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-saffron" />
              <span className="text-xs uppercase tracking-[0.25em] text-softgold font-semibold">
                THE THREE IMMERSIONS
              </span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-ivory tracking-tight">
              THREE PATHS.<br />
              <span className="italic font-light text-softgold">ONE INTENTION.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base font-light text-ivory/70 leading-relaxed">
              Explore the dimensions of the Sanjeevani approach through three distinct courses — designed to illuminate body, system, and vital solar energy.
            </p>
          </div>
        </div>

        {/* Main Editorial Carousel Viewport */}
        <div
          className="relative cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Active Course Master Slide - Fixed identical dimensions across all 3 courses */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch bg-midnight-surface/60 border border-softgold/25 p-5 sm:p-8 lg:p-9 shadow-2xl relative overflow-hidden lg:min-h-[540px] xl:h-[540px]">
            
            {/* Background Course Number Watermark */}
            <div className="absolute top-4 right-8 font-serif-editorial text-8xl md:text-9xl text-softgold/5 font-light pointer-events-none select-none">
              {currentCourse.number}
            </div>

            {/* Visual Column (55% on large screens) - Consistent height & aspect across all courses */}
            <div className="lg:col-span-7 relative order-1 lg:order-1 overflow-hidden h-[250px] xs:h-[280px] sm:h-[360px] lg:h-full">
              <div className="relative w-full h-full overflow-hidden border border-softgold/30">
                <img
                  key={currentCourse.id}
                  src={currentCourse.image}
                  alt={currentCourse.imageAlt}
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-all duration-1000 ease-out scale-100 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-midnight/20" />

                {/* Course Number & Label Tag */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-midnight/90 backdrop-blur-md px-3.5 py-1.5 border border-softgold/40 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-softgold font-semibold">
                    COURSE {currentCourse.number}
                  </span>
                </div>

                {/* Accent Quote Overlay */}
                {currentCourse.accentQuote && (
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-midnight/85 backdrop-blur-md p-3.5 border-l-2 border-softgold">
                    <p className="font-serif-editorial text-xs sm:text-sm italic text-ivory/90 leading-snug">
                      "{currentCourse.accentQuote}"
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Editorial Content Column (45%) - Flexibly positioned to fit exactly within 540px */}
            <div className="lg:col-span-5 flex flex-col justify-between order-2 lg:order-2 h-full">
              <div>
                {/* Course Subtitle & Category */}
                <div className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-softgold/90 font-medium mb-1.5">
                  <span>{currentCourse.subtitle}</span>
                </div>

                {/* Course Name */}
                <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-normal text-ivory leading-tight mb-2 tracking-tight">
                  {currentCourse.name}
                </h3>

                {/* One Strong Statement */}
                <div className="text-sm sm:text-base font-serif-editorial italic text-saffron mb-2.5 tracking-wide">
                  {currentCourse.headline}
                </div>

                {/* Short Useful Description */}
                <p className="text-xs sm:text-[13px] font-light text-ivory/80 leading-relaxed mb-3">
                  {currentCourse.description}
                </p>

                {/* Special Immersion Tag for Course 02 - Slim compact layout */}
                {currentCourse.programInfo && (
                  <div className="mb-3 py-1.5 px-3 border border-softgold/30 bg-softgold/5 flex flex-wrap items-center gap-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-ivory/90">
                    <div className="flex items-center gap-1.5 text-softgold">
                      <Clock className="w-3 h-3" />
                      <span>{currentCourse.programInfo.duration}</span>
                    </div>
                    <span className="text-softgold/40">•</span>
                    <span>{currentCourse.programInfo.format}</span>
                    <span className="text-softgold/40">•</span>
                    <div className="flex items-center gap-1 text-saffron">
                      <MapPin className="w-3 h-3" />
                      <span>{currentCourse.programInfo.type}</span>
                    </div>
                  </div>
                )}

                {/* 3-4 Focus Points */}
                <div className="mb-3">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-softgold/70 font-semibold mb-1.5">
                    CORE FOCUS DIMENSIONS
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {currentCourse.focusPoints.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-ivory/90"
                      >
                        <span className="w-1 h-1 bg-saffron" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button: Directly Trigger Enquiries */}
              <div className="pt-3 border-t border-softgold/20 mt-auto">
                <a
                  href="https://wa.me/message/QN3GGJAH6P5VO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group inline-flex items-center justify-between bg-saffron hover:bg-saffron-hover text-midnight font-medium px-5 py-3.5 text-xs uppercase tracking-[0.22em] transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <span className="font-semibold">{currentCourse.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                </a>
              </div>

            </div>

          </div>

          {/* Bottom Course Quick Selectors & Touch Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {courses.map((course, idx) => (
                <button
                  key={course.id}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(idx);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`px-3 sm:px-4 py-2 border transition-all text-xs tracking-wider flex items-center gap-2 min-h-[38px] active:scale-95 cursor-pointer ${
                    currentIndex === idx
                      ? 'border-saffron bg-saffron/15 text-ivory'
                      : 'border-softgold/20 text-ivory/50 hover:text-ivory hover:border-softgold/40'
                  }`}
                >
                  <span className="text-softgold text-[10px]">{course.number}</span>
                  <span className="hidden sm:inline uppercase text-[11px] tracking-[0.15em]">
                    {course.name.replace('SANJEEVANI — ', '').replace(' SANJEEVANI', '')}
                  </span>
                </button>
              ))}
            </div>

            {/* Explicit Prev / Next Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={isAnimating}
                aria-label="Previous course"
                className="w-10 h-10 border border-softgold/30 hover:border-saffron bg-midnight-surface/80 flex items-center justify-center text-ivory/80 hover:text-saffron transition-all active:scale-90 disabled:opacity-40 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={isAnimating}
                aria-label="Next course"
                className="w-10 h-10 border border-softgold/30 hover:border-saffron bg-midnight-surface/80 flex items-center justify-center text-ivory/80 hover:text-saffron transition-all active:scale-90 disabled:opacity-40 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
