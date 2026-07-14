import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../common/PromoCTA";

export default function AWFinalCTA() {
  return (
    <PromoCTA
      title="Ready to Manage Your Automobile Workshop Digitally?"
      subtitle="Join thousands of smart garage owners who use GarageSaarthi to manage job cards, spare parts inventory, billing, staff, and customer follow-ups from one platform."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
