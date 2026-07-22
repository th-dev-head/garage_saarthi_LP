import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GCFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Digitize Your{" "}
          <GradientUnderline>Garage Job Cards?</GradientUnderline>
        </>
      }
      subtitle="Ditch paper records and streamline your workshop floor operations. Create, track, and complete garage work orders digitally with GarageSaarthi."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
