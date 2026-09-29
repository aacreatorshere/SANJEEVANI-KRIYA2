import React from 'react';

interface FooterProps {
  onOpenWhatsApp?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-midnight-deep text-ivory/80 py-9 sm:py-10 border-t border-softgold/20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-softgold/15">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="font-serif-editorial text-xl sm:text-2xl font-normal tracking-[0.16em] sm:tracking-[0.2em] text-ivory">
                SANJEEVANI KRIYA
              </span>
            </div>
            <p className="text-sm font-light text-ivory/60 max-w-md leading-relaxed">
              A contemporary experiential approach rooted in yogic science. Exploring the human system through body, mind, emotions and life energies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-softgold font-semibold">
              NAVIGATION
            </div>
            <ul className="space-y-2 text-xs uppercase tracking-[0.18em]">
              <li>
                <button
                  onClick={() => scrollTo('#the-approach')}
                  className="hover:text-softgold transition-colors text-ivory/70 text-left py-1"
                >
                  Approach
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#courses')}
                  className="hover:text-softgold transition-colors text-ivory/70 text-left py-1"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-softgold transition-colors text-ivory/70 text-left py-1"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact / Enquiries */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] uppercase tracking-[0.25em] text-softgold font-semibold">
              ENQUIRIES
            </div>
            <p className="text-xs text-ivory/70 leading-relaxed font-light">
              Connect directly via WhatsApp for course schedules, prerequisites, and offline venue dates.
            </p>
            <a
              href="https://wa.me/message/QN3GGJAH6P5VO1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-2.5 bg-indiangreen hover:bg-indiangreen-light text-ivory font-medium px-4 py-2.5 text-xs uppercase tracking-[0.18em] transition-all duration-300 border border-indiangreen-light/40 shadow-md hover:shadow-indiangreen/30 cursor-pointer active:scale-[0.98]"
            >
              <svg className="w-4 h-4 fill-current text-ivory" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.2em] text-ivory/40 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} SANJEEVANI KRIYA. ALL RIGHTS RESERVED.
          </div>
          <div>
            CONTEMPORARY INDIAN YOGIC SCIENCE
          </div>
        </div>
      </div>
    </footer>
  );
};
