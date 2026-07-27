"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const IHero = dynamic(() => import("../../components/features/inventory/IHero"), { ssr: false });
const IDefinition = dynamic(() => import("../../components/features/inventory/IDefinition"), { ssr: false });
const IPaperVsDigital = dynamic(() => import("../../components/features/inventory/IPaperVsDigital"), { ssr: false });
const ICoreCapabilities = dynamic(() => import("../../components/features/inventory/ICoreCapabilities"), { ssr: false });
const IWorkflow = dynamic(() => import("../../components/features/inventory/IWorkflow"), { ssr: false });
const IWorkshopTypes = dynamic(() => import("../../components/features/inventory/IWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const IFAQ = dynamic(() => import("../../components/features/inventory/IFAQ"), { ssr: false });
const IFinalCTA = dynamic(() => import("../../components/features/inventory/IFinalCTA"), { ssr: false });

export default function InventoryManagementFeature() {
  return (
    <PageLayout>
      <IHero />
      <IDefinition />
      <IPaperVsDigital />
      <ICoreCapabilities />
      <IWorkflow />
      <IWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <IFAQ />
      <IFinalCTA />
    </PageLayout>
  );
}
