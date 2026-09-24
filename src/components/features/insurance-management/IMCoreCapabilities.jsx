import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import {
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaUserTie,
  FaCalculator,
  FaCloudUploadAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function IMCoreCapabilities() {
  const capabilities = [
    {
      icon: FaShieldAlt,
      title: "Multi-Insurer Claim Vault",
      description: "Manage tie-ups and non-cashless claims across all major general insurance companies with custom claim templates.",
    },
    {
      icon: FaUserTie,
      title: "Surveyor Interaction Hub",
      description: "Log surveyor details, schedule spot & final inspections, record re-inspection approvals, and share repair updates instantly.",
    },
    {
      icon: FaCalculator,
      title: "Automated Depreciation & Salvage",
      description: "Configurable material depreciation (Rubber/Nylon 50%, Fibre Glass 30%, Glass 0%, Metal slabs) and salvage deductions.",
    },
    {
      icon: FaCloudUploadAlt,
      title: "Comprehensive Document Vault",
      description: "Store high-res RC book, DL copy, insurance policy, FIR/Panchnama, claim form, and pre/post accidental photos securely.",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Supplementary Estimates",
      description: "Easily submit supplemental parts & labor estimates when hidden accidental damages are uncovered during disassembly.",
    },
    {
      icon: FaMoneyCheckAlt,
      title: "Cashless Settlement & Aging",
      description: "Track payments disbursed by insurance companies vs customer liability with real-time outstanding aging reports.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Powerful Bodyshop Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            End-to-End <GradientUnderline>Insurance Claim Capabilities</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Everything your collision repair shop or bodyshop needs to deliver fast approvals, error-free claims, and transparent customer billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
