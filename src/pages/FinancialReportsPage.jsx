import React, { useState } from 'react';
import { orgDetails, publicationsData } from '../data/rlhpData';
import { FileText, Download, ShieldCheck, CheckCircle2, Building, Award, Loader2 } from 'lucide-react';
import { downloadFileInBrowser, downloadPDFDocument } from '../utils/fileDownloader';
import ResourcesMediaHub from '../components/ResourcesMediaHub';
import GlobalSearchBar from '../components/GlobalSearchBar';

import AuditReportViewer from '../components/AuditReportViewer';

export default function FinancialReportsPage({ setCurrentPage, onNavClick, onSelectNews }) {
  const [downloadingId, setDownloadingId] = useState(null);
  const [downloadMsg, setDownloadMsg] = useState('');

  const auditReports = publicationsData.filter(p => p.type === 'Annual Report');

  const handleDownload = async (report) => {
    const title = typeof report === 'string' ? report : report.title;
    const year = typeof report === 'object' ? report.year : 'Annual Audit';
    
    setDownloadingId(report.id || 'report');
    setDownloadMsg(`Generating official audit PDF document: ${title}...`);
    
    await downloadPDFDocument({
      title: title,
      category: 'Financial Audit Report',
      date: year,
      location: 'Mysuru, Karnataka, India',
      content: `Official Audited Financial Statement & Activity Report of Rural Literacy & Health Programme (RLHP) for the financial year ${year}.\n\nRegistration: Society Reg #36/83-84 | FCRA Reg #094420366 | 80G Tax Exemption Certificate Approved.\n\nAuditor Verification:\nThis report reflects audited income, expenditure, project allocations, and statutory compliance as reviewed by chartered accountants and submitted to statutory regulatory bodies in India.`,
      image: '/images/gallery/ashakirana_activities.jpg'
    });

    setDownloadingId(null);
    setDownloadMsg(`Downloaded "${title}.pdf" successfully!`);
    setTimeout(() => setDownloadMsg(''), 4000);
  };

  return (
    <div className="space-y-12 font-sans pb-12">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Financial Reports & Transparency</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            3 Years Audit Reports, FCRA Compliance & Statutory Certifications
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Static Resources & Media Hub */}
        <ResourcesMediaHub activePage="financials" onNavClick={onNavClick} setCurrentPage={setCurrentPage} />

        {/* Global Search */}
        <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
          <GlobalSearchBar
            onNavClick={onNavClick}
            setCurrentPage={setCurrentPage}
            onSelectNews={onSelectNews}
            className="w-full sm:w-96"
          />
        </div>

        {downloadMsg && (
          <div className="p-3.5 bg-green-100 border border-green-300 text-green-800 rounded-xl text-xs flex items-center space-x-2 animate-in fade-in">
            <CheckCircle2 size={16} />
            <span>{downloadMsg}</span>
          </div>
        )}

        {/* 2024-2025 Audited Statements Showcase with 3 Picture Scans */}
        <section id="audit-2025">
          <AuditReportViewer />
        </section>

        {/* 3 Years Audit Reports Grid matching section 24 */}
        <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center font-bold">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rlhp-darkgreen">3 Years Organization Audit Reports</h2>
              <p className="text-xs text-gray-500">Audited financial statements for institutional transparency</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {auditReports.map((report) => (
              <div key={report.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4 hover:border-rlhp-green transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rlhp-green bg-green-100 px-2.5 py-0.5 rounded-full">
                    Financial Audit
                  </span>
                  <span className="text-xs font-bold text-rlhp-orange">{report.year}</span>
                </div>
                <h3 className="font-bold text-sm text-gray-900">{report.title}</h3>
                <p className="text-xs text-gray-500">{report.format} • {report.size}</p>
                <button
                  onClick={() => handleDownload(report)}
                  disabled={downloadingId === report.id}
                  className="w-full bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75"
                >
                  {downloadingId === report.id ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      <span>Generating PDF...</span>
                    </>
                  ) : (
                    <>
                      <Download size={14} />
                      <span>Download Document</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Statutory Information Table */}
        <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-rlhp-orange flex items-center justify-center font-bold">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rlhp-darkgreen">Statutory & Registration Credentials</h2>
              <p className="text-xs text-gray-500">Verified NGO compliance numbers</p>
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-100 text-gray-700 font-bold">
                <tr>
                  <th className="p-3.5 border-b">Statutory Certification</th>
                  <th className="p-3.5 border-b">Registration Number / Status</th>
                  <th className="p-3.5 border-b">Tax Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr>
                  <td className="p-3.5 font-semibold">Societies Registration Act</td>
                  <td className="p-3.5"><code className="bg-gray-100 px-2 py-0.5 rounded">{orgDetails.statutory.registrationNo}</code></td>
                  <td className="p-3.5 text-gray-500">Legal NGO Entity</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">FCRA Validity</td>
                  <td className="p-3.5"><code className="bg-gray-100 px-2 py-0.5 rounded">{orgDetails.statutory.fcraNo}</code></td>
                  <td className="p-3.5 text-blue-700 font-semibold">Foreign Contributions Approved</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">Section 80G Certificate</td>
                  <td className="p-3.5"><code className="bg-gray-100 px-2 py-0.5 rounded">{orgDetails.statutory.taxExemption80G}</code></td>
                  <td className="p-3.5 text-rlhp-green font-semibold">50% Income Tax Exemption</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">Section 12A / 10(23C)</td>
                  <td className="p-3.5"><code className="bg-gray-100 px-2 py-0.5 rounded">{orgDetails.statutory.sec12A}</code></td>
                  <td className="p-3.5 text-gray-500">Income Tax Exemption</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">NITI Aayog NGO Darpan</td>
                  <td className="p-3.5"><code className="bg-gray-100 px-2 py-0.5 rounded">{orgDetails.statutory.ngoDarpan}</code></td>
                  <td className="p-3.5 text-gray-500">Government Portal Registered</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold">MCA CSR-1 Registration</td>
                  <td className="p-3.5"><code className="bg-gray-100 px-2 py-0.5 rounded">{orgDetails.statutory.csr1}</code></td>
                  <td className="p-3.5 text-gray-500">Corporate Social Responsibility Eligible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
