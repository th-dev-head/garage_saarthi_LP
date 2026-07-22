import React from "react";
import Button from "../../common/Button";
import { FRONTEND_URL } from "@/src/config/env";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNAutomation() {
  const handleTrialClick = () => {
    trackEvent("trial_cta_click", {
      page_path: "/solutions/garage-whatsapp-notification-software",
      page_name: "garage_whatsapp_notification_software",
      cta_location: "automation_banner",
      cta_label: "Start 7-Day Free Trial",
      destination: `${FRONTEND_URL}/signup`
    });
    window.open(`${FRONTEND_URL}/signup`, "_blank");
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          Workflow Automation
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Automate WhatsApp Reminders for Daily <GradientUnderline>Garage Follow-Ups</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Leverage <strong className="text-primary capitalize">garage whatsapp automation</strong> to streamline customer outreach. GarageSaarthi automatically identifies which vehicles are reaching their service milestones, letting your team dispatch alerts seamlessly.
        </p>
        
        <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
          Advisors can review the automated list in our <strong className="text-primary capitalize">workshop whatsapp automation</strong> panel and send notifications with a single click. Reduce manual typing errors, save hours of administrative tasks, and keep follow-up processes running efficiently.
        </p>

        <div className="pt-4 flex justify-center">
          <Button variant="trial" onClick={handleTrialClick}>
            Start 7-Day Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
