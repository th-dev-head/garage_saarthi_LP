import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import CAHero from "../../components/features/ca-access/CAHero";
import CADefinition from "../../components/features/ca-access/CADefinition";
import CAManualVsDigital from "../../components/features/ca-access/CAManualVsDigital";
import CACoreCapabilities from "../../components/features/ca-access/CACoreCapabilities";
import CAWorkflow from "../../components/features/ca-access/CAWorkflow";
import CAPortalFeatures from "../../components/features/ca-access/CAPortalFeatures";
import CAWorkshopTypes from "../../components/features/ca-access/CAWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import CAFAQ from "../../components/features/ca-access/CAFAQ";
import CAFinalCTA from "../../components/features/ca-access/CAFinalCTA";

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
