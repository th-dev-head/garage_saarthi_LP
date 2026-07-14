"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import WMHero from "../components/workshop/WMHero";
import WMProblem from "../components/workshop/WMProblem";
import WMProductDefinition from "../components/workshop/WMProductDefinition";
import WMWorkflow from "../components/workshop/WMWorkflow";
import WMFeatureGrid from "../components/workshop/WMFeatureGrid";
import WMWorkshopTypes from "../components/workshop/WMWorkshopTypes";
import WMComparison from "../components/workshop/WMComparison";
import WMAutomation from "../components/workshop/WMAutomation";
import WMStaff from "../components/workshop/WMStaff";
import WMMultiBranch from "../components/workshop/WMMultiBranch";
import WMFinance from "../components/workshop/WMFinance";
import WMMobile from "../components/workshop/WMMobile";
import WMWhyUs from "../components/workshop/WMWhyUs";
import WMReviews from "../components/workshop/WMReviews";
import WMPricing from "../components/workshop/WMPricing";
import WMFAQ from "../components/workshop/WMFAQ";
import WMFinalCTA from "../components/workshop/WMFinalCTA";

const WorkshopManagement = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        {/* Section 01 - Hero */}
        <WMHero />

        {/* Section 02 - Problem Statement */}
        <WMProblem />

        {/* Section 03 - Product Definition */}
        <WMProductDefinition />

        {/* Section 04 - Workshop Workflow */}
        <WMWorkflow />

        {/* Section 05 - Feature Overview Grid */}
        <WMFeatureGrid />

        {/* Section 06 - Workshop Types */}
        <WMWorkshopTypes />

        {/* Section 07 - Manual vs Digital Comparison */}
        <WMComparison />

        {/* Section 08 - Automation */}
        <WMAutomation />

        {/* Section 09 - Staff Management */}
        <WMStaff />

        {/* Section 10 - Multi-Branch Management */}
        <WMMultiBranch />

        {/* Section 11 - Finance and Accounts */}
        <WMFinance />

        {/* Section 12 - Web & Mobile App */}
        <WMMobile />

        {/* Section 13 - Why GarageSaarthi */}
        <WMWhyUs />

        {/* Section 14 - Customer Reviews */}
        <WMReviews />

        {/* Section 15 - Pricing Entry CTA */}
        <WMPricing />

        {/* Section 16 - FAQ */}
        <WMFAQ />

        {/* Section 17 - Final CTA */}
        <WMFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WorkshopManagement;
