"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

const BGSHero = dynamic(() => import('../components/solutions/best-garage-software/BGSHero'), { ssr: false });
const BGSAnswer = dynamic(() => import('../components/solutions/best-garage-software/BGSAnswer'), { ssr: false });
const BGSChecklist = dynamic(() => import('../components/solutions/best-garage-software/BGSChecklist'), { ssr: false });
const BGSFeatureCoverage = dynamic(() => import('../components/solutions/best-garage-software/BGSFeatureCoverage'), { ssr: false });
const BGSSmallGarages = dynamic(() => import('../components/solutions/best-garage-software/BGSSmallGarages'), { ssr: false });
const BGSBusinessType = dynamic(() => import('../components/solutions/best-garage-software/BGSBusinessType'), { ssr: false });
const BGSAllInOne = dynamic(() => import('../components/solutions/best-garage-software/BGSAllInOne'), { ssr: false });
const BGSCloudAccess = dynamic(() => import('../components/solutions/best-garage-software/BGSCloudAccess'), { ssr: false });
const BGSFramework = dynamic(() => import('../components/solutions/best-garage-software/BGSFramework'), { ssr: false });
const BGSWhyUs = dynamic(() => import('../components/solutions/best-garage-software/BGSWhyUs'), { ssr: false });
const BGSProductVisual = dynamic(() => import('../components/solutions/best-garage-software/BGSProductVisual'), { ssr: false });
const BGSPricing = dynamic(() => import('../components/solutions/best-garage-software/BGSPricing'), { ssr: false });
const BGSTestimonials = dynamic(() => import('../components/solutions/best-garage-software/BGSTestimonials'), { ssr: false });
const BGSFAQ = dynamic(() => import('../components/solutions/best-garage-software/BGSFAQ'), { ssr: false });
const BGSFinalCTA = dynamic(() => import('../components/solutions/best-garage-software/BGSFinalCTA'), { ssr: false });

export default function BestGarageManagementSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <BGSHero />
        <BGSAnswer />
        <BGSChecklist />
        <BGSFeatureCoverage />
        <BGSSmallGarages />
        <BGSBusinessType />
        <BGSAllInOne />
        <BGSCloudAccess />
        <BGSFramework />
        <BGSWhyUs />
        <BGSProductVisual />
        <BGSPricing />
        <BGSTestimonials />
        <BGSFAQ />
        <BGSFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
