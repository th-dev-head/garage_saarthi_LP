import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function BWSFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Try GarageSaarthi with Your Workshop <GradientUnderline>for 7 Days</GradientUnderline>
        </>
      }
      subtitle="Get everything you need to manage your automobile workshop: digital job cards, GST billing, spare parts inventory, customer records, vehicle service history, mechanic payroll, and automated WhatsApp alerts."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
