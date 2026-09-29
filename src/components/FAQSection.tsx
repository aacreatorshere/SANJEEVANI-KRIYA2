import React, { useState } from 'react';
import { FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';

interface FAQSectionProps {
  faqItems: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqItems }) => {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-ivory text-midnight py-8 sm:py-10 md:py-12 border-t border-softgold/30">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-midnight/70 font-semibold">
              COMMON INQUIRIES
            </span>
            <span className="w-5 h-[1.5px] bg-saffron" />
          </div>
          <h2 className="font-serif-editorial text-2xl xs:text-3xl sm:text-5xl font-normal leading-[1.15] text-midnight tracking-tight mb-4">
            FREQUENTLY ASKED<br />
            <span className="italic font-light text-saffron-hover">QUESTIONS</span>
          </h2>
          <p className="text-sm font-light text-midnight/70">
            Clear, honest answers to foundational questions about the approach, format, and participation.
          </p>
        </div>

        {/* Compact Accordion */}
        <div className="border-t border-softgold/30 divide-y divide-softgold/20">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full py-4 sm:py-6 flex items-center justify-between text-left group gap-3 sm:gap-4 cursor-pointer focus:outline-none min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-editorial text-base xs:text-lg sm:text-xl md:text-2xl text-midnight font-normal tracking-wide group-hover:text-saffron-hover transition-colors pr-2 sm:pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-softgold/40 flex items-center justify-center text-midnight group-hover:border-saffron group-hover:text-saffron transition-all">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-saffron" />
                    ) : (
                      <Plus className="w-4 h-4 text-midnight/70 group-hover:text-saffron" />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    isOpen ? 'max-h-[600px] opacity-100 pb-5 sm:pb-6' : 'max-h-0 opacity-0 pb-0'
                  }`}
                >
                  <p className="text-sm sm:text-base font-light text-midnight/80 leading-relaxed max-w-3xl pr-2 sm:pr-6 border-l-2 border-softgold/40 pl-3.5 sm:pl-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
