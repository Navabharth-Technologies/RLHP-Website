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
        <div className="lg:col-span-7 relative flex flex-col justify-between items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 rounded-3xl p-4 sm:p-6 border border-emerald-800/40 min-h-[480px] sm:min-h-[560px] shadow-inner overflow-hidden">
          
          {/* Subtle Background Mesh & Glow Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Active Status Badge Header */}
          <div className="w-full flex items-center justify-between z-20 mb-2">
            <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/30 text-emerald-300 text-xs font-bold shadow-md">
              <Sparkles size={14} className="text-amber-400" />
              <span>RLHP Operational Footprint</span>
            </div>

            <div className="flex items-center space-x-2 bg-amber-500/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/40 text-amber-300 text-xs font-bold shadow-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <span>Active: <strong className="text-white">{selectedDistrict.name.split('/')[0]}</strong></span>
            </div>
          </div>

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

          {/* Footer Prompt */}
          <div className="w-full bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-emerald-500/20 text-xs text-gray-300 flex items-center justify-between shadow-lg z-20 mt-2">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
              <span className="font-medium text-white text-xs sm:text-sm">Click any node on the map to switch district</span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider hidden sm:inline shrink-0 ml-2">
              10 Active Hubs
            </span>
          </div>

        </div>

        {/* Right Side: Selected District Dynamic Spotlight Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-gradient-to-b from-gray-50 to-white p-5 sm:p-6 rounded-3xl border border-gray-200">
          
          <div className="space-y-4">
            {/* Header Status & Count Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className={`flex items-center space-x-1.5 text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                selectedDistrict.isHq
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-emerald-100 text-emerald-900 border-emerald-300'
              }`}>
                <Navigation size={14} className={selectedDistrict.isHq ? 'text-amber-600 shrink-0' : 'text-emerald-600 shrink-0'} />
                <span>{selectedDistrict.isHq ? 'State Headquarters' : 'Intervention District'}</span>
              </div>

              <span className="text-xs font-extrabold bg-rlhp-darkgreen text-white px-3 py-1 rounded-xl shadow-2xs">
                {selectedDistrict.projectsCount} Active Projects
              </span>
            </div>

            {/* Selected District Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-rlhp-darkgreen tracking-tight flex items-center space-x-2">
                <span>{selectedDistrict.name}</span>
              </h3>
              <p className="text-xs font-semibold text-gray-500 mt-1">Ground Operations & Local Facilities</p>
            </div>

            {/* Description Box */}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-white p-4 rounded-2xl border border-gray-200 shadow-2xs">
              {selectedDistrict.description}
            </p>

            {/* Key Initiatives List */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1.5 flex items-center justify-between">
                <span>Key District Initiatives</span>
                <ShieldCheck size={16} className="text-rlhp-green shrink-0" />
              </h4>
              <div className="space-y-2">
                {selectedDistrict.projects.map((proj, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-xs text-gray-800 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs hover:border-rlhp-green transition-colors">
                    <CheckCircle2 size={16} className="text-rlhp-green shrink-0" />
                    <span className="font-bold">{proj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Switch District Buttons Grid */}
          <div className="pt-4 border-t border-gray-200">
            <label className="block text-[11px] font-extrabold text-gray-600 mb-2.5 uppercase tracking-wider">
              Quick Switch District (Click to view on map):
            </label>
            <div className="flex flex-wrap gap-1.5">
              {districtsData.map((d) => {
                const isActive = selectedDistrict.id === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => handlePinClick(d)}
                    className={`text-xs px-3 py-2 rounded-xl font-extrabold transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-amber-500 text-slate-950 shadow-md scale-105 border border-amber-400' 
                        : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-rlhp-darkgreen border border-gray-200'
                    }`}
                  >
                    {d.name.split('/')[0]}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
