import React from "react";
import { FaHistory, FaCheckCircle, FaRobot, FaUser, FaWhatsapp, FaShieldAlt, FaCalendarAlt } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const reminderLogs = [
  {
    sentAt: "09 Sep 2026, 10:15 am",
    channel: "WhatsApp",
    vehicle: "GJ-01-AB-4492",
    model: "Hyundai Creta (Diesel)",
    customer: "Vikram Malhotra",
    phone: "+91 98250 11223",
    dueDate: "15 Sep 2026 (Service Due)",
    source: "Automatic (Cron Bot)",
    isBot: true,
    status: "Sent",
  },
  {
    sentAt: "08 Sep 2026, 04:30 pm",
    channel: "WhatsApp",
    vehicle: "MH-02-CD-8812",
    model: "Honda City (Petrol)",
    customer: "Pooja Mehta",
    phone: "+91 98765 43210",
    dueDate: "10 Sep 2026 (Periodic)",
    source: "Manual (Ramesh / Admin)",
    isBot: false,
    status: "Sent",
  },
  {
    sentAt: "08 Sep 2026, 11:20 am",
    channel: "WhatsApp",
    vehicle: "DL-03-EF-1904",
    model: "Maruti Swift (VXi)",
    customer: "Amit Verma",
    phone: "+91 98111 22334",
    dueDate: "12 Sep 2026 (PUC Expiry)",
    source: "Automatic (Expiry Bot)",
    isBot: true,
    status: "Sent",
  },
];

const historyBenefits = [
  {
    icon: FaHistory,
    title: "100% Transparent Dispatch History",
    desc: "View full timestamped audit logs of every reminder dispatched, so you know exactly when a customer was contacted.",
  },
  {
    icon: FaRobot,
    title: "Automatic vs Manual Trigger Tracking",
    desc: "Clearly see whether reminders were auto-dispatched by the background AI cron bot or sent manually by your service advisor.",
  },
  {
    icon: FaShieldAlt,
    title: "Zero Duplicate Messaging",
    desc: "Prevent multiple staff members from spamming the same customer with duplicate service or insurance renewal messages.",
  },
];

export default function SRReminderHistory() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Audit Trail & Dispatch Log
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Complete Sent Reminder <GradientUnderline>History & Message Logs</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Maintain complete records of every service reminder and vehicle expiry alert. Track dispatch timestamps, communication channels, sender sources, and live delivery status.
          </p>
        </div>

        {/* Interactive Table Mockup */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
          {/* Mockup Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-3 gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors">
                Upcoming & Overdue (18)
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-primary text-white shadow-2xs">
                Sent History & Audit Log (Active)
              </span>
              <span className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-colors">
                Insurance & PUC Expiry History
              </span>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              Live WhatsApp Sync
            </span>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-slate-200/80 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF7F5] border-b border-slate-200/80 text-[11px] font-bold text-slate-700">
                <tr>
                  <th className="p-3.5">Sent At</th>
                  <th className="p-3.5">Vehicle</th>
                  <th className="p-3.5">Customer</th>
                  <th className="p-3.5">Service Due Date</th>
                  <th className="p-3.5">Source / Sent By</th>
                  <th className="p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {reminderLogs.map((log, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 whitespace-nowrap">
                      <div className="font-bold text-slate-900 text-xs">{log.sentAt}</div>
                      <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                        <FaWhatsapp className="text-[11px]" /> via {log.channel}
                      </div>
                    </td>

                    <td className="p-3.5">
                      <div className="font-bold font-mono text-primary text-xs">{log.vehicle}</div>
                      <div className="text-[10.5px] text-slate-500">{log.model}</div>
                    </td>

                    <td className="p-3.5">
                      <div className="font-bold text-slate-800 text-xs">{log.customer}</div>
                      <div className="text-[10.5px] text-slate-400 font-mono">{log.phone}</div>
                    </td>

                    <td className="p-3.5 whitespace-nowrap">
                      <span className="bg-orange-50 text-orange-900 border border-orange-200 px-2 py-0.5 rounded text-[11px] font-medium flex items-center gap-1 w-fit">
                        <FaCalendarAlt className="text-orange-500 text-[10px]" /> {log.dueDate}
                      </span>
                    </td>

                    <td className="p-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        {log.isBot ? (
                          <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-[10px]">
                            <FaRobot />
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px]">
                            <FaUser />
                          </span>
                        )}
                        <span className="font-medium text-slate-700 text-xs">{log.source}</span>
                      </div>
                    </td>

                    <td className="p-3.5 text-right whitespace-nowrap">
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold inline-flex items-center gap-1">
                        <FaCheckCircle className="text-emerald-500" /> {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
            <span>Detailed logs for Routine Service, Engine Oil, Insurance & PUC Expiry</span>
            <span className="text-emerald-600 font-bold">100% Audit Compliance</span>
          </div>
        </div>

        {/* 3 Value Pillars (Looped) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {historyBenefits.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 space-y-2.5 shadow-2xs hover:border-primary/30 transition-colors"
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
