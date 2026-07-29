import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import JCMHero from "../../components/features/job-card-management/JCMHero";
import JCMDefinition from "../../components/features/job-card-management/JCMDefinition";
import JCMPaperVsDigital from "../../components/features/job-card-management/JCMPaperVsDigital";
import JCMCoreCapabilities from "../../components/features/job-card-management/JCMCoreCapabilities";
import JCMWorkflow from "../../components/features/job-card-management/JCMWorkflow";
import JCMWorkshopTypes from "../../components/features/job-card-management/JCMWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import JCMFAQ from "../../components/features/job-card-management/JCMFAQ";
import JCMFinalCTA from "../../components/features/job-card-management/JCMFinalCTA";

export default function JobCardManagementFeature() {
  return (
    <PageLayout>
      <JCMHero />
      <JCMDefinition />
      <JCMPaperVsDigital />
      <JCMCoreCapabilities />
      <JCMWorkflow />
      <JCMWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <JCMFAQ />
      <JCMFinalCTA />
    </PageLayout>
  );
}
