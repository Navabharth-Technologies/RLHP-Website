import React, { useState, useEffect, useRef } from 'react';
import { orgDetails } from '../data/rlhpData';
import JourneyArtwork from '../components/journeyIllustrations/JourneyArtwork';
import AnimatedWaveUnderline from '../components/AnimatedWaveUnderline';
import {
  Compass, Target, Heart, Award, Shield, CheckCircle2,
  Users, Calendar, MapPin, Handshake, Sparkles, Building2,
  ZoomIn, X, ChevronRight, Globe, Scale, Eye, Sprout, UserCheck, ShieldCheck, Star,
  Home as HomeIcon, Map, ArrowUp, Ship, VenetianMask, Trees, User
} from 'lucide-react';

export default function OurIdentity({ setCurrentPage }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [principlesVisibleCount, setPrinciplesVisibleCount] = useState(0);
  const principlesRef = useRef(null);
  const [principlesStarted, setPrinciplesStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !principlesStarted) {
          setPrinciplesStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (principlesRef.current) {
      observer.observe(principlesRef.current);
    }

    return () => observer.disconnect();
  }, [principlesStarted]);

  useEffect(() => {
    if (!principlesStarted) return;
    if (principlesVisibleCount < orgDetails.principles.length) {
      const timer = setTimeout(() => {
        setPrinciplesVisibleCount((prev) => prev + 1);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [principlesStarted, principlesVisibleCount]);

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

                {/* Dynamic animated moving continuous curve line */}
                <AnimatedWaveUnderline className="w-56 h-4 mb-6" />

                <p className="text-lg sm:text-2xl text-gray-700 font-medium leading-relaxed max-w-2xl">
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

            {/* Right Image (5 Cols) - Single Clean Card as requested */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-[480px] aspect-[4/3.1] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group hover:shadow-emerald-950/20 transition-all duration-500">
                <img
                  src={`${import.meta.env.BASE_URL}images/about_us_children.jpg`}
                  alt="RLHP Children - About Us"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 3. INCEPTION STORY (Two-Column Layout with Story Card & Enhanced HD Historical Photo Card) */}
        <section id="inception-story" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rlhp-darkgreen uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
                <Sparkles size={13} className="text-rlhp-green" /> Origins &amp; Founding
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Inception Story
              </h2>
              <AnimatedWaveUnderline className="w-44 h-3.5 mb-4" />
              <div className="bg-gradient-to-br from-emerald-50/40 via-white to-gray-50/50 border-l-4 border-rlhp-green p-6 sm:p-8 rounded-r-2xl shadow-2xs space-y-4">
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                  Rural Literacy and Health Programme (RLHP) was registered under the Karnataka Societies Registration Act, 1960 in 1984. It marked the coming together of a group of dedicated and like-minded people who were motivated to make a difference to the lives of the underprivileged, disadvantaged and deprived sections of society. RLHP is governed by a Board of Management.
                </p>
              </div>
            </div>

            {/* Right Card (5 Cols) - HD Enhanced Inception Gathering Photo with Smooth Animation */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[460px] aspect-square rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-4 border-white bg-slate-900 group transition-all duration-500 hover:-translate-y-1.5 cursor-pointer">
                <img
                  src={`${import.meta.env.BASE_URL}images/inception_story_meeting.jpg`}
                  alt="Inception Story - Community Foundation Meeting"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
              </div>
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
            <AnimatedWaveUnderline className="w-40 h-3.5 mt-1" color="#D97706" />
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl pt-1">
              Four decades of transformative grassroots empowerment, child protection and community development across South India.
            </p>
          </div>

          {/* Plain Milestone Cards Grid with Text and Iconic Badges as Existing Before */}
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
                    className="relative bg-gradient-to-b from-white to-emerald-50/25 rounded-2xl p-6 sm:p-7 border border-emerald-100 shadow-sm hover:shadow-xl hover:border-rlhp-green transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group h-full cursor-default"
                  >
                    <div>
                      {/* Top: Year Highlight & Relevant Green Badge Symbol */}
                      <div className="flex items-center justify-between mb-3 pb-3 border-b border-emerald-100">
                        <span className="text-3xl sm:text-4xl font-black text-[#1C5620] group-hover:text-rlhp-green transition-colors tracking-tight font-serif">
                          {item.year}
                        </span>

                        {/* Relevant symbol badge matching timeline icon with green brand color */}
                        <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-rlhp-green border border-emerald-200 flex items-center justify-center group-hover:bg-rlhp-green group-hover:text-white transition-all shadow-xs">
                          <MIcon size={20} />
                        </div>
                      </div>

                      {/* Green Accent Line */}
                      <div className="w-8 h-1 bg-emerald-500/40 group-hover:w-16 group-hover:bg-rlhp-green transition-all duration-300 rounded-full mb-3" />

                      {/* Title & Subtitle */}
                      <h3 className="font-extrabold text-base sm:text-lg text-gray-900 group-hover:text-rlhp-green transition-colors leading-snug mb-1">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs font-bold text-rlhp-green mb-2 uppercase tracking-wide">
                          {item.subtitle}
                        </p>
                      )}
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </section>

        {/* 5. MISSION & VISION (Classic, Standardized Distinct Brand Colors - Deep Sapphire & Rich Warm Terracotta Amber) */}
        <section id="mission-vision" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card - Classic Deep Navy / Midnight Sapphire */}
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-blue-400/30"
            style={{
              background: 'linear-gradient(135deg, #0f2038 0%, #173256 50%, #0a1628 100%)',
            }}
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl group-hover:scale-125 transition-transform pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/20 backdrop-blur-md text-sky-200 border border-sky-400/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <Target size={28} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-sky-300 block">Our Purpose</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Mission
                  </h3>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15 shadow-inner">
                <p className="text-sm sm:text-base text-sky-50 leading-relaxed font-medium italic">
                  "{orgDetails.mission}"
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card - Classic Warm Terracotta / Rich Bronze Amber */}
          <div
            className="relative overflow-hidden rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-amber-400/30"
            style={{
              background: 'linear-gradient(135deg, #431407 0%, #78350f 50%, #290d04 100%)',
            }}
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl group-hover:scale-125 transition-transform pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-600/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 backdrop-blur-md text-amber-200 border border-amber-400/30 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  <Compass size={28} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 block">Our Future</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    Vision
                  </h3>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15 shadow-inner flex items-center min-h-[140px]">
                <p className="text-base sm:text-lg text-amber-50 leading-relaxed font-medium italic">
                  "{orgDetails.vision}"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OUR CORE VALUES (6 Core Values with Simple Aesthetic Colors, Smooth Hover Elevation & Motion) */}
        <section id="core-values" className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Our Core <span className="text-rlhp-green italic font-serif">Values</span>
            </h2>
            <AnimatedWaveUnderline className="w-52 h-3.5 mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(() => {
              const valueThemes = [
                {
                  icon: Users,
                  iconColor: 'text-rose-500',
                  badgeBg: 'bg-rose-50 border-rose-200 group-hover:bg-rose-500 group-hover:text-white',
                  hoverBorder: 'hover:border-rose-400',
                  hoverShadow: 'hover:shadow-rose-100',
                  tagColor: 'text-rose-400',
                },
                {
                  icon: ShieldCheck,
                  iconColor: 'text-blue-500',
                  badgeBg: 'bg-blue-50 border-blue-200 group-hover:bg-blue-500 group-hover:text-white',
                  hoverBorder: 'hover:border-blue-400',
                  hoverShadow: 'hover:shadow-blue-100',
                  tagColor: 'text-blue-400',
                },
                {
                  icon: Users,
                  iconColor: 'text-purple-500',
                  badgeBg: 'bg-purple-50 border-purple-200 group-hover:bg-purple-500 group-hover:text-white',
                  hoverBorder: 'hover:border-purple-400',
                  hoverShadow: 'hover:shadow-purple-100',
                  tagColor: 'text-purple-400',
                },
                {
                  icon: Sprout,
                  iconColor: 'text-emerald-500',
                  badgeBg: 'bg-emerald-50 border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white',
                  hoverBorder: 'hover:border-emerald-400',
                  hoverShadow: 'hover:shadow-emerald-100',
                  tagColor: 'text-emerald-400',
                },
                {
                  icon: Award,
                  iconColor: 'text-amber-500',
                  badgeBg: 'bg-amber-50 border-amber-200 group-hover:bg-amber-500 group-hover:text-white',
                  hoverBorder: 'hover:border-amber-400',
                  hoverShadow: 'hover:shadow-amber-100',
                  tagColor: 'text-amber-400',
                },
                {
                  icon: Scale,
                  iconColor: 'text-teal-500',
                  badgeBg: 'bg-teal-50 border-teal-200 group-hover:bg-teal-500 group-hover:text-white',
                  hoverBorder: 'hover:border-teal-400',
                  hoverShadow: 'hover:shadow-teal-100',
                  tagColor: 'text-teal-400',
                },
              ];

              return orgDetails.coreValues.map((val, idx) => {
                const theme = valueThemes[idx] || valueThemes[0];
                const Icon = theme.icon;

                return (
                  <div
                    key={idx}
                    className={`p-7 rounded-3xl bg-white border border-gray-200/90 ${theme.hoverBorder} ${theme.hoverShadow} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group space-y-4 flex flex-col justify-between cursor-pointer`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs ${theme.badgeBg}`}>
                        <Icon size={24} className={`${theme.iconColor} group-hover:text-white transition-colors duration-300`} />
                      </div>
                      <span className={`text-sm font-black transition-colors ${theme.tagColor} group-hover:font-extrabold`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-black text-lg text-gray-900 group-hover:text-gray-950 transition-colors">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal mt-2">
                        {val.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="w-8 h-1 rounded-full bg-gray-150 group-hover:w-16 group-hover:bg-gray-400 transition-all duration-300" />
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </section>

        {/* 7. OUR PRINCIPLES (9 Principles with Elegant, Light & Aesthetic Minimalist Colors and Smooth Floating Card Motions) */}
        <section id="principles" ref={principlesRef} className="space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Our <span className="text-rlhp-green italic font-serif">Principles</span>
            </h2>
            <AnimatedWaveUnderline className="w-48 h-3.5 mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {(() => {
              const principleThemes = [
                {
                  icon: Users,
                  iconColor: 'text-rose-500',
                  badgeBg: 'bg-rose-50 border-rose-200 group-hover:bg-rose-500 group-hover:text-white',
                  hoverBorder: 'hover:border-rose-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)]',
                  accentDot: 'bg-rose-500',
                  glowColor: 'from-rose-500/10 via-rose-500/5 to-transparent',
                },
                {
                  icon: Scale,
                  iconColor: 'text-blue-500',
                  badgeBg: 'bg-blue-50 border-blue-200 group-hover:bg-blue-500 group-hover:text-white',
                  hoverBorder: 'hover:border-blue-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)]',
                  accentDot: 'bg-blue-500',
                  glowColor: 'from-blue-500/10 via-blue-500/5 to-transparent',
                },
                {
                  icon: Users,
                  iconColor: 'text-purple-500',
                  badgeBg: 'bg-purple-50 border-purple-200 group-hover:bg-purple-500 group-hover:text-white',
                  hoverBorder: 'hover:border-purple-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(168,85,247,0.3)]',
                  accentDot: 'bg-purple-500',
                  glowColor: 'from-purple-500/10 via-purple-500/5 to-transparent',
                },
                {
                  icon: Handshake,
                  iconColor: 'text-amber-500',
                  badgeBg: 'bg-amber-50 border-amber-200 group-hover:bg-amber-500 group-hover:text-white',
                  hoverBorder: 'hover:border-amber-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)]',
                  accentDot: 'bg-amber-500',
                  glowColor: 'from-amber-500/10 via-amber-500/5 to-transparent',
                },
                {
                  icon: Sparkles,
                  iconColor: 'text-emerald-500',
                  badgeBg: 'bg-emerald-50 border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white',
                  hoverBorder: 'hover:border-emerald-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)]',
                  accentDot: 'bg-emerald-500',
                  glowColor: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
                },
                {
                  icon: Eye,
                  iconColor: 'text-teal-500',
                  badgeBg: 'bg-teal-50 border-teal-200 group-hover:bg-teal-500 group-hover:text-white',
                  hoverBorder: 'hover:border-teal-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.3)]',
                  accentDot: 'bg-teal-500',
                  glowColor: 'from-teal-500/10 via-teal-500/5 to-transparent',
                },
                {
                  icon: Sprout,
                  iconColor: 'text-green-600',
                  badgeBg: 'bg-green-50 border-green-200 group-hover:bg-green-600 group-hover:text-white',
                  hoverBorder: 'hover:border-green-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.3)]',
                  accentDot: 'bg-green-500',
                  glowColor: 'from-green-500/10 via-green-500/5 to-transparent',
                },
                {
                  icon: UserCheck,
                  iconColor: 'text-sky-500',
                  badgeBg: 'bg-sky-50 border-sky-200 group-hover:bg-sky-500 group-hover:text-white',
                  hoverBorder: 'hover:border-sky-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.3)]',
                  accentDot: 'bg-sky-500',
                  glowColor: 'from-sky-500/10 via-sky-500/5 to-transparent',
                },
                {
                  icon: Globe,
                  iconColor: 'text-indigo-500',
                  badgeBg: 'bg-indigo-50 border-indigo-200 group-hover:bg-indigo-500 group-hover:text-white',
                  hoverBorder: 'hover:border-indigo-400',
                  hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3)]',
                  accentDot: 'bg-indigo-500',
                  glowColor: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
                },
              ];

              return orgDetails.principles.map((pr, idx) => {
                const theme = principleThemes[idx] || principleThemes[0];
                const Icon = theme.icon;
                const isVisible = principlesStarted && idx < principlesVisibleCount;

                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-3xl p-7 shadow-md border-2 border-gray-150 ${theme.hoverBorder} ${theme.hoverGlow} hover:-translate-y-2.5 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden ${isVisible
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                      }`}
                    style={{
                      willChange: 'transform, opacity',
                    }}
                  >
                    {/* Hover ambient color glow backdrop */}
                    <div className={`absolute inset-0 bg-gradient-to-b ${theme.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                    {/* Clean Minimalist Icon Badge with Subtle Tint */}
                    <div className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center border-2 shadow-sm transition-all duration-300 group-hover:scale-115 group-hover:rotate-3 ${theme.badgeBg} z-10`}>
                      <Icon size={26} className={`${theme.iconColor} group-hover:text-white transition-colors duration-300`} />
                    </div>

                    {/* Title */}
                    <h4 className="font-extrabold text-base sm:text-lg text-gray-900 mb-2 leading-snug group-hover:text-gray-950 transition-colors z-10">
                      {pr.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 leading-relaxed mt-auto pt-2 transition-colors z-10">
                      {pr.description}
                    </p>

                    {/* Bottom accent indicator */}
                    <div className={`mt-5 w-10 h-1.5 rounded-full ${theme.accentDot} group-hover:w-20 transition-all duration-300 z-10`} />
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

            {/* C. OUR EXECUTIVE DIRECTOR */}
            <div className="pt-8 border-t border-gray-150 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-rlhp-green uppercase tracking-wider bg-rlhp-lightgreen px-3 py-1 rounded-full">
                  Leadership
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen tracking-tight">
                  Our Executive Director
                </h3>
              </div>

              <div className="max-w-xs">
                <div
                  className="bg-gray-50/80 hover:bg-white p-5 rounded-2xl border border-gray-200 hover:border-rlhp-green shadow-2xs hover:shadow-md transition-all duration-300 text-center flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    if (orgDetails.executiveDirector?.image) {
                      setSelectedPhoto({
                        src: orgDetails.executiveDirector.image,
                        name: orgDetails.executiveDirector.name,
                        title: orgDetails.executiveDirector.designation
                      });
                    }
                  }}
                >
                  <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden bg-emerald-50/60 p-1 border-2 border-dashed border-rlhp-green/40 group-hover:border-rlhp-green shadow-xs shrink-0 group-hover:scale-105 transition-all flex flex-col items-center justify-center text-rlhp-green/60 group-hover:text-rlhp-green">
                    {orgDetails.executiveDirector?.image ? (
                      <img
                        src={`${import.meta.env.BASE_URL}${orgDetails.executiveDirector.image.replace(/^\//, '')}`}
                        alt={orgDetails.executiveDirector.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-2 p-2">
                        <User size={38} className="opacity-70 group-hover:scale-110 transition-transform" />
                        <span className="text-[11px] font-semibold text-gray-400">Photo Pending</span>
                      </div>
                    )}
                  </div>

                  {/* Name and Designation Only */}
                  <div className="mt-4 space-y-1">
                    <h4 className="text-base font-black text-gray-900 group-hover:text-rlhp-darkgreen transition-colors">
                      {orgDetails.executiveDirector?.name || 'Saraswathi K'}
                    </h4>
                    <p className="text-xs font-extrabold text-rlhp-green">
                      {orgDetails.executiveDirector?.designation || 'Executive Director'}
                    </p>
                  </div>
                </div>
              </div>
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

