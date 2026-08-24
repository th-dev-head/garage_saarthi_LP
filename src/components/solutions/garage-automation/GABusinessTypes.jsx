import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaWrench, FaWarehouse, FaCodeBranch, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GABusinessTypes() {
  const types = [
    {
      icon: <FaCar className="text-blue-500 w-5 h-5" />,
      title: "Car Workshops",
      desc: "Manage periodic maintenance reminders, vehicle records, and body shop job cards.",
      link: "/solutions/car-garage-software/",
      anchor: "Car Garage"
    },
    {
      icon: <FaWrench className="text-slate-500 w-5 h-5" />,
      title: "Automobile Workshops",
      desc: "Track multibrand repair work, inventory spares catalog, and labor tasks.",
      link: "/solutions/automobile-workshop-software/",
      anchor: "Automobile Workshop"
    },
    {
      icon: <FaWrench className="text-orange-500 w-5 h-5" />,
      title: "Auto Repair Shops",
      desc: "Digitize repair checklists, parts consumption records, and payment tracking.",
      link: "/solutions/auto-repair-shop-software/",
      anchor: "Auto Repair Shop"
    },
    {
      icon: <FaWarehouse className="text-teal-500 w-5 h-5" />,
      title: "Service Centers",
      desc: "Streamline customer check-in lanes, service alerts, and WhatsApp reminder updates.",
      link: "/solutions/best-workshop-management-software/",
      anchor: "Workshop Management"
    },
    {
      icon: <FaCodeBranch className="text-purple-500 w-5 h-5" />,
      title: "Multi-Branch Garages",
      desc: "Consolidate operations, configure user roles, and track central analytics.",
      link: "/solutions/multi-branch-garage-software/",
      anchor: "Multi-Branch Garage"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Variants
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Garage Automation Software for Different <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Discover how our <strong className="text-primary capitalize">garage automation system</strong> supports distinct workshop operational structures.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {types.map((ty, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div className="space-y-3">
                <div className="bg-white w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center shadow-xs">
                  {ty.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-900">{ty.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed">{ty.desc}</p>
              </div>
              <div className="pt-4 mt-auto">
                <Link href={ty.link} className="text-primary font-bold text-[10px] hover:underline flex items-center gap-1 whitespace-nowrap">
                  {ty.anchor} <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
