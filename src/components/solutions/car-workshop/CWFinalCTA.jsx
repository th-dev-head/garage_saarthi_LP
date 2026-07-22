import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function CWFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your Car Workshop with GarageSaarthi?
        </>
      }
      subtitle="Bring job cards, customers, vehicles, inventory, billing, service reminders, and staff management under a single workshop-focused dashboard. Start using GarageSaarthi today."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
