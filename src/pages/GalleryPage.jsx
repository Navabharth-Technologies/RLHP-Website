import React, { useState, useEffect, useRef } from 'react';
import { galleryData, newsArticlesData } from '../data/rlhpData';
import { Image as ImageIcon, ExternalLink, Newspaper, ZoomIn, Camera, Sparkles, Filter } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';
import ResourcesMediaHub from '../components/ResourcesMediaHub';
import GlobalSearchBar from '../components/GlobalSearchBar';

export default function GalleryPage({ onSelectMedia, setCurrentPage, onNavClick, onSelectNews }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Child Development',
    'Women Empowerment',
    'Youth Programmes',
    'Health & Community',
    'Advocacy & Events',
    'Community Activities'
  ];

  const filteredGallery = galleryData.filter(g => activeCategory === 'All' || g.category === activeCategory);

  const getCategoryCount = (cat) => {
    if (cat === 'All') return galleryData.length;
    return galleryData.filter(g => g.category === cat).length;
  };

  // 1-by-1 cascade reveal timer animation matching Our Principles / Core Values
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Reset cascade when category filter changes
    setVisibleCount(0);
    setHasStarted(false);

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
  }, [activeCategory]);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount >= filteredGallery.length) return;

    const timer = setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + 1, filteredGallery.length));
    }, 100);

    return () => clearTimeout(timer);
  }, [hasStarted, visibleCount, filteredGallery.length]);

  return (
    <div className="space-y-12 font-sans pb-16">
      {/* Hero Header */}
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rlhp-darkgreen via-emerald-900 to-rlhp-darkgreen opacity-90" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-rlhp-orange text-xs font-semibold uppercase tracking-wider border border-white/10 shadow-xs">
            <Sparkles size={14} />
            <span>Field Visual Archives</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Photo Gallery & Field Operations</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-2xl mx-auto font-medium leading-relaxed">
            Real ground-level photographs capturing 42+ years of community development, child protection, women federations, and health drives across Mysuru & Karnataka.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" ref={containerRef}>
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-rlhp-green text-white shadow-md shadow-emerald-700/20 scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery with 1-by-1 Cascade Reveal */}
        {filteredGallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => {
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
                    transitionDelay: `${(index % 3) * 50}ms`
                  }}
                >
                  <div className="h-64 overflow-hidden relative bg-gray-100">
                    <img 
                      src={getImageUrl(item.image)} 
                      alt={item.title} 
                      onError={(e) => {
                        if (item.remoteImage && e.target.src !== getImageUrl(item.remoteImage)) {
                          e.target.src = getImageUrl(item.remoteImage);
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                    
                    {/* Gradient overlay & badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                          {item.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                          <ZoomIn size={16} />
                        </div>
                      </div>

                      <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="font-bold text-sm text-white line-clamp-2 leading-snug drop-shadow-sm">{item.title}</h4>
                        {item.description && (
                          <p className="text-[11px] text-gray-200 line-clamp-2 leading-tight font-normal">
                            {item.description}
                          </p>
                        )}
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
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Photos in this Category</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              Please choose another category or click "All" to view all field gallery images.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
