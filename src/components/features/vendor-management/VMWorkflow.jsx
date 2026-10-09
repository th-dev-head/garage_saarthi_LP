import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import {
  FaUserPlus,
  FaFileInvoice,
  FaBoxes,
  FaMoneyBillWave,
  FaFileSignature,
} from "react-icons/fa";

export default function VMWorkflow() {
  const steps = [
    {
      step: "01",
      icon: FaUserPlus,
      title: "Add Supplier Profile",
      description: "Register supplier contact, GSTIN, payment terms, and bank details in seconds.",
    },
    {
      step: "02",
      icon: FaFileInvoice,
      title: "Inward Purchase Bill",
      description: "Enter invoice details, purchased parts list, prices, and tax breakdown.",
    },
    {
      step: "03",
      icon: FaBoxes,
      title: "Auto-Stock Update",
      description: "GarageSaarthi instantly increases workshop inventory stock counts and recalculates average costs.",
    },
    {
      step: "04",
      icon: FaMoneyBillWave,
      title: "Record Payment",
      description: "Log cash/online payment; outstanding balance updates in real time on the ledger.",
    },
    {
      step: "05",
      icon: FaFileSignature,
      title: "Reconcile Statement",
      description: "Export clean PDF/Excel statements to verify balances with suppliers at month-end.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Simple 5-Step Procurement
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            How Supplier Management <GradientUnderline>Streamlines Your Workshop</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From parts purchase to final payment reconciliation, keep every rupee accounted for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center font-bold text-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xl font-black text-slate-200">{item.step}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
