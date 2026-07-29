import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import RHero from "../../components/features/reports/RHero";
import RDefinition from "../../components/features/reports/RDefinition";
import RManualVsDigital from "../../components/features/reports/RManualVsDigital";
import RCoreCapabilities from "../../components/features/reports/RCoreCapabilities";
import RWorkflow from "../../components/features/reports/RWorkflow";
import RReportTypes from "../../components/features/reports/RReportTypes";
import RWorkshopTypes from "../../components/features/reports/RWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import RFAQ from "../../components/features/reports/RFAQ";
import RFinalCTA from "../../components/features/reports/RFinalCTA";

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
