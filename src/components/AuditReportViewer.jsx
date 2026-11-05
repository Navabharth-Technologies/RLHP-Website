import React, { useState } from 'react';
import { auditReport2025 } from '../data/rlhpData';
import { 
  FileText, Download, CheckCircle2, ShieldCheck, 
  ZoomIn, X, ExternalLink, ChevronRight, Eye, Calendar, Building, Landmark
} from 'lucide-react';

export default function AuditReportViewer() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md space-y-8 font-sans">
      
      {/* Top Title & Certification Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-gray-150 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-rlhp-darkgreen text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
            <ShieldCheck size={14} className="text-rlhp-green" />
            <span>Statutory Compliance & Foreign Contribution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Official Audit Report & Financial Statements (2024–2025)
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
            Audited financial statements for the year ended 31st March 2025, certified by <span className="font-bold text-gray-900">Phillipos George & Co., Chartered Accountants</span> (UDIN: <span className="font-mono font-bold text-rlhp-green">25251076BMIISA9978</span>).
          </p>
        </div>

        {/* Download PDF button */}
        <div className="flex flex-wrap gap-3 shrink-0">
          <a
            href={`${import.meta.env.BASE_URL}documents/audit-report-2024-2025.pdf`}
            download="RLHP_Audit_Report_2024-2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 bg-rlhp-green hover:bg-rlhp-darkgreen text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-all hover:scale-102 cursor-pointer"
          >
            <Download size={15} />
            <span>Download Signed Audit PDF</span>
          </a>
        </div>
      </div>

      {/* Financial Snapshot Summary Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100">
          <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Total Cash Flow (R&P)</div>
          <div className="text-xl sm:text-2xl font-black text-rlhp-darkgreen mt-1">₹3,46,71,219</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Receipts & Payments A/C</div>
        </div>

        <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100">
          <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wider">Total Grants Received</div>
          <div className="text-xl sm:text-2xl font-black text-blue-900 mt-1">₹2,43,25,260</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Foreign Contributions</div>
        </div>

        <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-100">
          <div className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Total Program Expenses</div>
          <div className="text-xl sm:text-2xl font-black text-amber-900 mt-1">₹2,49,72,551</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Community & Child Development</div>
        </div>

        <div className="bg-purple-50/70 p-4 rounded-2xl border border-purple-100">
          <div className="text-[11px] font-bold text-purple-800 uppercase tracking-wider">Balance Sheet Total</div>
          <div className="text-xl sm:text-2xl font-black text-purple-900 mt-1">₹73,74,032</div>
          <div className="text-[10px] text-gray-500 mt-0.5">Unrestricted NPO Funds</div>
        </div>
      </div>

      {/* Tabs for the 3 Pages */}
      <div className="flex border-b border-gray-200 gap-2 overflow-x-auto pb-1">
        {auditReport2025.pages.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
              activeTab === idx
                ? 'bg-rlhp-darkgreen text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span>Page {p.pageNumber}: {p.title}</span>
          </button>
        ))}
      </div>

      {/* Active Page Showcase: Picture + Key Line Items */}
      {(() => {
        const page = auditReport2025.pages[activeTab];
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* The Audit Report Picture */}
            <div className="lg:col-span-7 space-y-3">
              <div 
                className="relative rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg bg-gray-100 group cursor-pointer"
                onClick={() => setSelectedPage(page)}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}${page.image.replace(/^\//, '')}`} 
                  alt={page.title}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-102"
                />
                
                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/95 text-gray-900 text-xs font-bold px-4 py-2 rounded-xl shadow-lg flex items-center space-x-1.5">
                    <ZoomIn size={16} className="text-rlhp-green" />
                    <span>Click to Zoom & View Full Size</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-lg">
                  Official Scan: {page.title} • Signed & Sealed
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500 pt-1">
                <span>Stamped by Chartered Accountant & Executive Officers</span>
                <button
                  onClick={() => setSelectedPage(page)}
                  className="font-bold text-rlhp-green hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Eye size={13} />
                  <span>Enlarge picture</span>
                </button>
              </div>
            </div>

            {/* Key Verified Line Items for this Page */}
            <div className="lg:col-span-5 space-y-5 bg-gray-50 p-6 rounded-2xl border border-gray-200">
              <div className="border-b border-gray-200 pb-3">
                <span className="text-[10px] font-bold text-rlhp-green uppercase tracking-wider bg-emerald-100 px-2 py-0.5 rounded">
                  Page {page.pageNumber} Breakdown
                </span>
                <h3 className="font-black text-lg text-gray-900 mt-1">{page.title}</h3>
                <p className="text-xs text-gray-500">{page.subtitle}</p>
              </div>

              <div className="space-y-2">
                {page.keyHighlights.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white border border-gray-150 text-xs">
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    <span className="font-mono font-bold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Total Tag */}
              <div className="bg-rlhp-darkgreen text-white p-3.5 rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider">Total Audited Amount</span>
                <span className="text-base font-mono font-black">{page.totalAmount}</span>
              </div>
            </div>

          </div>
        );
      })()}

      {/* 3 Thumbnail Grid with Quick Selection */}
      <div className="pt-4 border-t border-gray-150">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 mb-3">
          All 3 Audit Statement Pages (Click any page to preview):
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {auditReport2025.pages.map((p, idx) => (
            <div
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-3 rounded-2xl border-2 transition-all cursor-pointer flex items-center space-x-3 group ${
                activeTab === idx
                  ? 'border-rlhp-green bg-emerald-50/60 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="w-16 h-20 rounded-lg overflow-hidden border border-gray-200 shrink-0 bg-gray-100">
                <img 
                  src={`${import.meta.env.BASE_URL}${p.image.replace(/^\//, '')}`} 
                  alt={p.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <div className="text-[10px] font-bold text-rlhp-orange">Page {p.pageNumber}</div>
                <div className="text-xs font-extrabold text-gray-900 line-clamp-1 group-hover:text-rlhp-green">
                  {p.title}
                </div>
                <div className="text-[11px] font-mono font-bold text-gray-600">{p.totalAmount}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Size Modal Lightbox */}
      {selectedPage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in"
          onClick={() => setSelectedPage(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-rlhp-darkgreen text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
              <div>
                <h3 className="font-extrabold text-base sm:text-lg">
                  Page {selectedPage.pageNumber}: {selectedPage.title}
                </h3>
                <p className="text-xs text-emerald-200">
                  Rural Literacy and Health Programme (RLHP) • Audit 2024-2025
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={`${import.meta.env.BASE_URL}documents/audit-report-2024-2025.pdf`}
                  download="RLHP_Audit_Report_2024-2025.pdf"
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-xl text-xs font-bold flex items-center gap-1"
                >
                  <Download size={15} />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>
                <button
                  onClick={() => setSelectedPage(null)}
                  className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-xl transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Image Body with smooth scroll */}
            <div className="p-4 overflow-y-auto flex items-center justify-center bg-gray-900/10 flex-1">
              <img 
                src={`${import.meta.env.BASE_URL}${selectedPage.image.replace(/^\//, '')}`} 
                alt={selectedPage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-md border border-gray-200 bg-white"
              />
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500 shrink-0">
              <span>UDIN: 25251076BMIISA9978 • Chartered Accountants Verified</span>
              <button
                onClick={() => setSelectedPage(null)}
                className="text-xs font-bold text-rlhp-green hover:underline cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

