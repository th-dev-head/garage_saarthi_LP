import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import LHero from "../../components/features/loans/LHero";
import LDefinition from "../../components/features/loans/LDefinition";
import LManualVsDigital from "../../components/features/loans/LManualVsDigital";
import LCoreCapabilities from "../../components/features/loans/LCoreCapabilities";
import LWorkflow from "../../components/features/loans/LWorkflow";
import LLoanTools from "../../components/features/loans/LLoanTools";
import LWorkshopTypes from "../../components/features/loans/LWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import LFAQ from "../../components/features/loans/LFAQ";
import LFinalCTA from "../../components/features/loans/LFinalCTA";

export default function LoanManagementFeature() {
  return (
    <PageLayout>
      <LHero />
      <LDefinition />
      <LManualVsDigital />
      <LCoreCapabilities />
      <LWorkflow />
      <LLoanTools />
      <LWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <LFAQ />
      <LFinalCTA />
    </PageLayout>
  );
}
