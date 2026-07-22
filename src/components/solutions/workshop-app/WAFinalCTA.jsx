import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function WAFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your Workshop{" "}
          <GradientUnderline>from One App?</GradientUnderline>
        </>
      }
      subtitle="Start your trial or download the Android app and digitize your workshop management with GarageSaarthi."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
