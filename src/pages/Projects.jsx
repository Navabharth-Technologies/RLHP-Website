import React, { useState, useEffect } from 'react';
import { structuredProjects, districtsData } from '../data/rlhpData';
import { 
  GraduationCap, Handshake, Baby, History, MapPin, 
  ArrowRight, CheckCircle2, ChevronRight, Award, ExternalLink 
} from 'lucide-react';

export default function Projects({ initialCategory = 'education', setCurrentPage, onNavClick }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'education');

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: 'education', label: 'Education', icon: GraduationCap, color: 'text-blue-600 bg-blue-100' },
    { id: 'livelihood', label: 'Livelihood', icon: Handshake, color: 'text-amber-600 bg-amber-100' },
    { id: 'childhood-care', label: 'Childhood & Alternative Care', icon: Baby, color: 'text-pink-600 bg-pink-100' },
    { id: 'past-projects', label: 'Past Projects', icon: History, color: 'text-gray-700 bg-gray-100' }
  ];

  const currentProjectData = structuredProjects[activeCategory] || structuredProjects.education;

  return (
    <div className="space-y-14 font-sans pb-16 bg-gray-50/50">
      
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#063321] to-rlhp-darkgreen text-white py-16 sm:py-20 px-4 sm:px-8 text-center border-b border-rlhp-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block bg-rlhp-green/30 text-emerald-200 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            Strategic Development Interventions
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Our Projects & Initiatives
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto font-normal">
            Targeted child-centred projects creating sustainable change across Education, Livelihoods, Childhood Alternative Care, and Historic Relief Operations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Category Navigation Tabs */}
        <div className="flex justify-center">
          <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap gap-2 justify-center max-w-4xl w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-rlhp-green text-white shadow-md' 
                      : 'bg-transparent text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Header Card */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-150 pb-6">
            <div>
              <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
                {currentProjectData.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-2">
                {currentProjectData.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-2xl">
                {currentProjectData.desc}
              </p>
            </div>

            {/* Impact Metric Chips */}
            <div className="flex flex-wrap gap-3">
              {currentProjectData.stats.map((st, idx) => (
                <div key={idx} className="bg-emerald-50 border border-emerald-100 p-3 rounded-xl text-center min-w-[120px]">
                  <div className="text-lg font-black text-rlhp-darkgreen">{st.value}</div>
                  <div className="text-[10px] font-semibold text-gray-600 uppercase mt-0.5">{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {currentProjectData.items.map((item, idx) => (
              <div 
                key={idx}
                className="bg-gray-50/80 rounded-2xl overflow-hidden border border-gray-200 hover:border-rlhp-green hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden bg-slate-900 relative">
                    <img 
                      src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white font-extrabold text-base">
                      {item.title}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] bg-white border border-gray-200 text-gray-700 px-2 py-0.5 rounded-md font-semibold">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-rlhp-green">
                    <span>Active Community Programme</span>
                    <CheckCircle2 size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Location-Specific Operations Summary */}
        <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center font-bold">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Project Operations by District</h3>
              <p className="text-xs text-gray-500">Executing programs across 10 districts of South & North Karnataka</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {districtsData.map((d) => (
              <div key={d.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-rlhp-green transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-gray-900 flex items-center gap-1.5">
                    <MapPin size={14} className="text-rlhp-orange" />
                    <span>{d.name}</span>
                  </h4>
                  <span className="text-[10px] font-bold text-rlhp-green bg-emerald-100 px-2 py-0.5 rounded-full">
                    {d.projectsCount} Units
                  </span>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">{d.description}</p>
                <div className="space-y-1 pt-1 border-t border-gray-150">
                  {d.projects.slice(0, 2).map((p, pIdx) => (
                    <div key={pIdx} className="text-[11px] font-semibold text-gray-700 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rlhp-green"></span>
                      <span className="truncate">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
