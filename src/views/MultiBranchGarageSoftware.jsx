"use client";
import dynamic from 'next/dynamic';
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

const MBHero = dynamic(() => import('../components/solutions/multi-branch/MBHero'), { ssr: false });
const MBDefinition = dynamic(() => import('../components/solutions/multi-branch/MBDefinition'), { ssr: false });
const MBCentralized = dynamic(() => import('../components/solutions/multi-branch/MBCentralized'), { ssr: false });
const MBOperations = dynamic(() => import('../components/solutions/multi-branch/MBOperations'), { ssr: false });
const MBCentralVisibility = dynamic(() => import('../components/solutions/multi-branch/MBCentralVisibility'), { ssr: false });
const MBBranchReports = dynamic(() => import('../components/solutions/multi-branch/MBBranchReports'), { ssr: false });
const MBUserRoleManagement = dynamic(() => import('../components/solutions/multi-branch/MBUserRoleManagement'), { ssr: false });
const MBChainsFranchises = dynamic(() => import('../components/solutions/multi-branch/MBChainsFranchises'), { ssr: false });
const MBWebMobile = dynamic(() => import('../components/solutions/multi-branch/MBWebMobile'), { ssr: false });
const MBWorkflowComparison = dynamic(() => import('../components/solutions/multi-branch/MBWorkflowComparison'), { ssr: false });
const MBScaling = dynamic(() => import('../components/solutions/multi-branch/MBScaling'), { ssr: false });
const MBWhySaarthi = dynamic(() => import('../components/solutions/multi-branch/MBWhySaarthi'), { ssr: false });
const MBProductProof = dynamic(() => import('../components/solutions/multi-branch/MBProductProof'), { ssr: false });
const MBCustomerProof = dynamic(() => import('../components/solutions/multi-branch/MBCustomerProof'), { ssr: false });
const MBFreeTrial = dynamic(() => import('../components/solutions/multi-branch/MBFreeTrial'), { ssr: false });
const MBFAQ = dynamic(() => import('../components/solutions/multi-branch/MBFAQ'), { ssr: false });
const MBFinalCTA = dynamic(() => import('../components/solutions/multi-branch/MBFinalCTA'), { ssr: false });

export default function MultiBranchGarageSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
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
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
