import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import WMDHero from "../../components/features/workshop-management-dashboard/WMDHero";
import WMDDefinition from "../../components/features/workshop-management-dashboard/WMDDefinition";
import WMDProblem from "../../components/features/workshop-management-dashboard/WMDProblem";
import WMDCoreCapabilities from "../../components/features/workshop-management-dashboard/WMDCoreCapabilities";
import WMDKPIAnalytics from "../../components/features/workshop-management-dashboard/WMDKPIAnalytics";
import WMDWorkflow from "../../components/features/workshop-management-dashboard/WMDWorkflow";
import WMDBusinessTypes from "../../components/features/workshop-management-dashboard/WMDBusinessTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import WMDFAQ from "../../components/features/workshop-management-dashboard/WMDFAQ";
import WMDFinalCTA from "../../components/features/workshop-management-dashboard/WMDFinalCTA";

export default function WorkshopManagementDashboardFeature() {
  return (
    <PageLayout>
      <WMDHero />
      <WMDDefinition />
      <WMDProblem />
      <WMDCoreCapabilities />
      <WMDKPIAnalytics />
      <WMDWorkflow />
      <WMDBusinessTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <WMDFAQ />
      <WMDFinalCTA />
    </PageLayout>
  );
}
