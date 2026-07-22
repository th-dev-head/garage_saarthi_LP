import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GACFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Organize Your Garage Finances with GarageSaarthi?
        </>
      }
      subtitle="Bring billing, GST invoicing, payments tracking, expenses, loan records, and CA Access under a single workshop-focused dashboard. Start using GarageSaarthi today."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
