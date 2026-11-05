import React, { useState, useRef, useEffect } from 'react';
import { Search, X, FileText, BookOpen, Award, Landmark, Image, Video, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { newsArticlesData, successStoriesData, awardsData, publicationsData, galleryData, videoGalleryData, eventsData } from '../data/rlhpData';

/**
 * Global Search Bar with real-time results across all content.
 * Searches: News, Success Stories, Awards, Publications, Gallery, Videos, Events
 * Shows categorized results in a dropdown and navigates to the matching page.
 */
export default function GlobalSearchBar({ onNavClick, setCurrentPage, onSelectNews, className = '' }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const navigate = (page) => {
    if (onNavClick) onNavClick(page);
    else if (setCurrentPage) setCurrentPage(page);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const matched = [];

    // Search News & Articles
    newsArticlesData.forEach((item) => {
      if (
        item.title?.toLowerCase().includes(q) ||
        item.content?.toLowerCase().includes(q) ||
        item.excerpt?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q) ||
        item.author?.toLowerCase().includes(q)
      ) {
        matched.push({
          type: 'news',
          typeLabel: 'News & Articles',
          icon: FileText,
          iconColor: 'text-rlhp-green',
          iconBg: 'bg-rlhp-lightgreen',
          title: item.title,
          subtitle: item.excerpt || item.content?.substring(0, 100),
          meta: item.date,
          page: 'news',
          data: item,
        });
      }
    });

    // Search Success Stories
    successStoriesData.forEach((item) => {
      if (
        item.title?.toLowerCase().includes(q) ||
        item.summary?.toLowerCase().includes(q) ||
        item.fullStory?.toLowerCase().includes(q) ||
        item.programme?.toLowerCase().includes(q) ||
        item.location?.toLowerCase().includes(q) ||
        item.author?.toLowerCase().includes(q)
      ) {
        matched.push({
          type: 'story',
          typeLabel: 'Success Story',
          icon: BookOpen,
          iconColor: 'text-rlhp-orange',
          iconBg: 'bg-orange-50',
          title: item.title,
          subtitle: item.summary?.substring(0, 100),
          meta: item.location,
          page: 'stories',
          data: item,
        });
      }
    });

    // Search Awards
    awardsData.forEach((item) => {
      if (
        item.title?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.conferredBy?.toLowerCase().includes(q)
      ) {
        matched.push({
          type: 'award',
          typeLabel: 'Award',
          icon: Award,
          iconColor: 'text-amber-500',
          iconBg: 'bg-amber-50',
          title: item.title,
          subtitle: item.description?.substring(0, 100),
          meta: `${item.year} • ${item.conferredBy}`,
          page: 'awards',
          data: item,
        });
      }
    });

    // Search Publications
    publicationsData.forEach((item) => {
      if (
        item.title?.toLowerCase().includes(q) ||
        item.type?.toLowerCase().includes(q)
      ) {
        matched.push({
          type: 'publication',
          typeLabel: 'Publication',
          icon: FileText,
          iconColor: 'text-blue-600',
          iconBg: 'bg-blue-50',
          title: item.title,
          subtitle: `${item.type} • ${item.format} • ${item.size}`,
          meta: item.year,
          page: 'publications',
          data: item,
        });
      }
    });

    // Search Gallery
    galleryData.forEach((item) => {
      if (
        item.title?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q)
      ) {
        matched.push({
          type: 'gallery',
          typeLabel: 'Photo',
          icon: Image,
          iconColor: 'text-pink-600',
          iconBg: 'bg-pink-50',
          title: item.title,
          subtitle: item.description?.substring(0, 100) || item.category,
          meta: item.category,
          page: 'gallery',
          data: item,
        });
      }
    });

    // Search Video Gallery
    videoGalleryData.forEach((item) => {
      if (
        item.title?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q)
      ) {
        matched.push({
          type: 'video',
          typeLabel: 'Video',
          icon: Video,
          iconColor: 'text-red-600',
          iconBg: 'bg-red-50',
          title: item.title,
          subtitle: item.description?.substring(0, 100),
          meta: `${item.duration} • ${item.year}`,
          page: 'video-gallery',
          data: item,
        });
      }
    });

    // Search Events
    eventsData.forEach((item) => {
      if (
        item.title?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.location?.toLowerCase().includes(q)
      ) {
        matched.push({
          type: 'event',
          typeLabel: 'Event',
          icon: Calendar,
          iconColor: 'text-teal-600',
          iconBg: 'bg-teal-50',
          title: item.title,
          subtitle: item.description?.substring(0, 100),
          meta: `${item.date} • ${item.location}`,
          page: 'news',
          data: item,
        });
      }
    });

    setResults(matched.slice(0, 12)); // Cap at 12 results
  }, [query]);

  const handleResultClick = (result) => {
    // For news items, open the article modal if onSelectNews is available
    if (result.type === 'news' && onSelectNews) {
      onSelectNews(result.data);
    } else if (result.type === 'story' && onSelectNews) {
      const story = result.data;
      onSelectNews({
        title: story.title,
        content: story.fullStory || story.summary,
        image: story.image?.startsWith('/') ? `${import.meta.env.BASE_URL}${story.image.slice(1)}` : story.image,
        category: 'Success Story',
        location: story.location,
        author: story.author,
        programme: story.programme,
      });
    } else {
      navigate(result.page);
    }
    setQuery('');
    setIsOpen(false);
  };

  const highlightMatch = (text, query) => {
    if (!text || !query.trim()) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return (
      <>
        {text.substring(0, idx)}
        <mark className="bg-yellow-200 text-gray-900 rounded px-0.5">{text.substring(idx, idx + query.length)}</mark>
        {text.substring(idx + query.length)}
      </>
    );
  };

  // Group results by type
  const grouped = results.reduce((acc, r) => {
    if (!acc[r.typeLabel]) acc[r.typeLabel] = [];
    acc[r.typeLabel].push(r);
    return acc;
  }, {});

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search news, articles, stories, publications..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => { if (query.trim()) setIsOpen(true); }}
          className="w-full pl-9 pr-9 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-rlhp-green focus:border-rlhp-green focus:outline-none bg-white transition-all"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); setIsOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && query.trim() && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 max-h-[420px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-150">
          {results.length === 0 ? (
            <div className="p-6 text-center space-y-2">
              <Search size={28} className="text-gray-300 mx-auto" />
              <p className="text-sm text-gray-500 font-medium">No results found for "{query}"</p>
              <p className="text-xs text-gray-400">Try different keywords or browse the sections below</p>
            </div>
          ) : (
            <div className="py-2">
              {/* Result count badge */}
              <div className="px-4 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </div>

              {Object.entries(grouped).map(([typeLabel, items]) => (
                <div key={typeLabel}>
                  {/* Category header */}
                  <div className="px-4 py-1.5 bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider flex items-center justify-between">
                    <span>{typeLabel}</span>
                    <span className="text-[9px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">{items.length}</span>
                  </div>
                  {items.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <button
                        key={`${result.type}-${idx}`}
                        onClick={() => handleResultClick(result)}
                        className="w-full px-4 py-3 text-left hover:bg-rlhp-lightgreen/50 transition-colors flex items-start space-x-3 cursor-pointer group border-b border-gray-50 last:border-b-0"
                      >
                        <div className={`w-8 h-8 rounded-lg ${result.iconBg} ${result.iconColor} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Icon size={15} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-gray-900 group-hover:text-rlhp-darkgreen line-clamp-1 transition-colors">
                            {highlightMatch(result.title, query)}
                          </h4>
                          {result.subtitle && (
                            <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                              {highlightMatch(result.subtitle, query)}
                            </p>
                          )}
                          {result.meta && (
                            <span className="text-[10px] text-gray-400 font-medium">{result.meta}</span>
                          )}
                        </div>
                        <ArrowRight size={12} className="text-gray-300 group-hover:text-rlhp-green shrink-0 mt-1.5 transition-colors" />
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
