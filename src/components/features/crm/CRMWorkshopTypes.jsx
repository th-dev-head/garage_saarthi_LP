import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function CRMWorkshopTypes() {
  const types = [
    {
      title: "CRM for Car Garages",
      desc: "Manage passenger car owner profiles, fuel levels, diagnostic check-ins, and service reminders.",
      link: "/solutions/car-garage-software"
    },
    {
      title: "CRM for Auto Repair Shops",
      desc: "Track repair inquiries, lead progress sheets, mechanic assignments, and estimate follow-ups.",
      link: "/solutions/auto-repair-shop-software"
    },
    {
      title: "CRM for Automobile Workshops",
      desc: "Keep multi-brand customer registries, vehicle specifications, and collection dues organized.",
      link: "/solutions/automobile-workshop-software"
    },
    {
      title: "CRM for Vehicle Workshops",
      desc: "Manage customer contact database files, vehicle history cards, and service campaigns.",
      link: "/features/vehicles"
    },
    {
      title: "CRM for Multi-Branch Garages",
      desc: "Centralize customer records across locations, comparison sheets, and role assignments.",
      link: "/solutions/multi-branch-garage-software"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Garage CRM Software for Different <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Select your workshop business type to explore tailored customer and vehicle management features:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200 hover:border-primary/30"
            >
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{t.desc}</p>
              </div>
              <Link
                href={t.link}
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
