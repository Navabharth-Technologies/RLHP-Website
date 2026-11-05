import React, { useState } from 'react';
import { orgDetails, bankDetails, fundingPartners } from '../data/rlhpData';
import { 
  Heart, Landmark, ShieldCheck, Users, Megaphone, 
  Building2, CheckCircle2, Gift, Copy, Check, ArrowRight,
  HandHeart, Sparkles, Mail, Phone, Award
} from 'lucide-react';

export default function HowYouCanBeAPartOfUsPage({ setCurrentPage }) {
  const [copiedFcraAcc, setCopiedFcraAcc] = useState(false);
  const [copiedLocalAcc, setCopiedLocalAcc] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'fcra') {
      setCopiedFcraAcc(true);
      setTimeout(() => setCopiedFcraAcc(false), 3000);
    } else {
      setCopiedLocalAcc(true);
      setTimeout(() => setCopiedLocalAcc(false), 3000);
    }
  };

  return (
    <div className="space-y-12 font-sans pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rlhp-darkgreen via-emerald-900 to-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rlhp-orange text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md uppercase tracking-wider">
            <Heart size={14} className="fill-white" />
            <span>Join Our Mission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">How You Can Be a Part of Us</h1>
          <p className="text-xs sm:text-base text-rlhp-lightgreen max-w-2xl mx-auto font-medium leading-relaxed">
            Partner with Rural Literacy & Health Programme (RLHP) to empower marginalized children, women sanghas, and rural communities across Karnataka.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Bank Account Details Grid matching official rlhpmysore.com tables */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-rlhp-darkgreen">Official Bank Accounts for Contributions</h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Tax-exempt donations under Section 80G. FCRA approved for international contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* FCRA Account Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-emerald-500/30 shadow-lg relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      <Landmark size={20} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-rlhp-darkgreen">FCRA Account Details</h3>
                      <p className="text-xs text-emerald-700 font-semibold">For International Donors & Contributions</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    FCRA Approved
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Name of the Account</span>
                    <span className="font-bold text-gray-900">{bankDetails.fcraAccount.accountName}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Bank Account No</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-extrabold text-base text-rlhp-darkgreen bg-gray-100 px-2.5 py-0.5 rounded">{bankDetails.fcraAccount.accountNo}</span>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.fcraAccount.accountNo, 'fcra')}
                        className="text-gray-400 hover:text-rlhp-green p-1 rounded cursor-pointer"
                        title="Copy Account Number"
                      >
                        {copiedFcraAcc ? <Check size={14} className="text-rlhp-green" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">IFSC Code</span>
                    <span className="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">{bankDetails.fcraAccount.ifsc}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Swift Code</span>
                    <span className="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">{bankDetails.fcraAccount.swiftCode}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-500 font-medium block mb-1">Name of Bank & Address</span>
                    <p className="font-semibold text-gray-800 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                      {bankDetails.fcraAccount.bankName}<br />
                      {bankDetails.fcraAccount.branch}<br />
                      {bankDetails.fcraAccount.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Account Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-rlhp-green/30 shadow-lg relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center font-bold">
                      <Landmark size={20} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg text-rlhp-darkgreen">Local Account Details</h3>
                      <p className="text-xs text-rlhp-green font-semibold">For Domestic Donors (India)</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase bg-rlhp-lightgreen text-rlhp-green px-3 py-1 rounded-full">
                    80G Tax Exempt
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Name of the Account</span>
                    <span className="font-bold text-gray-900">{bankDetails.localAccount.accountName}</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">Bank Account No</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-extrabold text-base text-rlhp-darkgreen bg-gray-100 px-2.5 py-0.5 rounded">{bankDetails.localAccount.accountNo}</span>
                      <button 
                        onClick={() => copyToClipboard(bankDetails.localAccount.accountNo, 'local')}
                        className="text-gray-400 hover:text-rlhp-green p-1 rounded cursor-pointer"
                        title="Copy Account Number"
                      >
                        {copiedLocalAcc ? <Check size={14} className="text-rlhp-green" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium">IFSC Code</span>
                    <span className="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">{bankDetails.localAccount.ifsc}</span>
                  </div>
                  <div className="pt-2">
                    <span className="text-gray-500 font-medium block mb-1">Name of Bank & Address</span>
                    <p className="font-semibold text-gray-800 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                      {bankDetails.localAccount.bankName}<br />
                      {bankDetails.localAccount.branch}<br />
                      {bankDetails.localAccount.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Donate Section */}
        <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-rlhp-orange flex items-center justify-center font-bold">
              <Gift size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rlhp-darkgreen">Other Ways to Donate</h2>
              <p className="text-xs text-gray-500">Flexible options to support RLHP initiatives</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-2">
              <div className="text-rlhp-orange font-extrabold text-sm flex items-center space-x-1.5">
                <CheckCircle2 size={16} />
                <span>Cheque Donation</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cheques should be drawn in favour of <strong>“Rural Literacy and Health Programme”</strong> and dispatched to our Mysore office.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-2">
              <div className="text-rlhp-orange font-extrabold text-sm flex items-center space-x-1.5">
                <CheckCircle2 size={16} />
                <span>Donation in Kind</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Donate educational materials, clothes, dry rations, health kits, or equipment. Please contact RLHP to check current field needs.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-2">
              <div className="text-rlhp-orange font-extrabold text-sm flex items-center space-x-1.5">
                <CheckCircle2 size={16} />
                <span>Support a Project</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Donors can choose any programme listed on the website and contribute specifically to project operational expenses.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-2">
              <div className="text-rlhp-orange font-extrabold text-sm flex items-center space-x-1.5">
                <CheckCircle2 size={16} />
                <span>Sponsor a Meal</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sponsor nutritious hot meals for children residing at AshaKirana & AshaBhavana shelter homes or during community workshops.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer with RLHP */}
        <section className="bg-gradient-to-br from-emerald-900 to-rlhp-darkgreen text-white p-8 sm:p-10 rounded-2xl shadow-xl space-y-6">
          <div className="flex items-center space-x-3 border-b border-emerald-700/50 pb-4">
            <div className="w-10 h-10 rounded-full bg-rlhp-lightgreen text-rlhp-darkgreen flex items-center justify-center font-bold">
              <Users size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Volunteer with RLHP</h2>
              <p className="text-xs text-rlhp-lightgreen">Dedicated volunteer programs for individuals, students & professionals</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Local Volunteer Programme",
              "International Volunteer Programme",
              "Summer Placement for College Students",
              "Internship for College Students",
              "Volunteer activities for Corporate Employees",
              "Interested individuals can contact RLHP via email or phone"
            ].map((v, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center space-x-3 text-xs font-semibold text-white">
                <CheckCircle2 size={18} className="text-rlhp-lightgreen shrink-0" />
                <span>{v}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Campaigns & Advocacy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Campaigns */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Megaphone size={20} />
              </div>
              <h3 className="text-xl font-bold text-rlhp-darkgreen">Campaigns</h3>
            </div>
            <p className="text-xs text-gray-600">
              Any like-minded individual or organization can involve themselves with RLHP for field campaigns:
            </p>
            <ul className="space-y-2 text-xs font-medium text-gray-800">
              <li className="flex items-center space-x-2"><ArrowRight size={14} className="text-rlhp-green" /> <span>Support a Campaign</span></li>
              <li className="flex items-center space-x-2"><ArrowRight size={14} className="text-rlhp-green" /> <span>Participate in a Campaign</span></li>
              <li className="flex items-center space-x-2"><ArrowRight size={14} className="text-rlhp-green" /> <span>Spread awareness about the Campaign</span></li>
            </ul>
          </div>

          {/* Advocate */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold text-rlhp-darkgreen">Advocate for Rights</h3>
            </div>
            <p className="text-xs text-gray-600">
              If you are a cause-sensitive person interested in advocating for social issues addressed by RLHP:
            </p>
            <ul className="space-y-2 text-xs font-medium text-gray-800">
              <li className="flex items-center space-x-2"><ArrowRight size={14} className="text-rlhp-orange" /> <span>Be an Ambassador for a Cause</span></li>
              <li className="flex items-center space-x-2"><ArrowRight size={14} className="text-rlhp-orange" /> <span>Be part of Advocacy and Lobbying Programme</span></li>
            </ul>
          </div>
        </div>

        {/* Corporate Partnership (CSR) */}
        <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Building2 size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-rlhp-darkgreen">Corporate Partnership (CSR)</h2>
              <p className="text-xs text-gray-500">Collaborating with corporate leaders for high-impact social development</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {fundingPartners.map((partner, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col justify-between space-y-3 hover:border-rlhp-green hover:bg-white transition-all shadow-2xs group">
                <div className="h-16 flex items-center justify-center bg-white p-2 rounded-lg border border-gray-100 shadow-2xs w-full">
                  {partner.logoImage ? (
                    <img 
                      src={`${import.meta.env.BASE_URL}${partner.logoImage.replace(/^\//, '')}`} 
                      alt={`${partner.name} Logo`}
                      className="h-12 w-auto max-w-full object-contain filter group-hover:scale-105 transition-all duration-300"
                    />
                  ) : (
                    <span className="text-xs font-extrabold text-rlhp-darkgreen uppercase tracking-wider">{partner.logoText}</span>
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 line-clamp-1">{partner.name}</h4>
                  <p className="text-[11px] text-gray-600 font-medium leading-snug mt-1">
                    Project: <strong>"{partner.project}"</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
