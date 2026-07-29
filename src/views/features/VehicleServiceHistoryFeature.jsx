import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import HistHero from "../../components/features/service-history/HistHero";
import HistDefinition from "../../components/features/service-history/HistDefinition";
import HistPaperVsDigital from "../../components/features/service-history/HistPaperVsDigital";
import HistCoreCapabilities from "../../components/features/service-history/HistCoreCapabilities";
import HistWorkflow from "../../components/features/service-history/HistWorkflow";
import HistAccessRecords from "../../components/features/service-history/HistAccessRecords";
import HistServiceAlerts from "../../components/features/service-history/HistServiceAlerts";
import HistWorkshopTypes from "../../components/features/service-history/HistWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import HistFAQ from "../../components/features/service-history/HistFAQ";
import HistFinalCTA from "../../components/features/service-history/HistFinalCTA";

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
