import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import CRMHero from "../../components/features/crm/CRMHero";
import CRMDefinition from "../../components/features/crm/CRMDefinition";
import CRMPaperVsDigital from "../../components/features/crm/CRMPaperVsDigital";
import CRMCoreCapabilities from "../../components/features/crm/CRMCoreCapabilities";
import CRMWorkflow from "../../components/features/crm/CRMWorkflow";
import CRMRetention from "../../components/features/crm/CRMRetention";
import CRMWorkshopTypes from "../../components/features/crm/CRMWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import CRMFAQ from "../../components/features/crm/CRMFAQ";
import CRMFinalCTA from "../../components/features/crm/CRMFinalCTA";

export default function CRMLeadManagementFeature() {
  return (
    <PageLayout>
      <CRMHero />
      <CRMDefinition />
      <CRMPaperVsDigital />
      <CRMCoreCapabilities />
      <CRMWorkflow />
      <CRMRetention />
      <CRMWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <CRMFAQ />
      <CRMFinalCTA />
    </PageLayout>
  );
}
