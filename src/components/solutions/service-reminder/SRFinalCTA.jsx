import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function SRFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Simplify Your Garage <GradientUnderline>Service Follow-Ups</GradientUnderline>?
        </>
      }
      subtitle="Bring structure to your customer alerts, check vehicle service due dates, and build repeat business with GarageSaarthi."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
