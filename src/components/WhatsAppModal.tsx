import React, { useState, useEffect } from 'react';
import { X, Send, Copy, Check } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'SANJEEVANI — THE ANTIDOTE'
}) => {
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);
  const [copied, setCopied] = useState(false);

  // WhatsApp Direct Contact: https://wa.me/message/QN3GGJAH6P5VO1

  useEffect(() => {
    if (defaultCourse) {
      setSelectedCourse(defaultCourse);
    }
  }, [defaultCourse]);

  if (!isOpen) return null;

  const coursesList = [
    'ASTHI SANCHALAN SANJEEVANI',
    'SANJEEVANI — THE ANTIDOTE',
    'SURYA SANJEEVANI',
    'GENERAL PROGRAM ENQUIRY'
  ];

  const composeMessage = () => {
    return `Namaste, I would like to enquire about ${selectedCourse} with Sanjeevani Kriya. Please share details regarding upcoming sessions, prerequisites, and registration.`;
  };

  const encodedText = encodeURIComponent(composeMessage());
  const whatsappUrl = `https://wa.me/message/QN3GGJAH6P5VO1?text=${encodedText}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(composeMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/80 backdrop-blur-md transition-all">
      <div className="relative w-full max-w-lg bg-midnight border border-softgold/40 text-ivory p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ivory/60 hover:text-softgold transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-[1.5px] bg-saffron" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-softgold font-semibold">
              DIRECT WHATSAPP ENQUIRY
            </span>
          </div>
          <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-ivory tracking-wide">
            CONNECT WITH SANJEEVANI
          </h3>
          <p className="text-xs text-ivory/70 mt-1 font-light leading-relaxed">
            Select your course of interest to initiate a conversation directly with our admissions and program team.
          </p>
        </div>

        {/* Course Selector Tabs */}
        <div className="mb-6">
          <label className="text-[10px] uppercase tracking-[0.2em] text-softgold/80 block mb-2 font-medium">
            SELECTED COURSE
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {coursesList.map((course) => (
              <button
                key={course}
                type="button"
                onClick={() => setSelectedCourse(course)}
                className={`text-left p-2.5 text-xs tracking-wider border transition-all ${
                  selectedCourse === course
                    ? 'border-saffron bg-saffron/15 text-ivory font-medium'
                    : 'border-softgold/20 text-ivory/60 hover:border-softgold/50 hover:text-ivory'
                }`}
              >
                {course}
              </button>
            ))}
          </div>
        </div>

        {/* Message Preview Box */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-softgold/80 font-medium">
              PRE-COMPOSED MESSAGE
            </span>
            <button
              onClick={handleCopy}
              className="text-[10px] uppercase tracking-[0.15em] text-saffron hover:text-softgold flex items-center gap-1 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-saffron" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>COPY MESSAGE</span>
                </>
              )}
            </button>
          </div>
          <div className="p-3.5 bg-midnight-surface/90 border border-softgold/25 text-xs text-ivory/80 font-light italic leading-relaxed">
            "{composeMessage()}"
          </div>
        </div>

        {/* Action Button: Opens WhatsApp */}
        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-saffron hover:bg-saffron-hover text-midnight font-medium py-3.5 px-6 text-xs uppercase tracking-[0.22em] transition-all shadow-md group"
          >
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            <span>CONTINUE TO WHATSAPP</span>
          </a>

          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] text-ivory/40">
              OFFICIAL SANJEEVANI ADMISSIONS DESK
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
