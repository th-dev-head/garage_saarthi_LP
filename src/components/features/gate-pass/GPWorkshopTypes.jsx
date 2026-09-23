import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GPWorkshopTypes() {
  const workshopTypes = [
    {
      title: "Car Service Centers & Garages",
      link: "/solutions/car-garage-software/",
      desc: "Fast exit clearance for passenger cars, multi-bay repair facilities, and insurance bodyshop deliveries."
    },
    {
      title: "Two-Wheeler & Bike Workshops",
      link: "/solutions/bike-workshop-software/",
      desc: "High-volume rapid checkout, instant thermal gate slip printing, and quick counter spares dispatch."
    },
    {
      title: "Multi-Brand Auto Repair Garages",
      link: "/solutions/automobile-workshop-software/",
      desc: "Perimeter gate security, customer WhatsApp gate pass delivery, and zero unauthorized drive-aways."
    },
    {
      title: "Commercial Fleet & Truck Garages",
      link: "/solutions/truck-workshop-software/",
      desc: "Multi-vehicle fleet release logs, driver identity verification, and odometer audit tracking."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Workshop Security Across Industries
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Perimeter Gate Security Built for <GradientUnderline>All Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you operate an independent multi-brand workshop or an authorized service center, explore dedicated solutions below:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopTypes.map((type, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-200 hover:border-primary/30"
            >
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
