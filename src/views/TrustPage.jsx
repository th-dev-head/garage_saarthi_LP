"use client";

import React from "react";
import PageLayout from "@/src/components/common/PageLayout";
import TrustHero from "@/src/components/trust/TrustHero";
import TrustSecurityPillars from "@/src/components/trust/TrustSecurityPillars";
import TrustRolePermissions from "@/src/components/trust/TrustRolePermissions";
import TrustGovernance from "@/src/components/trust/TrustGovernance";
import TrustFAQ from "@/src/components/trust/TrustFAQ";
import PromoCTA from "@/src/components/common/PromoCTA";

export default function TrustPage() {
  return (
    <PageLayout>
      {/* 1. Hero: Dark gradient with pt-48 (Fixed Header spacing) */}
      <TrustHero />

      {/* 2. Security Pillars: bg-white */}
      <TrustSecurityPillars />

      {/* 3. Role Permissions: bg-slate-50 */}
      <TrustRolePermissions />

      {/* 4. Governance & Portability: bg-white */}
      <TrustGovernance />

      {/* 5. FAQ: bg-slate-50 */}
      <TrustFAQ />

      {/* 6. Promo CTA: bg-white */}
      <PromoCTA
        title="Experience Secure, Enterprise-Grade Workshop Management"
        subtitle="Start with a risk-free 7-day trial. Your vehicle records, job cards, and customer data are encrypted, protected, and fully owned by you."
        bgClass="bg-white"
      />
    </PageLayout>
  );
}

