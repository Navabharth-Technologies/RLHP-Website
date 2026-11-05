import React, { useState, useEffect } from 'react';
import { structuredPublications, ourReportsList, auditReport2025 } from '../data/rlhpData';
import AuditReportViewer from '../components/AuditReportViewer';
import { 
  BookOpen, Newspaper, Image, FileText, Download, 
  Search, ShieldCheck, CheckCircle2, ChevronRight, FileCheck, Eye 
} from 'lucide-react';

export default function PublicationsPage({ initialTab = 'all', onSelectMedia, setCurrentPage, onNavClick }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const tabs = [
    { id: 'all', label: 'All Resources', icon: FileText },
    { id: 'magazines', label: 'Magazines', icon: BookOpen },
    { id: 'bulletins', label: 'Bulletins', icon: Newspaper },
    { id: 'photobooks', label: 'Photobooks', icon: Image },
    { id: 'iec-resources', label: 'IEC Resources', icon: FileText },
    { id: 'audit-reports', label: 'Audit Reports (2024-25)', icon: FileCheck }
  ];

  const getFilteredItems = () => {
    let items = [];
    if (activeTab === 'all') {
      items = [
        ...structuredPublications.magazines,
        ...structuredPublications.bulletins,
        ...structuredPublications.photobooks,
        ...structuredPublications.iecResources
      ];
    } else if (activeTab === 'magazines') {
      items = structuredPublications.magazines;
    } else if (activeTab === 'bulletins') {
      items = structuredPublications.bulletins;
    } else if (activeTab === 'photobooks') {
      items = structuredPublications.photobooks;
    } else if (activeTab === 'iec-resources') {
      items = structuredPublications.iecResources;
    }

    if (searchQuery.trim()) {
      items = items.filter(i => 
        i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return items;
  };

  const currentItems = getFilteredItems();

  return (
    <div className="space-y-12 font-sans pb-16 bg-gray-50/50">
      
      {/* Top Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-[#063523] to-rlhp-darkgreen text-white py-16 sm:py-20 px-4 sm:px-8 text-center border-b border-rlhp-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block bg-rlhp-green/30 text-emerald-200 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            Knowledge Repository & Publications
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Publications, Reports & Media
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto font-normal">
            Browse official magazines, bulletins, photobooks, educational IEC toolkits, and audited financial statements.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation & Filter Bar */}
        <div className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                    isActive
                      ? tab.id === 'audit-reports'
                        ? 'bg-emerald-800 text-white shadow-md'
                        : 'bg-rlhp-green text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-150'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-rlhp-green focus:bg-white"
            />
            <Search size={14} className="absolute right-3.5 top-3 text-gray-400" />
          </div>

        </div>

        {/* If Audit Reports Tab is clicked or if all, show Audit Report Showcase */}
        {(activeTab === 'audit-reports' || activeTab === 'all') && (
          <section id="audit-reports-section" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-lg text-gray-900 flex items-center gap-2">
                <FileCheck size={20} className="text-rlhp-green" />
                <span>Statutory Audited Financial Statements (2024–2025)</span>
              </h3>
              <span className="text-xs text-rlhp-orange font-bold">Signed by Chartered Accountant</span>
            </div>
            <AuditReportViewer />
          </section>
        )}

        {/* Publications Cards Grid (for Magazines, Bulletins, Photobooks, IEC) */}
        {activeTab !== 'audit-reports' && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="font-bold text-lg text-gray-900 capitalize">
                {activeTab === 'all' ? 'All Publications & Resources' : activeTab}
              </h3>
              <span className="text-xs text-gray-500 font-semibold">{currentItems.length} documents found</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-rlhp-green hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 overflow-hidden bg-slate-900 relative">
                      <img 
                        src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, '')}`} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-rlhp-darkgreen/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {item.category}
                      </div>
                      <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {item.period}
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <h4 className="font-extrabold text-sm text-gray-900 group-hover:text-rlhp-green transition-colors leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-gray-500">{item.pages}</span>
                    <a
                      href={`${import.meta.env.BASE_URL}documents/audit-report-2024-2025.pdf`}
                      download
                      className="text-xs font-bold text-rlhp-green hover:text-rlhp-darkgreen flex items-center space-x-1 cursor-pointer"
                    >
                      <Download size={13} />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

    </div>
  );
}
