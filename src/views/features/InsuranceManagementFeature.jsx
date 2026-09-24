import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import IMHero from "../../components/features/insurance-management/IMHero";
import IMDefinition from "../../components/features/insurance-management/IMDefinition";
import IMPaperVsDigital from "../../components/features/insurance-management/IMPaperVsDigital";
import IMCoreCapabilities from "../../components/features/insurance-management/IMCoreCapabilities";
import IMWorkflow from "../../components/features/insurance-management/IMWorkflow";
import IMInteractiveDemo from "../../components/features/insurance-management/IMInteractiveDemo";
import IMWorkshopTypes from "../../components/features/insurance-management/IMWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import IMFAQ from "../../components/features/insurance-management/IMFAQ";
import IMFinalCTA from "../../components/features/insurance-management/IMFinalCTA";

export default function InsuranceManagementFeature() {
  return (
    <PageLayout>
      <IMHero />
      <IMDefinition />
      <IMPaperVsDigital />
      <IMCoreCapabilities />
      <IMWorkflow />
      <IMInteractiveDemo />
      <IMWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <IMFAQ />
      <IMFinalCTA />
    </PageLayout>
  );
}
