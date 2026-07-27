"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic"; const WMDHero = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDHero"), { ssr: false });
const WMDDefinition = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDDefinition"), { ssr: false });
const WMDProblem = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDProblem"), { ssr: false });
const WMDCoreCapabilities = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDCoreCapabilities"), { ssr: false });
const WMDKPIAnalytics = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDKPIAnalytics"), { ssr: false });
const WMDWorkflow = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDWorkflow"), { ssr: false });
const WMDBusinessTypes = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDBusinessTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const WMDFAQ = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDFAQ"), { ssr: false });
const WMDFinalCTA = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDFinalCTA"), { ssr: false });

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
