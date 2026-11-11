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
                hoverBorder: 'hover:border-rose-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(244,63,94,0.3)]',
                accentLine: 'bg-rose-500',
                glowColor: 'from-rose-500/10 via-rose-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-blue-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)]',
                accentLine: 'bg-blue-500',
                glowColor: 'from-blue-500/10 via-blue-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-amber-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.3)]',
                accentLine: 'bg-amber-500',
                glowColor: 'from-amber-500/10 via-amber-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-purple-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(168,85,247,0.3)]',
                accentLine: 'bg-purple-500',
                glowColor: 'from-purple-500/10 via-purple-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-emerald-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)]',
                accentLine: 'bg-emerald-500',
                glowColor: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-teal-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.3)]',
                accentLine: 'bg-teal-500',
                glowColor: 'from-teal-500/10 via-teal-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-yellow-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(234,179,8,0.3)]',
                accentLine: 'bg-yellow-500',
                glowColor: 'from-yellow-500/10 via-yellow-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-sky-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(14,165,233,0.3)]',
                accentLine: 'bg-sky-500',
                glowColor: 'from-sky-500/10 via-sky-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-pink-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(236,72,153,0.3)]',
                accentLine: 'bg-pink-500',
                glowColor: 'from-pink-500/10 via-pink-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-green-500',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(34,197,94,0.3)]',
                accentLine: 'bg-green-600',
                glowColor: 'from-green-500/10 via-green-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-indigo-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3)]',
                accentLine: 'bg-indigo-500',
                glowColor: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-cyan-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.3)]',
                accentLine: 'bg-cyan-500',
                glowColor: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
              },
              {
                hoverBorder: 'hover:border-violet-400',
                hoverGlow: 'hover:shadow-[0_20px_40px_-10px_rgba(139,92,246,0.3)]',
                accentLine: 'bg-violet-500',
                glowColor: 'from-violet-500/10 via-violet-500/5 to-transparent',
              },
            ];

            return orgDetails.ourPrograms.map((prog, idx) => {
              const imageSrc = `${import.meta.env.BASE_URL}images/programs/program_card_${idx + 1}.jpg`;
              const style = programStyles[idx % programStyles.length];
              const isVisible = hasStarted && idx < visibleCount;

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 sm:p-8 shadow-md border-2 border-gray-150 ${style.hoverBorder} ${style.hoverGlow} hover:-translate-y-2.5 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden ${
                    isVisible 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                  }`}
                  style={{
                    willChange: 'transform, opacity',
                  }}
                >
                  {/* Subtle ambient gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${style.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  {/* Circular Image Container with Multi-Stop Glowing Ring & Zoom */}
                  <div className="relative mb-5 flex items-center justify-center z-10">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white p-0.5 shadow-inner">
                        <img
                          src={imageSrc}
                          alt={prog.title}
                          className="w-full h-full object-cover rounded-full group-hover:scale-115 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2.5 leading-snug tracking-tight group-hover:text-rlhp-darkgreen transition-colors z-10">
                    {prog.title}
                  </h3>

                  {/* Program Description */}
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 leading-relaxed font-medium mt-auto pt-1 transition-colors z-10">
                    {prog.description}
                  </p>

                  {/* Bottom Accent Bar expanding on hover */}
                  <div className={`mt-6 w-12 h-1.5 rounded-full ${style.accentLine} group-hover:w-24 shadow-xs transition-all duration-300 z-10`} />
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
