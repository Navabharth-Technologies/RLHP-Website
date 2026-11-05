import React from 'react';
import { awardsData } from '../data/rlhpData';
import { Award, Trophy, Medal, Star } from 'lucide-react';
import ResourcesMediaHub from '../components/ResourcesMediaHub';
import GlobalSearchBar from '../components/GlobalSearchBar';

export default function AwardsPage({ setCurrentPage, onNavClick, onSelectNews }) {
  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Awards & Achievements</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            State and national recognitions for excellence in community service
          </p>
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-rlhp-darkgreen">Recognition Timeline</h2>
          <p className="text-xs text-gray-500 mt-1">Honoring decades of dedicated field work across Karnataka</p>
        </div>

        {/* Timeline Layout matching design idea */}
        <div className="relative border-l-2 border-rlhp-green/30 ml-4 sm:ml-32 space-y-8">
          {awardsData.map((award) => (
            <div key={award.id} className="relative pl-8 group">
              {/* Timeline Year Badge */}
              <div className="absolute -left-12 sm:-left-32 top-0 w-20 text-right font-extrabold text-sm sm:text-lg text-rlhp-orange">
                🏆 {award.year}
              </div>

              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-rlhp-green border-2 border-white group-hover:scale-125 transition-transform"></div>

              {/* Card Content */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
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
          ))}
        </div>
      </div>
    </div>
  );
}
