"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const CustHero = dynamic(() => import("../../components/features/customers/CustHero"), { ssr: false });
const CustDefinition = dynamic(() => import("../../components/features/customers/CustDefinition"), { ssr: false });
const CustPaperVsDigital = dynamic(() => import("../../components/features/customers/CustPaperVsDigital"), { ssr: false });
const CustCoreCapabilities = dynamic(() => import("../../components/features/customers/CustCoreCapabilities"), { ssr: false });
const CustWorkflow = dynamic(() => import("../../components/features/customers/CustWorkflow"), { ssr: false });
const CustWorkshopTypes = dynamic(() => import("../../components/features/customers/CustWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const CustFAQ = dynamic(() => import("../../components/features/customers/CustFAQ"), { ssr: false });
const CustFinalCTA = dynamic(() => import("../../components/features/customers/CustFinalCTA"), { ssr: false });

export default function CustomerManagementFeature() {
  return (
    <PageLayout>
      <CustHero />
      <CustDefinition />
      <CustPaperVsDigital />
      <CustCoreCapabilities />
      <CustWorkflow />
      <CustWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <CustFAQ />
      <CustFinalCTA />
    </PageLayout>
  );
}
