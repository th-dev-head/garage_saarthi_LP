"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

// Section Components
const CGHero = dynamic(() => import('../components/solutions/car-garage/CGHero'), { ssr: false });
const CGDefinition = dynamic(() => import('../components/solutions/car-garage/CGDefinition'), { ssr: false });
const CGJobCards = dynamic(() => import('../components/solutions/car-garage/CGJobCards'), { ssr: false });
const CGCustomerVehicle = dynamic(() => import('../components/solutions/car-garage/CGCustomerVehicle'), { ssr: false });
const CGInventory = dynamic(() => import('../components/solutions/car-garage/CGInventory'), { ssr: false });
const CGBillingFinance = dynamic(() => import('../components/solutions/car-garage/CGBillingFinance'), { ssr: false });
const CGServiceAlerts = dynamic(() => import('../components/solutions/car-garage/CGServiceAlerts'), { ssr: false });
const CGCRM = dynamic(() => import('../components/solutions/car-garage/CGCRM'), { ssr: false });
const CGStaff = dynamic(() => import('../components/solutions/car-garage/CGStaff'), { ssr: false });
const CGDashboardReports = dynamic(() => import('../components/solutions/car-garage/CGDashboardReports'), { ssr: false });
const CGMultiBranch = dynamic(() => import('../components/solutions/car-garage/CGMultiBranch'), { ssr: false });
const CGCloudAccess = dynamic(() => import('../components/solutions/car-garage/CGCloudAccess'), { ssr: false });
const CGIndiaPositioning = dynamic(() => import('../components/solutions/car-garage/CGIndiaPositioning'), { ssr: false });
const CGWhyUs = dynamic(() => import('../components/solutions/car-garage/CGWhyUs'), { ssr: false });
const CGTestimonials = dynamic(() => import('../components/solutions/car-garage/CGTestimonials'), { ssr: false });
const CGFreeTrial = dynamic(() => import('../components/solutions/car-garage/CGFreeTrial'), { ssr: false });
const CGFAQ = dynamic(() => import('../components/solutions/car-garage/CGFAQ'), { ssr: false });
const CGFinalCTA = dynamic(() => import('../components/solutions/car-garage/CGFinalCTA'), { ssr: false });

export default function CarGarageSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <CGHero />
        <CGDefinition />
        <CGJobCards />
        <CGCustomerVehicle />
        <CGInventory />
        <CGBillingFinance />
        <CGServiceAlerts />
        <CGCRM />
        <CGStaff />
        <CGDashboardReports />
        <CGMultiBranch />
        <CGCloudAccess />
        <CGIndiaPositioning />
        <CGWhyUs />
        <CGTestimonials />
        <CGFreeTrial />
        <CGFAQ />
        <CGFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
