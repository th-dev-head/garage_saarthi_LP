import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";
import GradientUnderline from "../common/GradientUnderline";

export default function GEBusinessType() {
  const handleTypeClick = (typeName) => {
    trackEvent("solution_click", {
      page_path: "/solutions/garage-erp-software",
      page_type: "core_commercial",
      page_topic: "garage_erp_software",
      cta_location: "business_type",
      cta_label: "Solution Link Clicked",
      solution_name: typeName
    });
  };

  const businessTypes = [
    {
      title: "Car Garages",
      desc: "Connect passenger car check-in registers, parts inventory, mechanics, and billing summaries.",
      link: "/solutions/car-garage-software"
    },
    {
      title: "Automobile Workshops",
      desc: "Streamline multi-brand repair cycles, vehicle records, and CA accounting list access.",
      link: "/solutions/automobile-workshop-software"
    },
    {
      title: "Auto Repair Shops",
      desc: "Manage customer leads, work orders, service reminders, and invoice sheets.",
      link: "/solutions/auto-repair-shop-software"
    },
    {
      title: "Vehicle Workshops",
      desc: "Run independent or dealership level work orders, mechanic shifts, and spare parts stock.",
      link: "/solutions/workshop-management-software"
    },
    {
      title: "Multi-Branch Garages",
      desc: "Manage multi-center networks with central logins, consolidated reports, and branch comparisons.",
      link: "/solutions/multi-branch-garage-software"
    },
    {
      title: "Workshop Chains",
      desc: "Run franchised networks with central inventories, pricing lists, and consolidated logs.",
      link: "/solutions/workshop-management-app"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            ERP Software for Automotive{" "}
            <GradientUnderline>Garages and Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our platform supports multiple automotive workshop business styles. Select your category below to explore specific workflows:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessTypes.map((type, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-all duration-200">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{type.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {type.desc}
                </p>
              </div>
              <Link
                href={type.link}
                onClick={() => handleTypeClick(type.title)}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline self-start"
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
