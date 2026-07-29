import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import SRHero from "../../components/features/service-reminders/SRHero";
import SRDefinition from "../../components/features/service-reminders/SRDefinition";
import SRManualVsDigital from "../../components/features/service-reminders/SRManualVsDigital";
import SRCoreCapabilities from "../../components/features/service-reminders/SRCoreCapabilities";
import SRWorkflow from "../../components/features/service-reminders/SRWorkflow";
import SRWhatsAppIntegration from "../../components/features/service-reminders/SRWhatsAppIntegration";
import SRWorkshopTypes from "../../components/features/service-reminders/SRWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import SRFAQ from "../../components/features/service-reminders/SRFAQ";
import SRFinalCTA from "../../components/features/service-reminders/SRFinalCTA";

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
