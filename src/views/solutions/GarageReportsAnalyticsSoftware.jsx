"use client";
import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

const GRAHero = dynamic(() => import('../../components/solutions/garage-reports/GRAHero'), { ssr: false });
const GRADefinition = dynamic(() => import('../../components/solutions/garage-reports/GRADefinition'), { ssr: false });
const GRAReportsOverview = dynamic(() => import('../../components/solutions/garage-reports/GRAReportsOverview'), { ssr: false });
const GRADashboard = dynamic(() => import('../../components/solutions/garage-reports/GRADashboard'), { ssr: false });
const GRASalesRevenue = dynamic(() => import('../../components/solutions/garage-reports/GRASalesRevenue'), { ssr: false });
const GRAInventoryReporting = dynamic(() => import('../../components/solutions/garage-reports/GRAInventoryReporting'), { ssr: false });
const GRAServicePerformance = dynamic(() => import('../../components/solutions/garage-reports/GRAServicePerformance'), { ssr: false });
const GRACustomerAnalytics = dynamic(() => import('../../components/solutions/garage-reports/GRACustomerAnalytics'), { ssr: false });
const GRAEmployeeReporting = dynamic(() => import('../../components/solutions/garage-reports/GRAEmployeeReporting'), { ssr: false });
const GRAMisReporting = dynamic(() => import('../../components/solutions/garage-reports/GRAMisReporting'), { ssr: false });
const GRAAnalyticsDecision = dynamic(() => import('../../components/solutions/garage-reports/GRAAnalyticsDecision'), { ssr: false });
const GRAMultiBranch = dynamic(() => import('../../components/solutions/garage-reports/GRAMultiBranch'), { ssr: false });
const GRAFiltersAccess = dynamic(() => import('../../components/solutions/garage-reports/GRAFiltersAccess'), { ssr: false });
const GRAWebMobile = dynamic(() => import('../../components/solutions/garage-reports/GRAWebMobile'), { ssr: false });
const GRAWhySaarthi = dynamic(() => import('../../components/solutions/garage-reports/GRAWhySaarthi'), { ssr: false });
const GRAProductProof = dynamic(() => import('../../components/solutions/garage-reports/GRAProductProof'), { ssr: false });
const GRAFreeTrial = dynamic(() => import('../../components/solutions/garage-reports/GRAFreeTrial'), { ssr: false });
const GRAFAQ = dynamic(() => import('../../components/solutions/garage-reports/GRAFAQ'), { ssr: false });
const GRAFinalCTA = dynamic(() => import('../../components/solutions/garage-reports/GRAFinalCTA'), { ssr: false });

export default function GarageReportsAnalyticsSoftware() {
  return (
    <PageLayout>
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
    </PageLayout>
  );
}
