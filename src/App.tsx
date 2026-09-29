import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TheQuestion } from './components/TheQuestion';
import { HumanSystem } from './components/HumanSystem';
import { TheIdea } from './components/TheIdea';
import { CourseSlider } from './components/CourseSlider';
import { TheConnection } from './components/TheConnection';
import { SuryaSanjeevani } from './components/SuryaSanjeevani';
import { PrincipleOfAdaptation } from './components/PrincipleOfAdaptation';
import { Transformation } from './components/Transformation';
import { RootedInYoga } from './components/RootedInYoga';
import { PostureIsNotAShape } from './components/PostureIsNotAShape';
import { WhatYouMayExplore } from './components/WhatYouMayExplore';
import { ThePersonBehindThePractice } from './components/ThePersonBehindThePractice';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { coursesData } from './data/coursesData';
import { faqData } from './data/faqData';

export const App: React.FC = () => {
  const handleScrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-ivory text-midnight flex flex-col selection:bg-saffron selection:text-midnight">
      {/* Dynamic Sticky Header Navigation */}
      <Navigation onBeginJourney={handleScrollToCourses} />

      {/* SECTION 01: Hero */}
      <Hero
        onExploreCourses={handleScrollToCourses}
      />

      {/* SECTION 02: The Question */}
      <TheQuestion />

      {/* SECTION 03: What is Sanjeevani Kriya? / The Human System Diagram */}
      <HumanSystem />

      {/* SECTION 04: The Idea */}
      <TheIdea />

      {/* SECTION 05: Three Courses Centerpiece Slider */}
      <CourseSlider
        courses={coursesData}
      />

      {/* SECTION 06: The Connection */}
      <TheConnection />

      {/* Surya Sanjeevani Section */}
      <SuryaSanjeevani />

      {/* SECTION 06B: The Principle of Adaptation (Living Structure) */}
      <PrincipleOfAdaptation />

      {/* SECTION 07: Transformation */}
      <Transformation />

      {/* SECTION 08: Rooted in Yoga. Open to Everyone. */}
      <RootedInYoga />

      {/* SECTION 08B: Posture is Not a Shape */}
      <PostureIsNotAShape />

      {/* SECTION 09: What You May Explore */}
      <WhatYouMayExplore />

      {/* SECTION 09B: The Person Behind The Practice */}
      <ThePersonBehindThePractice />

      {/* SECTION 10: FAQ Accordion */}
      <FAQSection faqItems={faqData} />

      {/* Final Call to Action */}
      <FinalCTA
        onExploreCourses={handleScrollToCourses}
      />

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
