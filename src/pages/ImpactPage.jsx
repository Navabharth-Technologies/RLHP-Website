import React from 'react';
import { impactStats } from '../data/rlhpData';
import { 
  Award, ShieldCheck, Heart, Users, CheckCircle2, Activity, Handshake, BookOpen, 
  Home, Shield, GraduationCap, LifeBuoy, Clock, MapPin 
} from 'lucide-react';

export default function ImpactPage() {
  const iconMap = {
    Clock: Clock,
    Users: Users,
    Heart: Heart,
    MapPin: MapPin
  };

  const highlightCards = [
    {
      title: "2,100+ Children Sheltered",
      subtitle: "Residential Child Care & Protection",
      desc: "Providing safe residential care, emotional counselling, nutritional support and holistic education at Asha Kirana and Asha Bhavana care centres.",
      icon: Home,
      borderColor: "border-emerald-200 hover:border-emerald-500",
      bgGradient: "from-emerald-50/50 via-white to-emerald-50/30",
      iconBg: "bg-emerald-100 text-emerald-700",
      accentBar: "bg-emerald-500",
    },
    {
      title: "12,000+ Children Rescued",
      subtitle: "Emergency Child Protection Drive",
      desc: "Rescued vulnerable boys and girls from severe child labour, trafficking, hazardous work, and runaway street distress through rapid CHILDLINE action.",
      icon: Shield,
      borderColor: "border-blue-200 hover:border-blue-500",
      bgGradient: "from-blue-50/50 via-white to-blue-50/30",
      iconBg: "bg-blue-100 text-blue-700",
      accentBar: "bg-blue-500",
    },
    {
      title: "20,000+ Rights Club Members",
      subtitle: "Children's Collective Advocacy",
      desc: "Active boy and girl participants across 78 Child Rights Clubs asserting child safety, fighting child marriage, and leading grassroots campaigns.",
      icon: Heart,
      borderColor: "border-rose-200 hover:border-rose-500",
      bgGradient: "from-rose-50/50 via-white to-rose-50/30",
      iconBg: "bg-rose-100 text-rose-700",
      accentBar: "bg-rose-500",
    },
    {
      title: "10,000+ Child Laboured Mainstreamed",
      subtitle: "Anti-Child Labour & Education Rights",
      desc: "Successfully rescued from hazardous industries, brick kilns and domestic servitude, and reintegrated into formal mainstream schools.",
      icon: GraduationCap,
      borderColor: "border-purple-200 hover:border-purple-500",
      bgGradient: "from-purple-50/50 via-white to-purple-50/30",
      iconBg: "bg-purple-100 text-purple-700",
      accentBar: "bg-purple-500",
    },
    {
      title: "2,400 Children from Migrant Families",
      subtitle: "Migrant Labour Welfare & Aid",
      desc: "Provided critical nutritional food aid, bridge-learning classrooms, healthcare screenings, and legal protection in major transit settlements.",
      icon: Users,
      borderColor: "border-amber-200 hover:border-amber-500",
      bgGradient: "from-amber-50/50 via-white to-amber-50/30",
      iconBg: "bg-amber-100 text-amber-700",
      accentBar: "bg-amber-500",
    },
    {
      title: "6,000+ Flood Relief Families",
      subtitle: "Disaster Emergency Response",
      desc: "Direct emergency humanitarian assistance, ration kits, medical rescue, and permanent family rehabilitation during severe Kerala flood disasters.",
      icon: LifeBuoy,
      borderColor: "border-teal-200 hover:border-teal-500",
      bgGradient: "from-teal-50/50 via-white to-teal-50/30",
      iconBg: "bg-teal-100 text-teal-700",
      accentBar: "bg-teal-500",
    },
    {
      title: "5,000+ COVID Support Families",
      subtitle: "Pandemic Humanitarian Relief",
      desc: "Rapid doorstep food provisions, emergency sanitization kits, oxygen supplies, and sustained financial assistance during nationwide lockdowns.",
      icon: Activity,
      borderColor: "border-red-200 hover:border-red-500",
      bgGradient: "from-red-50/50 via-white to-red-50/30",
      iconBg: "bg-red-100 text-red-700",
      accentBar: "bg-red-500",
    },
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
    <div className="space-y-12 font-sans pb-16">
      {/* ── Page Banner ── */}
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our Impact</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            42+ years of measurable, lasting transformation in children &amp; communities
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top 4 Main Stat Counter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {impactStats.map((stat) => {
            const IconComponent = iconMap[stat.icon] || Users;
            return (
              <div key={stat.id} className="flex flex-col items-center p-3 rounded-xl hover:bg-rlhp-lightgreen/40 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent size={24} />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen tracking-tight">
                  {stat.count}
                </div>
                <div className="text-xs font-bold text-gray-800 uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-500 mt-1 max-w-[180px]">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Transformative Community Footprint Section ─── */}
        <section className="space-y-8 pt-2">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rlhp-green uppercase tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full inline-block">
              Milestone Transformations
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Transformative Community Footprint
            </h2>
            <div className="w-12 h-1 bg-rlhp-green mx-auto rounded-full" />
            <p className="text-xs sm:text-sm text-gray-500 pt-1">
              Documented milestones of child rescue, rehabilitation, education, and family empowerment across South India
            </p>
          </div>

          {/* All Transformative Cards in the rich card style with icon badges & bottom accent bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
