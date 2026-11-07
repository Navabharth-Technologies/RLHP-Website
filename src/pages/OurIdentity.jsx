import React, { useState } from 'react';
import { orgDetails } from '../data/rlhpData';
import JourneyArtwork from '../components/journeyIllustrations/JourneyArtwork';
import {
  Compass, Target, Heart, Award, Shield, CheckCircle2,
  Users, Calendar, MapPin, Handshake, Sparkles, Building2,
  ZoomIn, X, ChevronRight, Globe, Scale, Eye, Sprout, UserCheck, ShieldCheck, Star,
  Home as HomeIcon, Map, ArrowUp, Ship, VenetianMask, Trees
} from 'lucide-react';

export default function OurIdentity({ setCurrentPage }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="space-y-16 font-sans pb-16 bg-gray-50/50">

      {/* 1. TOP HERO SECTION - ABOUT US / OUR IDENTITY */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf4eb]/90 via-[#f2f8f3] to-white border-b border-green-100/60 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-none mb-4">
                  ABOUT <span className="text-rlhp-green italic font-serif">US</span>
                </h1>
                <div className="w-16 h-1.5 bg-rlhp-green rounded-full mb-6" />
                <p className="text-lg sm:text-2xl text-gray-700 font-medium leading-relaxed max-w-2xl">
                  Over <strong className="text-gray-900 font-bold">42 years</strong> of transforming lives through holistic, child development and community centred education across South India.
                  Over <strong className="text-gray-900 font-bold">42 years</strong> of transforming lives through holistic, child development and community centred education across South India.
                </p>
              </div>

              {/* 3 Inline Stats */}
              <div className="pt-6 border-t border-gray-150 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-rlhp-green leading-none">
                    1984
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mt-1.5">
                    Founded
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">
                    Reg. Act 1960
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-rlhp-orange leading-none">
                    10
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mt-1.5">
                    Districts
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">
                    South &amp; North KA
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-rlhp-green leading-none">
                    2M+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider mt-1.5">
                    Lives
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">
                    Reached
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images (5 Cols) - Overlapping Playful Cards as in Reference */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-[420px] h-[340px] sm:h-[400px]">
                {/* Back / Left tilted card */}
                <div className="absolute left-2 sm:left-4 top-4 w-[56%] h-[82%] rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 z-10 bg-gray-100">
                  <img
                    src={`${import.meta.env.BASE_URL}images/gallery/ashabhavana_girls_learning.jpg`}
                    alt="Asha Bhavana Learning"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Front / Right card */}
                <div className="absolute right-2 sm:right-4 bottom-4 w-[60%] h-[84%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 z-20 bg-gray-100">
                  <img
                    src={`${import.meta.env.BASE_URL}images/gallery/iep_remedial_class.jpg`}
                    alt="IEP Remedial Class"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Subtle soft backdrop shape */}
                <div className="absolute inset-8 bg-green-50/80 rounded-3xl -z-10 blur-xl" />
              </div>
            </div>

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
            </div>
          </div>
        </section>

        {/* 4. OUR JOURNEY (Matching Official Timeline Reference) */}
        <section id="our-journey" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8 overflow-hidden">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rlhp-darkgreen uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full inline-block">
              Historical Milestones
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Our Journey
            </h2>
            <div className="w-12 h-1 bg-[#D97706] rounded-full" />
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl pt-1">
              Four decades of transformative grassroots empowerment, child protection and community development across South India.
            </p>
          </div>

          {/* Responsive Milestone Cards Grid with Animated Artworks, 3D Hover Flip & Reveal Timer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {(() => {
              const iconMap = {
                'home': HomeIcon,
                'pin': MapPin,
                'users': Users,
                'shelter': Building2,
                'map': Map,
                'arrow-up': ArrowUp,
                'boat': Ship,
                'mask': ShieldCheck,
                'palm': Trees
              };

              return orgDetails.journey.map((item, idx) => {
                const MIcon = iconMap[item.icon] || Sparkles;

                return (
                  <div
                    key={idx}
                    className="flip-card-container relative h-[380px] sm:h-[400px] w-full perspective-1000 select-none cursor-pointer"
                  >
                    {/* 3D Flip Card Inner */}
                    <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d rounded-3xl shadow-md hover:shadow-2xl">

                      {/* ── FRONT FACE: Animated Vector Picture / Artwork ── */}
                      <div className={`absolute inset-0 w-full h-full rounded-3xl overflow-hidden backface-hidden border-2 border-gray-200 ${item.hoverBorder || 'hover:border-rlhp-green'} bg-white flex flex-col justify-between shadow-md`}>
                        {/* Top Accent Gradient Line */}
                        <div className={`h-1.5 w-full bg-gradient-to-r ${item.accent || 'from-emerald-500 to-green-600'}`} />

                        {/* Top Bar with Year and Category Symbol */}
                        <div className="px-5 pt-4 pb-2 flex items-center justify-between">
                          <span className="text-3xl sm:text-4xl font-black text-gray-900 font-serif tracking-tight">
                            {item.year}
                          </span>
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-xs border transition-all duration-300 ${item.badgeColor || 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}>
                            <MIcon size={20} />
                          </div>
                        </div>

                        {/* Animated Illustration Area */}
                        <div className="relative flex-1 w-full overflow-hidden bg-slate-900 mx-auto">
                          <JourneyArtwork id={item.id} />
                        </div>

                        {/* Bottom Title Preview & Interactive Hover Cue */}
                        <div className="p-4 sm:p-5 bg-white border-t border-gray-100">
                          <h3 className="font-extrabold text-base sm:text-lg text-gray-900 leading-snug truncate">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-[11px] font-bold text-rlhp-green uppercase tracking-wide truncate mt-0.5">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* ── BACK FACE: Full Detailed Information Revealed on Hover Flip ── */}
                      <div className="absolute inset-0 w-full h-full rounded-3xl p-7 bg-gradient-to-br from-[#133817] via-[#1C5620] to-[#0a230e] text-white rotate-y-180 backface-hidden border-2 border-emerald-400/60 shadow-2xl flex flex-col justify-between">
                        <div>
                          {/* Year and Icon Top */}
                          <div className="flex items-center justify-between pb-3 border-b border-white/20 mb-4">
                            <span className="text-3xl font-black text-emerald-300 font-serif">
                              {item.year}
                            </span>
                            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white border border-white/30">
                              <MIcon size={20} />
                            </div>
                          </div>

                          {/* Full Title & Subtitle */}
                          <h3 className="font-black text-lg sm:text-xl text-white leading-snug mb-1">
                            {item.title}
                          </h3>
                          {item.subtitle && (
                            <p className="text-xs font-bold text-emerald-300 uppercase tracking-wide mb-3">
                              {item.subtitle}
                            </p>
                          )}
                          <div className="w-10 h-1 bg-[#E49E23] rounded-full mb-4" />

                          {/* Detailed Narrative */}
                          <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom Historical Milestone Indicator */}
                        <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-emerald-200">
                            RLHP Milestone
                          </span>
                          <span className="text-[11px] text-white/70 italic">
                            Four Decades of Impact
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </section>

        {/* 5. MISSION & VISION (Redesigned with Brand Green Logo Theme) */}
        <section id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-emerald-500/30"
            style={{
              background: 'linear-gradient(145deg, #184c20 0%, #236B28 50%, #0e2d13 100%)',
            }}
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md text-emerald-200 border border-white/20 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Target size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Mission
                  </h3>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 shadow-inner">
                <p className="text-sm sm:text-base text-white/95 leading-relaxed font-medium italic">
                  "{orgDetails.mission}"
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-emerald-500/30"
            style={{
              background: 'linear-gradient(145deg, #1C5620 0%, #2D8A35 55%, #133D16 100%)',
            }}
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md text-emerald-200 border border-white/20 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Compass size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Vision
                  </h3>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/15 shadow-inner flex items-center min-h-[140px]">
                <p className="text-base sm:text-lg text-white/95 leading-relaxed font-medium italic">
                  "{orgDetails.vision}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OUR PRINCIPLES (9 Principles) */}
        <section id="principles" className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Our <span className="text-rlhp-green italic font-serif">Principles</span>
            </h2>
            <div className="w-14 h-1 bg-rlhp-green rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {(() => {
              const principleIcons = [
                Heart,        // Child-Centred Approach
                Scale,        // Equality and Inclusion
                Users,        // Gender Equality
                Handshake,    // Community Participation
                Sparkles,     // Empowerment
                Eye,          // Transparency and Accountability
                Sprout,       // Sustainability
                UserCheck,    // Human Dignity
                Globe,        // Government Collaboration
              ];
              return orgDetails.principles.map((pr, idx) => {
                const Icon = principleIcons[idx] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150 hover:border-rlhp-green hover:shadow-xl hover:shadow-rlhp-green/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
                  >
                    {/* Organic Circular Badge matching logo green tone with relevant icon */}
                    <div className="w-16 h-16 rounded-full mb-5 flex items-center justify-center shadow-md bg-gradient-to-br from-[#2D8A35] to-[#1C5620] group-hover:scale-110 group-hover:shadow-rlhp-green/30 transition-all duration-300">
                      <Icon size={26} className="text-white" />
                    </div>

                    {/* Title */}
                    <h4 className="font-extrabold text-base text-gray-900 mb-2 leading-snug group-hover:text-rlhp-green transition-colors">
                      {pr.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mt-auto pt-1">
                      {pr.description}
                    </p>
                  </div>
                );
              });
            })()}
          </div>
        </section>

        {/* 7. OUR CORE VALUES (6 Core Values) */}
        <section id="core-values" className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Our Core <span className="text-rlhp-green italic font-serif">Values</span>
            </h2>
            <div className="w-14 h-1 bg-rlhp-green rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              const valueIcons = [
                Heart,        // Compassion
                ShieldCheck,  // Integrity
                Users,        // Inclusiveness
                Sprout,       // Sustainability
                Award,        // Excellence
                Scale,        // Equality
              ];
              return orgDetails.coreValues.map((val, idx) => {
                const Icon = valueIcons[idx] || Star;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-150 hover:border-rlhp-green hover:shadow-xl hover:shadow-rlhp-green/10 hover:-translate-y-1 transition-all duration-300 group space-y-3 flex flex-col cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center group-hover:bg-[#1C5620] group-hover:border-transparent transition-all duration-300">
                        <Icon size={22} className="text-rlhp-green group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xs font-black text-gray-400 group-hover:text-rlhp-green transition-colors">0{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-black text-base text-gray-900 group-hover:text-rlhp-green transition-colors">
                        {val.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed font-normal mt-1.5">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              });
            })()}
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

