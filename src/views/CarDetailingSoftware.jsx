"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import CDHero from "../components/solutions/car-detailing/CDHero";
import CDDefinition from "../components/solutions/car-detailing/CDDefinition";
import CDOperations from "../components/solutions/car-detailing/CDOperations";
import CDJobCards from "../components/solutions/car-detailing/CDJobCards";
import CDCustomerVehicle from "../components/solutions/car-detailing/CDCustomerVehicle";
import CDCRM from "../components/solutions/car-detailing/CDCRM";
import CDBillingFinance from "../components/solutions/car-detailing/CDBillingFinance";
import CDInventory from "../components/solutions/car-detailing/CDInventory";
import CDServiceAlerts from "../components/solutions/car-detailing/CDServiceAlerts";
import CDStaff from "../components/solutions/car-detailing/CDStaff";
import CDDashboardReports from "../components/solutions/car-detailing/CDDashboardReports";
import CDMultiBranch from "../components/solutions/car-detailing/CDMultiBranch";
import CDCloudAccess from "../components/solutions/car-detailing/CDCloudAccess";
import CDWhyUs from "../components/solutions/car-detailing/CDWhyUs";
import CDTestimonials from "../components/solutions/car-detailing/CDTestimonials";
import CDPricing from "../components/solutions/car-detailing/CDPricing";
import CDFAQ from "../components/solutions/car-detailing/CDFAQ";
import CDFinalCTA from "../components/solutions/car-detailing/CDFinalCTA";

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
