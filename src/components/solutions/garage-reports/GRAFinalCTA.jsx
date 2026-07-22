import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GRAFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Understand Your <GradientUnderline>Garage Business Better</GradientUnderline>?
        </>
      }
      subtitle="Access structured business reports, track sales and payments collected, manage spare parts inventory, and organize multi-branch performance lists."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
