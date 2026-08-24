import React from "react";
import Link from "next/link";
import { FaCar, FaMotorcycle, FaPlug, FaWrench, FaCodeBranch, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCEBusinessTypes() {
  const businesses = [
    {
      icon: <FaCar className="text-blue-500 w-5 h-5" />,
      title: "Car Garages",
      desc: "Send service reminders, check periodic maintenance history, and handle automated WhatsApp follow-ups.",
      link: "/solutions/car-garage-software/",
      anchor: "Car Garage"
    },
    {
      icon: <FaMotorcycle className="text-orange-500 w-5 h-5" />,
      title: "Bike Workshops",
      desc: "Manage fast-paced motorcycle records, service alerts, and repeat client communication schedules.",
      link: "/solutions/bike-workshop-software/",
      anchor: "Bike Workshop"
    },
    {
      icon: <FaPlug className="text-green-500 w-5 h-5" />,
      title: "EV Garages",
      desc: "Track battery status, custom EV diagnostic alerts, and organize vehicle customer records together.",
      link: "/solutions/ev-garage-management-software/",
      anchor: "EV Garage"
    },
    {
      icon: <FaWrench className="text-slate-500 w-5 h-5" />,
      title: "Auto Repair Workshops",
      desc: "Streamline body shop estimates, parts consumption alerts, and repair check updates.",
      link: "/solutions/auto-repair-shop-software/",
      anchor: "Auto Repair Shop"
    },
    {
      icon: <FaCodeBranch className="text-purple-500 w-5 h-5" />,
      title: "Multi-Branch Garages",
      desc: "Monitor consolidated customer counts, share common coupons, and view metrics across branches.",
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
            Customer Engagement Software for Garages and <GradientUnderline>Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Every automotive workshop variant has distinct customer requirements. Discover how our <strong className="text-primary capitalize">workshop customer engagement software</strong> supports different business models.
          </p>
        </div>

        {/* Business Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {businesses.map((biz, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div className="space-y-3">
                <div className="bg-white w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center shadow-xs">
                  {biz.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-900">{biz.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed">{biz.desc}</p>
              </div>
              <div className="pt-4 mt-auto">
                <Link href={biz.link} className="text-primary font-bold text-[10px] hover:underline flex items-center gap-1 whitespace-nowrap">
                  {biz.anchor} <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
