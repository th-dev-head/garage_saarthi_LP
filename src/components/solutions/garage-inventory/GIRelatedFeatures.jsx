import React from "react";
import Link from "next/link";
import { FaFileInvoice, FaWrench, FaUsers, FaCar, FaCoins, FaChartPie, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";
import Button from "../../common/Button";

export default function GIRelatedFeatures() {
  const relatedFeatures = [
    {
      icon: <FaWrench className="w-5 h-5 text-primary" />,
      title: "Digital Job Cards",
      link: "/features/job-cards",
      desc: "Assign tasks to technicians, inspect vehicles visually, and record customer complaints."
    },
    {
      icon: <FaFileInvoice className="w-5 h-5 text-primary" />,
      title: "Counter Sales",
      link: "/features/counter-sales",
      desc: "Log quick spare parts transactions directly to walk-in buyers without full workshop logs."
    },
    {
      icon: <FaUsers className="w-5 h-5 text-primary" />,
      title: "Customer Profiles",
      link: "/features/customers",
      desc: "Maintain records of contact logs, vehicle histories, and pending customer dues."
    },
    {
      icon: <FaCar className="w-5 h-5 text-primary" />,
      title: "Vehicle Database",
      link: "/features/vehicles",
      desc: "Map license numbers with specific engine codes and historical repair logs."
    },
    {
      icon: <FaCoins className="w-5 h-5 text-primary" />,
      title: "Payments & Finance",
      link: "/features/finance",
      desc: "Track pending bills, advances, digital payment links, and split workshop expenses."
    },
    {
      icon: <FaChartPie className="w-5 h-5 text-primary" />,
      title: "Analytics & Reports",
      link: "/features/reports",
      desc: "Access daily counter registers, profit margins, tax summaries, and staff performance."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Ecosystem Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Do More Than Inventory with <GradientUnderline>GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Manage your entire workshop operations from an all-in-one platform built for speed and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {relatedFeatures.map((feat, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:shadow-sm transition-shadow duration-200 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-900">{feat.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
              <div className="border-t border-slate-100 pt-3 mt-5">
                <Link href={feat.link} className="text-[10px] text-primary font-bold hover:underline flex items-center gap-1">
                  Explore Feature <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link href="/features" className="text-center flex justify-center">
          <Button>
            View All GarageSaarthi Features
            <FaArrowRight className="w-3.5 h-3.5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

