import React, { useState, useEffect, useRef } from 'react';
import { orgDetails } from '../data/rlhpData';
import AnimatedWaveUnderline from '../components/AnimatedWaveUnderline';
import { 
  Users, Handshake, CheckCircle2, Heart, Scale, BookOpen, 
  Sparkles, Award, ArrowRight, ShieldCheck, Activity, Building2, 
  Leaf, UserCheck, Flame, Baby, HelpCircle, GraduationCap
} from 'lucide-react';

export default function Projects({ setCurrentPage, onNavClick }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount < orgDetails.ourPrograms.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [hasStarted, visibleCount]);
  // 14 Programme Icons
  const programIcons = [
    Heart,         // 1. Street Children’s Rehabilitation
    ShieldCheck,   // 2. Child Rights and Child Rights Clubs (CRC)
    BookOpen,      // 3. Library Programme
    GraduationCap, // 4. Eradication of Child Labour and Quality Education
    Users,         // 5. Women’s Empowerment and SHG Promotion
    Award,         // 6. Vocational Training Programmes
    Activity,      // 7. Malnutrition Prevention
    Sparkles,      // 8. Youth and Adolescent Development
    Activity,      // 9. Health Camps and Health Awareness
    Baby,          // 10. Reproductive and Child Health (RCH)
    Building2,     // 11. Community Development
    Handshake,     // 12. Awareness and Government Scheme Linkages
    Leaf,          // 13. Youth Engagement in Climate Change
    Scale,         // 14. Adolescent Empowerment and Gender Justice
  ];

  return (
    <div className="font-sans bg-gray-50/50">
      
      {/* ─── 1. TOP HERO SECTION: WHAT WE DO (Exact Replica of Reference 3) ─── */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf4eb]/90 via-[#f2f8f3] to-white border-b border-green-100/60 overflow-hidden">
        {/* Soft decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-none mb-4 lowercase">
                  what we <span className="text-rlhp-green italic font-serif">do</span>
                </h1>
                <AnimatedWaveUnderline className="w-56 h-4 mb-6" />
                <p className="text-lg sm:text-2xl text-gray-700 font-medium leading-relaxed max-w-2xl">
                  {orgDetails.whatWeDo}
                </p>
              </div>

              {/* Breadcrumb indicator */}
              <div className="pt-2 text-xs sm:text-sm font-semibold text-gray-400">
                Home / <span className="text-rlhp-green font-bold">what we do</span>
              </div>
            </div>

            {/* Right Card Image (5 Cols) - Exact layout like Reference Image 3 */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
              <div className="relative w-full max-w-[460px] h-[300px] sm:h-[340px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src={`${import.meta.env.BASE_URL}images/gallery/ashabhavana_girls_learning.jpg`}
                  alt="What We Do - Rural Literacy and Health Programme"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. OUR PROGRAMS / OUR PROJECTS SECTION (Exact Replica of Reference 4 with Green Logo Colors) ─── */}
      <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Our <span className="text-rlhp-green italic font-serif">Programs</span>
          </h2>
          <AnimatedWaveUnderline className="w-52 h-3.5 mt-3" />
          <p className="text-sm sm:text-base text-gray-600 font-medium mt-3">
            Our key areas of work include:
          </p>
        </div>

        {/* 3 Columns Grid of Aesthetic, Simple Cards with Distinct Harmonious Colors and Unique Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {(() => {
            const programStyles = [
              {
                accentColor: '#F43F5E',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(244,63,94,0.4)]',
                backGradient: 'from-[#881337] via-[#9F1239] to-[#4C0519]',
                tag: 'Street Children Care',
              },
              {
                accentColor: '#3B82F6',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(59,130,246,0.4)]',
                backGradient: 'from-[#1E3A8A] via-[#1D4ED8] to-[#172554]',
                tag: 'Child Rights & Voice',
              },
              {
                accentColor: '#F59E0B',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(245,158,11,0.4)]',
                backGradient: 'from-[#78350F] via-[#92400E] to-[#451A03]',
                tag: 'Reading & Literacy',
              },
              {
                accentColor: '#A855F7',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(168,85,247,0.4)]',
                backGradient: 'from-[#581C87] via-[#6B21A8] to-[#3B0764]',
                tag: 'Child Labour Elimination',
              },
              {
                accentColor: '#10B981',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.4)]',
                backGradient: 'from-[#064E3B] via-[#047857] to-[#022C22]',
                tag: 'SHGs & Empowerment',
              },
              {
                accentColor: '#14B8A6',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(20,184,166,0.4)]',
                backGradient: 'from-[#134E4A] via-[#0F766E] to-[#042F2E]',
                tag: 'Skills & Vocation',
              },
              {
                accentColor: '#EAB308',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(234,179,8,0.4)]',
                backGradient: 'from-[#713F12] via-[#854D0E] to-[#422006]',
                tag: 'Govt Entitlements',
              },
              {
                accentColor: '#0EA5E9',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(14,165,233,0.4)]',
                backGradient: 'from-[#0C4A6E] via-[#0369A1] to-[#082F49]',
                tag: 'Healthcare & Hygiene',
              },
              {
                accentColor: '#EC4899',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(236,72,153,0.4)]',
                backGradient: 'from-[#831843] via-[#9D174D] to-[#500724]',
                tag: 'Higher Education Aid',
              },
              {
                accentColor: '#22C55E',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(34,197,94,0.4)]',
                backGradient: 'from-[#14532D] via-[#15803D] to-[#052E16]',
                tag: 'Youth Leadership',
              },
              {
                accentColor: '#6366F1',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(99,102,241,0.4)]',
                backGradient: 'from-[#312E81] via-[#3730A3] to-[#1E1B4B]',
                tag: 'Social Harmony & Peace',
              },
              {
                accentColor: '#06B6D4',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(6,182,212,0.4)]',
                backGradient: 'from-[#164E63] via-[#0E7490] to-[#083344]',
                tag: 'Slum Improvement',
              },
              {
                accentColor: '#8B5CF6',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(139,92,246,0.4)]',
                backGradient: 'from-[#4C1D95] via-[#5B21B6] to-[#2E1065]',
                tag: 'Crisis & Disaster Relief',
              },
            ];

            return orgDetails.ourPrograms.map((prog, idx) => {
              const imageSrc = `${import.meta.env.BASE_URL}images/programs/program_card_${idx + 1}.jpg`;
              const style = programStyles[idx % programStyles.length];
              const isVisible = hasStarted && idx < visibleCount;

              return (
                <div
                  key={idx}
                  className={`flip-card-container relative h-[380px] sm:h-[400px] w-full perspective-1000 select-none cursor-pointer ${style.hoverGlow} transition-all duration-500 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                  }`}
                  style={{
                    willChange: 'transform, opacity',
                  }}
                >
                  {/* 3D Flip Card Inner Container */}
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-3d rounded-3xl shadow-xl">

                    {/* ── FRONT FACE: Full-Size Image Covering Entire Card + High-Clarity Overlay + Title ── */}
                    <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden backface-hidden border-2 border-white/40 shadow-xl bg-gray-900 group">
                      <img
                        src={imageSrc}
                        alt={prog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      {/* Deep contrast gradient overlay for maximum readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />

                      {/* Top Tag */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center text-[11px] font-extrabold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                          {style.tag}
                        </span>
                      </div>

                      {/* Bottom Title on Front Card */}
                      <div className="absolute bottom-0 inset-x-0 p-6 z-10">
                        <div
                          className="w-10 h-1.5 rounded-full mb-3"
                          style={{ backgroundColor: style.accentColor }}
                        />
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-snug drop-shadow-lg">
                          {prog.title}
                        </h3>
                        <p className="text-xs text-white/70 font-medium mt-1.5 flex items-center gap-1.5">
                          <span>Hover to explore program details</span>
                          <span>→</span>
                        </p>
                      </div>
                    </div>

                    {/* ── BACK FACE: Rich Detailed Information Revealed on Hover Flip ── */}
                    <div className={`absolute inset-0 w-full h-full rounded-3xl p-7 bg-gradient-to-br ${style.backGradient} text-white rotate-y-180 backface-hidden border-2 border-white/30 shadow-2xl flex flex-col justify-between`}>
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                            {style.tag}
                          </span>
                          <span className="text-[11px] text-white/60 font-semibold">
                            RLHP Program #{idx + 1}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-white leading-snug mb-3">
                          {prog.title}
                        </h3>

                        <div
                          className="w-12 h-1.5 rounded-full mb-4"
                          style={{ backgroundColor: style.accentColor }}
                        />

                        {/* Full Detailed Description */}
                        <p className="text-white/90 text-sm sm:text-base leading-relaxed font-medium">
                          {prog.description}
                        </p>
                      </div>

                      {/* Bottom Indicator */}
                      <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                        <span className="text-xs font-bold text-white/90">
                          Grassroots Action
                        </span>
                        <span className="text-[11px] text-white/70 italic">
                          42+ Years of Impact
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

      {/* ─── 3. WITH WHOM WE WORK (In Color #38853E Container) ─── */}
      <section className="w-full bg-[#38853E] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              With Whom We Work
            </h2>
            <div className="w-16 h-1.5 bg-white/80 mx-auto rounded-full mt-3" />
          </div>

          {/* Intro text */}
          <div className="text-sm sm:text-base text-green-50 leading-relaxed max-w-4xl mx-auto text-center font-medium space-y-3">
            <p>
              RLHP works with children, families and communities living in vulnerable and marginalised situations across urban, peri-urban and rural areas of South India. Our focus is on reaching those who face social, economic and geographical barriers to education, healthcare, protection and livelihood opportunities.
            </p>
            <p>
              We work closely with children, adolescents, youth, women and families who experience different forms of vulnerability and exclusion:
            </p>
          </div>

          {/* Target Groups Bullet List */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-xl border border-white/40 max-w-4xl mx-auto space-y-4 text-gray-900">
            <ul className="space-y-4 sm:space-y-5">
              {orgDetails.withWhomWeWork.groups.map((group, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <span className="w-3 h-3 rounded-full bg-[#38853E] mt-1.5 flex-shrink-0 shadow-xs" />
                  <div className="text-base sm:text-lg leading-relaxed">
                    <strong className="text-gray-950 font-extrabold text-base sm:text-lg tracking-tight">{group.title}:</strong>{' '}
                    <span className="text-gray-800 font-medium">{group.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaborations Sub-Header & Intro */}
          <div className="max-w-4xl mx-auto text-center pt-2">
            <p className="text-base sm:text-lg font-bold text-white">
              To strengthen community development and create sustainable impact, we collaborate with:
            </p>
          </div>

          {/* Collaborations Bullet List */}
          <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-xl border border-white/40 max-w-4xl mx-auto space-y-4 text-gray-900">
            <ul className="space-y-4 sm:space-y-5">
              {orgDetails.withWhomWeWork.collaborations.map((collab, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <span className="w-3 h-3 rounded-full bg-[#38853E] mt-1.5 flex-shrink-0 shadow-xs" />
                  <div className="text-base sm:text-lg leading-relaxed">
                    <strong className="text-gray-950 font-extrabold text-base sm:text-lg tracking-tight">{collab.title}</strong> –{' '}
                    <span className="text-gray-800 font-medium">{collab.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Concluding Box */}
          <div className="max-w-4xl mx-auto text-center pt-2 pb-6">
            <p className="text-sm sm:text-base text-green-50 font-medium italic leading-relaxed">
              Through these partnerships and collective efforts, RLHP works towards building inclusive, empowered and resilient communities where every child, woman and young person has the opportunity to live with dignity and build a better future.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
