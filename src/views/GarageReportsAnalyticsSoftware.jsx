"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GRAHero from "../components/solutions/garage-reports/GRAHero";
import GRADefinition from "../components/solutions/garage-reports/GRADefinition";
import GRAReportsOverview from "../components/solutions/garage-reports/GRAReportsOverview";
import GRADashboard from "../components/solutions/garage-reports/GRADashboard";
import GRASalesRevenue from "../components/solutions/garage-reports/GRASalesRevenue";
import GRAInventoryReporting from "../components/solutions/garage-reports/GRAInventoryReporting";
import GRAServicePerformance from "../components/solutions/garage-reports/GRAServicePerformance";
import GRACustomerAnalytics from "../components/solutions/garage-reports/GRACustomerAnalytics";
import GRAEmployeeReporting from "../components/solutions/garage-reports/GRAEmployeeReporting";
import GRAMisReporting from "../components/solutions/garage-reports/GRAMisReporting";
import GRAAnalyticsDecision from "../components/solutions/garage-reports/GRAAnalyticsDecision";
import GRAMultiBranch from "../components/solutions/garage-reports/GRAMultiBranch";
import GRAFiltersAccess from "../components/solutions/garage-reports/GRAFiltersAccess";
import GRAWebMobile from "../components/solutions/garage-reports/GRAWebMobile";
import GRAWhySaarthi from "../components/solutions/garage-reports/GRAWhySaarthi";
import GRAProductProof from "../components/solutions/garage-reports/GRAProductProof";
import GRAFreeTrial from "../components/solutions/garage-reports/GRAFreeTrial";
import GRAFAQ from "../components/solutions/garage-reports/GRAFAQ";
import GRAFinalCTA from "../components/solutions/garage-reports/GRAFinalCTA";

export default function GarageReportsAnalyticsSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <GRAHero />
        <GRADefinition />
        <GRAReportsOverview />
        <GRADashboard />
        <GRASalesRevenue />
        <GRAInventoryReporting />
        <GRAServicePerformance />
        <GRACustomerAnalytics />
        <GRAEmployeeReporting />
        <GRAMisReporting />
        <GRAAnalyticsDecision />
        <GRAMultiBranch />
        <GRAFiltersAccess />
        <GRAWebMobile />
        <GRAWhySaarthi />
        <GRAProductProof />
        <GRAFreeTrial />
        <GRAFAQ />
        <GRAFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
