"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const FHero = dynamic(() => import("../../components/features/finance/FHero"), { ssr: false });
const FDefinition = dynamic(() => import("../../components/features/finance/FDefinition"), { ssr: false });
const FManualVsDigital = dynamic(() => import("../../components/features/finance/FManualVsDigital"), { ssr: false });
const FCoreCapabilities = dynamic(() => import("../../components/features/finance/FCoreCapabilities"), { ssr: false });
const FWorkflow = dynamic(() => import("../../components/features/finance/FWorkflow"), { ssr: false });
const FFinanceTools = dynamic(() => import("../../components/features/finance/FFinanceTools"), { ssr: false });
const FWorkshopTypes = dynamic(() => import("../../components/features/finance/FWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const FFAQ = dynamic(() => import("../../components/features/finance/FFAQ"), { ssr: false });
const FFinalCTA = dynamic(() => import("../../components/features/finance/FFinalCTA"), { ssr: false });

export default function FinanceManagementFeature() {
  return (
    <PageLayout>
      <FHero />
      <FDefinition />
      <FManualVsDigital />
      <FCoreCapabilities />
      <FWorkflow />
      <FFinanceTools />
      <FWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <FFAQ />
      <FFinalCTA />
    </PageLayout>
  );
}
