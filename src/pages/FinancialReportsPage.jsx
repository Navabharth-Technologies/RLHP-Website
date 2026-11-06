import React, { useState } from 'react';
import { ArrowRight, FileText, Download, Eye, X, BookOpen } from 'lucide-react';
import FlipbookModal from '../components/FlipbookModal';

const B = import.meta.env.BASE_URL;

export default function FinancialReportsPage({ setCurrentPage, onNavClick, onSelectNews }) {
  const [activeFlipbook, setActiveFlipbook] = useState(null);

  // Single PDF for Financials section as requested
  const financialReportsList = [
    {
      id: 'fcra-2024-2025',
      title: 'Foreign Contributions (2024–2025)',
      period: 'Year ended 31 March 2025',
      date: 'April 20, 2025',
      pdfUrl: `${B}documents/Foreign_Contribution_2024_2025.pdf`,
      cover: `${B}documents/Foreign_Contribution_2024_2025.pdf`,
      category: 'Foreign Contribution',
      year: '2024–2025',
    }
  ];

  return (
    <div className="font-sans min-h-screen bg-gray-50/40 pb-24">
      
      {/* ═══════════════════════════════════════════════════════════════════
          1. TOP HERO SECTION (Light Green Shade Background matching Logo)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#eaf5eb] via-[#f2faf3] to-[#fbfdfa] border-b border-emerald-100/60 overflow-hidden">
        {/* Soft decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-green-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-emerald-100/50 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold italic font-serif text-rlhp-green tracking-wide leading-none mb-4">
                  Financials
                </h1>
                <div className="w-16 h-1.5 bg-rlhp-green rounded-full mb-6" />
                <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl">
                  Audited financial statements, statutory certifications, and foreign contribution disclosures ensuring institutional transparency.
                </p>
              </div>

              {/* Breadcrumb indicator */}
              <div className="pt-2 text-xs sm:text-sm font-semibold text-gray-500">
                <span 
                  onClick={() => setCurrentPage?.('home')} 
                  className="hover:text-rlhp-green cursor-pointer transition-colors"
                >
                  Home
                </span>
                {' / '}
                <span className="text-rlhp-green font-bold">Financials</span>
              </div>
            </div>

            {/* Right Slanted Children Picture (Authentic gallery photo) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-md w-full transform sm:rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                  <img
                    src={`${B}images/financials_hero_children.jpg`}
                    alt="Children in Community"
                    className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. PDF CARDS GRID (Red PDF Icon Style Matching Reference 2 Image)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {financialReportsList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveFlipbook(item)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-xl hover:border-red-400/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Red Flat Stylized PDF Icon matching Reference 2 */}
                <div className="w-28 h-36 mx-auto mb-6 rounded-2xl bg-[#EE3B3B] text-white p-4 flex flex-col items-center justify-between shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="text-base font-black tracking-widest uppercase">
                    PDF
                  </span>
                  {/* Stylized document lines */}
                  <div className="w-full space-y-1.5 px-1">
                    <div className="w-full h-1 bg-white/80 rounded" />
                    <div className="w-4/5 h-1 bg-white/80 rounded" />
                    <div className="w-full h-1 bg-white/80 rounded" />
                    <div className="w-3/5 h-1 bg-white/80 rounded" />
                  </div>
                  <FileText size={18} className="opacity-90" />
                </div>

                {/* Date */}
                <span className="text-xs font-semibold text-gray-400 block mb-1.5">
                  {item.date}
                </span>

                {/* Document Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Bottom "Read More ->" link */}
              <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between">
                <span className="text-xs font-bold text-red-600 group-hover:underline flex items-center gap-1.5">
                  Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive 3D Book Turn Modal for Financials PDF */}
      {activeFlipbook && (
        <FlipbookModal
          report={activeFlipbook}
          onClose={() => setActiveFlipbook(null)}
        />
      )}

    </div>
  );
}
