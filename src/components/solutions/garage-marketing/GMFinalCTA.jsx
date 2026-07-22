import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GMFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Engage More Garage Customers <GradientUnderline>with GarageSaarthi?</GradientUnderline>
        </>
      }
      subtitle="Start creating promotional offers, organizing customer lead follow-ups, sending WhatsApp notifications, and managing daily garage operations with GarageSaarthi."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
