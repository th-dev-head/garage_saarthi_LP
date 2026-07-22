import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function BGSFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Find Out If GarageSaarthi Is Right <GradientUnderline>for Your Workshop</GradientUnderline>
        </>
      }
      subtitle="Create a customer profile, register a vehicle, prepare a digital job sheet, deduct inventory stock, generate a GST bill, and explore your garage dashboard during the 7-day free trial."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
