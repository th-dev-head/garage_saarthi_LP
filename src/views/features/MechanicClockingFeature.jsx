import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import MCHero from "../../components/features/mechanic-clocking/MCHero";
import MCDefinition from "../../components/features/mechanic-clocking/MCDefinition";
import MCPaperVsDigital from "../../components/features/mechanic-clocking/MCPaperVsDigital";
import MCCoreCapabilities from "../../components/features/mechanic-clocking/MCCoreCapabilities";
import MCWorkflow from "../../components/features/mechanic-clocking/MCWorkflow";
import MCInteractiveDemo from "../../components/features/mechanic-clocking/MCInteractiveDemo";
import MCWorkshopTypes from "../../components/features/mechanic-clocking/MCWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import MCFAQ from "../../components/features/mechanic-clocking/MCFAQ";
import MCFinalCTA from "../../components/features/mechanic-clocking/MCFinalCTA";

export default function MechanicClockingFeature() {
  return (
    <PageLayout>
      <MCHero />
      <MCDefinition />
      <MCPaperVsDigital />
      <MCCoreCapabilities />
      <MCWorkflow />
      <MCInteractiveDemo />
      <MCWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <MCFAQ />
      <MCFinalCTA />
    </PageLayout>
  );
}
