import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaBolt, FaMagic, FaBuilding, FaWrench, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

const businessTypes = [
  {
    icon: <FaCar />,
    title: "Car Garages",
    desc: "Discuss customer service offers, checkup packages, and routine maintenance follow-ups.",
    link: "/solutions/car-garage-software/",
  },
  {
    icon: <FaMotorcycle />,
    title: "Bike Workshops",
    desc: "Manage repeat chain lube and oil change customer communication for high daily volume.",
    link: "/solutions/bike-workshop-software/",
  },
  {
    icon: <FaBolt />,
    title: "EV Garages",
    desc: "Maintain customer profiles, battery check logs, and future service communication.",
    link: "/solutions/ev-garage-management-software/",
  },
  {
    icon: <FaMagic />,
    title: "Car Detailing Studios",
    desc: "Promote ceramic coating deals, PPF maintenance packages, and repeat customer offers.",
    link: "/solutions/car-detailing-software/",
  },
  {
    icon: <FaBuilding />,
    title: "Multi-Branch Garages",
    desc: "Coordinate organized customer engagement across a growing garage business network.",
    link: "/solutions/multi-branch-garage-software/",
  },
  {
    icon: <FaWrench />,
    title: "Independent Garages",
    desc: "Simple customer communication and promotion management for independent workshop owners.",
    link: "/solutions/car-garage-software/",
  },
];

export default function GMBusinessType() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Tailored Engagement
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Garage Marketing Tools for Different <GradientUnderline>Automotive Businesses</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Different automotive business models require tailored customer marketing and promotion workflows.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {businessTypes.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <Link href={card.link} className="text-xs font-bold text-primary hover:underline flex items-center gap-2">
                  Explore Solution <FaArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/features/"
            className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-hover text-sm transition-colors"
          >
            Explore All Features <FaArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
