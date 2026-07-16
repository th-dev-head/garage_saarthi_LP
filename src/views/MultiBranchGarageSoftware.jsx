"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import MBHero from "../components/solutions/multi-branch/MBHero";
import MBDefinition from "../components/solutions/multi-branch/MBDefinition";
import MBCentralized from "../components/solutions/multi-branch/MBCentralized";
import MBOperations from "../components/solutions/multi-branch/MBOperations";
import MBCentralVisibility from "../components/solutions/multi-branch/MBCentralVisibility";
import MBBranchReports from "../components/solutions/multi-branch/MBBranchReports";
import MBUserRoleManagement from "../components/solutions/multi-branch/MBUserRoleManagement";
import MBChainsFranchises from "../components/solutions/multi-branch/MBChainsFranchises";
import MBWebMobile from "../components/solutions/multi-branch/MBWebMobile";
import MBWorkflowComparison from "../components/solutions/multi-branch/MBWorkflowComparison";
import MBScaling from "../components/solutions/multi-branch/MBScaling";
import MBWhySaarthi from "../components/solutions/multi-branch/MBWhySaarthi";
import MBProductProof from "../components/solutions/multi-branch/MBProductProof";
import MBCustomerProof from "../components/solutions/multi-branch/MBCustomerProof";
import MBFreeTrial from "../components/solutions/multi-branch/MBFreeTrial";
import MBFAQ from "../components/solutions/multi-branch/MBFAQ";
import MBFinalCTA from "../components/solutions/multi-branch/MBFinalCTA";

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
