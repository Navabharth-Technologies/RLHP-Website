import React from 'react';

export default function FinancialReportsPage({ setCurrentPage, onNavClick, onSelectNews }) {
  return (
    <div className="font-sans min-h-[60vh] bg-gray-50/50">
      {/* Financial Reports & Transparency - Section ready for new content */}
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Financial Reports & Transparency
          </h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            3 Years Audit Reports, FCRA Compliance & Statutory Certifications
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl border border-gray-200/80 p-12 text-center max-w-2xl mx-auto shadow-sm space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-rlhp-green flex items-center justify-center mx-auto text-2xl font-bold">
            📋
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            Financial Reports Section
          </h3>
          <p className="text-sm text-gray-500">
            Content updates will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
