import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function VSHFeatures() {
  const handleFeatureClick = (name) => {
    trackEvent("feature_click", {
      page_path: "/solutions/vehicle-service-history-software",
      cta_location: "related_features",
      cta_label: "Explore Feature",
      feature_name: name
    });
  };

  const features = [
    { title: "Digital Job Cards", desc: "Open job sheets with checklists.", link: "/features/job-cards" },
    { title: "Customer Management", desc: "Keep owner details organized.", link: "/features/customers" },
    { title: "Vehicle Management", desc: "Link multiple logs to one owner.", link: "/features/vehicles" },
    { title: "Service Alerts", desc: "Track upcoming due timelines.", link: "/features/service-alerts" },
    { title: "Inventory Management", desc: "Manage spare parts stock logs.", link: "/features/inventory" },
    { title: "Garage CRM", desc: "Manage customer followups.", link: "/features/crm" },
    { title: "Reports", desc: "Access business reports sheets.", link: "/features/reports" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Connected Platform
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage More Than <GradientUnderline>Vehicle Service History</GradientUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{f.title}</h3>
                <p className="text-xs text-slate-500 mb-6">{f.desc}</p>
              </div>
              <Link href={f.link} onClick={() => handleFeatureClick(f.title)} className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start">
                Explore Feature <FaChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
          <div className="bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-slate-800">
            <div>
              <h3 className="text-sm font-bold mb-2">View All Features</h3>
              <p className="text-xs text-slate-300 mb-6">Explore the full power of GarageSaarthi platform.</p>
            </div>
            <Link href="/features" className="flex items-center gap-1 text-xs text-orange-400 font-bold hover:underline mt-auto self-start">
              Explore All <FaChevronRight className="w-2.5 h-2.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}