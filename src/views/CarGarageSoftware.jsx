"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import CGHero from "../components/car-garage/CGHero";
import CGDefinition from "../components/car-garage/CGDefinition";
import CGJobCards from "../components/car-garage/CGJobCards";
import CGCustomerVehicle from "../components/car-garage/CGCustomerVehicle";
import CGInventory from "../components/car-garage/CGInventory";
import CGBillingFinance from "../components/car-garage/CGBillingFinance";
import CGServiceAlerts from "../components/car-garage/CGServiceAlerts";
import CGCRM from "../components/car-garage/CGCRM";
import CGStaff from "../components/car-garage/CGStaff";
import CGDashboardReports from "../components/car-garage/CGDashboardReports";
import CGMultiBranch from "../components/car-garage/CGMultiBranch";
import CGCloudAccess from "../components/car-garage/CGCloudAccess";
import CGIndiaPositioning from "../components/car-garage/CGIndiaPositioning";
import CGWhyUs from "../components/car-garage/CGWhyUs";
import CGTestimonials from "../components/car-garage/CGTestimonials";
import CGFreeTrial from "../components/car-garage/CGFreeTrial";
import CGFAQ from "../components/car-garage/CGFAQ";
import CGFinalCTA from "../components/car-garage/CGFinalCTA";

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
