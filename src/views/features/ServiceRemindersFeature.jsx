"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const SRHero = dynamic(() => import("../../components/features/service-reminders/SRHero"), { ssr: false });
const SRDefinition = dynamic(() => import("../../components/features/service-reminders/SRDefinition"), { ssr: false });
const SRManualVsDigital = dynamic(() => import("../../components/features/service-reminders/SRManualVsDigital"), { ssr: false });
const SRCoreCapabilities = dynamic(() => import("../../components/features/service-reminders/SRCoreCapabilities"), { ssr: false });
const SRWorkflow = dynamic(() => import("../../components/features/service-reminders/SRWorkflow"), { ssr: false });
const SRWhatsAppIntegration = dynamic(() => import("../../components/features/service-reminders/SRWhatsAppIntegration"), { ssr: false });
const SRWorkshopTypes = dynamic(() => import("../../components/features/service-reminders/SRWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const SRFAQ = dynamic(() => import("../../components/features/service-reminders/SRFAQ"), { ssr: false });
const SRFinalCTA = dynamic(() => import("../../components/features/service-reminders/SRFinalCTA"), { ssr: false });

export default function ServiceRemindersFeature() {
  return (
    <PageLayout>
      <SRHero />
      <SRDefinition />
      <SRManualVsDigital />
      <SRCoreCapabilities />
      <SRWorkflow />
      <SRWhatsAppIntegration />
      <SRWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <SRFAQ />
      <SRFinalCTA />
    </PageLayout>
  );
}
