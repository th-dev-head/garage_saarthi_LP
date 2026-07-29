import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import UMHero from "../../components/features/user-management/UMHero";
import UMDefinition from "../../components/features/user-management/UMDefinition";
import UMManualVsDigital from "../../components/features/user-management/UMManualVsDigital";
import UMCoreCapabilities from "../../components/features/user-management/UMCoreCapabilities";
import UMWorkflow from "../../components/features/user-management/UMWorkflow";
import UMWorkshopTypes from "../../components/features/user-management/UMWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import UMFAQ from "../../components/features/user-management/UMFAQ";
import UMFinalCTA from "../../components/features/user-management/UMFinalCTA";

export default function UserManagementFeature() {
  return (
    <PageLayout>
      <UMHero />
      <UMDefinition />
      <UMManualVsDigital />
      <UMCoreCapabilities />
      <UMWorkflow />
      <UMWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <UMFAQ />
      <UMFinalCTA />
    </PageLayout>
  );
}
