import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";
import GradientUnderline from "../common/GradientUnderline";

export default function GCOperations() {
  const handleFeatureClick = (name) => {
    trackEvent("crm_feature_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "operations_connection",
      cta_label: "Explore Feature",
      feature_name: name
    });
  };

  const modules = [
    { name: "Job Cards", link: "/features/job-cards", desc: "Create digital job cards and link them to customer files." },
    { name: "Vehicles", link: "/features/vehicles", desc: "Maintain structured vehicle attributes and service records." },
    { name: "Customers", link: "/features/customers", desc: "Manage a centralized database of customer profiles and dues." },
    { name: "Service Alerts", link: "/features/service-alerts", desc: "Set reminders and service follow-up schedules." },
    { name: "Offers & Promotions", link: "/features/offers-promotions", desc: "Send customer coupons, promotions, and discounts." },
    { name: "Reports", link: "/features/reports", desc: "Track collection records, sales reports, and daily summaries." }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Operations Sync
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            More Than a CRM - Connected with Your <GradientUnderline>Garage Operations</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi CRM doesn't work in isolation. It connects with your daily workshop, billing, and inventory tasks:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-150 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{m.name}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{m.desc}</p>
              </div>
              <Link
                href={m.link}
                onClick={() => handleFeatureClick(m.name)}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start"
              >
                Explore Feature
                <FaChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/features">
            <Button variant="hero">
              View All GarageSaarthi Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
