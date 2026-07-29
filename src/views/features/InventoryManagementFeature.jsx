import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import IHero from "../../components/features/inventory/IHero";
import IDefinition from "../../components/features/inventory/IDefinition";
import IPaperVsDigital from "../../components/features/inventory/IPaperVsDigital";
import ICoreCapabilities from "../../components/features/inventory/ICoreCapabilities";
import IWorkflow from "../../components/features/inventory/IWorkflow";
import IWorkshopTypes from "../../components/features/inventory/IWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import IFAQ from "../../components/features/inventory/IFAQ";
import IFinalCTA from "../../components/features/inventory/IFinalCTA";

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
