"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const BWSHero = dynamic(() => import('../../components/solutions/best-workshop-software/BWSHero'), { ssr: false });
const BWSAnswer = dynamic(() => import('../../components/solutions/best-workshop-software/BWSAnswer'), { ssr: false });
const BWSChecklist = dynamic(() => import('../../components/solutions/best-workshop-software/BWSChecklist'), { ssr: false });
const BWSFeatureCoverage = dynamic(() => import('../../components/solutions/best-workshop-software/BWSFeatureCoverage'), { ssr: false });
const BWSProductFit = dynamic(() => import('../../components/solutions/best-workshop-software/BWSProductFit'), { ssr: false });
const BWSWorkflow = dynamic(() => import('../../components/solutions/best-workshop-software/BWSWorkflow'), { ssr: false });
const BWSSmallWorkshops = dynamic(() => import('../../components/solutions/best-workshop-software/BWSSmallWorkshops'), { ssr: false });
const BWSBusinessType = dynamic(() => import('../../components/solutions/best-workshop-software/BWSBusinessType'), { ssr: false });
const BWSCloudAccess = dynamic(() => import('../../components/solutions/best-workshop-software/BWSCloudAccess'), { ssr: false });
const BWSAffordability = dynamic(() => import('../../components/solutions/best-workshop-software/BWSAffordability'), { ssr: false });
const BWSFreeTrial = dynamic(() => import('../../components/solutions/best-workshop-software/BWSFreeTrial'), { ssr: false });
const BWSTestimonials = dynamic(() => import('../../components/solutions/best-workshop-software/BWSTestimonials'), { ssr: false });
const BWSDecisionSummary = dynamic(() => import('../../components/solutions/best-workshop-software/BWSDecisionSummary'), { ssr: false });
const BWSFAQ = dynamic(() => import('../../components/solutions/best-workshop-software/BWSFAQ'), { ssr: false });
const BWSFinalCTA = dynamic(() => import('../../components/solutions/best-workshop-software/BWSFinalCTA'), { ssr: false });

export default function BestWorkshopManagementSoftware() {
  return (
    <PageLayout>
      <BWSHero />
      <BWSAnswer />
      <BWSChecklist />
      <BWSFeatureCoverage />
      <BWSProductFit />
      <BWSWorkflow />
      <BWSSmallWorkshops />
      <BWSBusinessType />
      <BWSCloudAccess />
      <BWSAffordability />
      <BWSFreeTrial />
      <BWSTestimonials />
      <BWSDecisionSummary />
      <BWSFAQ />
      <BWSFinalCTA />
    </PageLayout>
  );
}
