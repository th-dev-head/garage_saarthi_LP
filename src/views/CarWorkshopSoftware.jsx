"use client";
import dynamic from 'next/dynamic';
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

const CWHero = dynamic(() => import('../components/solutions/car-workshop/CWHero'), { ssr: false });
const CWDefinition = dynamic(() => import('../components/solutions/car-workshop/CWDefinition'), { ssr: false });
const CWJobCardWorkflow = dynamic(() => import('../components/solutions/car-workshop/CWJobCardWorkflow'), { ssr: false });
const CWInventory = dynamic(() => import('../components/solutions/car-workshop/CWInventory'), { ssr: false });
const CWBilling = dynamic(() => import('../components/solutions/car-workshop/CWBilling'), { ssr: false });
const CWServiceReminders = dynamic(() => import('../components/solutions/car-workshop/CWServiceReminders'), { ssr: false });
const CWStaffManagement = dynamic(() => import('../components/solutions/car-workshop/CWStaffManagement'), { ssr: false });
const CWDashboardReports = dynamic(() => import('../components/solutions/car-workshop/CWDashboardReports'), { ssr: false });
const CWMultiBranch = dynamic(() => import('../components/solutions/car-workshop/CWMultiBranch'), { ssr: false });
const CWWebMobile = dynamic(() => import('../components/solutions/car-workshop/CWWebMobile'), { ssr: false });
const CWTransformation = dynamic(() => import('../components/solutions/car-workshop/CWTransformation'), { ssr: false });
const CWWhySaarthi = dynamic(() => import('../components/solutions/car-workshop/CWWhySaarthi'), { ssr: false });
const CWCustomerProof = dynamic(() => import('../components/solutions/car-workshop/CWCustomerProof'), { ssr: false });
const CWPricing = dynamic(() => import('../components/solutions/car-workshop/CWPricing'), { ssr: false });
const CWRelatedSolutions = dynamic(() => import('../components/solutions/car-workshop/CWRelatedSolutions'), { ssr: false });
const CWFAQ = dynamic(() => import('../components/solutions/car-workshop/CWFAQ'), { ssr: false });
const CWFinalCTA = dynamic(() => import('../components/solutions/car-workshop/CWFinalCTA'), { ssr: false });

export default function CarWorkshopSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <CWHero />
        <CWDefinition />
        <CWJobCardWorkflow />
        <CWInventory />
        <CWBilling />
        <CWServiceReminders />
        <CWStaffManagement />
        <CWDashboardReports />
        <CWMultiBranch />
        <CWWebMobile />
        <CWTransformation />
        <CWWhySaarthi />
        <CWCustomerProof />
        <CWPricing />
        <CWRelatedSolutions />
        <CWFAQ />
        <CWFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
