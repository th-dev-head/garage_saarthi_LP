import React from "react";
import { FaArrowRight, FaCheckCircle, FaClock } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import { trackEvent } from "@/src/utils/pixel";

const leaveQuotaStats = [
  { label: "Paid Leave (PL)", value: "12 Days" },
  { label: "Sick Leave (SL)", value: "6 Days" },
  { label: "Casual Leave (CL)", value: "6 Days" }
];

const mockLeaveRequests = [
  { name: "Karan Mehta (Head Mechanic)", type: "Casual Leave (CL)", dates: "12 Oct - 14 Oct", status: "Approved", icon: <FaCheckCircle className="text-emerald-400" /> },
  { name: "Vikram Singh (Electrician)", type: "Sick Leave (SL)", dates: "18 Oct (Half Day)", status: "Approved", icon: <FaCheckCircle className="text-emerald-400" /> },
  { name: "Rajesh Solanki (Helper)", type: "Paid Leave (PL)", dates: "25 Oct - 28 Oct", status: "Pending Review", icon: <FaClock className="text-amber-400" /> }
];

export default function LMHero() {
  const handleTrialClick = () => {
    trackEvent("leave_management_trial_cta_click", {
      page_path: "/features/leave-management",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/register`,
    });
    window.open(`${FRONTEND_URL}/register`, "_blank");
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Left Info */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-2 inline-block">
              Staff Leave & Absence Management Software
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Garage Staff & Mechanic{" "}
              <span className="relative inline-block">
                Leave Management
                <span className="absolute -bottom-2 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              Eliminate oral leave requests and salary disputes. Track paid, sick, and casual leave quotas, approve staff leave applications in 1-click, and auto-sync leave deductions with monthly payroll.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <button
                onClick={handleTrialClick}
                className="rounded-full px-6 py-3 text-base font-bold text-white shadow-lg bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Start 7-Day Free Trial
                <FaArrowRight className="w-4 h-4" />
              </button>
              <PlayStoreBadge />
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-[340px] lg:max-w-md">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10">
                <span className="text-xs font-bold text-white">Staff Leave Register #LR-2026</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold border border-emerald-500/20">Live Synced</span>
              </div>

              {/* Quotas */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {leaveQuotaStats.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-2.5 rounded-xl border border-white/5 text-center">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block mb-0.5">{item.label}</span>
                    <span className="text-xs font-black text-white">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Recent Requests */}
              <div className="space-y-2">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Recent Leave Applications</span>
                {mockLeaveRequests.map((req, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                    <div>
                      <p className="text-xs font-bold text-white">{req.name}</p>
                      <p className="text-[10px] text-slate-400">{req.type} • {req.dates}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold">
                      {req.icon}
                      <span className={req.status === "Approved" ? "text-emerald-400" : "text-amber-400"}>
                        {req.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
