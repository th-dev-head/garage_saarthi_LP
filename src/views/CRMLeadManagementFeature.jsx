"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const ScrollToTop = dynamic(() => import("../components/common/ScrollToTop"), { ssr: false });
const CRMHero = dynamic(() => import("../components/features/crm/CRMHero"), { ssr: false });
const CRMDefinition = dynamic(() => import("../components/features/crm/CRMDefinition"), { ssr: false });
const CRMPaperVsDigital = dynamic(() => import("../components/features/crm/CRMPaperVsDigital"), { ssr: false });
const CRMCoreCapabilities = dynamic(() => import("../components/features/crm/CRMCoreCapabilities"), { ssr: false });
const CRMWorkflow = dynamic(() => import("../components/features/crm/CRMWorkflow"), { ssr: false });
const CRMRetention = dynamic(() => import("../components/features/crm/CRMRetention"), { ssr: false });
const CRMWorkshopTypes = dynamic(() => import("../components/features/crm/CRMWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../components/common/TestimonialsGrid"), { ssr: false });
const CRMFAQ = dynamic(() => import("../components/features/crm/CRMFAQ"), { ssr: false });
const CRMFinalCTA = dynamic(() => import("../components/features/crm/CRMFinalCTA"), { ssr: false });

export default function CRMLeadManagementFeature() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <CRMHero />
        <CRMDefinition />
        <CRMPaperVsDigital />
        <CRMCoreCapabilities />
        <CRMWorkflow />
        <CRMRetention />
        <CRMWorkshopTypes />
        <CloudAccessCommon bgClass="bg-white" />
        <TestimonialsGrid bgClass="bg-slate-50" />
        <CRMFAQ />
        <CRMFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
