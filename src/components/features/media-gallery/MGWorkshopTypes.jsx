import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function MGWorkshopTypes() {
  const workshopTypes = [
    { title: "Car Detailing & Painting Spas", link: "/solutions/car-detailing-software/", desc: "Compare side-by-side Before/After body detailing photos, ceramic coatings, and paint transformations." },
    { title: "Car Repair Workshop Galleries", link: "/solutions/car-workshop-software/", desc: "Snap engine component damage, worn brake rotors, and suspension leaks to justify part replacements." },
    { title: "Two Wheeler Service Spares", link: "/solutions/bike-workshop-software/", desc: "Share images of dirty spark plugs or worn chains directly with bike owners via WhatsApp link." },
    { title: "Multi-Brand Service Hubs", link: "/solutions/automobile-workshop-software/", desc: "Maintain structured image logs of pre-existing scratch check-ins before starting diagnostic jobs." }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Photo Galleries and Visual Logs for <GradientUnderline>All Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From car detailing centers to multi-brand garages, select your profile to view visual documentation solutions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopTypes.map((type, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow duration-150 hover:border-primary/30">
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
