import React, { useState } from 'react';
import { ourReportsList, auditReport2025 } from '../data/rlhpData';
import AuditReportViewer from '../components/AuditReportViewer';
import { 
  Lightbulb, BookOpen, Download, Search, CheckCircle2, 
  FileText, ShieldCheck, ExternalLink, Award, FileCheck, Layers
} from 'lucide-react';

export default function DigitalKnowledgeHubPage({ setCurrentPage, onNavClick }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Knowledge Assets' },
    { id: 'research', label: 'Surveys & Research' },
    { id: 'toolkits', label: 'Educator Toolkits' },
    { id: 'statutory', label: 'Statutory Audits' }
  ];

  const knowledgeAssets = [
    {
      title: "Baseline Socio-Economic Survey of Pourakarmika Communities",
      category: "Surveys & Research",
      year: "2024",
      desc: "In-depth primary survey covering sanitation worker households, child school dropouts, nutritional deficits, and entitlement gaps in Mysuru.",
      file: "/documents/audit-report-2024-2025.pdf",
      size: "2.4 MB PDF"
    },
    {
      title: "Individualized Education Plan (IEP) Diagnostic Manual",
      category: "Educator Toolkits",
      year: "2024",
      desc: "Clinical and pedagogical handbook for detecting sensory, cognitive, and literacy learning difficulties in rural primary classrooms.",
      file: "/documents/audit-report-2024-2025.pdf",
      size: "3.8 MB PDF"
    },
    {
      title: "Parent-Teacher Association (PTA) Governance Framework",
      category: "Educator Toolkits",
      year: "2024",
      desc: "Standard operating guidelines for community-led SDMC monitoring of rural government primary and higher primary schools.",
      file: "/documents/audit-report-2024-2025.pdf",
      size: "1.9 MB PDF"
    },
    {
      title: "Audited Financial Statements (Foreign Contribution) 2024–2025",
      category: "Statutory Audits",
      year: "2025",
      desc: "Audited Receipts & Payments, Income & Expenditure, and Balance Sheet verified by Phillipos George & Co., Chartered Accountants.",
      file: "/documents/audit-report-2024-2025.pdf",
      size: "Signed 3-Page Audit PDF"
    }
  ];

  const filteredAssets = activeCategory === 'all' 
    ? knowledgeAssets 
    : knowledgeAssets.filter(a => {
        if (activeCategory === 'research') return a.category.includes('Research');
        if (activeCategory === 'toolkits') return a.category.includes('Toolkits');
        if (activeCategory === 'statutory') return a.category.includes('Audits');
        return true;
      });

  return (
    <div className="space-y-12 font-sans pb-16 bg-gray-50/50">
      
      {/* Top Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-[#063222] to-rlhp-darkgreen text-white py-16 sm:py-20 px-4 sm:px-8 text-center border-b border-rlhp-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rlhp-green/30 text-emerald-200 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            <Lightbulb size={13} className="text-amber-400" />
            <span>Open Access Development Knowledge</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Digital Knowledge Hub
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto font-normal">
            Equipping development professionals, educators, and social researchers with open-access diagnostic toolkits, baseline research, and transparency audits.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Filter Pills */}
        <div className="flex justify-center">
          <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex flex-wrap gap-2 justify-center">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeCategory === c.id 
                    ? 'bg-rlhp-green text-white shadow-md' 
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-150'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Knowledge Asset Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAssets.map((asset, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200 shadow-2xs hover:shadow-lg hover:border-rlhp-green transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-rlhp-green bg-emerald-100 px-3 py-0.5 rounded-full uppercase tracking-wider">
                    {asset.category}
                  </span>
                  <span className="text-xs font-extrabold text-gray-400">{asset.year}</span>
                </div>
                <h3 className="font-black text-base text-gray-900 group-hover:text-rlhp-darkgreen leading-snug">
                  {asset.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {asset.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-150 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-medium">{asset.size}</span>
                <a
                  href={`${import.meta.env.BASE_URL}documents/audit-report-2024-2025.pdf`}
                  download
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-rlhp-green hover:text-rlhp-darkgreen group-hover:underline cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download Resource</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Audit Report Section */}
        <section className="space-y-4 pt-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <div>
              <h3 className="text-xl font-black text-gray-900 flex items-center gap-2">
                <FileCheck size={20} className="text-rlhp-green" />
                <span>Statutory Financial Transparency & Audit Report</span>
              </h3>
              <p className="text-xs text-gray-500">Foreign contribution accounts for the financial year ended 31st March 2025</p>
            </div>
          </div>
          <AuditReportViewer />
        </section>

      </div>

    </div>
  );
}

