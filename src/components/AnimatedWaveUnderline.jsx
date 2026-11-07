import React from 'react';

/**
 * AnimatedWaveUnderline
 * Renders a smooth, slowly moving continuous curved green wave line
 * that underlines titles without breaks or cutoffs.
 */
export default function AnimatedWaveUnderline({ className = "w-52 h-4 mb-6", color = "#236B28", strokeWidth = 4.5 }) {
  // A seamless repeating sine-wave pattern. Repeating unit is 160px wide (from 0 to 160).
  // Two identical cycles from 0 to 320 allow continuous translateX(-50%) seamless looping.
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <svg
        className="h-full animate-wave-stroke"
        style={{ width: '200%', minWidth: '400px' }}
        viewBox="0 0 640 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 10 
             Q 40 2, 80 10 
             T 160 10 
             T 240 10 
             T 320 10 
             T 400 10 
             T 480 10 
             T 560 10 
             T 640 10"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

