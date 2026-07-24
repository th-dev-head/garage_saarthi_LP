"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const VehHero = dynamic(() => import("../../components/features/vehicles/VehHero"), { ssr: false });
const VehDefinition = dynamic(() => import("../../components/features/vehicles/VehDefinition"), { ssr: false });
const VehPaperVsDigital = dynamic(() => import("../../components/features/vehicles/VehPaperVsDigital"), { ssr: false });
const VehCoreCapabilities = dynamic(() => import("../../components/features/vehicles/VehCoreCapabilities"), { ssr: false });
const VehWorkflow = dynamic(() => import("../../components/features/vehicles/VehWorkflow"), { ssr: false });
const VehWorkshopTypes = dynamic(() => import("../../components/features/vehicles/VehWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const VehFAQ = dynamic(() => import("../../components/features/vehicles/VehFAQ"), { ssr: false });
const VehFinalCTA = dynamic(() => import("../../components/features/vehicles/VehFinalCTA"), { ssr: false });

export default function VehicleManagementFeature() {
  return (
    <PageLayout>
      <VehHero />
      <VehDefinition />
      <VehPaperVsDigital />
      <VehCoreCapabilities />
      <VehWorkflow />
      <VehWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <VehFAQ className="bg-slate-50" />
      <VehFinalCTA />
    </PageLayout>
  );
}
