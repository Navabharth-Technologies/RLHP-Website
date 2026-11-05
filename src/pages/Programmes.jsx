import React, { useState } from 'react';
import { programmesData, successStoriesData } from '../data/rlhpData';
import GovernmentSchemesInfographic from '../components/GovernmentSchemesInfographic';
import { 
  Baby, BookOpen, GraduationCap, Users, Handshake, 
  Activity, Building2, ShieldAlert, CheckCircle2, ArrowRight, Home, Calendar, Heart, Sparkles, MapPin
} from 'lucide-react';

export default function Programmes({ onOpenDonate, selectedProgrammeId: propProgId, setSelectedProgrammeId: setPropProgId, setCurrentPage }) {
  const [localProgId, setLocalProgId] = useState(programmesData[0].id);

  const selectedProgrammeId = propProgId || localProgId;
  const setSelectedProgrammeId = (id) => {
    if (setPropProgId) setPropProgId(id);
    setLocalProgId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeProg = programmesData.find(p => p.id === selectedProgrammeId) || programmesData[0];

  const domainIconMap = {
    'child-development': Baby,
    'education': GraduationCap,
    'youth-empowerment': Users,
    'women-empowerment': Users,
    'peoples-development': Handshake,
    'health-sanitation': Activity,
    'government-schemes': Building2,
    'humanitarian-assistance': ShieldAlert
  };

  const IconComp = domainIconMap[activeProg.id] || Baby;

  return (
    <div className="space-y-10 font-sans pb-16">
      {/* Dynamic Top Hero Banner */}
      <section className="relative bg-rlhp-darkgreen text-white py-16 sm:py-20 px-4 sm:px-8 overflow-hidden">
        {/* Dynamic Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={activeProg.heroImage} 
            alt={activeProg.title} 
            className="w-full h-full object-cover filter brightness-[0.25] transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rlhp-darkgreen via-rlhp-darkgreen/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto space-y-4 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
            {activeProg.title}
          </h1>
          <p className="text-xs sm:text-base text-rlhp-lightgreen max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-xs">
            {activeProg.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Interactive Domain Selector Pills */}
        <section className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-200 shadow-sm">
          <div className="text-center mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Select Programme Domain</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {programmesData.map((prog) => {
              const ProgIcon = domainIconMap[prog.id] || Baby;
              const isSelected = selectedProgrammeId === prog.id;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgrammeId(prog.id)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center space-x-2 cursor-pointer ${
                    isSelected 
                      ? 'bg-rlhp-green text-white shadow-md scale-105 ring-2 ring-rlhp-green/30' 
                      : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-rlhp-lightgreen hover:text-rlhp-darkgreen'
                  }`}
                >
                  <ProgIcon size={14} className={isSelected ? 'text-white' : 'text-rlhp-green'} />
                  <span>{prog.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Selected Programme Dynamic Content Grid */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
          {/* Left Feature Card */}
          <div className="lg:col-span-5 relative min-h-[360px] flex flex-col justify-end p-6 sm:p-8 text-white">
            <img 
              src={activeProg.heroImage} 
              alt={activeProg.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            <div className="relative z-10 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-rlhp-orange text-white px-3 py-1 rounded-full shadow-xs">
                  RLHP Core Domain
                </span>
                <span className="text-[10px] font-bold bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <MapPin size={10} />
                  <span>10 Districts Active</span>
                </span>
              </div>
              <h3 className="text-2xl font-extrabold">{activeProg.title}</h3>
              <p className="text-xs text-gray-200 leading-relaxed font-medium">
                {activeProg.subtitle}
              </p>
            </div>
          </div>

          {/* Right Detailed Information */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-rlhp-green font-bold text-xs uppercase tracking-wider">
                <IconComp size={16} />
                <span>Operational Overview & Strategy</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-2">
                {activeProg.overview}
              </p>
            </div>

            {/* Key Initiatives */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-1.5 flex items-center justify-between">
                <span>Key Initiatives & Infrastructure</span>
              </h4>
              <div className="space-y-3">
                {activeProg.keyInitiatives.map((init, idx) => (
                  <div key={idx} className="bg-rlhp-lightgreen/30 p-4 rounded-xl border border-rlhp-green/20 space-y-1 hover:border-rlhp-green/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <h5 className="font-bold text-xs sm:text-sm text-rlhp-darkgreen flex items-center space-x-2">
                        <CheckCircle2 size={14} className="text-rlhp-green shrink-0" />
                        <span>{init.name}</span>
                      </h5>
                      {init.year && (
                        <span className="text-[10px] bg-rlhp-green text-white px-2.5 py-0.5 rounded-md font-bold">
                          Est. {init.year}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pl-5">{init.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Key Domain Achievements</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProg.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-gray-700 bg-gray-50 p-3 rounded-xl border border-gray-100 font-medium">
                    <CheckCircle2 size={15} className="text-rlhp-green shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-rlhp-darkgreen hover:bg-rlhp-green text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center space-x-2 cursor-pointer transform active:scale-95"
              >
                <span>Partner With Us</span>
              </button>

              <span className="text-[11px] text-gray-500 font-medium italic">
                Empowering communities together
              </span>
            </div>
          </div>
        </section>

        {/* Dynamic Government Schemes Integration */}
        {(['government-schemes', 'health-sanitation', 'peoples-development'].includes(activeProg.id)) && (
          <section className="animate-in fade-in duration-300">
            <GovernmentSchemesInfographic />
          </section>
        )}
      </div>
    </div>
  );
}
