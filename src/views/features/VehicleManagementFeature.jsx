import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import VehHero from "../../components/features/vehicles/VehHero";
import VehDefinition from "../../components/features/vehicles/VehDefinition";
import VehPaperVsDigital from "../../components/features/vehicles/VehPaperVsDigital";
import VehCoreCapabilities from "../../components/features/vehicles/VehCoreCapabilities";
import VehAddVehicleAndDocs from "../../components/features/vehicles/VehAddVehicleAndDocs";
import VehWorkflow from "../../components/features/vehicles/VehWorkflow";
import VehWorkshopTypes from "../../components/features/vehicles/VehWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import VehFAQ from "../../components/features/vehicles/VehFAQ";
import VehFinalCTA from "../../components/features/vehicles/VehFinalCTA";

export default function VehicleManagementFeature() {
  return (
    <PageLayout>
      <VehHero />
      <VehDefinition />
      <VehPaperVsDigital />
      <VehCoreCapabilities />
      <VehAddVehicleAndDocs />
      <VehWorkflow />
      <VehWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <VehFAQ className="bg-white" />
      <VehFinalCTA />
    </PageLayout>
  );
}
