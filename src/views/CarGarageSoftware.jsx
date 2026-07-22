"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import CGHero from "../components/solutions/car-garage/CGHero";
import CGDefinition from "../components/solutions/car-garage/CGDefinition";
import CGJobCards from "../components/solutions/car-garage/CGJobCards";
import CGCustomerVehicle from "../components/solutions/car-garage/CGCustomerVehicle";
import CGInventory from "../components/solutions/car-garage/CGInventory";
import CGBillingFinance from "../components/solutions/car-garage/CGBillingFinance";
import CGServiceAlerts from "../components/solutions/car-garage/CGServiceAlerts";
import CGCRM from "../components/solutions/car-garage/CGCRM";
import CGStaff from "../components/solutions/car-garage/CGStaff";
import CGDashboardReports from "../components/solutions/car-garage/CGDashboardReports";
import CGMultiBranch from "../components/solutions/car-garage/CGMultiBranch";
import CGCloudAccess from "../components/solutions/car-garage/CGCloudAccess";
import CGIndiaPositioning from "../components/solutions/car-garage/CGIndiaPositioning";
import CGWhyUs from "../components/solutions/car-garage/CGWhyUs";
import CGTestimonials from "../components/solutions/car-garage/CGTestimonials";
import CGFreeTrial from "../components/solutions/car-garage/CGFreeTrial";
import CGFAQ from "../components/solutions/car-garage/CGFAQ";
import CGFinalCTA from "../components/solutions/car-garage/CGFinalCTA";

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
