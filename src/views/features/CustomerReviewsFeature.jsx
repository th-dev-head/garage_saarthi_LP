"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const CRHero = dynamic(() => import("../../components/features/customer-reviews/CRHero"), { ssr: false });
const CRDefinition = dynamic(() => import("../../components/features/customer-reviews/CRDefinition"), { ssr: false });
const CRManualVsDigital = dynamic(() => import("../../components/features/customer-reviews/CRManualVsDigital"), { ssr: false });
const CRCoreCapabilities = dynamic(() => import("../../components/features/customer-reviews/CRCoreCapabilities"), { ssr: false });
const CRWorkflow = dynamic(() => import("../../components/features/customer-reviews/CRWorkflow"), { ssr: false });
const CRReviewChannels = dynamic(() => import("../../components/features/customer-reviews/CRReviewChannels"), { ssr: false });
const CRWorkshopTypes = dynamic(() => import("../../components/features/customer-reviews/CRWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const CRFAQ = dynamic(() => import("../../components/features/customer-reviews/CRFAQ"), { ssr: false });
const CRFinalCTA = dynamic(() => import("../../components/features/customer-reviews/CRFinalCTA"), { ssr: false });

export default function CustomerReviewsFeature() {
  return (
    <PageLayout>
      <CRHero />
      <CRDefinition />
      <CRManualVsDigital />
      <CRCoreCapabilities />
      <CRWorkflow />
      <CRReviewChannels />
      <CRWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <CRFAQ />
      <CRFinalCTA />
    </PageLayout>
  );
}
