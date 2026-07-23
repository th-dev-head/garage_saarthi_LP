"use client";

import dynamic from 'next/dynamic';
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

// Section Components
const CDHero = dynamic(() => import('../components/solutions/car-detailing/CDHero'), { ssr: false });
const CDDefinition = dynamic(() => import('../components/solutions/car-detailing/CDDefinition'), { ssr: false });
const CDOperations = dynamic(() => import('../components/solutions/car-detailing/CDOperations'), { ssr: false });
const CDJobCards = dynamic(() => import('../components/solutions/car-detailing/CDJobCards'), { ssr: false });
const CDCustomerVehicle = dynamic(() => import('../components/solutions/car-detailing/CDCustomerVehicle'), { ssr: false });
const CDCRM = dynamic(() => import('../components/solutions/car-detailing/CDCRM'), { ssr: false });
const CDBillingFinance = dynamic(() => import('../components/solutions/car-detailing/CDBillingFinance'), { ssr: false });
const CDInventory = dynamic(() => import('../components/solutions/car-detailing/CDInventory'), { ssr: false });
const CDServiceAlerts = dynamic(() => import('../components/solutions/car-detailing/CDServiceAlerts'), { ssr: false });
const CDStaff = dynamic(() => import('../components/solutions/car-detailing/CDStaff'), { ssr: false });
const CDDashboardReports = dynamic(() => import('../components/solutions/car-detailing/CDDashboardReports'), { ssr: false });
const CDMultiBranch = dynamic(() => import('../components/solutions/car-detailing/CDMultiBranch'), { ssr: false });
const CDCloudAccess = dynamic(() => import('../components/solutions/car-detailing/CDCloudAccess'), { ssr: false });
const CDWhyUs = dynamic(() => import('../components/solutions/car-detailing/CDWhyUs'), { ssr: false });
const CDTestimonials = dynamic(() => import('../components/solutions/car-detailing/CDTestimonials'), { ssr: false });
const CDPricing = dynamic(() => import('../components/solutions/car-detailing/CDPricing'), { ssr: false });
const CDFAQ = dynamic(() => import('../components/solutions/car-detailing/CDFAQ'), { ssr: false });
const CDFinalCTA = dynamic(() => import('../components/solutions/car-detailing/CDFinalCTA'), { ssr: false });

export default function CarDetailingSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <CDHero />
        <CDDefinition />
        <CDOperations />
        <CDJobCards />
        <CDCustomerVehicle />
        <CDCRM />
        <CDBillingFinance />
        <CDInventory />
        <CDServiceAlerts />
        <CDStaff />
        <CDDashboardReports />
        <CDMultiBranch />
        <CDCloudAccess />
        <CDWhyUs />
        <CDTestimonials />
        <CDPricing />
        <CDFAQ />
        <CDFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
