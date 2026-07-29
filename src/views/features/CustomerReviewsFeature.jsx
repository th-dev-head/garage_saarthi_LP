import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import CRHero from "../../components/features/customer-reviews/CRHero";
import CRDefinition from "../../components/features/customer-reviews/CRDefinition";
import CRManualVsDigital from "../../components/features/customer-reviews/CRManualVsDigital";
import CRCoreCapabilities from "../../components/features/customer-reviews/CRCoreCapabilities";
import CRWorkflow from "../../components/features/customer-reviews/CRWorkflow";
import CRReviewChannels from "../../components/features/customer-reviews/CRReviewChannels";
import CRWorkshopTypes from "../../components/features/customer-reviews/CRWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import CRFAQ from "../../components/features/customer-reviews/CRFAQ";
import CRFinalCTA from "../../components/features/customer-reviews/CRFinalCTA";

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
