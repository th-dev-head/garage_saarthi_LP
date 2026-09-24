import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GTDFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Protect Your <GradientUnderline>Workshop Road Tests &amp; Keys?</GradientUnderline>
        </>
      }
      subtitle="Eliminate unauthorized joyrides, track exact odometer mileage, and capture digital damage signatures in seconds."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
