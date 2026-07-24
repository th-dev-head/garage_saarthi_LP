"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const ScrollToTop = dynamic(() => import("../../components/common/ScrollToTop"), { ssr: false });
const CSHero = dynamic(() => import("../../components/features/counter-sales/CSHero"), { ssr: false });
const CSDefinition = dynamic(() => import("../../components/features/counter-sales/CSDefinition"), { ssr: false });
const CSPaperVsDigital = dynamic(() => import("../../components/features/counter-sales/CSPaperVsDigital"), { ssr: false });
const CSCoreCapabilities = dynamic(() => import("../../components/features/counter-sales/CSCoreCapabilities"), { ssr: false });
const CSWorkflow = dynamic(() => import("../../components/features/counter-sales/CSWorkflow"), { ssr: false });
const CSWorkshopTypes = dynamic(() => import("../../components/features/counter-sales/CSWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const CSFAQ = dynamic(() => import("../../components/features/counter-sales/CSFAQ"), { ssr: false });
const CSFinalCTA = dynamic(() => import("../../components/features/counter-sales/CSFinalCTA"), { ssr: false });

export default function CounterSalesFeature() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <CSHero />
        <CSDefinition />
        <CSPaperVsDigital />
        <CSCoreCapabilities />
        <CSWorkflow />
        <CSWorkshopTypes />
        <CloudAccessCommon bgClass="bg-slate-50" />
        <TestimonialsGrid bgClass="bg-white" />
        <CSFAQ />
        <CSFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
