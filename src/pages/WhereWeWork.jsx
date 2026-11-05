import React from 'react';
import KarnatakaMap from '../components/KarnatakaMap';

export default function WhereWeWork() {
  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Where We Work</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Active presence across 10 key districts in Karnataka covering South and North Karnataka
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-rlhp-darkgreen">Geographic Footprint in Karnataka</h2>
          <p className="text-xs text-gray-600 mt-2 leading-relaxed">
            RLHP operates in 10 districts of Karnataka covering South and North Karnataka, reaching a population of over 9.65 lakh people. Click on any district pin below to view specific local facilities, shelter homes, and community federations.
          </p>
        </div>

        <KarnatakaMap />
      </div>
    </div>
  );
}
