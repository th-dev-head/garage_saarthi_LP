"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import EVHero from "../components/solutions/ev-garage/EVHero";
import EVDefinition from "../components/solutions/ev-garage/EVDefinition";
import EVJobCards from "../components/solutions/ev-garage/EVJobCards";
import EVCustomerVehicle from "../components/solutions/ev-garage/EVCustomerVehicle";
import EVInventory from "../components/solutions/ev-garage/EVInventory";
import EVBillingFinance from "../components/solutions/ev-garage/EVBillingFinance";
import EVServiceAlerts from "../components/solutions/ev-garage/EVServiceAlerts";
import EVCRM from "../components/solutions/ev-garage/EVCRM";
import EVStaff from "../components/solutions/ev-garage/EVStaff";
import EVDashboardReports from "../components/solutions/ev-garage/EVDashboardReports";
import EVCloudAccess from "../components/solutions/ev-garage/EVCloudAccess";
import EVComparison from "../components/solutions/ev-garage/EVComparison";
import EVWhyUs from "../components/solutions/ev-garage/EVWhyUs";
import EVTestimonials from "../components/solutions/ev-garage/EVTestimonials";
import EVPricing from "../components/solutions/ev-garage/EVPricing";
import EVFAQ from "../components/solutions/ev-garage/EVFAQ";
import EVFinalCTA from "../components/solutions/ev-garage/EVFinalCTA";

export default function EVGarageSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <EVHero />
        <EVDefinition />
        <EVJobCards />
        <EVCustomerVehicle />
        <EVInventory />
        <EVBillingFinance />
        <EVServiceAlerts />
        <EVCRM />
        <EVStaff />
        <EVDashboardReports />
        <EVCloudAccess />
        <EVComparison />
        <EVWhyUs />
        <EVTestimonials />
        <EVPricing />
        <EVFAQ />
        <EVFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
