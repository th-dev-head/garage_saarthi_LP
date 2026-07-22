import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";
import { FRONTEND_URL } from "@/src/config/env";

export default function GCEFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Stay Connected with Your Garage Customers Using <GradientUnderline>GarageSaarthi</GradientUnderline>
        </>
      }
      subtitle="Organize customer databases, set up automated service reminders, track CRM follow-ups, and send promotional offers in one single place."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
