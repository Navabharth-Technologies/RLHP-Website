import React, { useState } from 'react';
import { orgDetails } from '../data/rlhpData';
import AnimatedWaveUnderline from '../components/AnimatedWaveUnderline';
import { 
  Users, Handshake, CheckCircle2, Heart, Scale, BookOpen, 
  Sparkles, Award, ArrowRight, ShieldCheck, Activity, Building2, 
  Leaf, UserCheck, Flame, Baby, HelpCircle, GraduationCap
} from 'lucide-react';

export default function Projects({ setCurrentPage, onNavClick }) {
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
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
                iconColor: 'text-rose-500',
                badgeBg: 'bg-rose-50 border-rose-200 group-hover:bg-rose-500 group-hover:text-white',
                hoverBorder: 'hover:border-rose-400',
                hoverShadow: 'hover:shadow-rose-100',
                accentLine: 'bg-rose-400',
                anim: 'group-hover:scale-110',
              },
              {
                iconColor: 'text-blue-500',
                badgeBg: 'bg-blue-50 border-blue-200 group-hover:bg-blue-500 group-hover:text-white',
                hoverBorder: 'hover:border-blue-400',
                hoverShadow: 'hover:shadow-blue-100',
                accentLine: 'bg-blue-400',
                anim: 'group-hover:rotate-6',
              },
              {
                iconColor: 'text-amber-500',
                badgeBg: 'bg-amber-50 border-amber-200 group-hover:bg-amber-500 group-hover:text-white',
                hoverBorder: 'hover:border-amber-400',
                hoverShadow: 'hover:shadow-amber-100',
                accentLine: 'bg-amber-400',
                anim: 'group-hover:-translate-y-1',
              },
              {
                iconColor: 'text-purple-500',
                badgeBg: 'bg-purple-50 border-purple-200 group-hover:bg-purple-500 group-hover:text-white',
                hoverBorder: 'hover:border-purple-400',
                hoverShadow: 'hover:shadow-purple-100',
                accentLine: 'bg-purple-400',
                anim: 'group-hover:scale-110',
              },
              {
                iconColor: 'text-emerald-500',
                badgeBg: 'bg-emerald-50 border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white',
                hoverBorder: 'hover:border-emerald-400',
                hoverShadow: 'hover:shadow-emerald-100',
                accentLine: 'bg-emerald-400',
                anim: 'group-hover:-translate-y-1.5',
              },
              {
                iconColor: 'text-teal-500',
                badgeBg: 'bg-teal-50 border-teal-200 group-hover:bg-teal-500 group-hover:text-white',
                hoverBorder: 'hover:border-teal-400',
                hoverShadow: 'hover:shadow-teal-100',
                accentLine: 'bg-teal-400',
                anim: 'group-hover:scale-110',
              },
              {
                iconColor: 'text-yellow-500',
                badgeBg: 'bg-yellow-50 border-yellow-200 group-hover:bg-yellow-500 group-hover:text-white',
                hoverBorder: 'hover:border-yellow-400',
                hoverShadow: 'hover:shadow-yellow-100',
                accentLine: 'bg-yellow-400',
                anim: 'group-hover:rotate-12',
              },
              {
                iconColor: 'text-sky-500',
                badgeBg: 'bg-sky-50 border-sky-200 group-hover:bg-sky-500 group-hover:text-white',
                hoverBorder: 'hover:border-sky-400',
                hoverShadow: 'hover:shadow-sky-100',
                accentLine: 'bg-sky-400',
                anim: 'group-hover:scale-110',
              },
              {
                iconColor: 'text-pink-500',
                badgeBg: 'bg-pink-50 border-pink-200 group-hover:bg-pink-500 group-hover:text-white',
                hoverBorder: 'hover:border-pink-400',
                hoverShadow: 'hover:shadow-pink-100',
                accentLine: 'bg-pink-400',
                anim: 'group-hover:rotate-6',
              },
              {
                iconColor: 'text-green-600',
                badgeBg: 'bg-green-50 border-green-200 group-hover:bg-green-600 group-hover:text-white',
                hoverBorder: 'hover:border-green-400',
                hoverShadow: 'hover:shadow-green-100',
                accentLine: 'bg-green-500',
                anim: 'group-hover:-translate-y-1',
              },
              {
                iconColor: 'text-indigo-500',
                badgeBg: 'bg-indigo-50 border-indigo-200 group-hover:bg-indigo-500 group-hover:text-white',
                hoverBorder: 'hover:border-indigo-400',
                hoverShadow: 'hover:shadow-indigo-100',
                accentLine: 'bg-indigo-400',
                anim: 'group-hover:scale-110',
              },
              {
                iconColor: 'text-cyan-500',
                badgeBg: 'bg-cyan-50 border-cyan-200 group-hover:bg-cyan-500 group-hover:text-white',
                hoverBorder: 'hover:border-cyan-400',
                hoverShadow: 'hover:shadow-cyan-100',
                accentLine: 'bg-cyan-400',
                anim: 'group-hover:rotate-12',
              },
              {
                iconColor: 'text-violet-500',
                badgeBg: 'bg-violet-50 border-violet-200 group-hover:bg-violet-500 group-hover:text-white',
                hoverBorder: 'hover:border-violet-400',
                hoverShadow: 'hover:shadow-violet-100',
                accentLine: 'bg-violet-400',
                anim: 'group-hover:-translate-y-1.5',
              },
            ];

            return orgDetails.ourPrograms.map((prog, idx) => {
              const Icon = programIcons[idx] || Sparkles;
              const style = programStyles[idx % programStyles.length];

              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-7 sm:p-8 shadow-xs border border-gray-200/90 ${style.hoverBorder} ${style.hoverShadow} hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden animate-timer-card`}
                  style={{
                    animationDelay: `${idx * 160}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {/* Icon Badge with Distinct Aesthetic Color and Animation */}
                  <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center border shadow-xs transition-all duration-300 ${style.anim} ${style.badgeBg}`}>
                    <Icon size={28} className={`${style.iconColor} group-hover:text-white transition-colors duration-300`} />
                  </div>

                  {/* Program Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5 leading-snug tracking-tight group-hover:text-gray-950 transition-colors">
                    {prog.title}
                  </h3>

                  {/* Program Description */}
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal mt-auto pt-1">
                    {prog.description}
                  </p>

                  {/* Bottom Accent Bar expanding on hover */}
                  <div className={`mt-6 w-8 h-1 rounded-full ${style.accentLine} group-hover:w-16 transition-all duration-300`} />
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
