"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GIHero from "../components/garage-inventory/GIHero";
import GIDefinition from "../components/garage-inventory/GIDefinition";
import GISpareParts from "../components/garage-inventory/GISpareParts";
import GIStockManagement from "../components/garage-inventory/GIStockManagement";
import GIAutomotiveParts from "../components/garage-inventory/GIAutomotiveParts";
import GIWorkshopTypes from "../components/garage-inventory/GIWorkshopTypes";
import GIConnectedOperations from "../components/garage-inventory/GIConnectedOperations";
import GIAutomation from "../components/garage-inventory/GIAutomation";
import GIMultiBranch from "../components/garage-inventory/GIMultiBranch";
import GIReporting from "../components/garage-inventory/GIReporting";
import GIAccess from "../components/garage-inventory/GIAccess";
import GIWhySaarthi from "../components/garage-inventory/GIWhySaarthi";
import GIRelatedFeatures from "../components/garage-inventory/GIRelatedFeatures";
import GIFreeTrial from "../components/garage-inventory/GIFreeTrial";
import GIFAQ from "../components/garage-inventory/GIFAQ";
import GIFinalCTA from "../components/garage-inventory/GIFinalCTA";

export default function GarageInventorySoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <GIHero />
        <GIDefinition />
        <GISpareParts />
        <GIStockManagement />
        <GIAutomotiveParts />
        <GIWorkshopTypes />
        <GIConnectedOperations />
        <GIAutomation />
        <GIMultiBranch />
        <GIReporting />
        <GIAccess />
        <GIWhySaarthi />
        <GIRelatedFeatures />
        <GIFreeTrial />
        <GIFAQ />
        <GIFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
