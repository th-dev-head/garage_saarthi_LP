import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import IndustryHero from "../../components/industries/IndustryHero";
import IndustryGrid from "../../components/industries/IndustryGrid";
import IndustryValueProp from "../../components/industries/IndustryValueProp";
import IndustryWorkflows from "../../components/industries/IndustryWorkflows";
import IndustryFeatureLinks from "../../components/industries/IndustryFeatureLinks";
import IndustryFAQ from "../../components/industries/IndustryFAQ";
import IndustryFinalCTA from "../../components/industries/IndustryFinalCTA";

export default function IndustriesHub() {
  return (
    <PageLayout>
      <IndustryHero />
      <IndustryGrid />
      <IndustryValueProp />
      <IndustryWorkflows />
      <IndustryFeatureLinks />
      <IndustryFAQ className="bg-slate-50" />
      <IndustryFinalCTA />
    </PageLayout>
  );
}
