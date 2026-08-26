import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaPlug, FaTruck, FaWarehouse, FaCodeBranch, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNBusinessTypes() {
  const categories = [
    {
      icon: <FaCar className="text-blue-500 w-5 h-5" />,
      title: "Car Garages",
      desc: "Manage periodic maintenance alerts, service history logs, and vehicle owner notifications.",
      link: "/solutions/car-garage-software/"
    },
    {
      icon: <FaMotorcycle className="text-orange-500 w-5 h-5" />,
      title: "Bike Workshops",
      desc: "Track fast check-ins, repeat washing follow-ups, and customer WhatsApp messaging workflows.",
      link: "/solutions/bike-workshop-software/"
    },
    {
      icon: <FaPlug className="text-green-500 w-5 h-5" />,
      title: "EV Garages",
      desc: "Monitor battery parameters, electric vehicle profile histories, and custom alert deadlines.",
      link: "/solutions/ev-garage-management-software/"
    },
    {
      icon: <FaTruck className="text-slate-500 w-5 h-5" />,
      title: "Truck Workshops",
      desc: "Handle heavy vehicle check logs, part alerts, and corporate driver reminders.",
      link: "/solutions/truck-workshop-software/"
    },
    {
      icon: <FaWarehouse className="text-teal-500 w-5 h-5" />,
      title: "Fleet Workshops",
      desc: "Log commercial fleet details, dispatch updates to managers, and track service history.",
      link: "/solutions/fleet-workshop-software/"
    },
    {
      icon: <FaCodeBranch className="text-purple-500 w-5 h-5" />,
      title: "Multi-Branch Garages",
      desc: "Centralize customer registers, track branch user performance, and compile message statistics.",
      link: "/solutions/multi-branch-garage-software/"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Variants
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            WhatsApp Service Reminder Software for Different <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Different workshop types require tailored communication features. Find out how our <strong className="text-primary capitalize">workshop whatsapp software</strong> aligns with your business parameters.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div className="space-y-3">
                <div className="bg-white w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center shadow-xs">
                  {cat.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-900">{cat.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed">{cat.desc}</p>
              </div>
              <div className="pt-4 mt-auto">
                <Link href={cat.link} className="text-primary font-bold text-[10px] hover:underline flex items-center gap-1">
                  Explore Solution <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
