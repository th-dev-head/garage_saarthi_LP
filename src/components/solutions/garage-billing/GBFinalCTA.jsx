import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GBFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Streamline Your <GradientUnderline>Workshop Billing?</GradientUnderline>
        </>
      }
      subtitle="Connect your workshop floor job cards with GST invoicing, spare parts inventories, payment logs, and accountant summaries in one system."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
