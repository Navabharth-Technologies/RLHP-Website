import React, { useState } from 'react';
import { orgDetails } from '../data/rlhpData';
import { Landmark, Copy, Check, ShieldCheck, Heart, Gift, FileText, Building } from 'lucide-react';

export default function BankDetailsPage() {
  const [copiedDomestic, setCopiedDomestic] = useState(false);
  const [copiedFCRA, setCopiedFCRA] = useState(false);

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'dom') {
      setCopiedDomestic(true);
      setTimeout(() => setCopiedDomestic(false), 2500);
    } else {
      setCopiedFCRA(true);
      setTimeout(() => setCopiedFCRA(false), 2500);
    }
  };

  return (
    <div className="space-y-12 font-sans pb-16">
      <section className="bg-rlhp-darkgreen text-white py-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-rlhp-green/30 border border-rlhp-lightgreen/30 px-3 py-1 rounded-full text-rlhp-lightgreen text-xs font-semibold">
            <ShieldCheck size={14} />
            <span>FCRA Approved & 80G Tax Certified NGO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Bank Transfer & Donation Channels</h1>
          <p className="text-xs sm:text-sm text-rlhp-lightgreen max-w-xl mx-auto font-medium">
            Official Indian Bank details for Domestic (INR) & Foreign (FCRA) contributions
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Domestic Bank Account */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-green-100 text-rlhp-green font-bold px-2.5 py-0.5 rounded-full">
                  Indian Donors (INR)
                </span>
                <span className="text-xs text-rlhp-orange font-bold">80G Tax Exemption</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                <Landmark size={20} className="text-rlhp-green" />
                <span>Domestic Bank Account</span>
              </h3>
              <div className="text-xs space-y-2 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div><strong className="text-gray-900">Account Name:</strong> {orgDetails.bankDetails.localAccount.accountName}</div>
                <div><strong className="text-gray-900">Bank Name:</strong> {orgDetails.bankDetails.localAccount.bankName}</div>
                <div><strong className="text-gray-900">Account No:</strong> <code className="bg-white px-2 py-0.5 rounded border border-gray-200 font-bold text-rlhp-green text-sm">{orgDetails.bankDetails.localAccount.accountNo}</code></div>
                <div><strong className="text-gray-900">IFSC Code:</strong> <code className="bg-white px-2 py-0.5 rounded border border-gray-200 font-bold text-gray-800">{orgDetails.bankDetails.localAccount.ifsc}</code></div>
                <div><strong className="text-gray-900">Branch:</strong> {orgDetails.bankDetails.localAccount.branch}</div>
                <div className="pt-1 text-[11px] text-gray-500"><strong className="text-gray-700">Address:</strong> {orgDetails.bankDetails.localAccount.address}</div>
              </div>
            </div>
            <button
              onClick={() => copyText(`${orgDetails.bankDetails.localAccount.accountName}\nBank: ${orgDetails.bankDetails.localAccount.bankName}\nAcc No: ${orgDetails.bankDetails.localAccount.accountNo}\nIFSC: ${orgDetails.bankDetails.localAccount.ifsc}`, 'dom')}
              className="w-full bg-rlhp-green hover:bg-rlhp-darkgreen text-white font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm cursor-pointer mt-2"
            >
              {copiedDomestic ? <Check size={14} className="text-white" /> : <Copy size={14} />}
              <span>{copiedDomestic ? 'Domestic Details Copied!' : 'Copy Account Details'}</span>
            </button>
          </div>

          {/* FCRA Bank Account */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2.5 py-0.5 rounded-full">
                  Foreign Donors (FCRA)
                </span>
                <span className="text-xs text-blue-700 font-bold">FCRA Validated</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                <Landmark size={20} className="text-blue-600" />
                <span>FCRA Foreign Account</span>
              </h3>
              <div className="text-xs space-y-2 text-gray-700 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                <div><strong className="text-gray-900">Account Name:</strong> {orgDetails.bankDetails.fcraAccount.accountName}</div>
                <div><strong className="text-gray-900">Bank Name:</strong> {orgDetails.bankDetails.fcraAccount.bankName} (FCRA Cell)</div>
                <div><strong className="text-gray-900">Account No:</strong> <code className="bg-white px-2 py-0.5 rounded border border-gray-200 font-bold text-blue-700 text-sm">{orgDetails.bankDetails.fcraAccount.accountNo}</code></div>
                <div><strong className="text-gray-900">IFSC Code:</strong> <code className="bg-white px-2 py-0.5 rounded border border-gray-200 font-bold text-gray-800">{orgDetails.bankDetails.fcraAccount.ifsc}</code></div>
                <div><strong className="text-gray-900">SWIFT Code:</strong> <code className="bg-white px-2 py-0.5 rounded border border-gray-200 font-bold text-purple-700">{orgDetails.bankDetails.fcraAccount.swiftCode}</code></div>
                <div className="pt-1 text-[11px] text-gray-500"><strong className="text-gray-700">Address:</strong> {orgDetails.bankDetails.fcraAccount.address}</div>
              </div>
            </div>
            <button
              onClick={() => copyText(`${orgDetails.bankDetails.fcraAccount.accountName}\nBank: ${orgDetails.bankDetails.fcraAccount.bankName}\nAcc No: ${orgDetails.bankDetails.fcraAccount.accountNo}\nIFSC: ${orgDetails.bankDetails.fcraAccount.ifsc}\nSWIFT: ${orgDetails.bankDetails.fcraAccount.swiftCode}`, 'fcra')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm cursor-pointer mt-2"
            >
              {copiedFCRA ? <Check size={14} className="text-white" /> : <Copy size={14} />}
              <span>{copiedFCRA ? 'FCRA Details Copied!' : 'Copy FCRA Details'}</span>
            </button>
          </div>
        </div>

        {/* Other Ways to Donate / Support */}
        <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-rlhp-lightgreen text-rlhp-green flex items-center justify-center shadow-xs">
              <Gift size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-rlhp-darkgreen">Other Ways to Support RLHP</h3>
              <p className="text-xs text-gray-500">Sponsor meals, cheque donations, and project contributions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center space-x-2 text-rlhp-orange font-bold text-xs">
                <Heart size={16} />
                <span>Sponsor a Meal</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sponsor nutritious meals for children residing at AshaKirana Boys Shelter & AshaBhavana Girls Shelter Homes.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center space-x-2 text-rlhp-green font-bold text-xs">
                <FileText size={16} />
                <span>Cheque Donation</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cheques should be drawn in favor of <strong>"Rural Literacy and Health Programme"</strong> and posted to our Mysuru office.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center space-x-2 text-blue-600 font-bold text-xs">
                <Building size={16} />
                <span>CSR & Corporate Sponsorship</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Partner with RLHP for targeted CSR projects in child education, maternal health, or rural sanitation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

