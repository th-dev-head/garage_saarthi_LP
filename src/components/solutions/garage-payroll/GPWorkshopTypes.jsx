import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function GPWorkshopTypes() {
  const handleSolutionClick = (name, url) => {
    trackEvent("payroll_solution_click", {
      page_path: "/solutions/garage-payroll-software",
      cta_location: "workshop_types_section",
      cta_label: name,
      destination: url
    });
  };

  const types = [
    { title: "Car Garages", desc: "Manage salaries and job commission rates for multi-brand car mechanics, painters, and washing staff.", url: "/solutions/car-garage-software" },
    { title: "Bike Workshops", desc: "Track daily wages for bike mechanics, helper allowances, and weekly payout rosters.", url: "/solutions/bike-workshop-software" },
    { title: "EV Garages", desc: "Manage technical salary codes for battery technicians and EV repair supervisors.", url: "/solutions/ev-garage-software" },
    { title: "Truck Workshops", desc: "Organize commissions, overtime, and monthly wages for commercial vehicle repair teams.", url: "/solutions/truck-workshop-software" },
    { title: "Fleet Workshops", desc: "Manage payroll and transaction files for designated fleet maintenance engineers.", url: "/solutions/fleet-workshop-software" },
    { title: "Multi-Branch Garages", desc: "Compare staff payroll logs, calculate leaf counts, and audit salaries centrally across branches.", url: "/solutions/multi-branch-garage-software" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Models
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Payroll Software for Different <GradientUnderline>Types of Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our workshop payroll software is built around mechanic activities and Commission schemas. Select your business profile to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-text-dark">{t.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{t.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={t.url} onClick={() => handleSolutionClick(t.title, t.url)} className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1">
                  View {t.title} Solution →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
