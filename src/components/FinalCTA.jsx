import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "./common/PromoCTA";

export default function FinalCTA() {
  return (
    <PromoCTA
      title="Ready to Manage Your Garage with GarageSaarthi?"
      subtitle="Join hundreds of smart workshop owners digitizing their auto business. Create job cards, manage stock, and track staff payroll with India's easiest garage management software."
      trialUrl={`${FRONTEND_URL}/register`}
    />
  );
}
