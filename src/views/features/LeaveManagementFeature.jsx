"use client";
import React from "react";
import dynamic from "next/dynamic";
import PageLayout from "@/src/components/common/PageLayout";

const LMHero = dynamic(() => import("../../components/features/leave-management/LMHero"), { ssr: false });
const LMDefinition = dynamic(() => import("../../components/features/leave-management/LMDefinition"), { ssr: false });
const LMCoreCapabilities = dynamic(() => import("../../components/features/leave-management/LMCoreCapabilities"), { ssr: false });
const LMWorkflow = dynamic(() => import("../../components/features/leave-management/LMWorkflow"), { ssr: false });
const LMWorkshopTypes = dynamic(() => import("../../components/features/leave-management/LMWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const LMFAQ = dynamic(() => import("../../components/features/leave-management/LMFAQ"), { ssr: false });
const LMFinalCTA = dynamic(() => import("../../components/features/leave-management/LMFinalCTA"), { ssr: false });

export default function LeaveManagementFeature() {
  return (
    <PageLayout>
      <LMHero />
      <LMDefinition />
      <LMCoreCapabilities />
      <LMWorkflow />
      <LMWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <LMFAQ />
      <LMFinalCTA />
    </PageLayout>
  );
}
