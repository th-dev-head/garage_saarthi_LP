"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaLaptop, FaMobileAlt, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import GradientUnderline from "../../common/GradientUnderline";

const accessPlatforms = [
  { icon: FaLaptop, title: "Cloud Web Platform", desc: "For Office PC, GST Invoices & CA Export" },
  { icon: FaMobileAlt, title: "Android Application", desc: "For Fast Job Card Creation on Bay Floor" }
];

const cloudBullets = [
  "Real-time data synchronization between workshop floor and front office desk",
  "Role-based user permissions for owners, managers, cashiers, and mechanics",
  "Native Android app on Google Play (iOS app coming soon to Apple App Store)"
];

export default function GSICloudAccess() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Block - Left Column */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-8 shadow-sm flex flex-col justify-center min-h-[300px]">
            <div className="max-w-xs w-full mx-auto space-y-6">
              {accessPlatforms.map((plat, idx) => {
                const Icon = plat.icon;
                return (
                  <React.Fragment key={idx}>
                    {idx > 0 && <div className="border-t border-slate-200/60" />}
                    <div className="flex items-center gap-4 text-slate-800">
                      <Icon className="text-4xl text-primary flex-shrink-0" />
                      <div className="text-left">
                        <h4 className="text-xs font-bold">{plat.title}</h4>
                        <p className="text-[10px] text-slate-400">{plat.desc}</p>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Device Independence
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
              Manage Your Indian Garage on <GradientUnderline>Web Browsers and Android Phones</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              GarageSaarthi operates on secure cloud infrastructure so you can manage your workshop from anywhere. Your floor mechanics can create digital job sheets right beside the vehicle on an Android phone, while managers check GST billing reports from desktop web browsers.
            </p>

            <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-medium">
              {cloudBullets.map((text, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {text}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center pt-2">
              <Button
                variant="primary"
                icon={<FaArrowRight className="w-3.5 h-3.5" />}
                onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
              >
                Start 7-Day Free Trial
              </Button>
              <PlayStoreBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

