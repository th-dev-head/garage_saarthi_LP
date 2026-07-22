"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GEHero from "../components/solutions/garage-erp/GEHero";
import GEDefinition from "../components/solutions/garage-erp/GEDefinition";
import GEConnectedOperations from "../components/solutions/garage-erp/GEConnectedOperations";
import GECentralized from "../components/solutions/garage-erp/GECentralized";
import GEWorkflow from "../components/solutions/garage-erp/GEWorkflow";
import GEInventoryOperations from "../components/solutions/garage-erp/GEInventoryOperations";
import GECustomerVehicle from "../components/solutions/garage-erp/GECustomerVehicle";
import GEEmployee from "../components/solutions/garage-erp/GEEmployee";
import GEFinance from "../components/solutions/garage-erp/GEFinance";
import GEMultiBranch from "../components/solutions/garage-erp/GEMultiBranch";
import GECloudAccess from "../components/solutions/garage-erp/GECloudAccess";
import GEBusinessType from "../components/solutions/garage-erp/GEBusinessType";
import GEIndiaPositioning from "../components/solutions/garage-erp/GEIndiaPositioning";
import GEWhySaarthi from "../components/solutions/garage-erp/GEWhySaarthi";
import GESelectionGuidance from "../components/solutions/garage-erp/GESelectionGuidance";
import GECustomerProof from "../components/solutions/garage-erp/GECustomerProof";
import GEFreeTrial from "../components/solutions/garage-erp/GEFreeTrial";
import GEFAQ from "../components/solutions/garage-erp/GEFAQ";
import GEFinalCTA from "../components/solutions/garage-erp/GEFinalCTA";

export default function GarageERPSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
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
