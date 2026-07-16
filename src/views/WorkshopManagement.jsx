"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import WMHero from "../components/solutions/workshop/WMHero";
import WMProblem from "../components/solutions/workshop/WMProblem";
import WMProductDefinition from "../components/solutions/workshop/WMProductDefinition";
import WMWorkflow from "../components/solutions/workshop/WMWorkflow";
import WMFeatureGrid from "../components/solutions/workshop/WMFeatureGrid";
import WMWorkshopTypes from "../components/solutions/workshop/WMWorkshopTypes";
import WMComparison from "../components/solutions/workshop/WMComparison";
import WMAutomation from "../components/solutions/workshop/WMAutomation";
import WMStaff from "../components/solutions/workshop/WMStaff";
import WMMultiBranch from "../components/solutions/workshop/WMMultiBranch";
import WMFinance from "../components/solutions/workshop/WMFinance";
import WMMobile from "../components/solutions/workshop/WMMobile";
import WMWhyUs from "../components/solutions/workshop/WMWhyUs";
import WMReviews from "../components/solutions/workshop/WMReviews";
import WMPricing from "../components/solutions/workshop/WMPricing";
import WMFAQ from "../components/solutions/workshop/WMFAQ";
import WMFinalCTA from "../components/solutions/workshop/WMFinalCTA";

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
