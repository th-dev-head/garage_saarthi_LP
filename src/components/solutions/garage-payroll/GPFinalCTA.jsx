import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GPFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Simplify Payroll Management for Your Garage?
        </>
      }
      subtitle="Manage mechanic salaries, daily wages, attendance records, leaves, and commissions within one unified workspace. Start using GarageSaarthi today."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
