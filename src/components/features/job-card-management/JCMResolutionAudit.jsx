import React from "react";
import { FaCheckCircle, FaTools, FaTrashAlt, FaUserShield } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const auditRecords = [
  {
    user: "aviiii",
    role: "Manager",
    roleBg: "bg-amber-100 text-amber-800 border-amber-200",
    time: "02 Sept 2026, 03:47 pm",
    action: "Job Card Updated",
    desc: "Details updated",
  },
  {
    user: "Ramesh Patel",
    role: "Mechanic",
    roleBg: "bg-orange-100 text-orange-800 border-orange-200",
    time: "02 Sept 2026, 02:46 pm",
    action: "Services & Parts Updated",
    desc: "Added 4 items, applied discount",
  },
  {
    user: "Jainam (Owner)",
    role: "Admin",
    roleBg: "bg-amber-100 text-amber-800 border-amber-200",
    time: "02 Sept 2026, 03:46 pm",
    action: "Job Card Created",
    desc: "Created original job card",
  },
];

const complaintSolutions = [
  {
    num: "#1",
    complaint: "INDICATORS NOT WORKING",
    solution: "Replaced faulty flasher relay & cleaned socket connector",
  },
  {
    num: "#2",
    complaint: "BRAKE SQUEAKING NOISE",
    solution: "Cleaned brake caliper pins & fitted genuine ceramic brake pads",
  },
];

const mockupSections = [
  {
    type: "complaint",
    icon: "🛠️",
    iconBg: "bg-primary/10 text-primary",
    title: "Complaint & Resolution Tracker",
    subtitle: "Map Customer Issue to Mechanical Fix",
    badge: "Work Verified",
    badgeStyle: "text-emerald-700 bg-emerald-50 border-emerald-200",
    footerText: "Automatically printed on invoice & customer job sheet",
    footerTag: "Transparent Service",
    footerTagColor: "text-primary",
    items: complaintSolutions,
  },
  {
    type: "audit",
    icon: "📄",
    iconBg: "bg-red-50 text-red-600",
    title: "Edit History & Audit Log",
    subtitle: "Track Who Modified What & When",
    badge: "3 Records",
    badgeStyle: "text-slate-600 bg-slate-100 border-slate-200",
    footerText: "Admin, Manager, and Mechanic edits logged",
    footerTag: "100% Tamper Proof",
    footerTagColor: "text-emerald-600",
    records: auditRecords,
  },
];

const featureHighlights = [
  {
    icon: FaUserShield,
    title: "100% Staff Accountability",
    desc: "Every edit, discount, or added part is logged with user role and exact timestamp, preventing internal disputes.",
  },
  {
    icon: FaTools,
    title: "Complaint-to-Solution Mapping",
    desc: "Pair customer-reported problems with precise mechanical fixes so invoices clearly show what was resolved.",
  },
  {
    icon: FaCheckCircle,
    title: "Zero-Dispute Invoicing",
    desc: "Clear proof of technician actions and customer approval before work is performed builds long-term customer trust.",
  },
];

export default function JCMResolutionAudit() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Audit Trail & Problem Resolution
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Full Accountability with <GradientUnderline>Edit History</GradientUnderline> & Action Tracking
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Eliminate internal confusion and customer disputes. GarageSaarthi maintains an unalterable audit log of every job card update and systematically maps each customer complaint to its verified repair solution.
          </p>
        </div>

        {/* 2-Column Mockups Grid (Looped) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {mockupSections.map((section, secIdx) => (
            <div
              key={secIdx}
              className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-xs space-y-5"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${section.iconBg}`}
                  >
                    {section.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{section.title}</h3>
                    <p className="text-[10px] text-slate-400">{section.subtitle}</p>
                  </div>
                </div>
                <span
                  className={`text-[10px] font-semibold border px-2.5 py-0.5 rounded-full ${section.badgeStyle}`}
                >
                  {section.badge}
                </span>
              </div>

              {/* Card Body - Complaint Tracker */}
              {section.type === "complaint" && (
                <div className="space-y-4 text-xs font-sans">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200/80 space-y-2.5 shadow-2xs"
                    >
                      <div className="flex justify-between items-center text-slate-400 text-[11px] font-semibold">
                        <span>{item.num}</span>
                        <FaTrashAlt className="text-slate-300 hover:text-red-500 cursor-pointer transition-colors" />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10.5px] font-bold text-slate-600 flex items-center gap-1">
                          1. Customer Complaint <span className="text-red-500">*</span>
                        </label>
                        <div className="p-2 bg-slate-50/80 rounded-lg border border-slate-200 font-medium text-slate-900 text-xs">
                          {item.complaint}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10.5px] font-bold text-slate-600">
                          2. Solution / Action
                        </label>
                        <div className="p-2 bg-emerald-50/50 rounded-lg border border-emerald-200 text-emerald-900 font-medium text-xs flex items-center justify-between">
                          <span>{item.solution}</span>
                          <FaCheckCircle className="text-emerald-500 shrink-0 ml-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Card Body - Edit History & Audit Log */}
              {section.type === "audit" && (
                <div className="space-y-3 relative pl-2 text-xs font-sans">
                  <div className="absolute left-4.5 top-3 bottom-4 w-0.5 bg-red-200" />

                  {section.records.map((rec, idx) => (
                    <div key={idx} className="relative flex items-start gap-3.5">
                      <div className="w-5 h-5 rounded-full bg-white border-2 border-red-500 flex items-center justify-center shrink-0 z-10 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      </div>

                      <div className="flex-1 bg-white border border-slate-200/80 rounded-2xl p-3 space-y-1 shadow-2xs hover:border-slate-300 transition-colors">
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-500 text-[11px]">👤</span>
                            <span className="font-bold text-slate-900 text-xs">{rec.user}</span>
                            <span
                              className={`text-[9px] font-bold px-2 py-0.2 rounded-md border ${rec.roleBg}`}
                            >
                              {rec.role}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">{rec.time}</span>
                        </div>

                        <div className="pt-1">
                          <h4 className="text-xs font-bold text-slate-800">{rec.action}</h4>
                          <p className="text-[11px] text-slate-500">{rec.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Card Footer */}
              <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-200/70">
                <span>{section.footerText}</span>
                <span className={`font-bold ${section.footerTagColor}`}>
                  {section.footerTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Highlights Cards (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {featureHighlights.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
