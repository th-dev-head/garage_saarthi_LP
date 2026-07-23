"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
const ScrollToTop = dynamic(() => import('../components/common/ScrollToTop'), { ssr: false });

const GPHero = dynamic(() => import('../components/solutions/garage-payroll/GPHero'), { ssr: false });
const GPDefinition = dynamic(() => import('../components/solutions/garage-payroll/GPDefinition'), { ssr: false });
const GPPayrollCapabilities = dynamic(() => import('../components/solutions/garage-payroll/GPPayrollCapabilities'), { ssr: false });
const GPAttendanceConnection = dynamic(() => import('../components/solutions/garage-payroll/GPAttendanceConnection'), { ssr: false });
const GPLeaveStaffManagement = dynamic(() => import('../components/solutions/garage-payroll/GPLeaveStaffManagement'), { ssr: false });
const GPWorkshopTypes = dynamic(() => import('../components/solutions/garage-payroll/GPWorkshopTypes'), { ssr: false });
const GPManualVsSystem = dynamic(() => import('../components/solutions/garage-payroll/GPManualVsSystem'), { ssr: false });
const GPEcosystem = dynamic(() => import('../components/solutions/garage-payroll/GPEcosystem'), { ssr: false });
const GPMultiBranch = dynamic(() => import('../components/solutions/garage-payroll/GPMultiBranch'), { ssr: false });
const GPWebMobile = dynamic(() => import('../components/solutions/garage-payroll/GPWebMobile'), { ssr: false });
const GPWhySaarthi = dynamic(() => import('../components/solutions/garage-payroll/GPWhySaarthi'), { ssr: false });
const GPPricing = dynamic(() => import('../components/solutions/garage-payroll/GPPricing'), { ssr: false });
const GPFAQ = dynamic(() => import('../components/solutions/garage-payroll/GPFAQ'), { ssr: false });
const GPFinalCTA = dynamic(() => import('../components/solutions/garage-payroll/GPFinalCTA'), { ssr: false });

export default function GaragePayrollSoftware() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <GPHero />
        <GPDefinition />
        <GPPayrollCapabilities />
        <GPAttendanceConnection />
        <GPLeaveStaffManagement />
        <GPWorkshopTypes />
        <GPManualVsSystem />
        <GPEcosystem />
        <GPMultiBranch />
        <GPWebMobile />
        <GPWhySaarthi />
        <GPPricing />
        <GPFAQ />
        <GPFinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
