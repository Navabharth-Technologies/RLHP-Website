import React, { useState } from 'react';
import { newsArticlesData, eventsData } from '../data/rlhpData';
import { Calendar, ChevronRight, User } from 'lucide-react';
import { getImageUrl } from '../utils/imageUtils';
import ResourcesMediaHub from '../components/ResourcesMediaHub';
import GlobalSearchBar from '../components/GlobalSearchBar';

export default function NewsArticlesPage({ onSelectNews, setCurrentPage, onNavClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [eventTab, setEventTab] = useState('All');

  const filteredNews = newsArticlesData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === 'All' || item.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  const filteredEvents = eventsData.filter(evt => {
    if (eventTab === 'All') return true;
    if (eventTab === 'Upcoming') return evt.type === 'Upcoming';
    if (eventTab === 'Past') return evt.type === 'Past Event';
    return true;
  });

  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">News, Articles & Events</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Stay informed on RLHP field activities, announcements, and upcoming community drives
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Static Resources & Media Hub */}
        <ResourcesMediaHub activePage="news" onNavClick={onNavClick} setCurrentPage={setCurrentPage} />

        {/* Global Search & Category Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <GlobalSearchBar
            onNavClick={onNavClick}
            setCurrentPage={setCurrentPage}
            onSelectNews={onSelectNews}
            className="w-full sm:w-96"
          />

          <div className="flex items-center space-x-2 w-full sm:w-auto overflow-x-auto">
            <span className="text-xs text-gray-500 font-semibold shrink-0">Filter:</span>
            {['All', 'News', 'Article'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors shrink-0 ${categoryFilter === cat ? 'bg-rlhp-green text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Cards Grid */}
        <div id="news-articles-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <div 
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 sm:h-72 bg-slate-50 border-b border-gray-100 p-2.5 flex items-center justify-center overflow-hidden">
                  <img 
                    src={getImageUrl(item.image)} 
                    alt={item.title} 
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300 drop-shadow-xs" 
                  />
                  <span className="absolute top-2.5 left-2.5 bg-rlhp-green/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded uppercase shadow-xs">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center text-[11px] text-gray-400 space-x-3">
                    <span className="flex items-center space-x-1"><Calendar size={12} /><span>{item.date}</span></span>
                    <span className="flex items-center space-x-1"><User size={12} /><span>{item.author}</span></span>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-rlhp-green transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 text-xs font-semibold text-rlhp-orange flex items-center">
                <span>Read Full Story</span>
                <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Events Section */}
        <section className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-rlhp-darkgreen">Upcoming & Past Events</h2>
              <p className="text-xs text-gray-500">Community workshops, health camps, and environmental drives</p>
            </div>

            {/* Event Filter Tabs */}
            <div className="flex items-center space-x-2 bg-white p-1 rounded-xl border border-gray-200">
              {['All', 'Upcoming', 'Past'].map((t) => (
                <button
                  key={t}
                  onClick={() => setEventTab(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${eventTab === t ? 'bg-rlhp-green text-white shadow-xs' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {t === 'All' ? 'All Events' : `${t} Events`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredEvents.map((evt) => (
              <div key={evt.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-rlhp-green transition-colors">
                <div className="flex items-center space-x-4">
                  {/* Date Badge Box */}
                  <div className="w-16 h-16 rounded-xl bg-rlhp-lightgreen text-rlhp-darkgreen flex flex-col items-center justify-center shrink-0 border border-rlhp-green/20">
                    <span className="text-xl font-black leading-none">{evt.date.split(' ')[0]}</span>
                    <span className="text-[10px] font-bold uppercase mt-1 text-rlhp-green">{evt.date.split(' ')[1]}</span>
                    <span className="text-[9px] text-gray-400">{evt.date.split(' ')[2]}</span>
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-sm text-gray-900">{evt.title}</h4>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${evt.type === 'Upcoming' ? 'bg-green-100 text-rlhp-green' : 'bg-orange-100 text-rlhp-orange'}`}>
                        {evt.type}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{evt.description}</p>
                    <div className="text-[11px] text-gray-400 font-medium mt-1">📍 {evt.location}</div>
                  </div>
                </div>

                <button 
                  onClick={() => alert(`Registration details for: ${evt.title}`)}
                  className="bg-gray-100 hover:bg-rlhp-green hover:text-white text-gray-800 font-semibold text-xs px-4 py-2 rounded-lg transition-colors shrink-0"
                >
                  Event Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
