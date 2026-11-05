import React from 'react';
import { FileText, BookOpen, Award, Landmark, Image, Video, Sparkles } from 'lucide-react';

/**
 * Reusable Resources & Media Hub navigation panel.
 * Static layout — always visible at top of every resource sub-page.
 * Pass `activePage` to highlight the current section.
 * Pass `onNavClick` or `setCurrentPage` for navigation.
 */
export default function ResourcesMediaHub({ activePage, onNavClick, setCurrentPage }) {
  const navigate = (page) => {
    if (onNavClick) onNavClick(page);
    else if (setCurrentPage) setCurrentPage(page);
  };

  const hubs = [
    {
      key: 'news',
      label: 'News & Articles',
      sub: 'Field reports & press',
      icon: FileText,
      color: 'text-rlhp-green',
      activeBg: 'bg-rlhp-green',
      hoverBg: 'group-hover:bg-rlhp-green group-hover:text-white',
      hoverBorder: 'hover:border-rlhp-green/40',
    },
    {
      key: 'stories',
      label: 'Success Stories',
      sub: 'Community case studies',
      icon: BookOpen,
      color: 'text-rlhp-orange',
      activeBg: 'bg-rlhp-orange',
      hoverBg: 'group-hover:bg-rlhp-orange group-hover:text-white',
      hoverBorder: 'hover:border-rlhp-orange/40',
    },
    {
      key: 'awards',
      label: 'Awards & Honors',
      sub: 'State recognitions',
      icon: Award,
      color: 'text-amber-500',
      activeBg: 'bg-amber-500',
      hoverBg: 'group-hover:bg-amber-500 group-hover:text-white',
      hoverBorder: 'hover:border-amber-400',
    },
    {
      key: 'publications',
      label: 'Publications',
      sub: 'IEP handbooks & videos',
      icon: FileText,
      color: 'text-blue-600',
      activeBg: 'bg-blue-600',
      hoverBg: 'group-hover:bg-blue-600 group-hover:text-white',
      hoverBorder: 'hover:border-blue-400',
    },
    {
      key: 'financials',
      label: 'Audit Reports (3 Yrs)',
      sub: 'FCRA & financial transparency',
      icon: Landmark,
      color: 'text-rlhp-green',
      activeBg: 'bg-rlhp-green',
      hoverBg: 'group-hover:bg-rlhp-green group-hover:text-white',
      hoverBorder: 'hover:border-rlhp-green/40',
    },
    {
      key: 'gallery',
      label: 'Photo Gallery',
      sub: '30+ Field photo albums',
      icon: Image,
      color: 'text-pink-600',
      activeBg: 'bg-pink-600',
      hoverBg: 'group-hover:bg-pink-600 group-hover:text-white',
      hoverBorder: 'hover:border-pink-400',
    },
    {
      key: 'video-gallery',
      label: 'Video Gallery',
      sub: '17 Official YouTube videos',
      icon: Video,
      color: 'text-red-600',
      activeBg: 'bg-red-600',
      hoverBg: 'group-hover:bg-red-600 group-hover:text-white',
      hoverBorder: 'hover:border-red-400',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center space-x-2">
          <Sparkles className="text-rlhp-green" size={20} />
          <h2 className="text-sm font-bold text-rlhp-darkgreen uppercase tracking-wider">
            Resources &amp; Media Hub
          </h2>
        </div>
        <button
          onClick={() => navigate('financials')}
          className="text-[11px] bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
        >
          Downloads &amp; Audits
        </button>
      </div>

      {/* Grid of nav cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {hubs.map(({ key, label, sub, icon: Icon, color, activeBg, hoverBg, hoverBorder }) => {
          const isActive = activePage === key;
          return (
            <button
              key={key}
              onClick={() => navigate(key)}
              className={`p-3.5 border rounded-xl text-left transition-all group flex items-start space-x-3 cursor-pointer shadow-2xs
                ${isActive
                  ? 'bg-rlhp-lightgreen border-rlhp-green/50 shadow-md ring-1 ring-rlhp-green/20'
                  : `bg-gray-50 border-gray-200 hover:bg-rlhp-lightgreen ${hoverBorder}`
                }`}
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 shadow-xs transition-colors
                ${isActive
                  ? `${activeBg} text-white`
                  : `bg-white ${color} ${hoverBg}`
                }`}>
                <Icon size={18} />
              </div>
              <div>
                <h4 className={`font-bold text-xs group-hover:text-rlhp-darkgreen transition-colors ${isActive ? 'text-rlhp-darkgreen' : 'text-gray-900'}`}>
                  {label}
                </h4>
                <p className="text-[10px] text-gray-500 mt-0.5">{sub}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
