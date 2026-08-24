import React from "react";
import Link from "next/link";
import { FaArrowRight, FaBell, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNAlerts() {
  const alertLogs = [
    {
      vehicle: "GJ09BK0001",
      owner: "Ankit Verma",
      alertType: "Baleno Oil Service",
      status: "Alert Due",
      statusColor: "bg-red-100 text-red-700",
      isSent: false
    },
    {
      vehicle: "GJ05AB1234",
      owner: "Rajesh Patel",
      alertType: "i20 Periodic check",
      status: "Reminded",
      statusColor: "bg-green-100 text-green-700",
      isSent: true
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Column Left (Mock Service Alerts Screen) */}
          <div className="order-last lg:order-first bg-white border border-slate-200/80 rounded-3xl p-4 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Service Alerts Dashboard
              </span>
              <span className="bg-emerald-50 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded border border-emerald-200/60">
                Live Alerts
              </span>
            </div>

            {/* Mobile View (Stacked Cards - No Horizontal Scroll) */}
            <div className="space-y-3 sm:hidden">
              {alertLogs.map((log, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-extrabold text-xs text-slate-900">{log.vehicle}</p>
                      <p className="text-[10px] text-slate-500">{log.owner}</p>
                    </div>
                    <span className={`${log.statusColor} px-2 py-0.5 rounded-full font-bold text-[9px]`}>
                      {log.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-200/60 text-[10px]">
                    <span className="text-slate-600 font-medium">{log.alertType}</span>
                    {log.isSent ? (
                      <span className="text-slate-400 font-bold text-[10px]">Sent ✓✓</span>
                    ) : (
                      <button className="bg-primary text-white px-3 py-1 rounded-full font-bold text-[10px]">
                        Send WhatsApp
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet/Desktop View (Clean Table) */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-[11px] text-left text-slate-600 font-sans">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold tracking-wider">
                    <th className="pb-2">Vehicle / Owner</th>
                    <th className="pb-2">Alert Type</th>
                    <th className="pb-2">Status</th>
                    <th className="pb-2 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {alertLogs.map((log, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-3">
                        <p className="font-bold text-slate-900">{log.vehicle}</p>
                        <p className="text-[9px] text-slate-400">{log.owner}</p>
                      </td>
                      <td className="py-3 text-slate-700">{log.alertType}</td>
                      <td className="py-3">
                        <span className={`${log.statusColor} px-2 py-0.5 rounded-full font-bold text-[8px]`}>{log.status}</span>
                      </td>
                      <td className="py-3 text-right">
                        {log.isSent ? (
                          <span className="text-slate-400 font-bold text-[9px] mr-2">Sent ✓✓</span>
                        ) : (
                          <button className="bg-primary text-white px-2.5 py-1 rounded-full font-bold text-[9px]">Send WhatsApp</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Text Column Right */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Feature Spotlight
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Manage Customer Service Alerts from <GradientUnderline>GarageSaarthi</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The Service Alerts module acts as a hub to track all upcoming vehicle check-ups. Instead of checking customer history pages individually, compile all milestones centrally.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Check who is due for oil services, battery check-ups, insurance renewals, or periodic alignments. Dispatch WhatsApp templates directly from the list view and verify which alerts were completed successfully.
            </p>

            <div className="pt-4">
              <Link
                href="/features/service-reminders/"
                className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                Explore Service Alerts <FaArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
