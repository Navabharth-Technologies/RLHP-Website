import React, { useState } from 'react';
import { districtsData } from '../data/rlhpData';
import { Building2, Navigation, Sparkles } from 'lucide-react';

export default function KarnatakaMap({ onSelectDistrict }) {
  const [selectedDistrict, setSelectedDistrict] = useState(districtsData[0]); // Default Mysuru (HQ)
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const handleSelectDistrict = (district) => {
    setSelectedDistrict(district);
    if (onSelectDistrict) onSelectDistrict(district);
  };

  // 10 Operating Districts with their SVG coordinates (viewBox: 0 0 605 925)
  const districtNodes = [
    { id: 'bidar', x: 440, y: 70, name: 'Bidar', sub: 'Basavakalyana' },
    { id: 'kalaburagi', x: 410, y: 195, name: 'Kalaburagi', sub: 'Chincholi' },
    { id: 'raichur', x: 445, y: 310, name: 'Raichur', sub: 'Lingasugur' },
    { id: 'uttara-kannada', x: 105, y: 440, name: 'Uttara Kannada', sub: 'Karwar' },
    { id: 'davanagere', x: 260, y: 490, name: 'Davanagere', sub: 'Honnali' },
    { id: 'chitradurga', x: 335, y: 535, name: 'Chitradurga', sub: 'Holalkere' },
    { id: 'dakshina-kannada', x: 145, y: 690, name: 'Dakshina Kannada', sub: 'Mangalore' },
    { id: 'mandya', x: 340, y: 760, name: 'Mandya', sub: 'Srirangapatna' },
    { id: 'mysuru', x: 275, y: 815, name: 'Mysuru (HQ)', isHq: true, sub: 'Headquarters' },
    { id: 'chamarajanagar', x: 345, y: 855, name: 'Chamarajanagar', sub: 'Gundlupete' },
  ];

  // Map outline path for Karnataka state (viewBox: 0 0 605 925)
  const karnatakaPath = `M 453,1 L 435,4 L 413,36 L 392,34 L 386,65 L 368,72 L 364,88 L 343,87 L 332,101 L 317,110 L 318,124 L 307,137 L 272,140 L 268,135 L 251,134 L 232,126 L 221,137 L 224,155 L 219,161 L 145,172 L 139,190 L 127,196 L 95,197 L 103,209 L 101,228 L 80,230 L 53,246 L 60,263 L 59,291 L 65,300 L 59,316 L 61,338 L 57,343 L 39,347 L 32,358 L 44,370 L 41,404 L 45,439 L 27,455 L 26,472 L 12,476 L 10,492 L 0,497 L 4,506 L 11,506 L 46,528 L 60,561 L 79,640 L 73,647 L 52,653 L 49,661 L 79,662 L 90,687 L 103,750 L 173,811 L 169,818 L 147,818 L 144,824 L 185,831 L 246,876 L 286,891 L 332,920 L 370,923 L 404,905 L 440,901 L 482,879 L 483,872 L 492,868 L 496,859 L 523,858 L 522,842 L 529,830 L 524,830 L 520,821 L 496,825 L 491,819 L 496,808 L 485,801 L 488,790 L 502,775 L 520,769 L 560,767 L 578,757 L 595,736 L 603,707 L 601,673 L 591,674 L 576,653 L 577,636 L 556,634 L 543,616 L 543,599 L 529,595 L 523,588 L 501,589 L 498,600 L 490,607 L 465,611 L 458,591 L 466,547 L 454,537 L 417,538 L 410,544 L 397,538 L 395,527 L 403,512 L 432,501 L 476,499 L 476,493 L 434,492 L 397,504 L 386,499 L 397,481 L 420,462 L 426,428 L 416,401 L 424,369 L 464,350 L 476,329 L 477,312 L 496,293 L 481,287 L 468,269 L 470,189 L 484,159 L 484,136 L 492,129 L 483,106 L 494,101 L 511,112 L 522,111 L 519,102 L 496,88 L 477,23 L 460,19 Z`;

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-sm font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Side: Pure Custom Animated Green Karnataka Map */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center bg-gradient-to-br from-[#041c10] via-[#092917] to-[#04190e] rounded-3xl p-4 sm:p-8 border border-emerald-800/40 min-h-[500px] sm:min-h-[600px] shadow-2xl overflow-hidden group">
          
          {/* Subtle Ambient Decorative Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* SVG Map Container */}
          <div className="relative w-full max-w-[420px] aspect-[605/925] flex justify-center items-center my-auto">
            <svg
              viewBox="0 0 605 925"
              className="w-full h-full filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] select-none"
            >
              <defs>
                {/* Lush Emerald Green Gradient for Karnataka State */}
                <linearGradient id="karnatakaGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="35%" stopColor="#059669" />
                  <stop offset="70%" stopColor="#047857" />
                  <stop offset="100%" stopColor="#065f46" />
                </linearGradient>

                {/* Animated Flowing Pulse Gradient */}
                <linearGradient id="pulseGlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.8" />
                </linearGradient>

                {/* Drop shadow filter for map glow */}
                <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Ambient Glow Silhouette behind map */}
              <path
                d={karnatakaPath}
                fill="#10b981"
                opacity="0.25"
                filter="url(#emeraldGlow)"
                className="animate-pulse"
                style={{ animationDuration: '4s' }}
              />

              {/* Main Pure Karnataka Green State Body */}
              <path
                d={karnatakaPath}
                fill="url(#karnatakaGreenGrad)"
                stroke="#6ee7b7"
                strokeWidth="3.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                className="transition-all duration-700 hover:brightness-105"
              />

              {/* Inner Decorative State Mesh Contours */}
              <g opacity="0.18" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3">
                <line x1="200" y1="150" x2="450" y2="350" />
                <line x1="100" y1="400" x2="350" y2="600" />
                <line x1="150" y1="650" x2="450" y2="800" />
                <line x1="300" y1="200" x2="300" y2="850" />
              </g>

              {/* District Active Radar Waves & Animated Rings */}
              {districtNodes.map((node) => {
                const isSelected = selectedDistrict?.id === node.id;
                const isHovered = hoveredDistrict?.id === node.id;
                const isHq = node.isHq;

                return (
                  <g
                    key={node.id}
                    onClick={() => {
                      const found = districtsData.find(d => d.id === node.id) || node;
                      handleSelectDistrict(found);
                    }}
                    onMouseEnter={() => setHoveredDistrict(node)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                    className="cursor-pointer"
                  >
                    {/* Pulsing Target Radar for Active Selection */}
                    {isSelected && (
                      <>
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="32"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="2"
                          opacity="0.4"
                          className="animate-ping"
                          style={{ animationDuration: '2.5s', transformOrigin: `${node.x}px ${node.y}px` }}
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="22"
                          fill="none"
                          stroke="#fbbf24"
                          strokeWidth="2.5"
                          opacity="0.7"
                        />
                      </>
                    )}

                    {/* Subtle Radar Ring for Headquarters or Hover */}
                    {isHq && !isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="18"
                        fill="none"
                        stroke="#6ee7b7"
                        strokeWidth="1.5"
                        opacity="0.5"
                        className="animate-pulse"
                      />
                    )}

                    {/* Outer Node Halo */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? "14" : isHovered ? "12" : isHq ? "10" : "8"}
                      fill={isSelected ? "#f59e0b" : isHovered ? "#34d399" : isHq ? "#10b981" : "#064e3b"}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? "3" : "2"}
                      className="transition-all duration-300"
                    />

                    {/* Inner Center Dot */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isSelected ? "5" : "3.5"}
                      fill={isSelected ? "#ffffff" : isHq ? "#ffffff" : "#6ee7b7"}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

        </div>

        {/* Right Side: Districts Navigation Panel */}
        <div className="lg:col-span-5 flex flex-col justify-start space-y-5 bg-gradient-to-b from-gray-50 to-white p-6 sm:p-7 rounded-3xl border border-gray-200 shadow-xs">
          
          {/* Selected District Header */}
          <div className="border-b border-gray-200/80 pb-4">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-2xl sm:text-3xl font-black text-rlhp-darkgreen tracking-tight">
                {selectedDistrict.name}
              </h3>
              {selectedDistrict.isHq && (
                <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 px-2.5 py-0.5 rounded-full">
                  Headquarters
                </span>
              )}
            </div>
            <p className="text-xs font-semibold text-gray-500 mt-1">Ground Operations &amp; Local Facilities</p>

            {/* Operational Hub Indicator */}
            {selectedDistrict.subDistrict && (
              <div 
                key={selectedDistrict.id} 
                className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-300/80 shadow-xs"
              >
                <div className="w-2 h-2 rounded-full bg-rlhp-green animate-pulse" />
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Operational Hub:</span>
                <span className="text-xs font-extrabold text-rlhp-darkgreen tracking-tight">
                  {selectedDistrict.subDistrict}
                </span>
              </div>
            )}
          </div>

          {/* Districts Grid buttons */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {districtsData.map((d) => {
              const isActive = selectedDistrict.id === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => handleSelectDistrict(d)}
                  className={`py-3 px-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all text-center flex flex-col items-center justify-center cursor-pointer border ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 font-black shadow-md border-amber-400 scale-[1.02]' 
                      : 'bg-white text-gray-800 hover:bg-emerald-50 hover:text-rlhp-darkgreen hover:border-emerald-300 border-gray-200 shadow-2xs'
                  }`}
                >
                  <span className="truncate">{d.name.split('/')[0]}</span>
                  {d.subDistrict && (
                    <span className={`text-[10px] tracking-tight mt-0.5 font-medium ${
                      isActive ? 'text-slate-900 font-bold' : 'text-emerald-700'
                    }`}>
                      ({d.subDistrict})
                    </span>
                  )}
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
