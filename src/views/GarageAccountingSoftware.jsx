"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GACHero from "../components/solutions/garage-accounting/GACHero";
import GACDefinition from "../components/solutions/garage-accounting/GACDefinition";
import GACCapabilities from "../components/solutions/garage-accounting/GACCapabilities";
import GACProblem from "../components/solutions/garage-accounting/GACProblem";
import GACExpenseManagement from "../components/solutions/garage-accounting/GACExpenseManagement";
import GACBilling from "../components/solutions/garage-accounting/GACBilling";
import GACCaAccess from "../components/solutions/garage-accounting/GACCaAccess";
import GACConnected from "../components/solutions/garage-accounting/GACConnected";
import GACWebMobile from "../components/solutions/garage-accounting/GACWebMobile";
import GACMultiBranch from "../components/solutions/garage-accounting/GACMultiBranch";
import GACWorkshopTypes from "../components/solutions/garage-accounting/GACWorkshopTypes";
import GACWhySaarthi from "../components/solutions/garage-accounting/GACWhySaarthi";
import GACPricing from "../components/solutions/garage-accounting/GACPricing";
import GACFAQ from "../components/solutions/garage-accounting/GACFAQ";
import GACFinalCTA from "../components/solutions/garage-accounting/GACFinalCTA";

export default function GarageAccountingSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <GACHero />
        <GACDefinition />
        <GACCapabilities />
        <GACProblem />
        <GACExpenseManagement />
        <GACBilling />
        <GACCaAccess />
        <GACConnected />
        <GACWebMobile />
        <GACMultiBranch />
        <GACWorkshopTypes />
        <GACWhySaarthi />
        <GACPricing />
        <GACFAQ />
        <GACFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
