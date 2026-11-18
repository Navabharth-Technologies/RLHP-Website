import React, { useState, useEffect, useRef } from 'react';
import { awardsData } from '../data/rlhpData';
import { Award, Trophy, Medal, Star } from 'lucide-react';
import ResourcesMediaHub from '../components/ResourcesMediaHub';
import GlobalSearchBar from '../components/GlobalSearchBar';

export default function AwardsPage({ setCurrentPage, onNavClick, onSelectNews }) {
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
    const timer = setTimeout(() => setHasStarted(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount >= awardsData.length) return;

    const timer = setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 1, awardsData.length));
    }, 120);

    return () => clearTimeout(timer);
  }, [hasStarted, visibleCount]);

  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Awards & Achievements</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Static Resources & Media Hub */}
        <ResourcesMediaHub activePage="awards" onNavClick={onNavClick} setCurrentPage={setCurrentPage} />

        {/* Global Search */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          <GlobalSearchBar
            onNavClick={onNavClick}
            setCurrentPage={setCurrentPage}
            onSelectNews={onSelectNews}
            className="w-full sm:w-96"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" ref={containerRef}>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-rlhp-darkgreen">Recognition Timeline</h2>
          <p className="text-xs text-gray-500 mt-1">Honoring decades of dedicated field work across Karnataka</p>
        </div>

        {/* Timeline Layout with Timer Cascade Card Animation */}
        <div className="relative border-l-2 border-rlhp-green/30 ml-4 sm:ml-32 space-y-8">
          {awardsData.map((award, index) => {
            const isVisible = index < visibleCount;
            return (
              <div 
                key={award.id} 
                className={`relative pl-8 group transform transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                }`}
                style={{
                  transitionDelay: `${(index % 3) * 60}ms`,
                  willChange: 'transform, opacity'
                }}
              >
                {/* Timeline Year Badge */}
                <div className="absolute -left-12 sm:-left-32 top-0 w-20 text-right font-extrabold text-sm sm:text-lg text-rlhp-orange">
                  🏆 {award.year}
                </div>

                {/* Timeline Marker Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-rlhp-green border-2 border-white group-hover:scale-125 transition-transform"></div>

                {/* Card Content */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-8 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rlhp-green bg-rlhp-lightgreen px-2.5 py-0.5 rounded-full">
                      {award.conferredBy}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-rlhp-green transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                  <div className="sm:col-span-4 h-32 rounded-xl overflow-hidden border border-gray-100">
                    <img src={award.image.startsWith('/') ? `${import.meta.env.BASE_URL}${award.image.slice(1)}` : award.image} alt={award.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
