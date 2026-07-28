"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const RHero = dynamic(() => import("../../components/features/reports/RHero"), { ssr: false });
const RDefinition = dynamic(() => import("../../components/features/reports/RDefinition"), { ssr: false });
const RManualVsDigital = dynamic(() => import("../../components/features/reports/RManualVsDigital"), { ssr: false });
const RCoreCapabilities = dynamic(() => import("../../components/features/reports/RCoreCapabilities"), { ssr: false });
const RWorkflow = dynamic(() => import("../../components/features/reports/RWorkflow"), { ssr: false });
const RReportTypes = dynamic(() => import("../../components/features/reports/RReportTypes"), { ssr: false });
const RWorkshopTypes = dynamic(() => import("../../components/features/reports/RWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const RFAQ = dynamic(() => import("../../components/features/reports/RFAQ"), { ssr: false });
const RFinalCTA = dynamic(() => import("../../components/features/reports/RFinalCTA"), { ssr: false });

export default function ReportsAnalyticsFeature() {
  return (
    <PageLayout>
      <RHero />
      <RDefinition />
      <RManualVsDigital />
      <RCoreCapabilities />
      <RWorkflow />
      <RReportTypes />
      <RWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <RFAQ />
      <RFinalCTA />
    </PageLayout>
  );
}
