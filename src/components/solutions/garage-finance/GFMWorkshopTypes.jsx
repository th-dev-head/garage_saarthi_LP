import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";
import { FaArrowRight } from "react-icons/fa";

export default function GFMWorkshopTypes() {
  const handleSolutionClick = (name, url) => {
    trackEvent("finance_solution_click", {
      page_path: "/solutions/garage-finance-management-software",
      cta_location: "workshop_types_section",
      cta_label: name,
      destination: url
    });
  };

  const types = [
    { title: "Car Garages", desc: "Manage detailed spare part logs, washing jobs, mechanic payroll margins, and pending client billing.", url: "/solutions/car-garage-software" },
    { title: "Bike Workshops", desc: "Speed up counter sales invoices, monitor mechanic commissions, and track daily cash balances.", url: "/solutions/bike-workshop-software" },
    { title: "EV Garages", desc: "Track battery repair service records, specialized EV part entries, and specific tech payroll logs.", url: "/solutions/ev-garage-software" },
    { title: "Truck Workshops", desc: "Track heavy commercial fleet service files, credit accounts, and large parts purchases.", url: "/solutions/truck-workshop-software" },
    { title: "Fleet Workshops", desc: "Track organizational credit transactions, driver payments records, and scheduled maintenance checklists.", url: "/solutions/fleet-workshop-software" },
    { title: "Multi-Branch Garages", desc: "Compare billing sheets across outlets, audit warehouses, and restrict staff logins by branch.", url: "/solutions/multi-branch-garage-software" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Target Workshops
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Finance Management Built for <GradientUnderline>Garages and Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our workshop finance management software satisfies the distinct requirements of different automotive repair models. Avoid generic accounting setups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div key={idx} className="bg-white border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-text-dark">{t.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{t.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={t.url} onClick={() => handleSolutionClick(t.title, t.url)} className="text-primary text-xs font-bold hover:underline inline-flex items-center gap-1">
                  View {t.title} Solution <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
