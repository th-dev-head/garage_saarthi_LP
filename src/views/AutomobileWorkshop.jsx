"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

// Custom page sections
const AWHero = dynamic(() => import('../components/solutions/automobile-workshop/AWHero'), { ssr: false });
const AWProblem = dynamic(() => import('../components/solutions/automobile-workshop/AWProblem'), { ssr: false });
const AWProductDefinition = dynamic(() => import('../components/solutions/automobile-workshop/AWProductDefinition'), { ssr: false });
const AWWorkflow = dynamic(() => import('../components/solutions/automobile-workshop/AWWorkflow'), { ssr: false });
const AWJobCards = dynamic(() => import('../components/solutions/automobile-workshop/AWJobCards'), { ssr: false });
const AWInventory = dynamic(() => import('../components/solutions/automobile-workshop/AWInventory'), { ssr: false });
const AWCustomerHistory = dynamic(() => import('../components/solutions/automobile-workshop/AWCustomerHistory'), { ssr: false });
const AWServiceReminders = dynamic(() => import('../components/solutions/automobile-workshop/AWServiceReminders'), { ssr: false });
const AWCRM = dynamic(() => import('../components/solutions/automobile-workshop/AWCRM'), { ssr: false });
const AWStaff = dynamic(() => import('../components/solutions/automobile-workshop/AWStaff'), { ssr: false });
const AWBillingFinance = dynamic(() => import('../components/solutions/automobile-workshop/AWBillingFinance'), { ssr: false });
const AWDashboardReports = dynamic(() => import('../components/solutions/automobile-workshop/AWDashboardReports'), { ssr: false });
const AWMultiBranch = dynamic(() => import('../components/solutions/automobile-workshop/AWMultiBranch'), { ssr: false });
const AWCloudAccess = dynamic(() => import('../components/solutions/automobile-workshop/AWCloudAccess'), { ssr: false });
const AWBusinessTypes = dynamic(() => import('../components/solutions/automobile-workshop/AWBusinessTypes'), { ssr: false });
const AWWhyUs = dynamic(() => import('../components/solutions/automobile-workshop/AWWhyUs'), { ssr: false });
const AWReviews = dynamic(() => import('../components/solutions/automobile-workshop/AWReviews'), { ssr: false });
const AWPricing = dynamic(() => import('../components/solutions/automobile-workshop/AWPricing'), { ssr: false });
const AWFAQ = dynamic(() => import('../components/solutions/automobile-workshop/AWFAQ'), { ssr: false });
const AWFinalCTA = dynamic(() => import('../components/solutions/automobile-workshop/AWFinalCTA'), { ssr: false });

export default function AutomobileWorkshop() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        {/* Section 01 - Hero */}
        <AWHero />

        {/* Section 02 - Problem */}
        <AWProblem />

        {/* Section 03 - Product Definition */}
        <AWProductDefinition />

        {/* Section 04 - Repair Workflow */}
        <AWWorkflow />

        {/* Section 05 - Job Cards */}
        <AWJobCards />

        {/* Section 06 - Inventory */}
        <AWInventory />

        {/* Section 07 - Customer History */}
        <AWCustomerHistory />

        {/* Section 08 - Service Reminders */}
        <AWServiceReminders />

        {/* Section 09 - CRM */}
        <AWCRM />

        {/* Section 10 - Staff */}
        <AWStaff />

        {/* Section 11 - Billing & Finance */}
        <AWBillingFinance />

        {/* Section 12 - Dashboard & Reports */}
        <AWDashboardReports />

        {/* Section 13 - Multi Branch */}
        <AWMultiBranch />

        {/* Section 14 - Cloud Access */}
        <AWCloudAccess />

        {/* Section 15 - Business Types */}
        <AWBusinessTypes />

        {/* Section 16 - Why Us */}
        <AWWhyUs />

        {/* Section 17 - Reviews */}
        <AWReviews />

        {/* Section 18 - Pricing */}
        <AWPricing />

        {/* Section 19 - FAQ */}
        <AWFAQ />

        {/* Section 20 - Final CTA */}
        <AWFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
