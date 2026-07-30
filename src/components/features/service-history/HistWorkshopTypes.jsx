import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function HistWorkshopTypes() {
  const workshopTypes = [
    { title: "Car Service Centers", link: "/solutions/car-garage-software", desc: "Access comprehensive records linked to car models, diagnostic checklists, and past invoices." },
    { title: "Two-Wheeler Workshops", link: "/solutions/bike-workshop-software", desc: "Fast-moving service history lookups for engine checkups, lubricants replacement, and quick checkout logs." },
    { title: "Commercial Fleet Garages", link: "/solutions/fleet-workshop-software", desc: "Centralized repair logs for transporter networks, organizational credits, and scheduled maintenance checklists." },
    { title: "Multi-Branch Operations", link: "/solutions/multi-branch-garage-software", desc: "Compare and share diagnostic and billing histories across all workshop locations centrally." }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Vehicle History Databases for <GradientUnderline>Diverse Garage Models</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Choose your workshop style to explore customized vehicle record and tracking features:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopTypes.map((type, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-150 hover:border-primary/30">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{type.desc}</p>
              </div>
              <Link
                href={type.link}
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
