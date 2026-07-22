import React from "react";
import Link from "next/link";
import {FaArrowRight } from "react-icons/fa";
import { FRONTEND_URL } from "@/src/config/env";
import PlayStoreBadge from "../../common/PlayStoreBadge";


export default function ARSHero() {
  return (
    <section className="relative pt-48 pb-24 md:pt-56 md:pb-32 lg:pt-60 px-4 lg:px-15 2xl:px-50 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Left Info */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-2 inline-block">
              Auto Repair Shop Edition
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Auto Repair Shop Software to Manage{" "}
              <span className="relative inline-block">
                Repairs, Billing and Operations
                <span className="absolute -bottom-2 left-0 w-full h-[4px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
              </span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed">
              GarageSaarthi is an all-in-one auto repair software for Indian repair shops. Handle digital job cards, live repair tracking, spare parts inventory control, GST billing, customer records, and automatic WhatsApp service reminders seamlessly.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center pt-4">
              <Link
                href={FRONTEND_URL + "/register"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-base font-bold text-white shadow-lg bg-[linear-gradient(92.52deg,#B22F0E_2.1%,#D73D17_105.99%)] hover:opacity-95 active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Start 7-Day Free Trial
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <PlayStoreBadge />
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl w-full max-w-[340px] lg:max-w-md">
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-white/10">
                <span className="text-xs font-bold text-white">Daily Live Status</span>
                <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded font-semibold">Active</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 block mb-0.5">TODAY'S ESTIMATES</span>
                  <span className="text-lg font-bold text-white">₹38,200</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-[10px] text-slate-400 block mb-0.5">ACTIVE JOB CARDS</span>
                  <span className="text-lg font-bold text-white">18 Cars</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
