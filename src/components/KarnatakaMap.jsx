import React, { useState } from 'react';
import { districtsData } from '../data/rlhpData';
import { MapPin, CheckCircle2, ShieldCheck, Navigation, Sparkles, Touchpad } from 'lucide-react';

export default function KarnatakaMap({ onSelectDistrict }) {
  const [selectedDistrict, setSelectedDistrict] = useState(districtsData[0]); // Default Mysuru HQ
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const handlePinClick = (district) => {
    setSelectedDistrict(district);
    if (onSelectDistrict) onSelectDistrict(district);
  };

  // Precise coordinates matching pins on karnataka-state-map.png artwork
  const positionMap = {
    bidar: { top: '16.5%', left: '60.5%' },
    kalaburagi: { top: '25.0%', left: '53.5%' },
    yadgir: { top: '29.0%', left: '58.0%' },
    raichur: { top: '36.5%', left: '59.0%' },
    davanagere: { top: '49.0%', left: '45.5%' },
    chitradurga: { top: '53.5%', left: '54.0%' },
    udupi: { top: '61.5%', left: '35.5%' },
    mandya: { top: '71.5%', left: '49.8%' },
    mysuru: { top: '79.5%', left: '46.0%' },
    chamarajanagar: { top: '84.0%', left: '51.5%' }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-sm font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Side: Interactive Poly-Art Karnataka Map Canvas */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 rounded-3xl p-4 sm:p-6 border border-emerald-800/40 min-h-[480px] sm:min-h-[560px] shadow-inner overflow-hidden">
          
          {/* Subtle Background Mesh & Glow Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Map Image & Precise Node Overlay Container */}
          <div className="relative w-full max-w-lg aspect-[4/5] sm:aspect-[1/1] flex justify-center items-center my-auto p-1 sm:p-2">
            
            {/* Clean Karnataka Poly-Art Artwork Base */}
            <img 
              src={`${import.meta.env.BASE_URL}karnataka-state-map.png`} 
              alt="Karnataka District Overview Map" 
              className="w-full h-full object-contain filter drop-shadow-[0_12px_30px_rgba(0,0,0,0.6)] select-none pointer-events-none"
            />

            {/* Precise Interactive District Hotspot Nodes */}
            {districtsData.map((district) => {
              const isSelected = selectedDistrict.id === district.id;
              const isHovered = hoveredDistrict?.id === district.id;
              const isHq = district.isHq;
              const pos = positionMap[district.id] || { top: '50%', left: '50%' };

              return (
                <div
                  key={district.id}
                  style={{ top: pos.top, left: pos.left }}
                  onClick={() => handlePinClick(district)}
                  onMouseEnter={() => setHoveredDistrict(district)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                >
                  {/* Glowing Animated Ring around Active/Selected Node */}
                  {isSelected && (
                    <div className="absolute inset-0 -m-3 sm:-m-4 rounded-full bg-amber-400/50 animate-ping pointer-events-none"></div>
                  )}

                  {/* Node Pin Marker */}
                  <div className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected 
                      ? 'w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.9)] scale-125 z-40 border-2 border-white' 
                      : isHovered
                      ? 'w-6 h-6 sm:w-7 sm:h-7 bg-amber-400 text-slate-950 scale-110 border-2 border-white z-30 shadow-lg'
                      : isHq
                      ? 'w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 text-white border-2 border-emerald-200 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950'
                      : 'w-4 h-4 sm:w-5 sm:h-5 bg-slate-950/90 text-emerald-400 border border-emerald-400/80 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950'
                  }`}>
                    <MapPin className={`${isSelected || isHovered ? 'w-4 h-4 sm:w-4.5 sm:h-4.5' : 'w-3 h-3 sm:w-3.5 sm:h-3.5'}`} />
                  </div>

                  {/* Interactive Floating Hover / Active Tooltip Badge */}
                  {(isSelected || isHovered) && (
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-950/95 text-white px-2.5 py-1 rounded-lg text-xs font-bold tracking-tight shadow-xl border border-amber-400/50 z-50 pointer-events-none animate-fadeIn">
                      <div className="flex items-center space-x-1">
                        <span className={isSelected ? 'text-amber-400 font-black' : 'text-emerald-300'}>
                          {district.name}
                        </span>
                        {isHq && <span className="bg-amber-400 text-slate-950 text-[9px] px-1 rounded font-black">HQ</span>}
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Side: Districts Grid Panel fitted neatly to the card */}
        <div className="lg:col-span-5 flex flex-col justify-start space-y-5 bg-gradient-to-b from-gray-50 to-white p-6 sm:p-7 rounded-3xl border border-gray-200 shadow-xs">
          
          {/* Selected District Title */}
          <div className="border-b border-gray-200/80 pb-4">
            <h3 className="text-2xl sm:text-3xl font-black text-rlhp-darkgreen tracking-tight flex items-center space-x-2">
              <span>{selectedDistrict.name}</span>
            </h3>
            <p className="text-xs font-semibold text-gray-500 mt-1">Ground Operations &amp; Local Facilities</p>
          </div>

          {/* Districts Grid neatly organized into 2 equal balanced columns filling the container */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {districtsData.map((d) => {
              const isActive = selectedDistrict.id === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => handlePinClick(d)}
                  className={`py-3 px-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center cursor-pointer border ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 font-black shadow-md border-amber-400 scale-[1.02]' 
                      : 'bg-white text-gray-800 hover:bg-emerald-50 hover:text-rlhp-darkgreen hover:border-emerald-300 border-gray-200 shadow-2xs'
                  }`}
                >
                  <span className="truncate">{d.name.split('/')[0]}</span>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
