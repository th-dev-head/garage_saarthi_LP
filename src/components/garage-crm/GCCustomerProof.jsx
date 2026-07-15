import React from "react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";

export default function GCCustomerProof() {
  const handleCtaClick = () => {
    trackEvent("customer_story_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "customer_proof",
      cta_label: "View Customer Stories",
      destination: "/customers"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Customer Success
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-8 leading-tight">
          Built for Real Garage and Workshop Customer Workflows
        </h2>

        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 md:p-12 shadow-sm text-left max-w-2xl mx-auto relative">
          <div className="flex gap-1 text-orange-400 mb-6 justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="text-slate-700 text-sm md:text-base italic leading-relaxed mb-6">
            "We were losing track of customer check-in diaries and enquiries. Adding leads to GarageSaarthi CRM lets us log their AC or painting requirements, schedule call back follow-ups, and look up service history logs by vehicle number. Our service bookings have become extremely organized."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-primary">
              JS
            </div>
            <div>
              <h4 className="text-xs font-bold text-text-dark">Jignesh S.</h4>
              <p className="text-[10px] text-slate-400">Sai Auto Care, Surat (Car Workshop CRM &amp; Service Center)</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/customers">
            <Button
              variant="hero"
              onClick={handleCtaClick}
            >
              View Customer Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
