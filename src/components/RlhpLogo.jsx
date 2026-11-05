import React from 'react';

export default function RlhpLogo({ className = "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28", showText = false, lightMode = false }) {
  return (
    <div className="flex items-center space-x-3.5">
      {/* Official Circular RLHP Emblem - Scaled & Prominent */}
      <img 
        src={`${import.meta.env.BASE_URL}rlhp-logo.png`} 
        alt="Rural Literacy & Health Programme (RLHP) Logo" 
        className={`${className} object-contain rounded-full bg-white drop-shadow-md hover:scale-105 transition-transform shrink-0`}
      />

      {showText && (
        <div>
          <div className={`text-xl sm:text-2xl font-black tracking-tight leading-tight ${lightMode ? 'text-white' : 'text-rlhp-darkgreen'}`}>
            Rural Literacy & Health Programme
          </div>
          <div className={`text-xs sm:text-sm font-semibold tracking-wide ${lightMode ? 'text-rlhp-lightgreen' : 'text-gray-600'}`}>
            (RLHP), Mysuru <span className="text-rlhp-orange font-bold">| Est. 1984</span>
          </div>
        </div>
      )}
    </div>
  );
}
