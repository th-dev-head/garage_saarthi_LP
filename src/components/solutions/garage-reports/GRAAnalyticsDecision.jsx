import React from "react";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";

export default function GRAAnalyticsDecision() {
  const handleTrialClick = () => {
    trackEvent("reports_trial_cta_click", {
      page_path: "/solutions/garage-reports-analytics-software",
      cta_location: "analytics_decision_section",
      cta_label: "Start Your 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Decision Support
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Use Garage Analytics to Make Better Business Decisions
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          GarageSaarthi acts as an intuitive dashboard for auto repair shops and motorcycle centers. It displays exactly how your inventory is moving, which branch needs attention, and what billing milestones are reached.
        </p>
        <div className="pt-4 flex justify-center">
          <Button variant="trial" onClick={handleTrialClick}>
            Start Your 7-Day Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}