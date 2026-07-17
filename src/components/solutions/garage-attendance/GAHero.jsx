import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GAHero() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-attendance-software",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleFeaturesClick = () => {
    trackEvent("attendance_feature_click", {
      page_path: "/solutions/garage-attendance-software",
      cta_location: "hero",
      cta_label: "Explore Attendance Features",
      destination: "#attendance-features"
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
            Shift & Check-in
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Garage Attendance Software for Mechanics and Workshop Staff
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            Track daily mechanic shifts and employee attendance registers digitally. Keep leaves, check-ins, and payroll files organized inside a centralized workshop platform.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto">
            <Button variant="trial" onClick={handleTrialClick} icon={<FaArrowRight className="w-3.5 h-3.5" />} className="w-full sm:w-auto">
              Start 7-Day Free Trial
            </Button>
            <Link href="#attendance-features" onClick={handleFeaturesClick} className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center">
              Explore Attendance Features
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-3xl p-6 shadow-2xl w-full max-w-md relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-slate-700/50 pb-4 mb-4">
              <span className="text-xs font-bold text-slate-400">Live Attendance List</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs md:text-sm bg-slate-900/50 p-2.5 rounded-xl border border-slate-700/30">
                <span className="text-slate-300">Karan Mehta</span>
                <span className="bg-emerald-950/60 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-800/30">Present</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm bg-slate-900/50 p-2.5 rounded-xl border border-slate-700/30">
                <span className="text-slate-300">Vikram Singh</span>
                <span className="bg-emerald-950/60 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-800/30">Present</span>
              </div>
              <div className="flex justify-between items-center text-xs md:text-sm bg-slate-900/50 p-2.5 rounded-xl border border-slate-700/30">
                <span className="text-slate-300">Rajesh Solanki</span>
                <span className="bg-rose-950/60 text-rose-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-800/30">Absent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
