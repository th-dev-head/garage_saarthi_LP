import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import CSHero from "../../components/features/counter-sales/CSHero";
import CSDefinition from "../../components/features/counter-sales/CSDefinition";
import CSPaperVsDigital from "../../components/features/counter-sales/CSPaperVsDigital";
import CSCoreCapabilities from "../../components/features/counter-sales/CSCoreCapabilities";
import CSWorkflow from "../../components/features/counter-sales/CSWorkflow";
import CSWorkshopTypes from "../../components/features/counter-sales/CSWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import CSFAQ from "../../components/features/counter-sales/CSFAQ";
import CSFinalCTA from "../../components/features/counter-sales/CSFinalCTA";

export default function CounterSalesFeature() {
  return (
    <PageLayout>
      <CSHero />
      <CSDefinition />
      <CSPaperVsDigital />
      <CSCoreCapabilities />
      <CSWorkflow />
      <CSWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <CSFAQ />
      <CSFinalCTA />
    </PageLayout>
  );
}
