import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function MBFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage All Your Garage Branches from One Platform?
        </>
      }
      subtitle="Bring your garage branches, users, and daily workshop operations under one unified cloud-based dashboard with GarageSaarthi."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
