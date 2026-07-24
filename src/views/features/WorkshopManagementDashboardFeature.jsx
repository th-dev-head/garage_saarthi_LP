"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const ScrollToTop = dynamic(() => import("../../components/common/ScrollToTop"), { ssr: false });

const WMDHero = dynamic(() => import("../../components/features/workshop-management-dashboard/WMDHero"), { ssr: false });
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
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
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
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
