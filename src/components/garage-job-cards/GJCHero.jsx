import React from "react";
import Link from "next/link";
import { FaArrowRight, FaTools } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GJCHero() {
  const handleTrialClick = () => {
    trackEvent("job_card_trial_cta_click", {
      page_path: "/solutions/garage-job-card-software",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleScrollClick = () => {
    trackEvent("job_card_workflow_scroll", {
      page_path: "/solutions/garage-job-card-software",
      cta_location: "hero",
      cta_label: "View How Job Cards Work",
      destination: "#job-card-workflow"
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-24 md:py-32 px-4 flex justify-center">
      {/* Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-[#EFE9E7] text-slate-800 px-3 py-1 rounded-full inline-block mb-6">
            Digital Job Cards
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Garage Job Card Software for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Digital Workshop
            </span>{" "}
            Management
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Create digital job cards, track vehicle repair work, assign tasks to mechanics, and maintain organized repair orders from one unified web and mobile system.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={handleTrialClick}
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              Start 7-Day Free Trial
              <FaArrowRight className="w-3.5 h-3.5" />
            </button>
            <Link
              href="#job-card-workflow"
              onClick={handleScrollClick}
              className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              View How Job Cards Work
            </Link>
          </div>
        </div>

        {/* Right UI composition */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-2xl max-w-lg w-full relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
              <FaTools className="text-primary w-4 h-4" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wide">
                Job Card Creator
              </span>
            </div>

            <div className="space-y-3.5">
              <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                <span className="text-[10px] text-slate-400 block uppercase">Vehicle Number</span>
                <span className="text-xs font-bold text-white mt-0.5">GJ-05-CD-5678</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                <span className="text-[10px] text-slate-400 block uppercase">Customer Name</span>
                <span className="text-xs font-bold text-white mt-0.5">Rajesh Sharma</span>
              </div>
              <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                <span className="text-[10px] text-slate-400 block uppercase">Customer Complaints</span>
                <p className="text-xs text-slate-300 mt-1 pl-2 border-l-2 border-primary leading-normal">
                  - Engine noise during high speed acceleration<br />
                  - AC cooling is insufficient
                </p>
              </div>
              <div className="flex justify-between items-center bg-white/5 border border-white/5 p-3 rounded-xl text-xs">
                <span className="text-slate-400">Assigned Mechanic</span>
                <span className="font-bold text-primary bg-[#EFE9E7] text-slate-900 px-2.5 py-0.5 rounded-full">
                  Amit Kumar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
