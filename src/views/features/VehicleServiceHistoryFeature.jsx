"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const HistHero = dynamic(() => import("../../components/features/service-history/HistHero"), { ssr: false });
const HistDefinition = dynamic(() => import("../../components/features/service-history/HistDefinition"), { ssr: false });
const HistPaperVsDigital = dynamic(() => import("../../components/features/service-history/HistPaperVsDigital"), { ssr: false });
const HistCoreCapabilities = dynamic(() => import("../../components/features/service-history/HistCoreCapabilities"), { ssr: false });
const HistWorkflow = dynamic(() => import("../../components/features/service-history/HistWorkflow"), { ssr: false });
const HistAccessRecords = dynamic(() => import("../../components/features/service-history/HistAccessRecords"), { ssr: false });
const HistServiceAlerts = dynamic(() => import("../../components/features/service-history/HistServiceAlerts"), { ssr: false });
const HistWorkshopTypes = dynamic(() => import("../../components/features/service-history/HistWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const HistFAQ = dynamic(() => import("../../components/features/service-history/HistFAQ"), { ssr: false });
const HistFinalCTA = dynamic(() => import("../../components/features/service-history/HistFinalCTA"), { ssr: false });

export default function VehicleServiceHistoryFeature() {
  return (
    <PageLayout>
      <HistHero />
      <HistDefinition />
      <HistPaperVsDigital />
      <HistCoreCapabilities />
      <HistWorkflow />
      <HistAccessRecords />
      <HistServiceAlerts />
      <HistWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <HistFAQ />
      <HistFinalCTA />
    </PageLayout>
  );
}
