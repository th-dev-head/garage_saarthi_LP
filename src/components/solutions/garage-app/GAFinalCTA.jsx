import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function GAFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your Garage{" "}
          <GradientUnderline>from Your Mobile?</GradientUnderline>
        </>
      }
      subtitle="Download the mobile application and manage your workshop operations with GarageSaarthi on mobile and web today."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
