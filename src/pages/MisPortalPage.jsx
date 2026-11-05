import React, { useState } from 'react';
import { 
  Database, Users, ShieldCheck, Activity, MapPin, 
  Search, Lock, CheckCircle2, ChevronRight, BarChart2, 
  FileSpreadsheet, ArrowUpRight, TrendingUp, Filter 
} from 'lucide-react';

export default function MisPortalPage({ setCurrentPage }) {
  const [activeModule, setActiveModule] = useState('overview');
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const kpis = [
    { label: "Total Beneficiaries Logged", count: "2,048,510", change: "+12.4% YoY", color: "text-emerald-700 bg-emerald-50" },
    { label: "Active Child Rights Clubs", count: "78 Units", change: "10,240 Children", color: "text-blue-700 bg-blue-50" },
    { label: "Women SHG Sanghas", count: "450+ Units", change: "12,000+ Members", color: "text-amber-700 bg-amber-50" },
    { label: "Districts Operational", count: "10 Districts", change: "4 States Coverage", color: "text-purple-700 bg-purple-50" }
  ];

  const fieldModules = [
    { id: "child-care", name: "Child Care & Shelter Module", desc: "Daily attendance, health logs, nutrition indices, and education progress for Asha Kirana & Asha Bhavana.", records: "2,100+ Records", status: "Active" },
    { id: "iep-tracking", name: "IEP Learning Disability Portal", desc: "Diagnostic evaluation scores, individual learning remediation milestones, and school teacher feedback.", records: "1,450+ Profiles", status: "Active" },
    { id: "shg-finance", name: "SHG Micro-Enterprise Tracking", desc: "Internal savings accounts, bank linkage approvals, ₹20,000 seed grant utilization, and repayment schedules.", records: "450+ Groups", status: "Active" },
    { id: "schemes-mela", name: "Application Mela Entitlements", desc: "Grievances logged, pension sanctions, ration card issues, and housing title deeds facilitated.", records: "25,000+ Entries", status: "Active" }
  ];

  return (
    <div className="space-y-12 font-sans pb-16 bg-gray-50/50">
      
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-950 via-[#063020] to-rlhp-darkgreen text-white py-16 sm:py-20 px-4 sm:px-8 text-center border-b border-rlhp-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rlhp-green/30 text-emerald-200 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            <Database size={13} />
            <span>Management Information System</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            RLHP MIS Integrated Portal
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto font-normal">
            Centralized data repository enabling real-time monitoring, downward accountability, field activity audits, and evidence-based reporting.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-2">
              <span className="text-xs font-bold text-gray-500 uppercase">{kpi.label}</span>
              <div className="text-2xl sm:text-3xl font-black text-gray-900">{kpi.count}</div>
              <div className="flex items-center space-x-1.5 text-xs font-bold text-rlhp-green">
                <TrendingUp size={13} />
                <span>{kpi.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modules & Coordinator Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Data Modules */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-gray-150 pb-4">
                <div>
                  <h3 className="font-extrabold text-lg text-gray-900">Active Field Modules</h3>
                  <p className="text-xs text-gray-500">Live operational databases managed by field officers and project coordinators</p>
                </div>
                <span className="text-xs font-bold bg-emerald-100 text-rlhp-darkgreen px-3 py-1 rounded-full">
                  All Systems Operational
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fieldModules.map((mod) => (
                  <div key={mod.id} className="p-5 rounded-2xl bg-gray-50 hover:bg-emerald-50/50 border border-gray-200 hover:border-rlhp-green transition-all space-y-3 group">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-rlhp-green bg-emerald-100 px-2 py-0.5 rounded">
                        {mod.records}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <h4 className="font-black text-sm text-gray-900 group-hover:text-rlhp-darkgreen">
                      {mod.name}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {mod.desc}
                    </p>
                    <div className="pt-2 text-xs font-bold text-rlhp-green flex items-center gap-1 group-hover:text-rlhp-orange">
                      <span>View Indicator Analytics</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Secure Access & Role Management */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-rlhp-green/20 text-rlhp-accentgreen flex items-center justify-center border border-rlhp-green/30">
                <Lock size={22} />
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-white">Authorized Staff Login</h4>
                <p className="text-xs text-gray-300 mt-1">
                  Protected portal for Field Coordinators, Monitoring & Evaluation (M&E) Officers, and Programme Directors.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <input 
                  type="text" 
                  placeholder="Official Username / ID" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-rlhp-green"
                />
                <input 
                  type="password" 
                  placeholder="Security Password" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-rlhp-green"
                />
                <button
                  onClick={() => alert("MIS Demo Access: Real-time telemetry and reporting module verified.")}
                  className="w-full bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer mt-2"
                >
                  Sign In to MIS Console
                </button>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-gray-400 text-center">
                Strict adherence to Child Rights Data Protection Policy
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

