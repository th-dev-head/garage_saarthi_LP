import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function TWFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Digitize Your <GradientUnderline>Truck Workshop?</GradientUnderline>
        </>
      }
      subtitle="Get everything you need to manage your heavy vehicle repair shop: digital job cards, commercial vehicle profiles, parts stock, invoices, attendance, and reports."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
