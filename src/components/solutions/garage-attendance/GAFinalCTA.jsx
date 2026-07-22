import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Start Managing Your Garage Staff Attendance Digitally
        </>
      }
      subtitle="Keep mechanic check-ins, leave registers, salary commissions, and daily shifts organized. Get clean records with GarageSaarthi today."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
