import React from "react";
import IMHero from "../../components/features/insurance-management/IMHero";
import IMDefinition from "../../components/features/insurance-management/IMDefinition";
import IMPaperVsDigital from "../../components/features/insurance-management/IMPaperVsDigital";
import IMCoreCapabilities from "../../components/features/insurance-management/IMCoreCapabilities";
import IMWorkflow from "../../components/features/insurance-management/IMWorkflow";
import IMInteractiveDemo from "../../components/features/insurance-management/IMInteractiveDemo";
import IMWorkshopTypes from "../../components/features/insurance-management/IMWorkshopTypes";
import IMFAQ from "../../components/features/insurance-management/IMFAQ";
import IMFinalCTA from "../../components/features/insurance-management/IMFinalCTA";

export default function InsuranceManagementFeature() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <IMHero />
      <IMDefinition />
      <IMPaperVsDigital />
      <IMCoreCapabilities />
      <IMWorkflow />
      <IMInteractiveDemo />
      <IMWorkshopTypes />
      <IMFAQ />
      <IMFinalCTA />
    </div>
  );
}
