import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GGPFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Secure Your <GradientUnderline>Workshop Perimeter &amp; Exits?</GradientUnderline>
        </>
      }
      subtitle="Eliminate unauthorized vehicle drive-aways, prevent unpaid customer exits, and verify gate clearances in 2 seconds with zero guard login."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
