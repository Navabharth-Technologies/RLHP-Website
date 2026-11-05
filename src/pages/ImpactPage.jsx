import React from 'react';
import ImpactCounters from '../components/ImpactCounters';
import { Award, ShieldCheck, Heart, Users, CheckCircle2 } from 'lucide-react';

export default function ImpactPage() {
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

        {/* 42-Year Milestone Matrix */}
        <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-rlhp-darkgreen text-center">42-Year Strategic Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-rlhp-lightgreen/30 rounded-xl border border-rlhp-green/20 space-y-2">
              <h3 className="font-bold text-sm text-rlhp-darkgreen">Child Protection & Rights</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Formed 78 Child Rights Clubs and 2 Children Federations involving 10,000+ youth who actively participate in school safety and community decisions.
              </p>
            </div>
            <div className="p-5 bg-orange-50 rounded-xl border border-orange-200 space-y-2">
              <h3 className="font-bold text-sm text-rlhp-orange">Learning Disability Remediation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Targeted Individualized Education Plan (IEP) activities successfully reduced classroom learning disability prevalence from 25% down to 11.14%.
              </p>
            </div>
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200 space-y-2">
              <h3 className="font-bold text-sm text-blue-900">Women Sangha Federations</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                DWANI and BELAKU federations unite over 12,000 women across urban and rural sanghas, fostering economic freedom and stopping child marriages.
              </p>
            </div>
            <div className="p-5 bg-green-50 rounded-xl border border-green-200 space-y-2">
              <h3 className="font-bold text-sm text-green-900">Disaster & Relief Interventions</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Over 13,400 families supported with dry rations, healthcare, and rehabilitation during Kerala floods, COVID-19, and migrant crises.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
