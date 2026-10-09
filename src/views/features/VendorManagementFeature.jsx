import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import VMHero from "../../components/features/vendor-management/VMHero";
import VMDefinition from "../../components/features/vendor-management/VMDefinition";
import VMPaperVsDigital from "../../components/features/vendor-management/VMPaperVsDigital";
import VMCoreCapabilities from "../../components/features/vendor-management/VMCoreCapabilities";
import VMWorkflow from "../../components/features/vendor-management/VMWorkflow";
import VMInteractiveDemo from "../../components/features/vendor-management/VMInteractiveDemo";
import VMWorkshopTypes from "../../components/features/vendor-management/VMWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import VMFAQ from "../../components/features/vendor-management/VMFAQ";
import VMFinalCTA from "../../components/features/vendor-management/VMFinalCTA";

export default function VendorManagementFeature() {
  return (
    <PageLayout>
      <VMHero />
      <VMDefinition />
      <VMPaperVsDigital />
      <VMCoreCapabilities />
      <VMWorkflow />
      <VMInteractiveDemo />
      <VMWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <VMFAQ />
      <VMFinalCTA />
    </PageLayout>
  );
}
