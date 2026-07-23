"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const ScrollToTop = dynamic(() => import("../components/common/ScrollToTop"), { ssr: false });
const BHero = dynamic(() => import("../components/features/billing/BHero"), { ssr: false });
const BDefinition = dynamic(() => import("../components/features/billing/BDefinition"), { ssr: false });
const BPaperVsDigital = dynamic(() => import("../components/features/billing/BPaperVsDigital"), { ssr: false });
const BCoreCapabilities = dynamic(() => import("../components/features/billing/BCoreCapabilities"), { ssr: false });
const BWorkflow = dynamic(() => import("../components/features/billing/BWorkflow"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../components/common/TestimonialsGrid"), { ssr: false });
const BFAQ = dynamic(() => import("../components/features/billing/BFAQ"), { ssr: false });
const BFinalCTA = dynamic(() => import("../components/features/billing/BFinalCTA"), { ssr: false });

export default function BillingInvoicingFeature() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <BHero />
        <BDefinition />
        <BPaperVsDigital />
        <BCoreCapabilities />
        <BWorkflow />
        <CloudAccessCommon bgClass="bg-white" />
        <TestimonialsGrid bgClass="bg-slate-50" />
        <BFAQ />
        <BFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
