import React from "react";
import MCHero from "../../components/features/mechanic-clocking/MCHero";
import MCDefinition from "../../components/features/mechanic-clocking/MCDefinition";
import MCPaperVsDigital from "../../components/features/mechanic-clocking/MCPaperVsDigital";
import MCCoreCapabilities from "../../components/features/mechanic-clocking/MCCoreCapabilities";
import MCWorkflow from "../../components/features/mechanic-clocking/MCWorkflow";
import MCInteractiveDemo from "../../components/features/mechanic-clocking/MCInteractiveDemo";
import MCWorkshopTypes from "../../components/features/mechanic-clocking/MCWorkshopTypes";
import MCFAQ from "../../components/features/mechanic-clocking/MCFAQ";
import MCFinalCTA from "../../components/features/mechanic-clocking/MCFinalCTA";

export default function MechanicClockingFeature() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MCHero />
      <MCDefinition />
      <MCPaperVsDigital />
      <MCCoreCapabilities />
      <MCWorkflow />
      <MCInteractiveDemo />
      <MCWorkshopTypes />
      <MCFAQ />
      <MCFinalCTA />
    </div>
  );
}
