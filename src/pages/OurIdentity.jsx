import React, { useState } from 'react';
import { orgDetails } from '../data/rlhpData';
import { 
  Compass, Target, Heart, Award, Shield, CheckCircle2, 
  Users, Calendar, MapPin, Handshake, Sparkles, Building2,
  ZoomIn, X, ChevronRight, Globe
} from 'lucide-react';

export default function OurIdentity({ setCurrentPage }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="space-y-16 font-sans pb-16 bg-gray-50/50">
      
      {/* 1. TOP HEADER BANNER - OUR IDENTITY */}
      <section className="relative bg-gradient-to-br from-slate-950 via-[#072d1f] to-rlhp-darkgreen text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden border-b border-rlhp-green/20">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rlhp-green/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-rlhp-accentgreen/40 text-xs sm:text-sm font-bold text-emerald-200">
            <Sparkles size={14} className="text-rlhp-orange" />
            <span>Second Page / Core Identity</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight uppercase text-white drop-shadow-md">
            OUR IDENTITY
          </h1>

          <p className="text-base sm:text-xl font-bold text-emerald-300 max-w-3xl mx-auto leading-relaxed">
            About us- Over 42 Years of Empowering Children, Strengthening Communities and Transforming Lives Across South India.
          </p>
        </div>
      </section>

      {/* 2. THREE KEY METRICS - 1984 Founded | 10 Districts | 2M+ Lives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-rlhp-darkgreen">1984</span>
            <span className="text-xs font-extrabold text-gray-700 uppercase tracking-wider mt-1">Founded</span>
            <span className="text-[11px] text-gray-500 mt-0.5">Karnataka Societies Registration Act, 1960</span>
          </div>

          <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-rlhp-orange">10</span>
            <span className="text-xs font-extrabold text-gray-700 uppercase tracking-wider mt-1">Districts</span>
            <span className="text-[11px] text-gray-500 mt-0.5">South & North Karnataka Coverage</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-black text-rlhp-green">2M+</span>
            <span className="text-xs font-extrabold text-gray-700 uppercase tracking-wider mt-1">Lives</span>
            <span className="text-[11px] text-gray-500 mt-0.5">Children, Women & Families Reached</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 3. INCEPTION STORY */}
        <section id="inception-story" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-6">
          <div className="max-w-4xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rlhp-darkgreen uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
              <Sparkles size={13} className="text-rlhp-green" /> Origins &amp; Founding
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Inception Story
            </h2>
            <div className="w-12 h-1 bg-rlhp-green rounded-full mb-4" />
            <div className="bg-gradient-to-br from-emerald-50/40 via-white to-gray-50/50 border-l-4 border-rlhp-green p-6 sm:p-8 rounded-r-2xl shadow-2xs space-y-4">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                Rural Literacy and Health Programme (RLHP) was registered under the Karnataka Societies Registration Act, 1960 in 1984. It marked the coming together of a group of dedicated and like-minded people who were motivated to make a difference to the lives of the underprivileged, disadvantaged and deprived sections of society. RLHP is governed by a Board of Management.
              </p>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                Its area of operation is the slums and villages of Mysore, Mandya and Chamarajanagar districts of Karnataka, South India.
              </p>
            </div>
          </div>
        </section>

        {/* 4. OUR JOURNEY (Milestone Cards Layout) */}
        <section id="our-journey" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rlhp-darkgreen uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full inline-block">
              Historical Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Our Journey
            </h2>
            <div className="w-12 h-1 bg-rlhp-green rounded-full" />
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl pt-1">
              The evolution of RLHP from a single slum in Mysuru to a premier child-rights movement across South India.
            </p>
          </div>

          {/* Responsive Milestone Cards Grid: 1 col on mobile, 2 on tablet, 3-4 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-2">
            {orgDetails.journey.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-rlhp-green transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Top: Year Highlight & Milestone Badge */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                    <span className="text-3xl sm:text-4xl font-black text-rlhp-darkgreen group-hover:text-rlhp-green transition-colors tracking-tight font-mono">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-rlhp-darkgreen border border-emerald-100">
                      #{idx + 1}
                    </span>
                  </div>

                  {/* Green Accent Line */}
                  <div className="w-8 h-1 bg-rlhp-green/40 group-hover:w-14 group-hover:bg-rlhp-green transition-all duration-300 rounded-full mb-3" />

                  {/* Title / Achievement */}
                  <h3 className="font-extrabold text-base sm:text-lg text-gray-900 group-hover:text-rlhp-darkgreen transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Footer Details */}
                <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-gray-400 group-hover:text-rlhp-green transition-colors">
                  <span>Milestone Achievement</span>
                  <Calendar size={13} className="text-rlhp-green" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. MISSION & VISION */}
        <section id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-slate-900 via-[#063825] to-rlhp-darkgreen text-white p-8 sm:p-10 rounded-3xl border border-emerald-500/20 shadow-xl space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center">
              <Target size={28} />
            </div>
            <div>
              <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider">Statement of Purpose</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Mission</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic bg-white/5 p-5 rounded-2xl border border-white/10 font-light">
              "{orgDetails.mission}"
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-slate-900 via-[#3a2007] to-amber-950 text-white p-8 sm:p-10 rounded-3xl border border-amber-500/20 shadow-xl space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center">
              <Compass size={28} />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Ultimate Aspiration</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Vision</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed italic bg-white/5 p-5 rounded-2xl border border-white/10 font-light">
              "{orgDetails.vision}"
            </p>
          </div>
        </section>

        {/* 6. OUR PRINCIPLES (10 Principles) */}
        <section id="principles" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-bold text-rlhp-green uppercase tracking-wider bg-rlhp-lightgreen px-3 py-1 rounded-full">
              Pillars of Action
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen tracking-tight">
              Our Principles
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              The foundational ethics guiding every intervention, policy, and community program at RLHP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {orgDetails.principles.map((pr, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-gray-50/70 border border-gray-200 hover:border-rlhp-green hover:bg-emerald-50/40 transition-all flex items-start space-x-3.5 group"
              >
                <div className="w-8 h-8 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center text-xs font-extrabold shrink-0 group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-gray-900 group-hover:text-rlhp-darkgreen transition-colors">
                    {pr.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    {pr.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. OUR CORE VALUES (6 Core Values) */}
        <section id="core-values" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8">
          <div className="space-y-1">
            <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Guiding Beliefs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Upholding human dignity, integrity, and lasting equality in all our endeavours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {orgDetails.coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-rlhp-green hover:shadow-md transition-all group space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-base text-gray-900 group-hover:text-rlhp-green transition-colors">
                    {val.title}
                  </h4>
                  <span className="text-xs font-extrabold text-gray-400 group-hover:text-rlhp-orange">0{idx + 1}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. FOUNDERS AND BOARD MEMBERS - SEPARATE */}
        <section id="governance" className="space-y-12">
          
          {/* A. RLHP FOUNDERS */}
          <div className="bg-gradient-to-r from-slate-900 via-[#094730] to-rlhp-darkgreen text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-8 border border-emerald-500/20">
            <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
              <div className="p-2.5 bg-rlhp-orange/20 text-rlhp-orange rounded-xl">
                <Users size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider">Visionaries & Pioneers</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">RLHP Founders</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {orgDetails.founders.map((founder, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/10 hover:bg-white/15 border border-white/15 p-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 transition-all group"
                >
                  <div 
                    className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden bg-slate-950 p-1 border-2 border-rlhp-orange shadow-lg shrink-0 cursor-pointer group-hover:scale-105 transition-all"
                    onClick={() => setSelectedPhoto({ src: founder.image, name: founder.name, title: founder.designation })}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}${founder.image.replace(/^\//, '')}`} 
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="inline-block bg-rlhp-orange text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full">
                      Founder
                    </span>
                    <h4 className="text-xl font-black text-white">{founder.name}</h4>
                    <p className="text-xs text-emerald-200 font-semibold">{founder.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* B. BOARD MEMBERS - NAME WITH DESIGNATION NO NEED ANY EXTRA LINES */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200/80 shadow-sm space-y-8">
            <div className="space-y-1">
              <span className="text-xs font-bold text-rlhp-green uppercase tracking-wider bg-rlhp-lightgreen px-3 py-1 rounded-full">
                Governing Board
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen tracking-tight">
                Board Members
              </h3>
              <p className="text-xs text-gray-500">
                Governed by a dedicated Board of Management ensuring transparency, integrity, and child rights advocacy.
              </p>
            </div>

            {/* Board Members Cards - Name and Designation Only */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {orgDetails.boardMembers.map((member, idx) => (
                <div 
                  key={idx}
                  className="bg-gray-50/80 hover:bg-white p-5 rounded-2xl border border-gray-200 hover:border-rlhp-green shadow-2xs hover:shadow-md transition-all duration-300 text-center flex flex-col items-center group cursor-pointer"
                  onClick={() => setSelectedPhoto({ src: member.image, name: member.name, title: member.designation })}
                >
                  <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden bg-white p-1 border-2 border-rlhp-green/30 group-hover:border-rlhp-green shadow-xs shrink-0 group-hover:scale-105 transition-all">
                    <img 
                      src={`${import.meta.env.BASE_URL}${member.image.replace(/^\//, '')}`} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Name and Designation Only as specified */}
                  <div className="mt-4 space-y-1">
                    <h4 className="text-base font-black text-gray-900 group-hover:text-rlhp-darkgreen transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-extrabold text-rlhp-green">
                      {member.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* 9. WHAT WE DO & OUR PROGRAMS (13 Programs) */}
        <section id="what-we-do" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rlhp-green uppercase tracking-wider bg-rlhp-lightgreen px-3 py-1 rounded-full">
              Field Interventions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen tracking-tight">
              What We Do
            </h2>
            <p className="text-sm text-gray-700 font-medium">
              {orgDetails.whatWeDo}
            </p>
          </div>

          <div className="pt-2">
            <h3 className="text-base font-black text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
              Our Key Areas of Work Include:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orgDetails.ourPrograms.map((prog, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-gray-50/70 border border-gray-200 hover:border-rlhp-green hover:bg-emerald-50/40 transition-all flex items-start space-x-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:bg-rlhp-green group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-gray-900 group-hover:text-rlhp-darkgreen transition-colors">
                      {prog.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. WITH WHOM WE WORK */}
        <section id="with-whom-we-work" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
              Stakeholders & Alliances
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen tracking-tight">
              With Whom We Work
            </h2>
            <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-3 font-normal whitespace-pre-line">
              {orgDetails.withWhomWeWork.intro}
            </div>
          </div>

          {/* 6 Target Groups */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2">
              Communities & Vulnerable Populations We Serve:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {orgDetails.withWhomWeWork.groups.map((group, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 hover:border-rlhp-green hover:shadow-xs transition-all space-y-1.5"
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 size={15} className="text-rlhp-green shrink-0" />
                    <h4 className="font-extrabold text-xs sm:text-sm text-gray-900">
                      {group.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed pl-6">
                    {group.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborations */}
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-2">
              {orgDetails.withWhomWeWork.collaborationsIntro}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orgDetails.withWhomWeWork.collaborations.map((collab, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100 hover:border-rlhp-green transition-all flex items-start space-x-3"
                >
                  <Handshake size={18} className="text-rlhp-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm text-gray-900">
                      {collab.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {collab.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Concluding Vision Box */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-orange-50/40 p-6 rounded-2xl border-l-4 border-rlhp-green text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
            <p>{orgDetails.withWhomWeWork.conclusion}</p>
          </div>

        </section>

      </div>

      {/* Photo Preview Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 p-2 rounded-full cursor-pointer"
            >
              <X size={18} />
            </button>
            <div className="w-56 h-72 mx-auto rounded-2xl overflow-hidden bg-slate-900 p-1 border-2 border-rlhp-green">
              <img 
                src={`${import.meta.env.BASE_URL}${selectedPhoto.src.replace(/^\//, '')}`} 
                alt={selectedPhoto.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <h3 className="text-lg font-black text-gray-900">{selectedPhoto.name}</h3>
              <p className="text-xs font-bold text-rlhp-green">{selectedPhoto.title}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

