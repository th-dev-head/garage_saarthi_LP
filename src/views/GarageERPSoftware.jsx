"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GEHero from "../components/garage-erp/GEHero";
import GEDefinition from "../components/garage-erp/GEDefinition";
import GEConnectedOperations from "../components/garage-erp/GEConnectedOperations";
import GECentralized from "../components/garage-erp/GECentralized";
import GEWorkflow from "../components/garage-erp/GEWorkflow";
import GEInventoryOperations from "../components/garage-erp/GEInventoryOperations";
import GECustomerVehicle from "../components/garage-erp/GECustomerVehicle";
import GEEmployee from "../components/garage-erp/GEEmployee";
import GEFinance from "../components/garage-erp/GEFinance";
import GEMultiBranch from "../components/garage-erp/GEMultiBranch";
import GECloudAccess from "../components/garage-erp/GECloudAccess";
import GEBusinessType from "../components/garage-erp/GEBusinessType";
import GEIndiaPositioning from "../components/garage-erp/GEIndiaPositioning";
import GEWhySaarthi from "../components/garage-erp/GEWhySaarthi";
import GESelectionGuidance from "../components/garage-erp/GESelectionGuidance";
import GECustomerProof from "../components/garage-erp/GECustomerProof";
import GEFreeTrial from "../components/garage-erp/GEFreeTrial";
import GEFAQ from "../components/garage-erp/GEFAQ";
import GEFinalCTA from "../components/garage-erp/GEFinalCTA";

export default function GarageERPSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        <GEHero />
        <GEDefinition />
        <GEConnectedOperations />
        <GECentralized />
        <GEWorkflow />
        <GEInventoryOperations />
        <GECustomerVehicle />
        <GEEmployee />
        <GEFinance />
        <GEMultiBranch />
        <GECloudAccess />
        <GEBusinessType />
        <GEIndiaPositioning />
        <GEWhySaarthi />
        <GESelectionGuidance />
        <GECustomerProof />
        <GEFreeTrial />
        <GEFAQ />
        <GEFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
