"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCBusinessType() {
  const handleSolutionClick = (solutionName) => {
    trackEvent("solution_click", {
      page_path: "/solutions/garage-crm-software/",
      page_name: "garage_crm_software",
      cta_location: "business_type",
      cta_label: "Solution Link Clicked",
      solution_name: solutionName
    });
  };

  const types = [
    { title: "CRM for Car Garages", desc: "Manage passenger car owner profiles, fuel levels, diagnostic check-ins, and service reminders.", link: "/solutions/car-garage-software/" },
    { title: "CRM for Auto Repair Shops", desc: "Track repair inquiries, lead progress sheets, mechanic assignments, and estimate follow-ups.", link: "/solutions/auto-repair-shop-software/" },
    { title: "CRM for Automobile Workshops", desc: "Keep multi-brand customer registries, vehicle specifications, and collection dues organized.", link: "/solutions/garage-automation-software/" },
    { title: "CRM for Vehicle Workshops", desc: "Manage customer contact database files, vehicle history cards, and service campaigns.", link: "/features/vehicles/" },
    { title: "CRM for Multi-Branch Garages", desc: "Centralize customer records across locations, comparison sheets, and roles centrally.", link: "/solutions/multi-branch-garage-software/" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Garage CRM Software for Different <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Select your workshop business type to explore tailored customer and vehicle management features:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{t.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{t.desc}</p>
              </div>
              <Link
                href={t.link}
                onClick={() => handleSolutionClick(t.title)}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start"
              >
                Explore Solution
                <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

