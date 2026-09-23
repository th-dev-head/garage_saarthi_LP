import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GPHero from "../../components/features/gate-pass/GPHero";
import GPDefinition from "../../components/features/gate-pass/GPDefinition";
import GPPaperVsDigital from "../../components/features/gate-pass/GPPaperVsDigital";
import GPCoreCapabilities from "../../components/features/gate-pass/GPCoreCapabilities";
import GPWorkflow from "../../components/features/gate-pass/GPWorkflow";
import GPInteractiveDemo from "../../components/features/gate-pass/GPInteractiveDemo";
import GPWorkshopTypes from "../../components/features/gate-pass/GPWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import GPFAQ from "../../components/features/gate-pass/GPFAQ";
import GPFinalCTA from "../../components/features/gate-pass/GPFinalCTA";

export default function GatePassFeature() {
  return (
    <PageLayout>
      <GPHero />
      <GPDefinition />
      <GPPaperVsDigital />
      <GPCoreCapabilities />
      <GPWorkflow />
      <GPInteractiveDemo />
      <GPWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <GPFAQ className="bg-white" />
      <GPFinalCTA />
    </PageLayout>
  );
}
