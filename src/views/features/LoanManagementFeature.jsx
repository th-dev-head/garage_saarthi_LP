"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const LHero = dynamic(() => import("../../components/features/loans/LHero"), { ssr: false });
const LDefinition = dynamic(() => import("../../components/features/loans/LDefinition"), { ssr: false });
const LManualVsDigital = dynamic(() => import("../../components/features/loans/LManualVsDigital"), { ssr: false });
const LCoreCapabilities = dynamic(() => import("../../components/features/loans/LCoreCapabilities"), { ssr: false });
const LWorkflow = dynamic(() => import("../../components/features/loans/LWorkflow"), { ssr: false });
const LLoanTools = dynamic(() => import("../../components/features/loans/LLoanTools"), { ssr: false });
const LWorkshopTypes = dynamic(() => import("../../components/features/loans/LWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const LFAQ = dynamic(() => import("../../components/features/loans/LFAQ"), { ssr: false });
const LFinalCTA = dynamic(() => import("../../components/features/loans/LFinalCTA"), { ssr: false });

export default function LoanManagementFeature() {
  return (
    <PageLayout>
      <LHero />
      <LDefinition />
      <LManualVsDigital />
      <LCoreCapabilities />
      <LWorkflow />
      <LLoanTools />
      <LWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <LFAQ />
      <LFinalCTA />
    </PageLayout>
  );
}
