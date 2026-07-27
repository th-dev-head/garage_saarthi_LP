"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const WAHero = dynamic(() => import("../../components/features/whatsapp-automation/WAHero"), { ssr: false });
const WADefinition = dynamic(() => import("../../components/features/whatsapp-automation/WADefinition"), { ssr: false });
const WAManualVsDigital = dynamic(() => import("../../components/features/whatsapp-automation/WAManualVsDigital"), { ssr: false });
const WACoreCapabilities = dynamic(() => import("../../components/features/whatsapp-automation/WACoreCapabilities"), { ssr: false });
const WAWorkflow = dynamic(() => import("../../components/features/whatsapp-automation/WAWorkflow"), { ssr: false });
const WAMessagingTypes = dynamic(() => import("../../components/features/whatsapp-automation/WAMessagingTypes"), { ssr: false });
const WAWorkshopTypes = dynamic(() => import("../../components/features/whatsapp-automation/WAWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const WAFAQ = dynamic(() => import("../../components/features/whatsapp-automation/WAFAQ"), { ssr: false });
const WAFinalCTA = dynamic(() => import("../../components/features/whatsapp-automation/WAFinalCTA"), { ssr: false });

export default function WhatsAppAutomationFeature() {
  return (
    <PageLayout>
      <WAHero />
      <WADefinition />
      <WAManualVsDigital />
      <WACoreCapabilities />
      <WAWorkflow />
      <WAMessagingTypes />
      <WAWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <WAFAQ />
      <WAFinalCTA />
    </PageLayout>
  );
}
