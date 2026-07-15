import React from "react";
import GradientUnderline from "../common/GradientUnderline";

export default function GEWorkflow() {
  const steps = [
    { num: "01", title: "Customer & Vehicle Record", desc: "Instantly fetch customer profile and past car service records." },
    { num: "02", title: "Enquiry or Lead Requirement", desc: "Log vehicle complaints, symptoms, and service requests in CRM." },
    { num: "03", title: "Job Card Creation", desc: "Generate a digital job card and assign mechanics to tasks." },
    { num: "04", title: "Repair & Service Work", desc: "Track work order updates as repairs progress on the workshop floor." },
    { num: "05", title: "Parts & Inventory Integration", desc: "Issue spare parts from stock directly linked to the job card." },
    { num: "06", title: "Billing & GST Invoice", desc: "Generate GST-compliant invoices with parts and labour auto-mapped." },
    { num: "07", title: "Record Payment & Logs", desc: "Track collections, expenses, pending dues, and payroll commission." },
    { num: "08", title: "Follow-Up & Reminders", desc: "Send automated WhatsApp service alerts for customer retention." },
    { num: "09", title: "Centralized Reports", desc: "Monitor daily revenues, active leads, and branch graphs centrally." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem Flow
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage the Complete Workshop{" "}
            <GradientUnderline>Workflow in One System</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi workshop ERP connects your team's daily steps. Every action feeds records automatically, eliminating dual data entries.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="relative bg-white border border-slate-200/80 p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-primary bg-[#EFE9E7] px-3 py-1 rounded-full">
                  Step {s.num}
                </span>
                <span className="text-2xl font-black text-slate-100">
                  {s.num}
                </span>
              </div>
              <h3 className="text-sm font-bold text-text-dark mb-2">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
