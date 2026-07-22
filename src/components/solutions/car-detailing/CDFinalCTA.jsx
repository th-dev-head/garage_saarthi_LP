import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function CDFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your Detailing Studio <GradientUnderline>Digitally?</GradientUnderline>
        </>
      }
      subtitle="Get everything you need to manage your detailing business: digital job sheets, customer vehicle profiles, chemicals stock, GST invoices, CRM leads, employee logs, and automated WhatsApp alerts."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
