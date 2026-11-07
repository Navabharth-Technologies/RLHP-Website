import React from 'react';
import ImpactCounters from '../components/ImpactCounters';
import { Award, ShieldCheck, Heart, Users, CheckCircle2, Activity, Handshake, BookOpen } from 'lucide-react';

export default function ImpactPage() {
  const highlightCards = [
    {
      title: "12,000+ Malnourished Children Became Healthy Through Nutrition",
      subtitle: "Nutrition & Child Health Drive",
      desc: "Community health interventions, nutritional food support, growth tracking and healthcare counselling bringing thousands of children out of severe and acute malnutrition.",
      icon: Activity,
      borderColor: "border-emerald-200 hover:border-emerald-500",
      bgGradient: "from-emerald-50/50 via-white to-emerald-50/30",
      iconBg: "bg-emerald-100 text-emerald-700",
      accentBar: "bg-emerald-500",
    },
    {
      title: "1.5 Lakh Families Connected to Govt. Schemes for Health, Education & Livelihood",
      subtitle: "Government Entitlements & Social Security",
      desc: "Empowering marginalised families by facilitating direct linkage to vital government welfare schemes, social entitlements, educational aid, pensions and health cards.",
      icon: Handshake,
      borderColor: "border-blue-200 hover:border-blue-500",
      bgGradient: "from-blue-50/50 via-white to-blue-50/30",
      iconBg: "bg-blue-100 text-blue-700",
      accentBar: "bg-blue-500",
    },
    {
      title: "Reading for Transformation - Travelling Library Reaching 100+ Govt. Schools in 3 Districts",
      subtitle: "Literacy & Mobile Knowledge Network",
      desc: "Fostering lifelong reading habits, literacy, and creative curiosity among rural and slum students across Mysuru, Mandya and Chamarajanagar through travelling mobile library vans.",
      icon: BookOpen,
      borderColor: "border-amber-200 hover:border-amber-500",
      bgGradient: "from-amber-50/50 via-white to-amber-50/30",
      iconBg: "bg-amber-100 text-amber-700",
      accentBar: "bg-amber-500",
    },
  ];

  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our Impact</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            42+ years of measurable, lasting transformation in children & communities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <ImpactCounters />

        {/* ─── 3 Prominent Impact Highlights Section (Above 42-Year Strategic Achievements) ─── */}
        <section className="space-y-6 pt-2">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rlhp-green uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
              Milestone Transformations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Transformative Community Footprint
            </h2>
            <div className="w-12 h-1 bg-rlhp-green mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-7 bg-gradient-to-br ${card.bgGradient} border-2 ${card.borderColor} shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden`}
                >
                  <div>
                    {/* Top Icon Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={28} />
                      </div>
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        RLHP Impact
                      </span>
                    </div>

                    {/* Subtitle tag */}
                    <p className="text-xs font-bold text-rlhp-green uppercase tracking-wide mb-2">
                      {card.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="font-extrabold text-lg sm:text-xl text-gray-900 leading-snug tracking-tight mb-3 group-hover:text-rlhp-darkgreen transition-colors">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                      {card.desc}
                    </p>
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
