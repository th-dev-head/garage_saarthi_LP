import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import BHero from "../../components/features/billing/BHero";
import BDefinition from "../../components/features/billing/BDefinition";
import BPaperVsDigital from "../../components/features/billing/BPaperVsDigital";
import BCoreCapabilities from "../../components/features/billing/BCoreCapabilities";
import BWorkflow from "../../components/features/billing/BWorkflow";
import BGSTBilling from "../../components/features/billing/BGSTBilling";
import BMaxDiscountGuard from "../../components/features/billing/BMaxDiscountGuard";
import BInvoiceThemes from "../../components/features/billing/BInvoiceThemes";
import BGatePassSecurity from "../../components/features/billing/BGatePassSecurity";
import BWorkshopTypes from "../../components/features/billing/BWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import BFAQ from "../../components/features/billing/BFAQ";
import BFinalCTA from "../../components/features/billing/BFinalCTA";

export default function BillingInvoicingFeature() {
  return (
    <PageLayout>
      <BHero />
      <BDefinition />
      <BPaperVsDigital />
      <BCoreCapabilities />
      <BWorkflow />
      <BGSTBilling />
      <BMaxDiscountGuard />
      <BInvoiceThemes />
      <BGatePassSecurity />
      <BWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <BFAQ className="bg-slate-50" />
      <BFinalCTA />
    </PageLayout>
  );
}
