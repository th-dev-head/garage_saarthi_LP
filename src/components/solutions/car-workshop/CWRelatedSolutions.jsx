import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

export default function CWRelatedSolutions() {
  const handleSolutionClick = (name, url) => {
    trackEvent("solution_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "related_solutions_section",
      cta_label: name,
      destination: url
    });
  };

  const solutions = [
    { title: "Garage Management Software", desc: "Our core landing page with broader features details.", url: "/" },
    { title: "Bike Workshop Software", desc: "Specialized tools for two-wheeler service centers.", url: "/solutions/bike-workshop-software" },
    { title: "EV Garage Software", desc: "Tech logs and battery parameters for EV repair shops.", url: "/solutions/ev-garage-software" },
    { title: "Fleet Workshop Software", desc: "Maintenance logs for commercial logistics operations.", url: "/solutions/fleet-workshop-software" },
    { title: "Multi-Branch Garage Software", desc: "Consolidated collections logs across outlets.", url: "/solutions/multi-branch-garage-software" },
    { title: "Garage Automation Software", desc: "Automated alert schedules and digital checklists.", url: "/solutions/garage-automation-software" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full space-y-10 text-center">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Explore More GarageSaarthi <GradientUnderline>Workshop Solutions</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Discover other tailored use-cases designed around specific vehicle segment needs and fleet operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {solutions.map((s, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-text-dark">{s.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={s.url} onClick={() => handleSolutionClick(s.title, s.url)} className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1">
                  Explore {s.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
