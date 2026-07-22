import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import PromoCTA from "../../common/PromoCTA";
import GradientUnderline from "../../common/GradientUnderline";

export default function VSHFinalCTA() {
  return (
    <PromoCTA
      title={
        <>
          Keep Every Vehicle Service Record Organized with GarageSaarthi
        </>
      }
      subtitle="Manage customer vehicles, previous service records, repair logs, and garage operations centrally under one dashboard."
      trialUrl={`${FRONTEND_URL}/signup`}
    />
  );
}
