import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";
import { FRONTEND_URL } from "@/src/config/env";

export default function GAFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Automate Your <GradientUnderline>Garage Operations</GradientUnderline>?
        </>
      }
      subtitle="Organize job cards, inventory spare parts, track customer service reminders, CRM follow-ups, and billing in a unified platform."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
