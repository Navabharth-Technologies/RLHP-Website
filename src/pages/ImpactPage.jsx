import React, { useState, useEffect, useRef } from 'react';
import { impactStats } from '../data/rlhpData';
import {
  Award, ShieldCheck, Heart, Users, CheckCircle2, Activity, Handshake, BookOpen,
  Home, Shield, GraduationCap, LifeBuoy, Clock, MapPin
} from 'lucide-react';

export default function ImpactPage() {
  const [footprintVisibleCount, setFootprintVisibleCount] = useState(0);
  const footprintRef = useRef(null);
  const [footprintStarted, setFootprintStarted] = useState(false);

  const iconMap = {
    Clock: Clock,
    Users: Users,
    Heart: Heart,
    MapPin: MapPin
  };

  const highlightCards = [
    {
      number: "2,100+",
      title: "Children Rehabilitated",
      subtitle: "Residential Child Care & Protection",
      icon: Home,
      borderColor: "border-emerald-200 hover:border-emerald-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.4)]",
      bgGradient: "from-emerald-50/50 via-white to-emerald-50/30",
      iconBg: "bg-emerald-100 text-emerald-700",
      accentBar: "bg-emerald-500",
      numberColor: "text-emerald-700",
    },
    {
      number: "12,000+",
      title: "Children Rescued & Rehabilitated",
      subtitle: "Emergency Child Protection Drive",
      icon: Shield,
      borderColor: "border-blue-200 hover:border-blue-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(59,130,246,0.4)]",
      bgGradient: "from-blue-50/50 via-white to-blue-50/30",
      iconBg: "bg-blue-100 text-blue-700",
      accentBar: "bg-blue-500",
      numberColor: "text-blue-700",
    },
    {
      number: "20,000+",
      title: "Rights Club Members",
      subtitle: "Children's Collective Advocacy",
      icon: Heart,
      borderColor: "border-rose-200 hover:border-rose-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(244,63,94,0.4)]",
      bgGradient: "from-rose-50/50 via-white to-rose-50/30",
      iconBg: "bg-rose-100 text-rose-700",
      accentBar: "bg-rose-500",
      numberColor: "text-rose-700",
    },
    {
      number: "10,000+",
      title: "Child laborers  Mainstreamed",
      subtitle: "Anti-Child Labour & Education Rights",
      icon: GraduationCap,
      borderColor: "border-purple-200 hover:border-purple-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(168,85,247,0.4)]",
      bgGradient: "from-purple-50/50 via-white to-purple-50/30",
      iconBg: "bg-purple-100 text-purple-700",
      accentBar: "bg-purple-500",
      numberColor: "text-purple-700",
    },
    {
      number: "2,400",
      title: "Children from Migrant Families",
      subtitle: "Migrant Labour Welfare & Aid",
      icon: Users,
      borderColor: "border-amber-200 hover:border-amber-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(245,158,11,0.4)]",
      bgGradient: "from-amber-50/50 via-white to-amber-50/30",
      iconBg: "bg-amber-100 text-amber-700",
      accentBar: "bg-amber-500",
      numberColor: "text-amber-700",
    },
    {
      number: "10,000+",
      title: "Tsunami Relief & Rebuilding",
      subtitle: "Tamil Nadu, Nagapattinam District",
      icon: LifeBuoy,
      borderColor: "border-cyan-200 hover:border-cyan-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(6,182,212,0.4)]",
      bgGradient: "from-cyan-50/50 via-white to-cyan-50/30",
      iconBg: "bg-cyan-100 text-cyan-700",
      accentBar: "bg-cyan-500",
      numberColor: "text-cyan-700",
    },
    {
      number: "6,000+",
      title: "Flood Relief Families",
      subtitle: "Disaster Emergency Response",
      icon: LifeBuoy,
      borderColor: "border-teal-200 hover:border-teal-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(20,184,166,0.4)]",
      bgGradient: "from-teal-50/50 via-white to-teal-50/30",
      iconBg: "bg-teal-100 text-teal-700",
      accentBar: "bg-teal-500",
      numberColor: "text-teal-700",
    },
    {
      number: "5,000+",
      title: "COVID Support Families",
      subtitle: "Pandemic Humanitarian Relief",
      icon: Activity,
      borderColor: "border-red-200 hover:border-red-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(239,68,68,0.4)]",
      bgGradient: "from-red-50/50 via-white to-red-50/30",
      iconBg: "bg-red-100 text-red-700",
      accentBar: "bg-red-500",
      numberColor: "text-red-700",
    },
    {
      number: "12,000+",
      title: "Malnourished Children Became Healthy",
      subtitle: "Nutrition & Child Health Drive",
      icon: Activity,
      borderColor: "border-emerald-200 hover:border-emerald-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.4)]",
      bgGradient: "from-emerald-50/50 via-white to-emerald-50/30",
      iconBg: "bg-emerald-100 text-emerald-700",
      accentBar: "bg-emerald-500",
      numberColor: "text-emerald-700",
    },
    {
      number: "1.5 Lakh",
      title: "Families Connected to Govt. Schemes",
      subtitle: "Government Entitlements & Social Security",
      icon: Handshake,
      borderColor: "border-blue-200 hover:border-blue-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(59,130,246,0.4)]",
      bgGradient: "from-blue-50/50 via-white to-blue-50/30",
      iconBg: "bg-blue-100 text-blue-700",
      accentBar: "bg-blue-500",
      numberColor: "text-blue-700",
    },
    {
      number: "100+",
      title: "Govt. Schools Reached by Travelling Library",
      subtitle: "Literacy & Mobile Knowledge Network",
      icon: BookOpen,
      borderColor: "border-amber-200 hover:border-amber-500",
      hoverGlow: "hover:shadow-[0_20px_45px_-10px_rgba(245,158,11,0.4)]",
      bgGradient: "from-amber-50/50 via-white to-amber-50/30",
      iconBg: "bg-amber-100 text-amber-700",
      accentBar: "bg-amber-500",
      numberColor: "text-amber-700",
    },
  ];

  // Top 4 stats observer
  const [statsVisibleCount, setStatsVisibleCount] = useState(0);
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStatsStarted(true);
        }
      },
      { threshold: 0.02, rootMargin: '100px' }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    const fb = setTimeout(() => setStatsStarted(true), 1200);
    return () => {
      observer.disconnect();
      clearTimeout(fb);
    };
  }, []);

  useEffect(() => {
    if (!statsStarted) return;
    if (statsVisibleCount < impactStats.length) {
      const timer = setTimeout(() => {
        setStatsVisibleCount((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [statsStarted, statsVisibleCount]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setFootprintStarted(true);
        }
      },
      { threshold: 0.02, rootMargin: '100px' }
    );
    if (footprintRef.current) observer.observe(footprintRef.current);
    const fb = setTimeout(() => setFootprintStarted(true), 1200);
    return () => {
      observer.disconnect();
      clearTimeout(fb);
    };
  }, []);

  useEffect(() => {
    if (!footprintStarted) return;
    if (footprintVisibleCount < highlightCards.length) {
      const timer = setTimeout(() => {
        setFootprintVisibleCount((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [footprintStarted, footprintVisibleCount, highlightCards.length]);

  return (
    <div className="space-y-12 font-sans pb-16">
      {/* ── Page Banner ── */}
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our Impact</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            42+ years of measurable, lasting transformation in children &amp; communities.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top 4 Main Stat Counter Bar - with enhanced luminous green hover highlight */}
        <div ref={statsRef} className="bg-white rounded-3xl shadow-sm border-2 border-gray-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {impactStats.map((stat, idx) => {
            const IconComponent = iconMap[stat.icon] || Users;
            const isVisible = statsStarted && idx < statsVisibleCount;
            return (
              <div
                key={stat.id}
                className={`flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-gray-50/60 hover:bg-emerald-50/80 border-2 border-transparent hover:border-emerald-500 hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] transition-all duration-500 hover:-translate-y-1.5 group cursor-pointer transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                }`}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-rlhp-green border border-emerald-200 flex items-center justify-center mb-3 group-hover:scale-115 group-hover:bg-rlhp-green group-hover:text-white transition-all shadow-xs">
                  <IconComponent size={26} />
                </div>
                <div className="text-2xl sm:text-4xl font-black text-rlhp-darkgreen tracking-tight group-hover:text-emerald-900 transition-colors">
                  {stat.count}
                </div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wide mt-1.5 group-hover:text-gray-950 transition-colors">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-500 group-hover:text-gray-700 mt-1 max-w-[190px] transition-colors leading-relaxed">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Transformative Community Footprint Section ─── */}
        <section className="space-y-8 pt-2">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Transformative Community Footprint
            </h2>
            <div className="w-12 h-1 bg-rlhp-green mx-auto rounded-full" />
          </div>

          {/* All Transformative Cards with cascade timer animation matching Our Principles */}
          <div ref={footprintRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              const isVisible = footprintStarted && idx < footprintVisibleCount;
              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-7 bg-gradient-to-br ${card.bgGradient} border-2 ${card.borderColor} shadow-xs ${card.hoverGlow} hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group overflow-hidden ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                  }`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div>
                    {/* Top Icon Badge & Highlighted Number beside it */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                        <Icon size={28} />
                      </div>
                      <div className="leading-none">
                        <span className={`text-2xl sm:text-3xl font-black ${card.numberColor} tracking-tight font-sans drop-shadow-2xs`}>
                          {card.number}
                        </span>
                      </div>
                    </div>

                    {/* Subtitle tag */}
                    <p className="text-[11px] font-bold text-rlhp-green uppercase tracking-wide mb-1.5">
                      {card.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 leading-snug tracking-tight group-hover:text-rlhp-darkgreen transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`mt-6 w-10 h-1 rounded-full ${card.accentBar} group-hover:w-20 transition-all duration-300`} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
