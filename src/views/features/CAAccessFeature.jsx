"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const CAHero = dynamic(() => import("../../components/features/ca-access/CAHero"), { ssr: false });
const CADefinition = dynamic(() => import("../../components/features/ca-access/CADefinition"), { ssr: false });
const CAManualVsDigital = dynamic(() => import("../../components/features/ca-access/CAManualVsDigital"), { ssr: false });
const CACoreCapabilities = dynamic(() => import("../../components/features/ca-access/CACoreCapabilities"), { ssr: false });
const CAWorkflow = dynamic(() => import("../../components/features/ca-access/CAWorkflow"), { ssr: false });
const CAPortalFeatures = dynamic(() => import("../../components/features/ca-access/CAPortalFeatures"), { ssr: false });
const CAWorkshopTypes = dynamic(() => import("../../components/features/ca-access/CAWorkshopTypes"), { ssr: false });
const CloudAccessCommon = dynamic(() => import("../../components/common/CloudAccessCommon"), { ssr: false });
const TestimonialsGrid = dynamic(() => import("../../components/common/TestimonialsGrid"), { ssr: false });
const CAFAQ = dynamic(() => import("../../components/features/ca-access/CAFAQ"), { ssr: false });
const CAFinalCTA = dynamic(() => import("../../components/features/ca-access/CAFinalCTA"), { ssr: false });

export default function CAAccessFeature() {
  return (
    <PageLayout>
      <CAHero />
      <CADefinition />
      <CAManualVsDigital />
      <CACoreCapabilities />
      <CAWorkflow />
      <CAPortalFeatures />
      <CAWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <CAFAQ />
      <CAFinalCTA />
    </PageLayout>
  );
}
