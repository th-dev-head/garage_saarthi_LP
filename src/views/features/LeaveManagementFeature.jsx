import React from "react";
import PageLayout from "@/src/components/common/PageLayout";

import LMHero from "../../components/features/leave-management/LMHero";
import LMDefinition from "../../components/features/leave-management/LMDefinition";
import LMCoreCapabilities from "../../components/features/leave-management/LMCoreCapabilities";
import LMWorkflow from "../../components/features/leave-management/LMWorkflow";
import LMWorkshopTypes from "../../components/features/leave-management/LMWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import LMFAQ from "../../components/features/leave-management/LMFAQ";
import LMFinalCTA from "../../components/features/leave-management/LMFinalCTA";

export default function LeaveManagementFeature() {
  return (
    <PageLayout>
      <LMHero />
      <LMDefinition />
      <LMCoreCapabilities />
      <LMWorkflow />
      <LMWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <LMFAQ />
      <LMFinalCTA />
    </PageLayout>
  );
}
