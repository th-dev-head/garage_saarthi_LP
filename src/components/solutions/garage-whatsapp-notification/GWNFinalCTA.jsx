import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";
import { FRONTEND_URL } from "@/src/config/env";

export default function GWNFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Simplify Garage <GradientUnderline>Customer Notifications</GradientUnderline>?
        </>
      }
      subtitle="Organize customer databases, set up upcoming service alerts, track follow-up activities, and send WhatsApp reminders in one click."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
