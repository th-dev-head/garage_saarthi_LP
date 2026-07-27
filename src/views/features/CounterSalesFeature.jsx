"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const CSHero = dynamic(() => import("../../components/features/counter-sales/CSHero"), { ssr: false });
const CSDefinition = dynamic(() => import("../../components/features/counter-sales/CSDefinition"), { ssr: false });
const CSPaperVsDigital = dynamic(() => import("../../components/features/counter-sales/CSPaperVsDigital"), { ssr: false });
const CSCoreCapabilities = dynamic(() => import("../../components/features/counter-sales/CSCoreCapabilities"), { ssr: false });
const CSWorkflow = dynamic(() => import("../../components/features/counter-sales/CSWorkflow"), { ssr: false });
const CSWorkshopTypes = dynamic(() => import("../../components/features/counter-sales/CSWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const CSFAQ = dynamic(() => import("../../components/features/counter-sales/CSFAQ"), { ssr: false });
const CSFinalCTA = dynamic(() => import("../../components/features/counter-sales/CSFinalCTA"), { ssr: false });

export default function CounterSalesFeature() {
  return (
    <PageLayout>
      <CSHero />
      <CSDefinition />
      <CSPaperVsDigital />
      <CSCoreCapabilities />
      <CSWorkflow />
      <CSWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <CSFAQ />
      <CSFinalCTA />
    </PageLayout>
  );
}
