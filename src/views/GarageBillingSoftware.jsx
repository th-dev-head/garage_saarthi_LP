"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GBHero from "../components/solutions/garage-billing/GBHero";
import GBProblemDefinition from "../components/solutions/garage-billing/GBProblemDefinition";
import GBProductDefinition from "../components/solutions/garage-billing/GBProductDefinition";
import GBFeatures from "../components/solutions/garage-billing/GBFeatures";
import GBWorkflow from "../components/solutions/garage-billing/GBWorkflow";
import GBGSTBilling from "../components/solutions/garage-billing/GBGSTBilling";
import GBBusinessType from "../components/solutions/garage-billing/GBBusinessType";
import GBCloudAccess from "../components/solutions/garage-billing/GBCloudAccess";
import GBInventoryConnection from "../components/solutions/garage-billing/GBInventoryConnection";
import GBFinanceVisibility from "../components/solutions/garage-billing/GBFinanceVisibility";
import GBCustomerVehicle from "../components/solutions/garage-billing/GBCustomerVehicle";
import GBSelectionCriteria from "../components/solutions/garage-billing/GBSelectionCriteria";
import GBEcosystem from "../components/solutions/garage-billing/GBEcosystem";
import GBCustomerProof from "../components/solutions/garage-billing/GBCustomerProof";
import GBFreeTrial from "../components/solutions/garage-billing/GBFreeTrial";
import GBFAQ from "../components/solutions/garage-billing/GBFAQ";
import GBFinalCTA from "../components/solutions/garage-billing/GBFinalCTA";

export default function GarageBillingSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <GBHero />
        <GBProblemDefinition />
        <GBProductDefinition />
        <GBFeatures />
        <GBWorkflow />
        <GBGSTBilling />
        <GBBusinessType />
        <GBCloudAccess />
        <GBInventoryConnection />
        <GBFinanceVisibility />
        <GBCustomerVehicle />
        <GBSelectionCriteria />
        <GBEcosystem />
        <GBCustomerProof />
        <GBFreeTrial />
        <GBFAQ />
        <GBFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
