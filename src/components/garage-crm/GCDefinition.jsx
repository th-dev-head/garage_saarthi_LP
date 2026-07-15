import React from "react";
import Link from "next/link";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";
import GradientUnderline from "../common/GradientUnderline";

export default function GCDefinition() {
  const handleCtaClick = () => {
    trackEvent("crm_feature_click", {
      page_path: "/solutions/garage-crm-software",
      page_name: "garage_crm_software",
      cta_location: "definition",
      cta_label: "Explore GarageSaarthi CRM",
      feature_name: "CRM"
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          CRM Definition
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-text-dark mt-4 mb-6 leading-tight">
          CRM Software Built for <GradientUnderline>Garages and Automotive Workshops</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
          Unlike general business CRMs built for digital sales teams or retail chains, automotive workshop CRM systems require a unique configuration. A garage customer record is not just a phone number; it is closely tied to one or more customer vehicles, historical service logs, spare parts replacement histories, and upcoming service schedules.
        </p>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-8">
          GarageSaarthi provides this integrated garage customer management software approach. We connect front-office customer CRM enquiries with daily workshop floor operations, helping you maintain regular contact without manual records friction.
        </p>

        <div className="flex justify-center">
          <Link href="/features/crm">
            <Button
              variant="hero"
              onClick={handleCtaClick}
            >
              Explore GarageSaarthi CRM
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
