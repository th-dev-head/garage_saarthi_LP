import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRAReportsOverview() {
  const handleFeatureClick = (name) => {
    trackEvent("reports_feature_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "reports_overview",
      cta_label: "Explore Category",
      feature_name: name
    });
  };

  const reports = [
    { title: "Sales Reports", desc: "Track sales invoice data and counters sales summaries.", link: "/features/counter-sales", label: "Counter Sales" },
    { title: "Finance Reports", desc: "Manage payment receipts, bills, and expense summaries.", link: "/features/finance", label: "Finance Management" },
    { title: "Inventory Reports", desc: "Monitor spare parts stock lists, reorder levels, and entries.", link: "/features/inventory", label: "Inventory" },
    { title: "Service Reports", desc: "View detailed workshop checklists and job card lists.", link: "/features/job-card-management", label: "Digital Job Cards" },
    { title: "Customer Reports", desc: "Access repeat visit sheets and customer profile sheets.", link: "/features/customers", label: "Customer List" },
    { title: "Employee & Staff Reports", desc: "Check attendance metrics and payroll statements.", link: "/features/attendance", label: "Staff Records" },
    { title: "Vehicle Reports", desc: "Review diagnostic logs and historical repair summaries.", link: "/features/vehicles", label: "Vehicle Profiles" },
    { title: "Branch Reports", desc: "Track multibranch sales and performance comparisons.", link: "/features/branches", label: "Branch Operations" }
  ];

  return (
    <section id="garage-reports" className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Reporting Suite
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            View Important Garage Reports from <GradientUnderline>One Software</GradientUnderline>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reports.map((r, idx) => (
            <div key={idx} className="bg-white border border-slate-200/60 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{r.title}</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{r.desc}</p>
              </div>
              <Link href={r.link} onClick={() => handleFeatureClick(r.title)} className="flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-auto self-start">
                Explore {r.label} <FaChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}