import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GFMFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Organize Your Garage Finances?
        </>
      }
      subtitle="Bring your job cards, counter sales, billing, expenses, and CA Access into one workshop-focused workspace. Let GarageSaarthi organize your business records."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
