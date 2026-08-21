import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import VIHero from "../../components/features/vehicle-inspection/VIHero";
import VIDefinition from "../../components/features/vehicle-inspection/VIDefinition";
import VICoreCapabilities from "../../components/features/vehicle-inspection/VICoreCapabilities";
import VIWorkflow from "../../components/features/vehicle-inspection/VIWorkflow";
import VIPaperVsDigital from "../../components/features/vehicle-inspection/VIPaperVsDigital";
import VIWorkshopTypes from "../../components/features/vehicle-inspection/VIWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import VIFAQ from "../../components/features/vehicle-inspection/VIFAQ";
import VIFinalCTA from "../../components/features/vehicle-inspection/VIFinalCTA";

export default function VehicleInspectionFeature() {
  return (
    <PageLayout>
      <VIHero />
      <VIDefinition />
      <VIPaperVsDigital />
      <VICoreCapabilities />
      <VIWorkflow />
      <VIWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <VIFAQ />
      <VIFinalCTA />
    </PageLayout>
  );
}
