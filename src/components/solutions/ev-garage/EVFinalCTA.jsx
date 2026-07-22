import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function EVFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your EV Garage <GradientUnderline>Digitally?</GradientUnderline>
        </>
      }
      subtitle="Get everything you need to manage your electric vehicle workshop: digital job cards, EV profiles, parts stock, GST invoices, CRM leads, employee logs, and automated WhatsApp alerts."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
