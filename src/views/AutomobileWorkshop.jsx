"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Custom page sections
import AWHero from "../components/solutions/automobile-workshop/AWHero";
import AWProblem from "../components/solutions/automobile-workshop/AWProblem";
import AWProductDefinition from "../components/solutions/automobile-workshop/AWProductDefinition";
import AWWorkflow from "../components/solutions/automobile-workshop/AWWorkflow";
import AWJobCards from "../components/solutions/automobile-workshop/AWJobCards";
import AWInventory from "../components/solutions/automobile-workshop/AWInventory";
import AWCustomerHistory from "../components/solutions/automobile-workshop/AWCustomerHistory";
import AWServiceReminders from "../components/solutions/automobile-workshop/AWServiceReminders";
import AWCRM from "../components/solutions/automobile-workshop/AWCRM";
import AWStaff from "../components/solutions/automobile-workshop/AWStaff";
import AWBillingFinance from "../components/solutions/automobile-workshop/AWBillingFinance";
import AWDashboardReports from "../components/solutions/automobile-workshop/AWDashboardReports";
import AWMultiBranch from "../components/solutions/automobile-workshop/AWMultiBranch";
import AWCloudAccess from "../components/solutions/automobile-workshop/AWCloudAccess";
import AWBusinessTypes from "../components/solutions/automobile-workshop/AWBusinessTypes";
import AWWhyUs from "../components/solutions/automobile-workshop/AWWhyUs";
import AWReviews from "../components/solutions/automobile-workshop/AWReviews";
import AWPricing from "../components/solutions/automobile-workshop/AWPricing";
import AWFAQ from "../components/solutions/automobile-workshop/AWFAQ";
import AWFinalCTA from "../components/solutions/automobile-workshop/AWFinalCTA";

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
