import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import CustHero from "../../components/features/customers/CustHero";
import CustDefinition from "../../components/features/customers/CustDefinition";
import CustDetails from "../../components/features/customers/CustDetails";
import CustPaperVsDigital from "../../components/features/customers/CustPaperVsDigital";
import CustCoreCapabilities from "../../components/features/customers/CustCoreCapabilities";
import CustWorkflow from "../../components/features/customers/CustWorkflow";
import CustWorkshopTypes from "../../components/features/customers/CustWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import CustFAQ from "../../components/features/customers/CustFAQ";
import CustFinalCTA from "../../components/features/customers/CustFinalCTA";

export default function CustomerManagementFeature() {
  return (
    <PageLayout>
      <CustHero />
      <CustDefinition />
      <CustDetails />
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
