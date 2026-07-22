import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import PlayStoreBadge from "../../common/PlayStoreBadge";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCEHero() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-customer-engagement-software",
      page_name: "garage_customer_engagement_software",
      cta_location: "hero",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  const handleFeatureClick = () => {
    trackEvent("customer_engagement_feature_click", {
      page_path: "/solutions/garage-customer-engagement-software",
      page_name: "garage_customer_engagement_software",
      cta_location: "hero",
      cta_label: "Explore Customer Engagement Features",
      feature_name: "Customer Engagement"
    });
  };

  return (
    <section className="relative pt-48 pb-24 md:pt-45 md:pb-32 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white overflow-hidden flex justify-center">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-full lg:max-w-3xl w-full relative z-10 text-center flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl">
          <span className="text-xs uppercase tracking-widest bg-orange-600/30 text-orange-400 px-3 py-1.5 rounded-full border border-orange-500/20 font-semibold mb-6 inline-block">
            Customer Engagement
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Garage Customer Engagement Software to <GradientUnderline>Stay Connected</GradientUnderline> with Every Customer
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Organize customer communication, service reminders, leads CRM, and special offers. Built specifically for garages, car workshops, and automobile service centres in India to boost repeat visits and build lasting relationships.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full sm:w-auto">
            <Button
              variant="trial"
              onClick={handleTrialClick}
              icon={<FaArrowRight className="w-3.5 h-3.5" />}
              className="w-full sm:w-auto"
            >
              Start 7-Day Free Trial
            </Button>
            <Link
              href="#features-section"
              onClick={handleFeatureClick}
              className="rounded-full border border-white/30 bg-white/5 hover:bg-white/10 text-white px-8 py-3 text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer w-full sm:w-auto whitespace-nowrap h-11 text-center"
            >
              Explore Customer Engagement Features
            </Link>
            <PlayStoreBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
