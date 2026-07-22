"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GSIHero from "../components/solutions/garage-software-india/GSIHero";
import GSIPositioning from "../components/solutions/garage-software-india/GSIPositioning";
import GSIServices from "../components/solutions/garage-software-india/GSIServices";
import GSIBusinessTypes from "../components/solutions/garage-software-india/GSIBusinessTypes";
import GSIDigitalTransformation from "../components/solutions/garage-software-india/GSIDigitalTransformation";
import GSICloudAccess from "../components/solutions/garage-software-india/GSICloudAccess";
import GSIGSTBilling from "../components/solutions/garage-software-india/GSIGSTBilling";
import GSIServiceReminders from "../components/solutions/garage-software-india/GSIServiceReminders";
import GSIMultiBranch from "../components/solutions/garage-software-india/GSIMultiBranch";
import GSIWhyUs from "../components/solutions/garage-software-india/GSIWhyUs";
import GSIPricing from "../components/solutions/garage-software-india/GSIPricing";
import GSITestimonials from "../components/solutions/garage-software-india/GSITestimonials";
import GSICriteria from "../components/solutions/garage-software-india/GSICriteria";
import GSIFAQ from "../components/solutions/garage-software-india/GSIFAQ";
import GSIFinalCTA from "../components/solutions/garage-software-india/GSIFinalCTA";

export default function GarageManagementSoftwareIndia() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <GSIHero />
        <GSIPositioning />
        <GSIServices />
        <GSIBusinessTypes />
        <GSIDigitalTransformation />
        <GSICloudAccess />
        <GSIGSTBilling />
        <GSIServiceReminders />
        <GSIMultiBranch />
        <GSIWhyUs />
        <GSIPricing />
        <GSITestimonials />
        <GSICriteria />
        <GSIFAQ />
        <GSIFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
