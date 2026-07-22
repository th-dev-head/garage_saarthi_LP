"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GWNHero from "../components/solutions/garage-whatsapp-notification/GWNHero";
import GWNProblem from "../components/solutions/garage-whatsapp-notification/GWNProblem";
import GWNProductDefinition from "../components/solutions/garage-whatsapp-notification/GWNProductDefinition";
import GWNWorkflow from "../components/solutions/garage-whatsapp-notification/GWNWorkflow";
import GWNServiceDue from "../components/solutions/garage-whatsapp-notification/GWNServiceDue";
import GWNAutomation from "../components/solutions/garage-whatsapp-notification/GWNAutomation";
import GWNCommunication from "../components/solutions/garage-whatsapp-notification/GWNCommunication";
import GWNRetention from "../components/solutions/garage-whatsapp-notification/GWNRetention";
import GWNBusinessTypes from "../components/solutions/garage-whatsapp-notification/GWNBusinessTypes";
import GWNAlerts from "../components/solutions/garage-whatsapp-notification/GWNAlerts";
import GWNPlatform from "../components/solutions/garage-whatsapp-notification/GWNPlatform";
import GWNWhySaarthi from "../components/solutions/garage-whatsapp-notification/GWNWhySaarthi";
import GWNProof from "../components/solutions/garage-whatsapp-notification/GWNProof";
import GWNFreeTrial from "../components/solutions/garage-whatsapp-notification/GWNFreeTrial";
import GWNFAQ from "../components/solutions/garage-whatsapp-notification/GWNFAQ";
import GWNFinalCTA from "../components/solutions/garage-whatsapp-notification/GWNFinalCTA";

export default function GarageWhatsAppNotificationSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <GWNHero />
        <GWNProblem />
        <GWNProductDefinition />
        <GWNWorkflow />
        <GWNServiceDue />
        <GWNAutomation />
        <GWNCommunication />
        <GWNRetention />
        <GWNBusinessTypes />
        <GWNAlerts />
        <GWNPlatform />
        <GWNWhySaarthi />
        <GWNProof />
        <GWNFreeTrial />
        <GWNFAQ />
        <GWNFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
