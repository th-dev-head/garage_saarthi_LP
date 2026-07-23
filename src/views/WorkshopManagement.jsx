"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });
const WMHero = dynamic(() => import('../components/solutions/workshop/WMHero'), { ssr: false });
const WMProblem = dynamic(() => import('../components/solutions/workshop/WMProblem'), { ssr: false });
const WMProductDefinition = dynamic(() => import('../components/solutions/workshop/WMProductDefinition'), { ssr: false });
const WMWorkflow = dynamic(() => import('../components/solutions/workshop/WMWorkflow'), { ssr: false });
const WMFeatureGrid = dynamic(() => import('../components/solutions/workshop/WMFeatureGrid'), { ssr: false });
const WMWorkshopTypes = dynamic(() => import('../components/solutions/workshop/WMWorkshopTypes'), { ssr: false });
const WMComparison = dynamic(() => import('../components/solutions/workshop/WMComparison'), { ssr: false });
const WMAutomation = dynamic(() => import('../components/solutions/workshop/WMAutomation'), { ssr: false });
const WMStaff = dynamic(() => import('../components/solutions/workshop/WMStaff'), { ssr: false });
const WMMultiBranch = dynamic(() => import('../components/solutions/workshop/WMMultiBranch'), { ssr: false });
const WMFinance = dynamic(() => import('../components/solutions/workshop/WMFinance'), { ssr: false });
const WMMobile = dynamic(() => import('../components/solutions/workshop/WMMobile'), { ssr: false });
const WMWhyUs = dynamic(() => import('../components/solutions/workshop/WMWhyUs'), { ssr: false });
const WMReviews = dynamic(() => import('../components/solutions/workshop/WMReviews'), { ssr: false });
const WMPricing = dynamic(() => import('../components/solutions/workshop/WMPricing'), { ssr: false });
const WMFAQ = dynamic(() => import('../components/solutions/workshop/WMFAQ'), { ssr: false });
const WMFinalCTA = dynamic(() => import('../components/solutions/workshop/WMFinalCTA'), { ssr: false });

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
