import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import TDHero from "../../components/features/test-drive/TDHero";
import TDDefinition from "../../components/features/test-drive/TDDefinition";
import TDPaperVsDigital from "../../components/features/test-drive/TDPaperVsDigital";
import TDCoreCapabilities from "../../components/features/test-drive/TDCoreCapabilities";
import TDWorkflow from "../../components/features/test-drive/TDWorkflow";
import TDInteractiveDemo from "../../components/features/test-drive/TDInteractiveDemo";
import TDWorkshopTypes from "../../components/features/test-drive/TDWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import TDFAQ from "../../components/features/test-drive/TDFAQ";
import TDFinalCTA from "../../components/features/test-drive/TDFinalCTA";

export default function TestDriveFeature() {
  return (
    <PageLayout>
      <TDHero />
      <TDDefinition />
      <TDPaperVsDigital />
      <TDCoreCapabilities />
      <TDWorkflow />
      <TDInteractiveDemo />
      <TDWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <TDFAQ className="bg-white" />
      <TDFinalCTA />
    </PageLayout>
  );
}
