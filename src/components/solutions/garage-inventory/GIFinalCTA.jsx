import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GIFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your <GradientUnderline>Garage Inventory Digitally?</GradientUnderline>
        </>
      }
      subtitle="Start organizing your spare parts registry, track live stock quantities across branches, and stop losing money on misplaced workshop inventory."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
