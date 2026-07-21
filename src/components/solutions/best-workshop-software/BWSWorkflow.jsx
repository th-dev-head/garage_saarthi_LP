import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaArrowRight, FaUserPlus, FaClipboardCheck, FaBoxes, FaFileInvoiceDollar, FaWallet, FaHistory, FaBell } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const steps = [
  { icon: <FaUserPlus />, title: "1. Customer & Vehicle Entry", desc: "Vehicle enters the bay. Register or pull up customer profile and vehicle details instantly." },
  { icon: <FaClipboardCheck />, title: "2. Digital Job Card Creation", desc: "Record customer complaints, labor estimates, and assign jobs to available mechanics." },
  { icon: <FaBoxes />, title: "3. Spare Parts Checkout", desc: "Allocate spare parts from stock directly to active job sheets, updating inventory automatically." },
  { icon: <FaFileInvoiceDollar />, title: "4. GST Billing & Invoice", desc: "Generate GST-compliant bills and share digital receipts straight to the customer's WhatsApp." },
  { icon: <FaWallet />, title: "5. Record Payment Collection", desc: "Log cash, online UPI, or credit terms payments to update daily cash ledgers." },
  { icon: <FaHistory />, title: "6. Log Vehicle Service History", desc: "Store complete repair records and substituted parts in the vehicle's permanent history file." },
  { icon: <FaBell />, title: "7. Automated Service Follow-Up", desc: "Schedule upcoming service due dates and trigger automated WhatsApp follow-up alerts." },
];

export default function BWSWorkflow() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Connected Workflow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage a Workshop from Job Entry <GradientUnderline>to Customer Follow-Up</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            See how GarageSaarthi connects every stage of your workshop operations into one smooth digital journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                {step.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-normal">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
          >
            See GarageSaarthi in Action
          </Button>
        </div>
      </div>
    </section>
  );
}
