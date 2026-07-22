import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GEFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Centralize and{" "}
          <GradientUnderline>Grow Your Garage Business?</GradientUnderline>
        </>
      }
      subtitle="Join hundreds of multi-brand workshops and garage chains across India using GarageSaarthi ERP to manage their business efficiently."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
