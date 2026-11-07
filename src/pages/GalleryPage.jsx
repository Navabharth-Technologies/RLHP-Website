import React, { useState } from 'react';
import { galleryData, newsArticlesData } from '../data/rlhpData';
import { Image as ImageIcon, ExternalLink, Newspaper, ZoomIn, Camera } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';
import ResourcesMediaHub from '../components/ResourcesMediaHub';
import GlobalSearchBar from '../components/GlobalSearchBar';

export default function GalleryPage({ onSelectMedia, setCurrentPage, onNavClick, onSelectNews }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Child Development', 'Women Empowerment', 'Youth Programmes', 'Health Programmes', 'Community Activities', 'Events'];

  const filteredGallery = galleryData.filter(g => activeCategory === 'All' || g.category === activeCategory);

  const getCategoryCount = (cat) => {
    if (cat === 'All') return galleryData.length;
    return galleryData.filter(g => g.category === cat).length;
  };

  const mediaClippings = newsArticlesData.filter(n => n.category === 'Press Coverage');

  return (
    <div className="space-y-12 font-sans pb-16">
      {/* Hero Header */}
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rlhp-darkgreen via-emerald-900 to-rlhp-darkgreen opacity-90" />
        <div className="relative max-w-7xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Photo Gallery & Field Operations</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-2xl mx-auto font-medium leading-relaxed">
            Real ground-level photographs capturing 42+ years of community development, child protection, women federations, and health drives across Mysuru & Karnataka.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-rlhp-green text-white border-rlhp-green shadow-md'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-rlhp-green hover:text-rlhp-green'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        {filteredGallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                onClick={() => onSelectMedia(item)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-xl hover:border-rlhp-green/40 transition-all duration-300 cursor-pointer group relative flex flex-col"
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
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                  />
                  
                  {/* Gradient overlay & badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity p-4 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-rlhp-orange bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                        {item.category}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomIn size={14} />
                      </div>
                    </div>

                    <div className="space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-bold text-sm text-white line-clamp-2 leading-snug">{item.title}</h4>
                      {item.description && (
                        <p className="text-[11px] text-gray-300 line-clamp-2 leading-tight font-normal">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-3xl border-2 border-dashed border-gray-200 p-8 max-w-xl mx-auto shadow-xs">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-50 text-rlhp-green flex items-center justify-center">
              <Camera size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Photo Gallery Ready</h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md mx-auto">
              Gallery photos have been cleared. New high-resolution field photographs will appear here as soon as they are uploaded.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
