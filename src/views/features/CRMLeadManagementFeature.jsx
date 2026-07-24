"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const CRMHero = dynamic(() => import("../../components/features/crm/CRMHero"), { ssr: false });
const CRMDefinition = dynamic(() => import("../../components/features/crm/CRMDefinition"), { ssr: false });
const CRMPaperVsDigital = dynamic(() => import("../../components/features/crm/CRMPaperVsDigital"), { ssr: false });
const CRMCoreCapabilities = dynamic(() => import("../../components/features/crm/CRMCoreCapabilities"), { ssr: false });
const CRMWorkflow = dynamic(() => import("../../components/features/crm/CRMWorkflow"), { ssr: false });
const CRMRetention = dynamic(() => import("../../components/features/crm/CRMRetention"), { ssr: false });
const CRMWorkshopTypes = dynamic(() => import("../../components/features/crm/CRMWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const CRMFAQ = dynamic(() => import("../../components/features/crm/CRMFAQ"), { ssr: false });
const CRMFinalCTA = dynamic(() => import("../../components/features/crm/CRMFinalCTA"), { ssr: false });

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
