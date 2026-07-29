import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import WAHero from "../../components/features/whatsapp-automation/WAHero";
import WADefinition from "../../components/features/whatsapp-automation/WADefinition";
import WAManualVsDigital from "../../components/features/whatsapp-automation/WAManualVsDigital";
import WACoreCapabilities from "../../components/features/whatsapp-automation/WACoreCapabilities";
import WAWorkflow from "../../components/features/whatsapp-automation/WAWorkflow";
import WAMessagingTypes from "../../components/features/whatsapp-automation/WAMessagingTypes";
import WAWorkshopTypes from "../../components/features/whatsapp-automation/WAWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import WAFAQ from "../../components/features/whatsapp-automation/WAFAQ";
import WAFinalCTA from "../../components/features/whatsapp-automation/WAFinalCTA";

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
