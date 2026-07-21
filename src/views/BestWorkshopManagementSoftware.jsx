"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import BWSHero from "../components/solutions/best-workshop-software/BWSHero";
import BWSAnswer from "../components/solutions/best-workshop-software/BWSAnswer";
import BWSChecklist from "../components/solutions/best-workshop-software/BWSChecklist";
import BWSFeatureCoverage from "../components/solutions/best-workshop-software/BWSFeatureCoverage";
import BWSProductFit from "../components/solutions/best-workshop-software/BWSProductFit";
import BWSWorkflow from "../components/solutions/best-workshop-software/BWSWorkflow";
import BWSSmallWorkshops from "../components/solutions/best-workshop-software/BWSSmallWorkshops";
import BWSBusinessType from "../components/solutions/best-workshop-software/BWSBusinessType";
import BWSCloudAccess from "../components/solutions/best-workshop-software/BWSCloudAccess";
import BWSAffordability from "../components/solutions/best-workshop-software/BWSAffordability";
import BWSFreeTrial from "../components/solutions/best-workshop-software/BWSFreeTrial";
import BWSTestimonials from "../components/solutions/best-workshop-software/BWSTestimonials";
import BWSDecisionSummary from "../components/solutions/best-workshop-software/BWSDecisionSummary";
import BWSFAQ from "../components/solutions/best-workshop-software/BWSFAQ";
import BWSFinalCTA from "../components/solutions/best-workshop-software/BWSFinalCTA";

export default function BestWorkshopManagementSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
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
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
