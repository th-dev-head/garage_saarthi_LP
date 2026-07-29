import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import FHero from "../../components/features/finance/FHero";
import FDefinition from "../../components/features/finance/FDefinition";
import FManualVsDigital from "../../components/features/finance/FManualVsDigital";
import FCoreCapabilities from "../../components/features/finance/FCoreCapabilities";
import FWorkflow from "../../components/features/finance/FWorkflow";
import FFinanceTools from "../../components/features/finance/FFinanceTools";
import FWorkshopTypes from "../../components/features/finance/FWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import FFAQ from "../../components/features/finance/FFAQ";
import FFinalCTA from "../../components/features/finance/FFinalCTA";

export default function FinanceManagementFeature() {
  return (
    <PageLayout>
      <FHero />
      <FDefinition />
      <FManualVsDigital />
      <FCoreCapabilities />
      <FWorkflow />
      <FFinanceTools />
      <FWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <FFAQ />
      <FFinalCTA />
    </PageLayout>
  );
}
