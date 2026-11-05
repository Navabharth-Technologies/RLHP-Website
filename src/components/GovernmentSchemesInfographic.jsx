import React, { useState } from 'react';
import { ArrowRight, Building2, Megaphone, Lightbulb, FileCheck2, Landmark, Gift, CheckCircle } from 'lucide-react';

export default function GovernmentSchemesInfographic() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Government Scheme",
      icon: Building2,
      subtitle: "State & Central Welfare",
      desc: "Government releases welfare schemes for health, pensions, housing, ration cards, and education."
    },
    {
      id: 2,
      title: "RLHP Awareness",
      icon: Megaphone,
      subtitle: "Grassroot Mobilization",
      desc: "RLHP field teams hold rural camps, Sangha meetings, and street plays to educate villagers."
    },
    {
      id: 3,
      title: "Community Understanding",
      icon: Lightbulb,
      subtitle: "Empowered Citizens",
      desc: "Citizens learn eligibility criteria, required documents, and application procedures."
    },
    {
      id: 4,
      title: "Application Support",
      icon: FileCheck2,
      subtitle: "Facilitation & Helpdesk",
      desc: "RLHP volunteers assist illiterate and elderly members with paperwork and digital submissions."
    },
    {
      id: 5,
      title: "Panchayat Verification",
      icon: Landmark,
      subtitle: "Local Govt Processing",
      desc: "Applications are submitted to Gram Panchayats and relevant government departments."
    },
    {
      id: 6,
      title: "Last-Mile Delivery",
      icon: Gift,
      subtitle: "Benefits Received",
      desc: "Direct financial grants, healthcare access, pensions, and housing allocations reach beneficiaries."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-rlhp-lightgreen/70 via-white to-gray-50 p-6 sm:p-8 rounded-2xl border border-rlhp-green/20 shadow-sm font-sans my-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold text-rlhp-orange uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
          Facilitation Model Infographic
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-rlhp-darkgreen mt-2">
          How RLHP Connects Communities to Government Schemes
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          RLHP bridges the last-mile gap in North Karnataka by empowering rural citizens to claim public entitlements directly.
        </p>
      </div>

      {/* Horizontal Flow Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-200 border flex flex-col justify-between ${isActive ? 'bg-white border-rlhp-green shadow-md scale-105 ring-2 ring-rlhp-green/30' : 'bg-white/80 border-gray-200 hover:border-rlhp-green/50 hover:bg-white'}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center ${isActive ? 'bg-rlhp-orange text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {step.id}
                  </span>
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-rlhp-lightgreen text-rlhp-green' : 'bg-gray-50 text-gray-500'}`}>
                    <Icon size={18} />
                  </div>
                </div>
                <h4 className="font-bold text-xs text-gray-800 leading-tight">{step.title}</h4>
                <p className="text-[10px] text-rlhp-orange font-semibold mt-0.5">{step.subtitle}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-gray-100 text-[11px] text-gray-500 line-clamp-3">
                {step.desc}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Step Detailed Banner */}
      <div className="mt-6 bg-white p-4 rounded-xl border border-gray-200 flex items-center space-x-4 shadow-xs">
        <div className="w-10 h-10 rounded-full bg-rlhp-orange text-white font-bold flex items-center justify-center shrink-0">
          {steps[activeStep].id}
        </div>
        <div>
          <h4 className="font-bold text-sm text-rlhp-darkgreen">{steps[activeStep].title} — <span className="text-rlhp-orange font-normal">{steps[activeStep].subtitle}</span></h4>
          <p className="text-xs text-gray-600 mt-0.5">{steps[activeStep].desc}</p>
        </div>
      </div>
    </div>
  );
}
