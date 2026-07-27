import React from "react";
import Link from "next/link";
import { FaCheckSquare, FaClipboardList } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

const jobCardBenefits = [
  "Retrieve customer history and vehicle parameters instantly by typing the registration number.",
  "Link past job sheets, parts replaced, and recommendations to the vehicle profile automatically.",
  "Automatically trigger WhatsApp service alerts to the customer when their vehicle is next due."
];

export default function GJCCustomerVehicle() {
  const handleLinkClick = (label) => {
    trackEvent("job_card_feature_link_click", {
      page_path: "/solutions/garage-job-card-software",
      cta_location: "customer_vehicle_connection",
      cta_label: label
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Linked Profiles
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Connect Every Job Card with{" "}
            <GradientUnderline>Customer and Vehicle Records</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
            A standalone job card builder provides only a one-time paper template. GarageSaarthi maintains a linked database:
          </p>
          <div className="space-y-4 mb-8">
            {jobCardBenefits.map((text, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <FaCheckSquare className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="/features/customers"
              onClick={() => handleLinkClick("Customer Management")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Customer Management
            </Link>
            <Link
              href="/features/vehicles"
              onClick={() => handleLinkClick("Vehicle Management")}
              className="text-xs text-primary font-bold hover:underline"
            >
              Vehicle Management
            </Link>
          </div>
        </div>

        {/* Right UI screenshot card representation */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl space-y-4 shadow-sm">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
            <FaClipboardList className="text-primary w-5 h-5" />
            <h3 className="text-sm font-bold text-text-dark uppercase tracking-wide">Vehicle service log</h3>
          </div>
          <div className="space-y-3.5 text-xs text-slate-600">
            <div className="bg-slate-50 p-3 rounded-xl">
              <div className="flex justify-between font-bold text-text-dark">
                <span>Creta (GJ-05-CD-5678)</span>
                <span className="text-primary">Completed</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Advisor: Rajesh Patel | Completed: May 24, 2026</p>
              <p className="text-[11px] text-slate-500 mt-2">Services: General Oil Service, Brake Pad Replacement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


