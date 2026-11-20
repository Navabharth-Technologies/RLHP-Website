import React from 'react';
import KarnatakaMap from '../components/KarnatakaMap';

export default function WhereWeWork() {
  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Where We Work</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-rlhp-darkgreen">Our Reach Across Karnataka</h2>
        </div>

        <KarnatakaMap />
      </div>
    </div>
  );
}
