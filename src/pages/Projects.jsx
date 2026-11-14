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
  const [selectedProgramIndex, setSelectedProgramIndex] = useState(null);

  useEffect(() => {
    // If IntersectionObserver is supported, use it with a very lenient threshold or fallback to immediate visibility on mobile
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        },
        { threshold: 0.01, rootMargin: '150px' }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      // Safety fallback: if user is on mobile or observer didn't fire in 1.2s, auto-start
      const fallbackTimer = setTimeout(() => {
        setHasStarted(true);
      }, 1200);

      return () => {
        observer.disconnect();
        clearTimeout(fallbackTimer);
      };
    } else {
      setHasStarted(true);
    }
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleCount < orgDetails.ourPrograms.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 100);
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

            {/* Right Images (5 Cols) - Side-by-Side Dual Overlapping Cards with Full Visibility */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
              <div className="relative w-full max-w-[480px] h-[340px] sm:h-[380px] flex items-center">
                {/* Left Card: Girl with Books & Learning Materials - Positioned clearly on the left so face is never covered */}
                <div className="absolute left-0 sm:left-2 top-2 sm:top-4 w-[54%] h-[88%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 z-10 bg-gray-100 group">
                  <img
                    src={`${import.meta.env.BASE_URL}images/what_we_do_girl_face.jpg`}
                    alt="What We Do - RLHP Girl with Books"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>

                {/* Right Card: Mother, Child & Community Healthcare Worker - Placed to the right without occluding the girl */}
                <div className="absolute right-0 sm:right-2 bottom-2 sm:bottom-4 w-[56%] h-[88%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20 bg-gray-100 group">
                  <img
                    src={`${import.meta.env.BASE_URL}images/what_we_do_2.jpg`}
                    alt="What We Do - RLHP Community Healthcare"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Ambient glow backdrop */}
                <div className="absolute inset-4 bg-emerald-100/50 rounded-3xl -z-10 blur-xl" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 2. OUR PROGRAMS / OUR PROJECTS SECTION (Clickable Cards with Smooth Content Reveal) ─── */}
      <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Our <span className="text-rlhp-green italic font-serif">Programs</span>
          </h2>
          <AnimatedWaveUnderline className="w-52 h-3.5 mt-3" />
        </div>

        {/* Cards Grid: Rows of 4 cards on desktop, then 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(() => {
            const programStyles = [
              {
                accentColor: '#F43F5E',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(244,63,94,0.4)]',
                backGradient: 'from-[#881337] via-[#9F1239] to-[#4C0519]',
              },
              {
                accentColor: '#3B82F6',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(59,130,246,0.4)]',
                backGradient: 'from-[#1E3A8A] via-[#1D4ED8] to-[#172554]',
              },
              {
                accentColor: '#F59E0B',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(245,158,11,0.4)]',
                backGradient: 'from-[#78350F] via-[#92400E] to-[#451A03]',
              },
              {
                accentColor: '#A855F7',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(168,85,247,0.4)]',
                backGradient: 'from-[#581C87] via-[#6B21A8] to-[#3B0764]',
              },
              {
                accentColor: '#10B981',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(16,185,129,0.4)]',
                backGradient: 'from-[#064E3B] via-[#047857] to-[#022C22]',
              },
              {
                accentColor: '#14B8A6',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(20,184,166,0.4)]',
                backGradient: 'from-[#134E4A] via-[#0F766E] to-[#042F2E]',
              },
              {
                accentColor: '#EAB308',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(234,179,8,0.4)]',
                backGradient: 'from-[#713F12] via-[#854D0E] to-[#422006]',
              },
              {
                accentColor: '#0EA5E9',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(14,165,233,0.4)]',
                backGradient: 'from-[#0C4A6E] via-[#0369A1] to-[#082F49]',
              },
              {
                accentColor: '#EC4899',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(236,72,153,0.4)]',
                backGradient: 'from-[#831843] via-[#9D174D] to-[#500724]',
              },
              {
                accentColor: '#22C55E',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(34,197,94,0.4)]',
                backGradient: 'from-[#14532D] via-[#15803D] to-[#052E16]',
              },
              {
                accentColor: '#8B5CF6',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(139,92,246,0.4)]',
                backGradient: 'from-[#4C1D95] via-[#5B21B6] to-[#2E1065]',
              },
              {
                accentColor: '#6366F1',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(99,102,241,0.4)]',
                backGradient: 'from-[#312E81] via-[#3730A3] to-[#1E1B4B]',
              },
              {
                accentColor: '#06B6D4',
                hoverGlow: 'hover:shadow-[0_20px_45px_-10px_rgba(6,182,212,0.4)]',
                backGradient: 'from-[#164E63] via-[#0E7490] to-[#083344]',
              },
            ];

            return orgDetails.ourPrograms.map((prog, idx) => {
              const imageSrc = `${import.meta.env.BASE_URL}images/programs/program_card_${idx + 1}.jpg`;
              const style = programStyles[idx % programStyles.length];
              const isVisible = hasStarted && idx < visibleCount;
              const isSelected = selectedProgramIndex === idx;

              // Row 1 (cards 0, 1, 2, 3)
              // Row 2 (cards 4, 5, 6, 7)
              // Row 3 (cards 8, 9, 10, 11) -> 8: RCH (col 1), 9: Community Development (col 2), 10: Awareness & Govt Scheme Linkages (col 3), 11: Youth Climate (col 4)
              // Row 4 (card 12) -> Adolescent Empowerment and Gender Justice
              // Place directly below and in between Community Development (col 2) and Awareness & Govt Scheme Linkages (col 3):
              const isAdolescent = idx === 12;

              return (
                <div
                  key={idx}
                  onClick={() => setSelectedProgramIndex(isSelected ? null : idx)}
                  className={`relative h-[380px] sm:h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer select-none transition-all duration-500 border-2 bg-gray-900 ${
                    isAdolescent ? 'lg:col-start-2 lg:translate-x-1/2' : ''
                  } ${
                    isSelected 
                      ? 'border-emerald-400 shadow-[0_20px_45px_-10px_rgba(16,185,129,0.6)] scale-[1.02]' 
                      : `border-white/30 shadow-xl ${style.hoverGlow} hover:-translate-y-1.5`
                  } ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                  }`}
                  style={{
                    willChange: 'transform, opacity',
                  }}
                >
                  {/* Full Image Displayed Without Chopping or Cropping */}
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-950 overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={prog.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isSelected ? 'scale-105 filter blur-[2px]' : 'hover:scale-105'
                      }`}
                    />
                  </div>

                  {/* ── FRONT OVERLAY (Visible by default) ── */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent p-5 sm:p-6 flex flex-col justify-end transition-opacity duration-300 ${
                      isSelected ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  >
                    <div
                      className="w-8 h-1 rounded-full mb-2.5"
                      style={{ backgroundColor: style.accentColor }}
                    />
                    <h3 className="text-base sm:text-lg lg:text-xl font-black text-white leading-snug drop-shadow-md">
                      {prog.title}
                    </h3>
                  </div>

                  {/* ── SELECTED CONTENT OVERLAY (Appears on click without flipping) ── */}
                  <div
                    className={`absolute inset-0 p-6 sm:p-7 bg-gradient-to-br ${style.backGradient} backdrop-blur-sm text-white flex flex-col justify-center transition-all duration-300 ${
                      isSelected ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                  >
                    <h3 className="text-base sm:text-lg lg:text-xl font-black text-white leading-snug mb-2.5">
                      {prog.title}
                    </h3>

                    <div
                      className="w-10 h-1 rounded-full mb-3"
                      style={{ backgroundColor: style.accentColor }}
                    />

                    {/* Description */}
                    <p className="text-white/95 text-xs sm:text-[13px] leading-relaxed font-normal text-justify">
                      {prog.description}
                    </p>
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
