"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const ScrollToTop = dynamic(() => import("../components/common/ScrollToTop"), { ssr: false });
const IHero = dynamic(() => import("../components/features/inventory/IHero"), { ssr: false });
const IDefinition = dynamic(() => import("../components/features/inventory/IDefinition"), { ssr: false });
const IPaperVsDigital = dynamic(() => import("../components/features/inventory/IPaperVsDigital"), { ssr: false });
const ICoreCapabilities = dynamic(() => import("../components/features/inventory/ICoreCapabilities"), { ssr: false });
const IWorkflow = dynamic(() => import("../components/features/inventory/IWorkflow"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../components/common/TestimonialsGrid"), { ssr: false });
const IFAQ = dynamic(() => import("../components/features/inventory/IFAQ"), { ssr: false });
const IFinalCTA = dynamic(() => import("../components/features/inventory/IFinalCTA"), { ssr: false });

export default function InventoryManagementFeature() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <IHero />
        <IDefinition />
        <IPaperVsDigital />
        <ICoreCapabilities />
        <IWorkflow />
        <CloudAccessCommon bgClass="bg-white" />
        <TestimonialsGrid bgClass="bg-slate-50" />
        <IFAQ />
        <IFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
