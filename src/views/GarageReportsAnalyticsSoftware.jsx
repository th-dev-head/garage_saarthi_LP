"use client";
import dynamic from 'next/dynamic';
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

const GRAHero = dynamic(() => import('../components/solutions/garage-reports/GRAHero'), { ssr: false });
const GRADefinition = dynamic(() => import('../components/solutions/garage-reports/GRADefinition'), { ssr: false });
const GRAReportsOverview = dynamic(() => import('../components/solutions/garage-reports/GRAReportsOverview'), { ssr: false });
const GRADashboard = dynamic(() => import('../components/solutions/garage-reports/GRADashboard'), { ssr: false });
const GRASalesRevenue = dynamic(() => import('../components/solutions/garage-reports/GRASalesRevenue'), { ssr: false });
const GRAInventoryReporting = dynamic(() => import('../components/solutions/garage-reports/GRAInventoryReporting'), { ssr: false });
const GRAServicePerformance = dynamic(() => import('../components/solutions/garage-reports/GRAServicePerformance'), { ssr: false });
const GRACustomerAnalytics = dynamic(() => import('../components/solutions/garage-reports/GRACustomerAnalytics'), { ssr: false });
const GRAEmployeeReporting = dynamic(() => import('../components/solutions/garage-reports/GRAEmployeeReporting'), { ssr: false });
const GRAMisReporting = dynamic(() => import('../components/solutions/garage-reports/GRAMisReporting'), { ssr: false });
const GRAAnalyticsDecision = dynamic(() => import('../components/solutions/garage-reports/GRAAnalyticsDecision'), { ssr: false });
const GRAMultiBranch = dynamic(() => import('../components/solutions/garage-reports/GRAMultiBranch'), { ssr: false });
const GRAFiltersAccess = dynamic(() => import('../components/solutions/garage-reports/GRAFiltersAccess'), { ssr: false });
const GRAWebMobile = dynamic(() => import('../components/solutions/garage-reports/GRAWebMobile'), { ssr: false });
const GRAWhySaarthi = dynamic(() => import('../components/solutions/garage-reports/GRAWhySaarthi'), { ssr: false });
const GRAProductProof = dynamic(() => import('../components/solutions/garage-reports/GRAProductProof'), { ssr: false });
const GRAFreeTrial = dynamic(() => import('../components/solutions/garage-reports/GRAFreeTrial'), { ssr: false });
const GRAFAQ = dynamic(() => import('../components/solutions/garage-reports/GRAFAQ'), { ssr: false });
const GRAFinalCTA = dynamic(() => import('../components/solutions/garage-reports/GRAFinalCTA'), { ssr: false });

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
