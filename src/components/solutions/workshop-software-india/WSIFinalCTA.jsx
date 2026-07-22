import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function WSIFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your Workshop <GradientUnderline>Digitally?</GradientUnderline>
        </>
      }
      subtitle="Join automobile workshops across India using GarageSaarthi for digital job cards, GST billing, spare parts inventory, mechanic payroll, and automated WhatsApp alerts."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
