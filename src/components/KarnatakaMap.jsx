import React, { useState } from 'react';
import { districtsData } from '../data/rlhpData';
import { MapPin, Navigation, Sparkles } from 'lucide-react';

export default function KarnatakaMap({ onSelectDistrict }) {
  const [selectedDistrict, setSelectedDistrict] = useState(districtsData[0]); // Default Mysuru (HQ)
  const [hoveredDistrict, setHoveredDistrict] = useState(null);

  const handleSelectDistrict = (district) => {
    setSelectedDistrict(district);
    if (onSelectDistrict) onSelectDistrict(district);
  };

  // Exact geographic coordinates calculated on the uploaded Karnataka map (512x593)
  const positionMap = {
    bidar: { top: '8.6%', left: '68.8%' },
    kalaburagi: { top: '16.4%', left: '58.6%' },
    raichur: { top: '31.4%', left: '66.0%' },
    'uttara-kannada': { top: '50.1%', left: '25.8%' },
    davanagere: { top: '54.6%', left: '45.5%' },
    chitradurga: { top: '57.8%', left: '52.5%' },
    'dakshina-kannada': { top: '75.9%', left: '35.7%' },
    mandya: { top: '80.6%', left: '59.8%' },
    mysuru: { top: '83.5%', left: '53.1%' },
    chamarajanagar: { top: '88.5%', left: '60.4%' }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-4 sm:p-6 lg:p-8 shadow-sm font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Side: Karnataka Poly Map with exact interactive pointers */}
        <div className="lg:col-span-7 relative flex flex-col justify-center items-center bg-gradient-to-br from-[#031c0e] via-[#082a17] to-[#041a0f] rounded-3xl p-4 sm:p-8 border border-emerald-800/40 min-h-[500px] sm:min-h-[580px] shadow-2xl overflow-hidden">
          
          {/* Subtle ambient lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Clean Karnataka Poly Image & Precise Active Markers */}
          <div className="relative w-full max-w-[390px] aspect-[512/593] flex justify-center items-center my-auto">
            
            {/* The exact requested poly-art map image (cleaned with transparent backdrop) */}
            <img 
              src={`${import.meta.env.BASE_URL}karnataka-poly-clean.png`} 
              alt="Karnataka Poly-Art Map" 
              className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] select-none pointer-events-none"
            />

            {/* Exactly placed interactive district markers - only showing pure active points */}
            {districtsData.map((district) => {
              const isSelected = selectedDistrict?.id === district.id;
              const isHovered = hoveredDistrict?.id === district.id;
              const isHq = district.isHq;
              const pos = positionMap[district.id] || { top: '50%', left: '50%' };

              return (
                <div
                  key={district.id}
                  style={{ top: pos.top, left: pos.left }}
                  onClick={() => handleSelectDistrict(district)}
                  onMouseEnter={() => setHoveredDistrict(district)}
                  onMouseLeave={() => setHoveredDistrict(null)}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                >
                  {/* Glowing Animated Radar Ping when selected */}
                  {isSelected && (
                    <div className="absolute inset-0 -m-3 sm:-m-4 rounded-full bg-amber-400/50 animate-ping pointer-events-none" />
                  )}

                  {/* Node Pin Marker */}
                  <div className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected 
                      ? 'w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.9)] scale-125 z-40 border-2 border-white' 
                      : isHovered
                      ? 'w-6 h-6 sm:w-7 sm:h-7 bg-amber-400 text-slate-950 scale-110 border-2 border-white z-30 shadow-lg'
                      : isHq
                      ? 'w-5 h-5 sm:w-6 sm:h-6 bg-emerald-500 text-white border-2 border-emerald-200 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950'
                      : 'w-4 h-4 sm:w-5 sm:h-5 bg-slate-950/90 text-emerald-300 border border-emerald-400/80 shadow-md group-hover:bg-amber-400 group-hover:text-slate-950'
                  }`}>
                    <MapPin className={`${isSelected || isHovered ? 'w-4 h-4 sm:w-4.5 sm:h-4.5' : 'w-3 h-3 sm:w-3.5 sm:h-3.5'}`} />
                  </div>

                  {/* Clean tooltip card only on selected/hovered pin */}
                  {(isSelected || isHovered) && (
                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap">
                      <div className="bg-slate-950/95 backdrop-blur-md text-white px-3 py-1.5 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.6)] border border-amber-400/70 text-center">
                        <span className={`text-xs font-black tracking-tight ${isSelected ? 'text-amber-400' : 'text-emerald-300'}`}>
                          {district.name}
                        </span>
                        {district.subDistrict && (
                          <span className="block text-[10px] font-bold text-gray-300">
                            ({district.subDistrict})
                          </span>
                        )}
                      </div>
                      <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-950/95 mx-auto" />
                    </div>
                  )}
                </div>
              );
            })}
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
