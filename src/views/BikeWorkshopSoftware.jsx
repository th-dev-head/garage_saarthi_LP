"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Section Components
import BWHero from "../components/solutions/bike-workshop/BWHero";
import BWDefinition from "../components/solutions/bike-workshop/BWDefinition";
import BWJobCards from "../components/solutions/bike-workshop/BWJobCards";
import BWCustomerVehicle from "../components/solutions/bike-workshop/BWCustomerVehicle";
import BWInventory from "../components/solutions/bike-workshop/BWInventory";
import BWBillingFinance from "../components/solutions/bike-workshop/BWBillingFinance";
import BWServiceAlerts from "../components/solutions/bike-workshop/BWServiceAlerts";
import BWStaff from "../components/solutions/bike-workshop/BWStaff";
import BWDashboardReports from "../components/solutions/bike-workshop/BWDashboardReports";
import BWCloudAccess from "../components/solutions/bike-workshop/BWCloudAccess";
import BWBusinessType from "../components/solutions/bike-workshop/BWBusinessType";
import BWComparison from "../components/solutions/bike-workshop/BWComparison";
import BWWhyUs from "../components/solutions/bike-workshop/BWWhyUs";
import BWTestimonials from "../components/solutions/bike-workshop/BWTestimonials";
import BWPricing from "../components/solutions/bike-workshop/BWPricing";
import BWFAQ from "../components/solutions/bike-workshop/BWFAQ";
import BWFinalCTA from "../components/solutions/bike-workshop/BWFinalCTA";

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
