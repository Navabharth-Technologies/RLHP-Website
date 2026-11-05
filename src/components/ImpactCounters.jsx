import React from 'react';
import { impactStats } from '../data/rlhpData';
import { Clock, Users, Heart, MapPin, Shield, BookOpen, Home, LifeBuoy } from 'lucide-react';

export default function ImpactCounters() {
  const iconMap = {
    Clock: Clock,
    Users: Users,
    Heart: Heart,
    MapPin: MapPin
  };

  const detailedImpact = [
    { number: "2,100+", title: "Children Sheltered", desc: "Residential care & rehabilitation at AshaKirana & AshaBhavana homes", icon: Home },
    { number: "8,000+", title: "Children Rescued", desc: "Rescued from child labour and street distress through CHILDLINE", icon: Shield },
    { number: "10,000+", title: "Rights Club Members", desc: "Active children across 78 Child Rights Clubs advocating safety", icon: Heart },
    { number: "2,400", title: "Migrant Families", desc: "Assisted with emergency relief, food & legal aid in one intervention", icon: Users },
    { number: "6,000+", title: "Flood Relief Families", desc: "Rehabilitated after catastrophic Kerala floods", icon: LifeBuoy },
    { number: "5,000+", title: "COVID Support Families", desc: "Essential rations, hygiene kits & medical aid during lockdowns", icon: Heart }
  ];

  return (
    <div className="font-sans">
      {/* Top 4 Main Stat Counter Bar matching reference image */}
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

      {/* Detailed Impact Metric Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {detailedImpact.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-rlhp-orange flex items-center justify-center shrink-0 mt-1">
                <Icon size={20} />
              </div>
              <div>
                <div className="text-xl font-bold text-rlhp-green">{item.number}</div>
                <h4 className="font-semibold text-xs text-gray-900 mt-0.5">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
