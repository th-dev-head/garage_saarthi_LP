import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GSIFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your Indian Workshop <GradientUnderline>Digitally?</GradientUnderline>
        </>
      }
      subtitle="Join workshop owners across India using GarageSaarthi for digital job cards, GST billing, spare parts inventory, mechanic commissions, and automated WhatsApp alerts."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
