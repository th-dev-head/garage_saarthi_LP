"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const MBHero = dynamic(() => import('../../components/solutions/multi-branch/MBHero'), { ssr: false });
const MBDefinition = dynamic(() => import('../../components/solutions/multi-branch/MBDefinition'), { ssr: false });
const MBCentralized = dynamic(() => import('../../components/solutions/multi-branch/MBCentralized'), { ssr: false });
const MBOperations = dynamic(() => import('../../components/solutions/multi-branch/MBOperations'), { ssr: false });
const MBCentralVisibility = dynamic(() => import('../../components/solutions/multi-branch/MBCentralVisibility'), { ssr: false });
const MBBranchReports = dynamic(() => import('../../components/solutions/multi-branch/MBBranchReports'), { ssr: false });
const MBUserRoleManagement = dynamic(() => import('../../components/solutions/multi-branch/MBUserRoleManagement'), { ssr: false });
const MBChainsFranchises = dynamic(() => import('../../components/solutions/multi-branch/MBChainsFranchises'), { ssr: false });
const MBWebMobile = dynamic(() => import('../../components/solutions/multi-branch/MBWebMobile'), { ssr: false });
const MBWorkflowComparison = dynamic(() => import('../../components/solutions/multi-branch/MBWorkflowComparison'), { ssr: false });
const MBScaling = dynamic(() => import('../../components/solutions/multi-branch/MBScaling'), { ssr: false });
const MBWhySaarthi = dynamic(() => import('../../components/solutions/multi-branch/MBWhySaarthi'), { ssr: false });
const MBProductProof = dynamic(() => import('../../components/solutions/multi-branch/MBProductProof'), { ssr: false });
const MBCustomerProof = dynamic(() => import('../../components/solutions/multi-branch/MBCustomerProof'), { ssr: false });
const MBFreeTrial = dynamic(() => import('../../components/solutions/multi-branch/MBFreeTrial'), { ssr: false });
const MBFAQ = dynamic(() => import('../../components/solutions/multi-branch/MBFAQ'), { ssr: false });
const MBFinalCTA = dynamic(() => import('../../components/solutions/multi-branch/MBFinalCTA'), { ssr: false });

export default function MultiBranchGarageSoftware() {
  return (
    <PageLayout>

      <MBHero />
      <MBDefinition />
      <MBCentralized />
      <MBOperations />
      <MBCentralVisibility />
      <MBBranchReports />
      <MBUserRoleManagement />
      <MBChainsFranchises />
      <MBWebMobile />
      <MBWorkflowComparison />
      <MBScaling />
      <MBWhySaarthi />
      <MBProductProof />
      <MBCustomerProof />
      <MBFreeTrial />
      <MBFAQ />
      <MBFinalCTA />
    </PageLayout>
  );
}
