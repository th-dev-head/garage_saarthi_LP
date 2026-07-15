"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GBHero from "../components/garage-billing/GBHero";
import GBProblemDefinition from "../components/garage-billing/GBProblemDefinition";
import GBProductDefinition from "../components/garage-billing/GBProductDefinition";
import GBFeatures from "../components/garage-billing/GBFeatures";
import GBWorkflow from "../components/garage-billing/GBWorkflow";
import GBGSTBilling from "../components/garage-billing/GBGSTBilling";
import GBBusinessType from "../components/garage-billing/GBBusinessType";
import GBCloudAccess from "../components/garage-billing/GBCloudAccess";
import GBInventoryConnection from "../components/garage-billing/GBInventoryConnection";
import GBFinanceVisibility from "../components/garage-billing/GBFinanceVisibility";
import GBCustomerVehicle from "../components/garage-billing/GBCustomerVehicle";
import GBSelectionCriteria from "../components/garage-billing/GBSelectionCriteria";
import GBEcosystem from "../components/garage-billing/GBEcosystem";
import GBCustomerProof from "../components/garage-billing/GBCustomerProof";
import GBFreeTrial from "../components/garage-billing/GBFreeTrial";
import GBFAQ from "../components/garage-billing/GBFAQ";
import GBFinalCTA from "../components/garage-billing/GBFinalCTA";

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
