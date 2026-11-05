import React, { useState } from 'react';
import { orgDetails } from '../data/rlhpData';
import { X, Heart, ShieldCheck, Copy, Check, CreditCard, Building, QrCode } from 'lucide-react';

export default function DonateModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [cause, setCause] = useState('child-shelter');
  const [tab, setTab] = useState('online');
  const [copiedBank, setCopiedBank] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);

  if (!isOpen) return null;

  const presets = ['500', '1000', '2500', '5000'];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDonationSuccess(true);
    setTimeout(() => {
      setDonationSuccess(false);
      onClose();
    }, 3500);
  };

  const finalAmount = amount === 'custom' ? customAmount : amount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-rlhp-darkgreen text-white p-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Heart size={20} className="fill-current text-rlhp-orange" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Support RLHP Programmes</h3>
              <p className="text-xs text-rlhp-lightgreen">Tax Exemption under 80G available for Indian donors</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {donationSuccess ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-rlhp-green rounded-full flex items-center justify-center mx-auto animate-bounce">
                <ShieldCheck size={36} />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">Thank You for Your Generosity!</h4>
              <p className="text-gray-600 max-w-md mx-auto text-sm">
                Your donation of <span className="font-bold text-rlhp-green">₹{finalAmount || '1000'}</span> will directly support children at AshaKirana & AshaBhavana shelter homes.
              </p>
              <p className="text-xs text-gray-400">An official 80G tax receipt will be sent to your email.</p>
            </div>
          ) : (
            <>
              {/* Payment Tab Buttons */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setTab('online')}
                  className={`flex-1 py-2.5 font-semibold text-xs text-center border-b-2 transition-colors ${tab === 'online' ? 'border-rlhp-green text-rlhp-green' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Online Payment (UPI/Card)
                </button>
                <button
                  onClick={() => setTab('bank')}
                  className={`flex-1 py-2.5 font-semibold text-xs text-center border-b-2 transition-colors ${tab === 'bank' ? 'border-rlhp-green text-rlhp-green' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                  Direct Bank Transfer / FCRA
                </button>
              </div>

              {tab === 'online' ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Select Amount */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">Select Donation Amount (INR)</label>
                    <div className="grid grid-cols-4 gap-2">
                      {presets.map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => { setAmount(val); setCustomAmount(''); }}
                          className={`py-2 rounded-lg font-bold text-xs border transition-all ${amount === val ? 'bg-rlhp-green text-white border-rlhp-green shadow-sm' : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-rlhp-green'}`}
                        >
                          ₹{val}
                        </button>
                      ))}
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="number"
                        placeholder="Or enter custom amount in ₹"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setAmount('custom'); }}
                        className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-rlhp-green focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Select Cause */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Direct My Contribution To</label>
                    <select
                      value={cause}
                      onChange={(e) => setCause(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-rlhp-green focus:outline-none bg-white"
                    >
                      <option value="child-shelter">AshaKirana & AshaBhavana Shelter Homes</option>
                      <option value="education-iep">Individualized Education Plans (IEP) for Special Needs</option>
                      <option value="women-sangha">Women Self Help Group Federations</option>
                      <option value="health-nutrition">Maternal & Child Health Camps</option>
                      <option value="general">General Fund (Where needed most)</option>
                    </select>
                  </div>

                  {/* Donor Info */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">Full Name</label>
                      <input type="text" required placeholder="John Doe" className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-rlhp-green" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-gray-600 mb-1">Email Address (for 80G)</label>
                      <input type="email" required placeholder="john@example.com" className="w-full px-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-rlhp-green" />
                    </div>
                  </div>

                  <div className="bg-rlhp-lightgreen p-3 rounded-lg flex items-center justify-between text-xs text-rlhp-darkgreen font-medium">
                    <span className="flex items-center space-x-1.5">
                      <ShieldCheck size={16} className="text-rlhp-green" />
                      <span>80G Tax Benefit Certificate will be issued.</span>
                    </span>
                    <span className="font-bold text-rlhp-orange">100% Secure</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-rlhp-orange hover:bg-rlhp-darkorange text-white font-bold py-3 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center space-x-2"
                  >
                    <Heart size={16} className="fill-current" />
                    <span>Proceed to Donate ₹{finalAmount || '1000'}</span>
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
                    <h5 className="font-bold text-xs text-rlhp-darkgreen flex items-center justify-between">
                      <span>Domestic Bank Account (India)</span>
                      <span className="text-[10px] bg-green-100 text-rlhp-green px-2 py-0.5 rounded font-semibold">80G Eligible</span>
                    </h5>
                    <div className="text-xs space-y-1 text-gray-700">
                      <div><strong className="text-gray-900">Account Name:</strong> {orgDetails.bankDetails.localAccount.accountName}</div>
                      <div><strong className="text-gray-900">Bank:</strong> {orgDetails.bankDetails.localAccount.bankName}</div>
                      <div><strong className="text-gray-900">Account No:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200">{orgDetails.bankDetails.localAccount.accountNo}</code></div>
                      <div><strong className="text-gray-900">IFSC Code:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200">{orgDetails.bankDetails.localAccount.ifsc}</code></div>
                      <div><strong className="text-gray-900">Branch:</strong> {orgDetails.bankDetails.localAccount.branch}</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-3">
                    <h5 className="font-bold text-xs text-blue-900 flex items-center justify-between">
                      <span>FCRA Account (Foreign Contributions)</span>
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-semibold">FCRA Validated</span>
                    </h5>
                    <div className="text-xs space-y-1 text-gray-700">
                      <div><strong className="text-gray-900">Account Name:</strong> {orgDetails.bankDetails.fcraAccount.accountName}</div>
                      <div><strong className="text-gray-900">Bank:</strong> {orgDetails.bankDetails.fcraAccount.bankName} (FCRA Cell)</div>
                      <div><strong className="text-gray-900">Account No:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200">{orgDetails.bankDetails.fcraAccount.accountNo}</code></div>
                      <div><strong className="text-gray-900">IFSC Code:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200">{orgDetails.bankDetails.fcraAccount.ifsc}</code></div>
                      <div><strong className="text-gray-900">SWIFT Code:</strong> <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200">{orgDetails.bankDetails.fcraAccount.swiftCode}</code></div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(`${orgDetails.bankDetails.localAccount.accountName}\nAcc: ${orgDetails.bankDetails.localAccount.accountNo}\nIFSC: ${orgDetails.bankDetails.localAccount.ifsc}`)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg text-xs flex items-center justify-center space-x-2 transition-colors border border-gray-300"
                  >
                    {copiedBank ? <Check size={14} className="text-rlhp-green" /> : <Copy size={14} />}
                    <span>{copiedBank ? 'Bank Details Copied!' : 'Copy Domestic Bank Details'}</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
