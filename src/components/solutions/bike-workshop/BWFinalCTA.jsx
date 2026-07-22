import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function BWFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Ready to Manage Your Bike Workshop <GradientUnderline>Digitally?</GradientUnderline>
        </>
      }
      subtitle="Get everything you need to manage your two-wheeler repair shop: digital job cards, customer vehicle profiles, parts stock, invoices, attendance, and automated WhatsApp alerts."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
