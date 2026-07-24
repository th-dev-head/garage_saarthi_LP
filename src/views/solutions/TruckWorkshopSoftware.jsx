"use client";

import dynamic from 'next/dynamic';
import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
const ScrollToTop = dynamic(() => import('../../components/common/ScrollToTop'), { ssr: false });

// Section Components
const TWHero = dynamic(() => import('../../components/solutions/truck-workshop/TWHero'), { ssr: false });
const TWDefinition = dynamic(() => import('../../components/solutions/truck-workshop/TWDefinition'), { ssr: false });
const TWJobCards = dynamic(() => import('../../components/solutions/truck-workshop/TWJobCards'), { ssr: false });
const TWCustomerVehicle = dynamic(() => import('../../components/solutions/truck-workshop/TWCustomerVehicle'), { ssr: false });
const TWInventory = dynamic(() => import('../../components/solutions/truck-workshop/TWInventory'), { ssr: false });
const TWBillingFinance = dynamic(() => import('../../components/solutions/truck-workshop/TWBillingFinance'), { ssr: false });
const TWServiceAlerts = dynamic(() => import('../../components/solutions/truck-workshop/TWServiceAlerts'), { ssr: false });
const TWStaff = dynamic(() => import('../../components/solutions/truck-workshop/TWStaff'), { ssr: false });
const TWDashboardReports = dynamic(() => import('../../components/solutions/truck-workshop/TWDashboardReports'), { ssr: false });
const TWCloudAccess = dynamic(() => import('../../components/solutions/truck-workshop/TWCloudAccess'), { ssr: false });
const TWBusinessType = dynamic(() => import('../../components/solutions/truck-workshop/TWBusinessType'), { ssr: false });
const TWComparison = dynamic(() => import('../../components/solutions/truck-workshop/TWComparison'), { ssr: false });
const TWWhyUs = dynamic(() => import('../../components/solutions/truck-workshop/TWWhyUs'), { ssr: false });
const TWTestimonials = dynamic(() => import('../../components/solutions/truck-workshop/TWTestimonials'), { ssr: false });
const TWPricing = dynamic(() => import('../../components/solutions/truck-workshop/TWPricing'), { ssr: false });
const TWFAQ = dynamic(() => import('../../components/solutions/truck-workshop/TWFAQ'), { ssr: false });
const TWFinalCTA = dynamic(() => import('../../components/solutions/truck-workshop/TWFinalCTA'), { ssr: false });

export default function TruckWorkshopSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <TWHero />
        <TWDefinition />
        <TWJobCards />
        <TWCustomerVehicle />
        <TWInventory />
        <TWBillingFinance />
        <TWServiceAlerts />
        <TWStaff />
        <TWDashboardReports />
        <TWCloudAccess />
        <TWBusinessType />
        <TWComparison />
        <TWWhyUs />
        <TWTestimonials />
        <TWPricing />
        <TWFAQ />
        <TWFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
