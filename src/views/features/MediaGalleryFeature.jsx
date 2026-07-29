import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import MGHero from "../../components/features/media-gallery/MGHero";
import MGDefinition from "../../components/features/media-gallery/MGDefinition";
import MGManualVsDigital from "../../components/features/media-gallery/MGManualVsDigital";
import MGCoreCapabilities from "../../components/features/media-gallery/MGCoreCapabilities";
import MGWorkflow from "../../components/features/media-gallery/MGWorkflow";
import MGWorkshopTypes from "../../components/features/media-gallery/MGWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import MGFAQ from "../../components/features/media-gallery/MGFAQ";
import MGFinalCTA from "../../components/features/media-gallery/MGFinalCTA";

export default function MediaGalleryFeature() {
  return (
    <PageLayout>
      <MGHero />
      <MGDefinition />
      <MGManualVsDigital />
      <MGCoreCapabilities />
      <MGWorkflow />
      <MGWorkshopTypes />
      <CloudAccessCommon bgClass="bg-white" />
      <TestimonialsGrid bgClass="bg-slate-50" />
      <MGFAQ />
      <MGFinalCTA />
    </PageLayout>
  );
}
