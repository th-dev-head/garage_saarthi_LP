"use client";

import React from "react";
import PageLayout from "@/src/components/common/PageLayout";
import CustomersHero from "@/src/components/customers/CustomersHero";
import CustomersEvidenceStrip from "@/src/components/customers/CustomersEvidenceStrip";
import CustomerStoriesSection from "@/src/components/customers/CustomerStoriesSection";
import CustomerWorkflowOutcomes from "@/src/components/customers/CustomerWorkflowOutcomes";
import CustomerReviewsSection from "@/src/components/customers/CustomerReviewsSection";
import CustomerTrustBanner from "@/src/components/customers/CustomerTrustBanner";
import CustomerFAQ from "@/src/components/customers/CustomerFAQ";
import PromoCTA from "@/src/components/common/PromoCTA";

export default function CustomersPage() {
  return (
    <PageLayout>
      {/* 1. Hero: Dark gradient with pt-48 (Fixed Header spacing) */}
      <CustomersHero />

      {/* 2. Evidence Strip: bg-white */}
      <CustomersEvidenceStrip />

      {/* 3. Customer Stories: bg-slate-50 */}
      <CustomerStoriesSection />

      {/* 4. Workflow Outcomes: bg-white */}
      <CustomerWorkflowOutcomes />

      {/* 5. Customer Reviews: bg-slate-50 */}
      <CustomerReviewsSection />

      {/* 6. Trust Banner: bg-white */}
      <CustomerTrustBanner />

      {/* 7. FAQ: bg-slate-50 */}
      <CustomerFAQ />

      {/* 8. Promo CTA: bg-white */}
      <PromoCTA
        title="Ready to Transform Your Workshop's Daily Performance?"
        subtitle="Join hundreds of verified automobile workshops and service centers across India. Start with full access to job cards, inventory, and WhatsApp alerts."
        bgClass="bg-white"
      />
    </PageLayout>
  );
}
