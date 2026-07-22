import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";

export default function WMFinalCTA() {
  return (
    <PromoCTA
      title="Ready to Digitize Your Workshop with GarageSaarthi?"
      subtitle="Join thousands of smart workshop owners across India who manage job cards, inventory, billing, staff, and customer follow-ups from one platform."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}

