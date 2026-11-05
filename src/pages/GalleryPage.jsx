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
          <div className="inline-flex items-center space-x-2 bg-rlhp-green/30 border border-rlhp-lightgreen/30 px-3 py-1 rounded-full text-rlhp-lightgreen text-xs font-semibold">
            <Camera size={14} />
            <span>30 Original Field Photographs & Media Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Photo Gallery & Field Operations</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-2xl mx-auto font-medium leading-relaxed">
            Real ground-level photographs capturing 42+ years of community development, child protection, women federations, and health drives across Mysuru & Karnataka.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Static Resources & Media Hub */}
        <ResourcesMediaHub activePage="gallery" onNavClick={onNavClick} setCurrentPage={setCurrentPage} />

        {/* Global Search */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          <GlobalSearchBar
            onNavClick={onNavClick}
            setCurrentPage={setCurrentPage}
            onSelectNews={onSelectNews}
            className="w-full sm:w-96"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  activeCategory === cat 
                    ? 'bg-rlhp-green text-white shadow-md shadow-rlhp-green/20' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
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

        {/* Media Coverage Section */}
        <section className="bg-gradient-to-br from-gray-50 to-emerald-50/30 p-8 rounded-2xl border border-gray-200 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center shadow-sm">
              <Newspaper size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rlhp-darkgreen">Media Coverage & Press Clips</h2>
              <p className="text-xs text-gray-500">Newspaper coverage highlighting RLHP initiatives and achievements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mediaClippings.map((clip, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-2 hover:border-rlhp-green hover:shadow-md transition-all">
                <span className="text-[10px] font-bold text-gray-400">{clip.paper} • {clip.date}</span>
                <h4 className="font-bold text-xs text-gray-800 leading-snug">{clip.title}</h4>
                <a href="#clip" onClick={(e) => { e.preventDefault(); alert(`Opening news clip: ${clip.title}`); }} className="text-xs text-rlhp-orange hover:text-rlhp-darkorange font-semibold inline-flex items-center space-x-1 pt-1">
                  <span>Read Press Link</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
