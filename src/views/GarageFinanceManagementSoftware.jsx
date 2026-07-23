"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

const GFMHero = dynamic(() => import('../components/solutions/garage-finance/GFMHero'), { ssr: false });
const GFMDefinition = dynamic(() => import('../components/solutions/garage-finance/GFMDefinition'), { ssr: false });
const GFMIncomeExpense = dynamic(() => import('../components/solutions/garage-finance/GFMIncomeExpense'), { ssr: false });
const GFMPayments = dynamic(() => import('../components/solutions/garage-finance/GFMPayments'), { ssr: false });
const GFMVisibility = dynamic(() => import('../components/solutions/garage-finance/GFMVisibility'), { ssr: false });
const GFMAccounting = dynamic(() => import('../components/solutions/garage-finance/GFMAccounting'), { ssr: false });
const GFMBilling = dynamic(() => import('../components/solutions/garage-finance/GFMBilling'), { ssr: false });
const GFMLoans = dynamic(() => import('../components/solutions/garage-finance/GFMLoans'), { ssr: false });
const GFMCaAccess = dynamic(() => import('../components/solutions/garage-finance/GFMCaAccess'), { ssr: false });
const GFMConnected = dynamic(() => import('../components/solutions/garage-finance/GFMConnected'), { ssr: false });
const GFMWorkshopTypes = dynamic(() => import('../components/solutions/garage-finance/GFMWorkshopTypes'), { ssr: false });
const GFMManualVsSystem = dynamic(() => import('../components/solutions/garage-finance/GFMManualVsSystem'), { ssr: false });
const GFMWebMobile = dynamic(() => import('../components/solutions/garage-finance/GFMWebMobile'), { ssr: false });
const GFMWhySaarthi = dynamic(() => import('../components/solutions/garage-finance/GFMWhySaarthi'), { ssr: false });
const GFMPricing = dynamic(() => import('../components/solutions/garage-finance/GFMPricing'), { ssr: false });
const GFMFAQ = dynamic(() => import('../components/solutions/garage-finance/GFMFAQ'), { ssr: false });
const GFMFinalCTA = dynamic(() => import('../components/solutions/garage-finance/GFMFinalCTA'), { ssr: false });

export default function GarageFinanceManagementSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <GFMHero />
        <GFMDefinition />
        <GFMIncomeExpense />
        <GFMPayments />
        <GFMVisibility />
        <GFMAccounting />
        <GFMBilling />
        <GFMLoans />
        <GFMCaAccess />
        <GFMConnected />
        <GFMWorkshopTypes />
        <GFMManualVsSystem />
        <GFMWebMobile />
        <GFMWhySaarthi />
        <GFMPricing />
        <GFMFAQ />
        <GFMFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
