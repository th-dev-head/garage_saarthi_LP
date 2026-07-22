import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Organize Your <GradientUnderline>Garage Leads and Customers?</GradientUnderline>
        </>
      }
      subtitle="Manage customer profiles, vehicle records, follow-up calendars, service reminders, and discount promotions in one system."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
