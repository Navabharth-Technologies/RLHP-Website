import React, { useState, useEffect, useRef } from 'react';
import { galleryData } from '../data/rlhpData';
import { ZoomIn, Camera } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';

export default function GalleryPage({ onSelectMedia }) {
  // 1-by-1 cascade reveal animation
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount >= galleryData.length) return;

    const timer = setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 1, galleryData.length));
    }, 70);

    return () => clearTimeout(timer);
  }, [hasStarted, visibleCount]);

  return (
    <div className="space-y-12 font-sans pb-16">
      {/* Hero Header */}
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rlhp-darkgreen via-emerald-900 to-rlhp-darkgreen opacity-90" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Photo Gallery</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-2xl mx-auto font-medium leading-relaxed">
            Real ground-level photographs capturing 42+ years of community development, child protection, women federations, and health drives across Mysuru & Karnataka.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" ref={containerRef}>
        {/* Clean Image Grid with 1-by-1 Cascade Reveal */}
        {galleryData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryData.map((item, index) => {
              const isVisible = index < visibleCount;
              return (
                <div 
                  key={item.id}
                  onClick={() => onSelectMedia && onSelectMedia(item)}
                  className={`bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:border-rlhp-green/60 transition-all duration-500 cursor-pointer group relative flex flex-col transform ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                  }`}
                  style={{
                    transitionDelay: `${(index % 3) * 40}ms`
                  }}
                >
                  <div className="h-64 sm:h-72 overflow-hidden relative bg-gray-100">
                    <img 
                      src={getImageUrl(item.image)} 
                      alt="RLHP Field Gallery" 
                      onError={(e) => {
                        if (item.remoteImage && e.target.src !== getImageUrl(item.remoteImage)) {
                          e.target.src = getImageUrl(item.remoteImage);
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                    
                    {/* Minimal hover overlay with zoom icon only */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg border border-white/20">
                        <ZoomIn size={22} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200 p-8 max-w-xl mx-auto shadow-xs">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-50 text-rlhp-green flex items-center justify-center">
              <Camera size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Photo Gallery Ready</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              Gallery photos will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
