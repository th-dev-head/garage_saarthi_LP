"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

// Section Components
const FLHero = dynamic(() => import('../components/solutions/fleet-workshop/FLHero'), { ssr: false });
const FLDefinition = dynamic(() => import('../components/solutions/fleet-workshop/FLDefinition'), { ssr: false });
const FLProduct = dynamic(() => import('../components/solutions/fleet-workshop/FLProduct'), { ssr: false });
const FLJobCards = dynamic(() => import('../components/solutions/fleet-workshop/FLJobCards'), { ssr: false });
const FLCustomerVehicle = dynamic(() => import('../components/solutions/fleet-workshop/FLCustomerVehicle'), { ssr: false });
const FLServiceAlerts = dynamic(() => import('../components/solutions/fleet-workshop/FLServiceAlerts'), { ssr: false });
const FLInventory = dynamic(() => import('../components/solutions/fleet-workshop/FLInventory'), { ssr: false });
const FLStaff = dynamic(() => import('../components/solutions/fleet-workshop/FLStaff'), { ssr: false });
const FLBillingFinance = dynamic(() => import('../components/solutions/fleet-workshop/FLBillingFinance'), { ssr: false });
const FLDashboardReports = dynamic(() => import('../components/solutions/fleet-workshop/FLDashboardReports'), { ssr: false });
const FLMultiBranch = dynamic(() => import('../components/solutions/fleet-workshop/FLMultiBranch'), { ssr: false });
const FLFleetTypes = dynamic(() => import('../components/solutions/fleet-workshop/FLFleetTypes'), { ssr: false });
const FLComparison = dynamic(() => import('../components/solutions/fleet-workshop/FLComparison'), { ssr: false });
const FLCloudAccess = dynamic(() => import('../components/solutions/fleet-workshop/FLCloudAccess'), { ssr: false });
const FLWhyUs = dynamic(() => import('../components/solutions/fleet-workshop/FLWhyUs'), { ssr: false });
const FLTestimonials = dynamic(() => import('../components/solutions/fleet-workshop/FLTestimonials'), { ssr: false });
const FLPricing = dynamic(() => import('../components/solutions/fleet-workshop/FLPricing'), { ssr: false });
const FLFAQ = dynamic(() => import('../components/solutions/fleet-workshop/FLFAQ'), { ssr: false });
const FLFinalCTA = dynamic(() => import('../components/solutions/fleet-workshop/FLFinalCTA'), { ssr: false });

export default function FleetWorkshopSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <FLHero />
        <FLDefinition />
        <FLProduct />
        <FLJobCards />
        <FLCustomerVehicle />
        <FLServiceAlerts />
        <FLInventory />
        <FLStaff />
        <FLBillingFinance />
        <FLDashboardReports />
        <FLMultiBranch />
        <FLFleetTypes />
        <FLComparison />
        <FLCloudAccess />
        <FLWhyUs />
        <FLTestimonials />
        <FLPricing />
        <FLFAQ />
        <FLFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
