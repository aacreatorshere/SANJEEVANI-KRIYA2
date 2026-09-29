import React, { useEffect, useRef, useState } from 'react';

type NodeKey = 'BODY' | 'MIND' | 'EMOTIONS' | 'LIFE ENERGIES';

const nodeDetails: Record<NodeKey, { subtitle: string; worksThrough: string }> = {
  BODY: {
    subtitle: 'PHYSICAL FOUNDATION',
    worksThrough: 'Works through: posture · structure · alignment'
  },
  MIND: {
    subtitle: 'CONSCIOUS ATTENTION',
    worksThrough: 'Works through: perception · awareness · attention'
  },
  EMOTIONS: {
    subtitle: 'INNER ATMOSPHERE',
    worksThrough: 'Works through: response · balance · stability'
  },
  'LIFE ENERGIES': {
    subtitle: 'VITAL FORCE',
    worksThrough: 'Works through: vitality · activation · sustenance'
  }
};

export const HumanSystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<NodeKey | null>(null);
  const [activeMobileNode, setActiveMobileNode] = useState<NodeKey | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getNodeState = (key: NodeKey) => {
    if (!hoveredNode) return 'normal';
    return hoveredNode === key ? 'active' : 'dimmed';
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-midnight text-ivory py-7 sm:py-8 md:py-10 overflow-hidden border-t border-softgold/20"
    >
      {/* Background Subtle Geometric Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-softgold/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-softgold/10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Compact Editorial Heading */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-4 h-[1px] bg-saffron" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.26em] text-softgold font-semibold">
              THE HUMAN SYSTEM
            </span>
            <span className="w-4 h-[1px] bg-saffron" />
          </div>

          <h2 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl font-normal leading-[1.12] text-ivory tracking-tight mb-3">
            FOUR DIMENSIONS.<br />
            <span className="italic font-light text-softgold">ONE EXPERIENCE.</span>
          </h2>

          <p className="text-xs sm:text-sm font-light text-ivory/75 leading-relaxed max-w-xl mx-auto">
            Sanjeevani Kriya explores the human system through body, mind, emotions and life energies — understood as interconnected dimensions of human experience.
          </p>
        </div>

        {/* DESKTOP / TABLET LANDSCAPE: Full Spacious Orbital Compass */}
        <div className="hidden md:flex relative max-w-3xl mx-auto h-[460px] sm:h-[500px] items-center justify-center">
          
          {/* Animated Connecting SVG Lines & Pulses */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
            {/* Center coordinates: 300, 300 */}
            {/* Center circle radius: 88px */}

            {/* Line to Body (Top): (300, 75) to (300, 212) */}
            <line
              x1="300"
              y1="85"
              x2="300"
              y2="212"
              stroke="#C4A15A"
              strokeWidth={hoveredNode === 'BODY' ? '1.8' : '1'}
              strokeDasharray="4 4"
              className={`transition-all duration-300 ${
                hoveredNode === 'BODY'
                  ? 'stroke-saffron opacity-100'
                  : hoveredNode
                  ? 'opacity-25'
                  : 'opacity-60'
              }`}
            />
            {/* Subtle Pulse toward Center from Top */}
            <circle r="2.5" fill="#D49A35" opacity={hoveredNode === 'BODY' ? '1' : '0.7'}>
              <animate attributeName="cx" values="300; 300" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="90; 210" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0; 0.9; 0" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Line to Mind (Right): (500, 300) to (388, 300) */}
            <line
              x1="495"
              y1="300"
              x2="388"
              y2="300"
              stroke="#C4A15A"
              strokeWidth={hoveredNode === 'MIND' ? '1.8' : '1'}
              strokeDasharray="4 4"
              className={`transition-all duration-300 ${
                hoveredNode === 'MIND'
                  ? 'stroke-saffron opacity-100'
                  : hoveredNode
                  ? 'opacity-25'
                  : 'opacity-60'
              }`}
            />
            {/* Subtle Pulse toward Center from Right */}
            <circle r="2.5" fill="#D49A35" opacity={hoveredNode === 'MIND' ? '1' : '0.7'}>
              <animate attributeName="cx" values="490; 390" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="300; 300" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0; 0.9; 0" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Line to Emotions (Bottom): (300, 515) to (300, 388) */}
            <line
              x1="300"
              y1="510"
              x2="300"
              y2="388"
              stroke="#C4A15A"
              strokeWidth={hoveredNode === 'EMOTIONS' ? '1.8' : '1'}
              strokeDasharray="4 4"
              className={`transition-all duration-300 ${
                hoveredNode === 'EMOTIONS'
                  ? 'stroke-saffron opacity-100'
                  : hoveredNode
                  ? 'opacity-25'
                  : 'opacity-60'
              }`}
            />
            {/* Subtle Pulse toward Center from Bottom */}
            <circle r="2.5" fill="#D49A35" opacity={hoveredNode === 'EMOTIONS' ? '1' : '0.7'}>
              <animate attributeName="cx" values="300; 300" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="505; 390" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0; 0.9; 0" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Line to Life Energies (Left): (105, 300) to (212, 300) */}
            <line
              x1="105"
              y1="300"
              x2="212"
              y2="300"
              stroke="#C4A15A"
              strokeWidth={hoveredNode === 'LIFE ENERGIES' ? '1.8' : '1'}
              strokeDasharray="4 4"
              className={`transition-all duration-300 ${
                hoveredNode === 'LIFE ENERGIES'
                  ? 'stroke-saffron opacity-100'
                  : hoveredNode
                  ? 'opacity-25'
                  : 'opacity-60'
              }`}
            />
            {/* Subtle Pulse toward Center from Left */}
            <circle r="2.5" fill="#D49A35" opacity={hoveredNode === 'LIFE ENERGIES' ? '1' : '0.7'}>
              <animate attributeName="cx" values="110; 210" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="cy" values="300; 300" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0; 0.9; 0" dur="2.4s" repeatCount="indefinite" />
            </circle>

            {/* Central Orbital Rings */}
            <circle
              cx="300"
              cy="300"
              r="88"
              fill="none"
              stroke="#C4A15A"
              strokeWidth="0.8"
              opacity="0.35"
            />
            <circle
              cx="300"
              cy="300"
              r="155"
              fill="none"
              stroke="#C4A15A"
              strokeWidth="0.5"
              strokeDasharray="2 6"
              opacity="0.25"
            />
          </svg>

          {/* Central Core: THE HUMAN SYSTEM */}
          <div
            className={`relative z-20 w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-softgold/50 bg-midnight/95 backdrop-blur-md flex flex-col items-center justify-center p-5 text-center shadow-2xl transition-all duration-700 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-saffron mb-2 animate-ping" />
            <span className="text-[9px] uppercase tracking-[0.28em] text-softgold font-semibold mb-1">
              THE CORE
            </span>
            <h3 className="font-serif-editorial text-base sm:text-lg md:text-xl font-normal tracking-[0.18em] text-ivory">
              THE<br />HUMAN<br />SYSTEM
            </h3>
            <span className="w-8 h-[1px] bg-softgold/40 mt-2" />
          </div>

          {/* Node 1: BODY (Top) */}
          <div
            onMouseEnter={() => setHoveredNode('BODY')}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setHoveredNode(hoveredNode === 'BODY' ? null : 'BODY')}
            className={`absolute top-0 sm:top-1 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-center transition-all duration-300 ${
              getNodeState('BODY') === 'dimmed' ? 'opacity-35 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex flex-col items-center">
              {/* Primary Node Pill */}
              <div
                className={`px-5 py-2 rounded-none border backdrop-blur-sm transition-all shadow-md ${
                  hoveredNode === 'BODY'
                    ? 'border-saffron bg-saffron/15 shadow-saffron/20'
                    : 'border-softgold/40 bg-midnight/90'
                }`}
              >
                <span className="font-serif-editorial text-base sm:text-lg tracking-[0.2em] text-ivory font-medium">
                  BODY
                </span>
              </div>
              {/* Secondary Descriptor */}
              <span className="text-[9px] uppercase tracking-[0.2em] text-softgold font-medium mt-1.5">
                PHYSICAL FOUNDATION
              </span>
              {/* Tertiary Explanatory Line */}
              <span className="text-[10px] sm:text-[11px] tracking-wide text-ivory/70 font-light mt-0.5 whitespace-nowrap">
                Works through: posture · structure · alignment
              </span>
            </div>
          </div>

          {/* Node 2: MIND (Right) */}
          <div
            onMouseEnter={() => setHoveredNode('MIND')}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setHoveredNode(hoveredNode === 'MIND' ? null : 'MIND')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-center sm:text-left transition-all duration-300 ${
              getNodeState('MIND') === 'dimmed' ? 'opacity-35 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex flex-col items-center sm:items-start">
              {/* Primary Node Pill */}
              <div
                className={`px-5 py-2 rounded-none border backdrop-blur-sm transition-all shadow-md ${
                  hoveredNode === 'MIND'
                    ? 'border-saffron bg-saffron/15 shadow-saffron/20'
                    : 'border-softgold/40 bg-midnight/90'
                }`}
              >
                <span className="font-serif-editorial text-base sm:text-lg tracking-[0.2em] text-ivory font-medium">
                  MIND
                </span>
              </div>
              {/* Secondary Descriptor */}
              <span className="text-[9px] uppercase tracking-[0.2em] text-softgold font-medium mt-1.5">
                CONSCIOUS ATTENTION
              </span>
              {/* Tertiary Explanatory Line */}
              <span className="text-[10px] sm:text-[11px] tracking-wide text-ivory/70 font-light mt-0.5 whitespace-nowrap">
                Works through: perception · awareness · attention
              </span>
            </div>
          </div>

          {/* Node 3: EMOTIONS (Bottom) */}
          <div
            onMouseEnter={() => setHoveredNode('EMOTIONS')}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setHoveredNode(hoveredNode === 'EMOTIONS' ? null : 'EMOTIONS')}
            className={`absolute bottom-0 sm:bottom-1 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-center transition-all duration-300 ${
              getNodeState('EMOTIONS') === 'dimmed' ? 'opacity-35 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex flex-col items-center">
              {/* Primary Node Pill */}
              <div
                className={`px-5 py-2 rounded-none border backdrop-blur-sm transition-all shadow-md ${
                  hoveredNode === 'EMOTIONS'
                    ? 'border-saffron bg-saffron/15 shadow-saffron/20'
                    : 'border-softgold/40 bg-midnight/90'
                }`}
              >
                <span className="font-serif-editorial text-base sm:text-lg tracking-[0.2em] text-ivory font-medium">
                  EMOTIONS
                </span>
              </div>
              {/* Secondary Descriptor */}
              <span className="text-[9px] uppercase tracking-[0.2em] text-softgold font-medium mt-1.5">
                INNER ATMOSPHERE
              </span>
              {/* Tertiary Explanatory Line */}
              <span className="text-[10px] sm:text-[11px] tracking-wide text-ivory/70 font-light mt-0.5 whitespace-nowrap">
                Works through: response · balance · stability
              </span>
            </div>
          </div>

          {/* Node 4: LIFE ENERGIES (Left) */}
          <div
            onMouseEnter={() => setHoveredNode('LIFE ENERGIES')}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setHoveredNode(hoveredNode === 'LIFE ENERGIES' ? null : 'LIFE ENERGIES')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-center sm:text-right transition-all duration-300 ${
              getNodeState('LIFE ENERGIES') === 'dimmed' ? 'opacity-35 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="flex flex-col items-center sm:items-end">
              {/* Primary Node Pill */}
              <div
                className={`px-4 sm:px-5 py-2 rounded-none border backdrop-blur-sm transition-all shadow-md ${
                  hoveredNode === 'LIFE ENERGIES'
                    ? 'border-saffron bg-saffron/15 shadow-saffron/20'
                    : 'border-softgold/40 bg-midnight/90'
                }`}
              >
                <span className="font-serif-editorial text-base sm:text-lg tracking-[0.18em] text-ivory font-medium">
                  LIFE ENERGIES
                </span>
              </div>
              {/* Secondary Descriptor */}
              <span className="text-[9px] uppercase tracking-[0.2em] text-softgold font-medium mt-1.5">
                VITAL FORCE
              </span>
              {/* Tertiary Explanatory Line */}
              <span className="text-[10px] sm:text-[11px] tracking-wide text-ivory/70 font-light mt-0.5 whitespace-nowrap">
                Works through: vitality · activation · sustenance
              </span>
            </div>
          </div>

        </div>

        {/* MOBILE / COMPACT VIEW: Sacred Connected Axis with All Dimensions & Complete Content */}
        <div className="md:hidden relative max-w-sm mx-auto flex flex-col items-center py-2">
          {/* Continuous Vertical Axis SVG with Traveling Energy Pulse */}
          <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 w-8 pointer-events-none flex justify-center z-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line
                x1="50%"
                y1="24"
                x2="50%"
                y2="96%"
                stroke="#C4A15A"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                opacity="0.45"
              />
              <circle r="2.5" fill="#D49A35" opacity="0.8">
                <animate attributeName="cy" values="24; 96%" dur="4s" repeatCount="indefinite" />
                <animate attributeName="cx" values="50%; 50%" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0; 0.9; 0" dur="4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Dimension 1: BODY */}
          <div
            onClick={() => setActiveMobileNode(activeMobileNode === 'BODY' ? null : 'BODY')}
            className={`relative z-10 w-full flex flex-col items-center text-center cursor-pointer transition-all duration-300 py-2.5 ${
              activeMobileNode && activeMobileNode !== 'BODY' ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <div
              className={`px-5 py-2 border backdrop-blur-md transition-all duration-300 shadow-md ${
                activeMobileNode === 'BODY'
                  ? 'border-saffron bg-saffron/20 shadow-saffron/20 text-ivory ring-1 ring-saffron/50'
                  : 'border-softgold/40 bg-midnight/95 text-ivory'
              }`}
            >
              <span className="font-serif-editorial text-base tracking-[0.2em] font-medium">
                BODY
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.22em] text-softgold font-semibold mt-1.5">
              {nodeDetails['BODY'].subtitle}
            </span>
            <span className="text-[10.5px] xs:text-[11px] tracking-wide text-ivory/70 font-light mt-0.5 max-w-[280px] xs:max-w-xs leading-snug">
              {nodeDetails['BODY'].worksThrough}
            </span>
          </div>

          {/* Dimension 2: MIND */}
          <div
            onClick={() => setActiveMobileNode(activeMobileNode === 'MIND' ? null : 'MIND')}
            className={`relative z-10 w-full flex flex-col items-center text-center cursor-pointer transition-all duration-300 py-2.5 ${
              activeMobileNode && activeMobileNode !== 'MIND' ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <div
              className={`px-5 py-2 border backdrop-blur-md transition-all duration-300 shadow-md ${
                activeMobileNode === 'MIND'
                  ? 'border-saffron bg-saffron/20 shadow-saffron/20 text-ivory ring-1 ring-saffron/50'
                  : 'border-softgold/40 bg-midnight/95 text-ivory'
              }`}
            >
              <span className="font-serif-editorial text-base tracking-[0.2em] font-medium">
                MIND
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.22em] text-softgold font-semibold mt-1.5">
              {nodeDetails['MIND'].subtitle}
            </span>
            <span className="text-[10.5px] xs:text-[11px] tracking-wide text-ivory/70 font-light mt-0.5 max-w-[280px] xs:max-w-xs leading-snug">
              {nodeDetails['MIND'].worksThrough}
            </span>
          </div>

          {/* Central Medallion: THE CORE / THE HUMAN SYSTEM */}
          <div className="relative z-10 my-3 flex items-center justify-center">
            {/* Ambient subtle dashed orbital circle */}
            <div className="absolute w-40 h-40 rounded-full border border-softgold/20 border-dashed pointer-events-none" />
            
            {/* Core Circular Medallion */}
            <div className="relative w-32 h-32 xs:w-36 xs:h-36 rounded-full border border-softgold/50 bg-midnight/95 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center shadow-2xl shadow-softgold/10">
              <div className="w-1.5 h-1.5 rounded-full bg-saffron mb-1.5 animate-ping" />
              <span className="text-[8px] uppercase tracking-[0.26em] text-softgold font-semibold mb-0.5">
                THE CORE
              </span>
              <h3 className="font-serif-editorial text-sm xs:text-base font-normal tracking-[0.16em] text-ivory leading-tight">
                THE<br />HUMAN<br />SYSTEM
              </h3>
              <span className="w-6 h-[1px] bg-softgold/40 mt-1.5" />
            </div>
          </div>

          {/* Dimension 3: EMOTIONS */}
          <div
            onClick={() => setActiveMobileNode(activeMobileNode === 'EMOTIONS' ? null : 'EMOTIONS')}
            className={`relative z-10 w-full flex flex-col items-center text-center cursor-pointer transition-all duration-300 py-2.5 ${
              activeMobileNode && activeMobileNode !== 'EMOTIONS' ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <div
              className={`px-5 py-2 border backdrop-blur-md transition-all duration-300 shadow-md ${
                activeMobileNode === 'EMOTIONS'
                  ? 'border-saffron bg-saffron/20 shadow-saffron/20 text-ivory ring-1 ring-saffron/50'
                  : 'border-softgold/40 bg-midnight/95 text-ivory'
              }`}
            >
              <span className="font-serif-editorial text-base tracking-[0.2em] font-medium">
                EMOTIONS
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.22em] text-softgold font-semibold mt-1.5">
              {nodeDetails['EMOTIONS'].subtitle}
            </span>
            <span className="text-[10.5px] xs:text-[11px] tracking-wide text-ivory/70 font-light mt-0.5 max-w-[280px] xs:max-w-xs leading-snug">
              {nodeDetails['EMOTIONS'].worksThrough}
            </span>
          </div>

          {/* Dimension 4: LIFE ENERGIES */}
          <div
            onClick={() => setActiveMobileNode(activeMobileNode === 'LIFE ENERGIES' ? null : 'LIFE ENERGIES')}
            className={`relative z-10 w-full flex flex-col items-center text-center cursor-pointer transition-all duration-300 py-2.5 ${
              activeMobileNode && activeMobileNode !== 'LIFE ENERGIES' ? 'opacity-50' : 'opacity-100'
            }`}
          >
            <div
              className={`px-4 sm:px-5 py-2 border backdrop-blur-md transition-all duration-300 shadow-md ${
                activeMobileNode === 'LIFE ENERGIES'
                  ? 'border-saffron bg-saffron/20 shadow-saffron/20 text-ivory ring-1 ring-saffron/50'
                  : 'border-softgold/40 bg-midnight/95 text-ivory'
              }`}
            >
              <span className="font-serif-editorial text-base tracking-[0.18em] font-medium">
                LIFE ENERGIES
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.22em] text-softgold font-semibold mt-1.5">
              {nodeDetails['LIFE ENERGIES'].subtitle}
            </span>
            <span className="text-[10.5px] xs:text-[11px] tracking-wide text-ivory/70 font-light mt-0.5 max-w-[280px] xs:max-w-xs leading-snug">
              {nodeDetails['LIFE ENERGIES'].worksThrough}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
