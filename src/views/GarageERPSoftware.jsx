"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

const GEHero = dynamic(() => import('../components/solutions/garage-erp/GEHero'), { ssr: false });
const GEDefinition = dynamic(() => import('../components/solutions/garage-erp/GEDefinition'), { ssr: false });
const GEConnectedOperations = dynamic(() => import('../components/solutions/garage-erp/GEConnectedOperations'), { ssr: false });
const GECentralized = dynamic(() => import('../components/solutions/garage-erp/GECentralized'), { ssr: false });
const GEWorkflow = dynamic(() => import('../components/solutions/garage-erp/GEWorkflow'), { ssr: false });
const GEInventoryOperations = dynamic(() => import('../components/solutions/garage-erp/GEInventoryOperations'), { ssr: false });
const GECustomerVehicle = dynamic(() => import('../components/solutions/garage-erp/GECustomerVehicle'), { ssr: false });
const GEEmployee = dynamic(() => import('../components/solutions/garage-erp/GEEmployee'), { ssr: false });
const GEFinance = dynamic(() => import('../components/solutions/garage-erp/GEFinance'), { ssr: false });
const GEMultiBranch = dynamic(() => import('../components/solutions/garage-erp/GEMultiBranch'), { ssr: false });
const GECloudAccess = dynamic(() => import('../components/solutions/garage-erp/GECloudAccess'), { ssr: false });
const GEBusinessType = dynamic(() => import('../components/solutions/garage-erp/GEBusinessType'), { ssr: false });
const GEIndiaPositioning = dynamic(() => import('../components/solutions/garage-erp/GEIndiaPositioning'), { ssr: false });
const GEWhySaarthi = dynamic(() => import('../components/solutions/garage-erp/GEWhySaarthi'), { ssr: false });
const GESelectionGuidance = dynamic(() => import('../components/solutions/garage-erp/GESelectionGuidance'), { ssr: false });
const GECustomerProof = dynamic(() => import('../components/solutions/garage-erp/GECustomerProof'), { ssr: false });
const GEFreeTrial = dynamic(() => import('../components/solutions/garage-erp/GEFreeTrial'), { ssr: false });
const GEFAQ = dynamic(() => import('../components/solutions/garage-erp/GEFAQ'), { ssr: false });
const GEFinalCTA = dynamic(() => import('../components/solutions/garage-erp/GEFinalCTA'), { ssr: false });

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
