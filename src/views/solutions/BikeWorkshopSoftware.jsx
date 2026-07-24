"use client";

import dynamic from 'next/dynamic';
import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
const ScrollToTop = dynamic(() => import('../../components/common/ScrollToTop'), { ssr: false });

// Section Components
const BWHero = dynamic(() => import('../../components/solutions/bike-workshop/BWHero'), { ssr: false });
const BWDefinition = dynamic(() => import('../../components/solutions/bike-workshop/BWDefinition'), { ssr: false });
const BWJobCards = dynamic(() => import('../../components/solutions/bike-workshop/BWJobCards'), { ssr: false });
const BWCustomerVehicle = dynamic(() => import('../../components/solutions/bike-workshop/BWCustomerVehicle'), { ssr: false });
const BWInventory = dynamic(() => import('../../components/solutions/bike-workshop/BWInventory'), { ssr: false });
const BWBillingFinance = dynamic(() => import('../../components/solutions/bike-workshop/BWBillingFinance'), { ssr: false });
const BWServiceAlerts = dynamic(() => import('../../components/solutions/bike-workshop/BWServiceAlerts'), { ssr: false });
const BWStaff = dynamic(() => import('../../components/solutions/bike-workshop/BWStaff'), { ssr: false });
const BWDashboardReports = dynamic(() => import('../../components/solutions/bike-workshop/BWDashboardReports'), { ssr: false });
const BWCloudAccess = dynamic(() => import('../../components/solutions/bike-workshop/BWCloudAccess'), { ssr: false });
const BWBusinessType = dynamic(() => import('../../components/solutions/bike-workshop/BWBusinessType'), { ssr: false });
const BWComparison = dynamic(() => import('../../components/solutions/bike-workshop/BWComparison'), { ssr: false });
const BWWhyUs = dynamic(() => import('../../components/solutions/bike-workshop/BWWhyUs'), { ssr: false });
const BWTestimonials = dynamic(() => import('../../components/solutions/bike-workshop/BWTestimonials'), { ssr: false });
const BWPricing = dynamic(() => import('../../components/solutions/bike-workshop/BWPricing'), { ssr: false });
const BWFAQ = dynamic(() => import('../../components/solutions/bike-workshop/BWFAQ'), { ssr: false });
const BWFinalCTA = dynamic(() => import('../../components/solutions/bike-workshop/BWFinalCTA'), { ssr: false });

export default function BikeWorkshopSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <BWHero />
        <BWDefinition />
        <BWJobCards />
        <BWCustomerVehicle />
        <BWInventory />
        <BWBillingFinance />
        <BWServiceAlerts />
        <BWStaff />
        <BWDashboardReports />
        <BWCloudAccess />
        <BWBusinessType />
        <BWComparison />
        <BWWhyUs />
        <BWTestimonials />
        <BWPricing />
        <BWFAQ />
        <BWFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
