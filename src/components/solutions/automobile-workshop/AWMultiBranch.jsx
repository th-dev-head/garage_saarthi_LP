import React from "react";
import Link from "next/link";
import {FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function AWMultiBranch() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div>
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Multi-Branch Operations
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              Manage Multiple Automobile Workshop <GradientUnderline>Branches Centrally</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
              Growing your business shouldn't mean losing control. With GarageSaarthi, you can add multiple branches under a single main account. Create individual branch logins, track separate inventories, and check branch-wise sales or jobs completed.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
              Check cross-branch spare parts stock directly. If one outlet is out of a filter or brake pad, check live quantities at another outlet instantly.
            </p>

            <Link
              href="/solutions/multi-branch-garage-software/"
              className="rounded-full bg-primary hover:bg-primary-hover text-white px-6 py-2.5 text-sm font-semibold transition-all duration-200 inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Explore Multi-Branch Garage Software
              <FaArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Visual Column */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-extrabold text-slate-800 mb-4 pb-2">
              Multi-Branch Live Dashboard
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl shadow-xs">
                <div>
                  <p className="font-bold text-slate-800">Branch 1: Surat Main</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">8 Active Job Cards | 4 mechanics clock-in</p>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">₹14,500</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-3 rounded-xl shadow-xs">
                <div>
                  <p className="font-bold text-slate-800">Branch 2: Surat Adajan</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">4 Active Job Cards | 2 mechanics clock-in</p>
                </div>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">₹8,200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

