import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";

export default function CGFinalCTA() {
  return (
    <PromoCTA
      title="Ready to Manage Your Car Garage with GarageSaarthi?"
      subtitle="Move from scattered paper records and WhatsApp conversations to a centralized car garage management platform. Start your 7-day free trial and see the difference on day one."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}

