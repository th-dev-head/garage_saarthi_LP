"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GBBusinessType() {
  const handleSolutionClick = (solutionName) => {
    trackEvent("billing_solution_link_click", {
      page_path: "/solutions/garage-billing-software/",
      solution_name: solutionName
    });
  };

  const workshopTypes = [
    { title: "Car Garage Billing Software", link: "/solutions/car-garage-software/", desc: "Separate parts and labour billing, damage logs, and WhatsApp bill link sharing." },
    { title: "Bike Workshop Billing Software", link: "/solutions/bike-workshop-software/", desc: "Rapid service checkout logs, counter spare parts sales, and payment collections." },
    { title: "Automobile Service Centers", link: "/solutions/garage-automation-software/", desc: "Multi-brand repairs log, customized invoice series prefixes, and CA account registers." },
    { title: "Vehicle Repair Businesses", link: "/solutions/workshop-management-software/", desc: "Track estimates, log split payment modes, and monitor outstanding customer balances." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Invoicing and Billing Built for{" "}
            <GradientUnderline>All Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you manage passenger cars, commercial vehicles, or multi-brand fleets, select your workshop type below to view details:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopTypes.map((type, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow duration-150">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{type.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{type.desc}</p>
              </div>
              <Link
                href={type.link}
                onClick={() => handleSolutionClick(type.title)}
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

