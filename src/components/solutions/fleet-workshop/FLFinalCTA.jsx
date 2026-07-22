import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function FLFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your Fleet Workshop <GradientUnderline>Digitally?</GradientUnderline>
        </>
      }
      subtitle="Get everything you need to manage your fleet maintenance business: digital job cards, vehicle maintenance logs, parts inventory, GST invoices, mechanic logs, and automated WhatsApp alerts."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
