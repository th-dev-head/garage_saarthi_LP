"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const ScrollToTop = dynamic(() => import("../components/common/ScrollToTop"), { ssr: false });
const JCMHero = dynamic(() => import("../components/features/job-card-management/JCMHero"), { ssr: false });
const JCMDefinition = dynamic(() => import("../components/features/job-card-management/JCMDefinition"), { ssr: false });
const JCMPaperVsDigital = dynamic(() => import("../components/features/job-card-management/JCMPaperVsDigital"), { ssr: false });
const JCMCoreCapabilities = dynamic(() => import("../components/features/job-card-management/JCMCoreCapabilities"), { ssr: false });
const JCMWorkflow = dynamic(() => import("../components/features/job-card-management/JCMWorkflow"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../components/common/TestimonialsGrid"), { ssr: false });
const JCMFAQ = dynamic(() => import("../components/features/job-card-management/JCMFAQ"), { ssr: false });
const JCMFinalCTA = dynamic(() => import("../components/features/job-card-management/JCMFinalCTA"), { ssr: false });

export default function JobCardManagementFeature() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <JCMHero />
        <JCMDefinition />
        <JCMPaperVsDigital />
        <JCMCoreCapabilities />
        <JCMWorkflow />
        <CloudAccessCommon bgClass="bg-white" />
        <TestimonialsGrid bgClass="bg-slate-50" />
        <JCMFAQ />
        <JCMFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
