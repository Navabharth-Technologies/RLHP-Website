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
            <div className="p-10 bg-rlhp-lightgreen/30 rounded-xl border border-rlhp-green/30 space-y-2">
              <h3 className="font-bold text-sm text-rlhp-darkgreen-2000">Child Protection & Rights</h3>
            </div>
            <div className="p-10 bg-orange-50 rounded-xl border border-orange-200 space-y-2">
              <h3 className="font-bold text-sm text-rlhp-orange-2000">Learning Disability Remediation</h3>
            </div>
            <div className="p-10 bg-blue-50 rounded-xl border border-blue-200 space-y-2">
              <h3 className="font-bold text-sm text-blue-2000">Women Sangha Federations</h3>
            </div>
            <div className="p-10 bg-green-50 rounded-xl border border-green-200 space-y-2">
              <h3 className="font-bold text-sm text-green-2000">Disaster & Relief Interventions</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
