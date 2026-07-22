"use client";

import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GCEHero from "../components/solutions/garage-customer-engagement/GCEHero";
import GCEProblem from "../components/solutions/garage-customer-engagement/GCEProblem";
import GCERecords from "../components/solutions/garage-customer-engagement/GCERecords";
import GCEReminders from "../components/solutions/garage-customer-engagement/GCEReminders";
import GCECommunication from "../components/solutions/garage-customer-engagement/GCECommunication";
import GCECRM from "../components/solutions/garage-customer-engagement/GCECRM";
import GCEOffers from "../components/solutions/garage-customer-engagement/GCEOffers";
import GCERetention from "../components/solutions/garage-customer-engagement/GCERetention";
import GCEExperience from "../components/solutions/garage-customer-engagement/GCEExperience";
import GCEFeedback from "../components/solutions/garage-customer-engagement/GCEFeedback";
import GCEBusinessTypes from "../components/solutions/garage-customer-engagement/GCEBusinessTypes";
import GCEPlatform from "../components/solutions/garage-customer-engagement/GCEPlatform";
import GCEWhySaarthi from "../components/solutions/garage-customer-engagement/GCEWhySaarthi";
import GCEProof from "../components/solutions/garage-customer-engagement/GCEProof";
import GCEFreeTrial from "../components/solutions/garage-customer-engagement/GCEFreeTrial";
import GCEFAQ from "../components/solutions/garage-customer-engagement/GCEFAQ";
import GCEFinalCTA from "../components/solutions/garage-customer-engagement/GCEFinalCTA";

export default function GarageCustomerEngagementSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        <GCEHero />
        <GCEProblem />
        <GCERecords />
        <GCEReminders />
        <GCECommunication />
        <GCECRM />
        <GCEOffers />
        <GCERetention />
        <GCEExperience />
        <GCEFeedback />
        <GCEBusinessTypes />
        <GCEPlatform />
        <GCEWhySaarthi />
        <GCEProof />
        <GCEFreeTrial />
        <GCEFAQ />
        <GCEFinalCTA />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
