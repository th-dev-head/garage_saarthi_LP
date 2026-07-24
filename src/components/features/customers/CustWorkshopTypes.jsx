import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CustWorkshopTypes() {
  const workshopTypes = [
    { title: "Car Service Centers", link: "/solutions/car-garage-software", desc: "Manage detailed customer contact books linked to car models, diagnostic check-sheets, and fuel metrics." },
    { title: "Two-Wheeler Workshops", link: "/solutions/bike-workshop-software", desc: "Fast-moving customer profiles with automated service alerts, engine number tracking, and quick billing checkout." },
    { title: "Car Detailing & EV Studios", link: "/solutions/car-detailing-software", desc: "Track customer membership plans, detailing packages, warranties, and multi-vehicle garage sheets." },
    { title: "Multi-Branch Operations", link: "/solutions/multi-branch-garage-software", desc: "Centralize customer databases across outlets with secure user roles, preventing database theft." }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Customization
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Customer Databases Designed for <GradientUnderline>Diverse Garage Types</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Choose your workshop style to explore customized client record and tracking features:
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
                <FaChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
