import React, { useState } from 'react';
import { tendersData, orgDetails } from '../data/rlhpData';
import { 
  Briefcase, FileText, Download, CheckCircle2, Clock, 
  ShieldCheck, AlertCircle, Mail, Phone, ExternalLink 
} from 'lucide-react';

export default function TendersPage() {
  const [vendorFormSubmitted, setVendorFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    gstin: '',
    serviceCategory: 'Nutritional Food Supplies'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setVendorFormSubmitted(true);
    setTimeout(() => setVendorFormSubmitted(false), 5000);
  };

  return (
    <div className="space-y-12 font-sans pb-16 bg-gray-50/50">
      
      {/* Top Banner */}
      <section className="bg-gradient-to-br from-slate-950 via-[#063321] to-rlhp-darkgreen text-white py-16 sm:py-20 px-4 sm:px-8 text-center border-b border-rlhp-green/20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-rlhp-green/30 text-emerald-200 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            <Briefcase size={13} className="text-rlhp-orange" />
            <span>Procurement & Vendor Opportunities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Tenders, RFPs & Procurement
          </h1>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto font-normal">
            Committed to fair, competitive, transparent, and ethical procurement adhering to donor compliance and NGO governance guidelines.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Active Tenders List */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">Active Tenders & Invitations for Quotation</h2>
              <p className="text-xs text-gray-500">Notice for suppliers, publishers, and service contractors</p>
            </div>
            <span className="text-xs font-bold text-rlhp-darkgreen bg-emerald-100 px-3 py-1 rounded-full w-fit">
              {tendersData.activeTenders.length} Open Notices
            </span>
          </div>

          <div className="space-y-4">
            {tendersData.activeTenders.map((tender) => (
              <div 
                key={tender.id}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200 hover:border-rlhp-green hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-150 pb-3">
                  <div className="flex items-center space-x-3">
                    <span className="bg-rlhp-green text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                      {tender.status}
                    </span>
                    <span className="font-mono text-xs font-bold text-gray-500">{tender.reference}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-gray-600">
                    <Clock size={13} className="text-rlhp-orange" />
                    <span>Closing Date: {tender.closingDate}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-black text-base sm:text-lg text-gray-900 leading-snug">
                    {tender.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                    {tender.desc}
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-2 font-bold text-gray-700">
                    <span>Estimated Tender Value:</span>
                    <span className="font-mono text-rlhp-darkgreen font-black">{tender.estimatedValue}</span>
                  </div>
                  <a
                    href="mailto:rlhpintervita@gmail.com?subject=Tender%20Application%20Submission"
                    className="inline-flex items-center justify-center space-x-1.5 bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                  >
                    <Mail size={13} />
                    <span>Submit Bid Proposal</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Procurement Guidelines & Vendor Empanelment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Guidelines */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-2xs space-y-5">
            <div className="flex items-center space-x-3 border-b border-gray-150 pb-3">
              <ShieldCheck size={22} className="text-rlhp-green" />
              <h3 className="font-bold text-lg text-gray-900">Procurement & Bidding Guidelines</h3>
            </div>

            <div className="space-y-3">
              {tendersData.guidelines.map((guide, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-gray-700 leading-relaxed">
                  <CheckCircle2 size={16} className="text-rlhp-green shrink-0 mt-0.5" />
                  <span>{guide}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 text-xs text-gray-700 space-y-2">
              <div className="font-bold text-rlhp-darkgreen">Submission Office:</div>
              <p>Rural Literacy and Health Programme (RLHP), No. 343, 2nd Stage, Gayathripuram, Udayagiri Post, Mysuru – 570019.</p>
              <p className="font-semibold text-rlhp-orange">Direct Phone: 0821 2451216 | Email: rlhpintervita@gmail.com</p>
            </div>
          </div>

          {/* Right: Vendor Registration Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-2xs space-y-5">
            <div className="border-b border-gray-150 pb-3">
              <h3 className="font-bold text-lg text-gray-900">Vendor Empanelment Request</h3>
              <p className="text-xs text-gray-500">Register your organization/firm for upcoming procurement rounds</p>
            </div>

            {vendorFormSubmitted ? (
              <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-2xl text-xs flex items-center space-x-3">
                <CheckCircle2 size={20} className="text-emerald-700 shrink-0" />
                <div>
                  <div className="font-bold">Vendor Registration Received!</div>
                  <div className="text-[11px] mt-0.5">Our procurement committee will review your profile and contact you for upcoming RFPs.</div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Company / Firm Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Mysuru Educational Supplies Pvt. Ltd."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-rlhp-green"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Contact Person *</label>
                    <input
                      type="text"
                      required
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="Name & Designation"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-rlhp-green"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">GSTIN / Registration No.</label>
                    <input
                      type="text"
                      value={formData.gstin}
                      onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                      placeholder="29AAAAA0000A1Z5"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-rlhp-green"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tender@company.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-rlhp-green"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Contact Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-rlhp-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Category of Supply / Service</label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-rlhp-green"
                  >
                    <option>Nutritional Food Supplies & Kits</option>
                    <option>Educational Learning Materials & Printing</option>
                    <option>Vocational Lab Equipment & Tools</option>
                    <option>Civil Infrastructure & Repair</option>
                    <option>Statutory Audit & Consultancy</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-bold text-xs py-3 rounded-xl transition-colors cursor-pointer mt-2"
                >
                  Register as Approved Vendor
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}

