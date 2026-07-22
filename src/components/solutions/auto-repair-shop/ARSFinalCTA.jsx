import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function ARSFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Digitize Your{" "}
          <GradientUnderline>Auto Repair Shop?</GradientUnderline>
        </>
      }
      subtitle="Move your garage operations away from complex paper registers and scattered template books into GarageSaarthi."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
