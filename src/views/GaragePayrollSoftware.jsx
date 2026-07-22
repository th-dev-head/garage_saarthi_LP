"use client";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

import GPHero from "../components/solutions/garage-payroll/GPHero";
import GPDefinition from "../components/solutions/garage-payroll/GPDefinition";
import GPPayrollCapabilities from "../components/solutions/garage-payroll/GPPayrollCapabilities";
import GPAttendanceConnection from "../components/solutions/garage-payroll/GPAttendanceConnection";
import GPLeaveStaffManagement from "../components/solutions/garage-payroll/GPLeaveStaffManagement";
import GPWorkshopTypes from "../components/solutions/garage-payroll/GPWorkshopTypes";
import GPManualVsSystem from "../components/solutions/garage-payroll/GPManualVsSystem";
import GPEcosystem from "../components/solutions/garage-payroll/GPEcosystem";
import GPMultiBranch from "../components/solutions/garage-payroll/GPMultiBranch";
import GPWebMobile from "../components/solutions/garage-payroll/GPWebMobile";
import GPWhySaarthi from "../components/solutions/garage-payroll/GPWhySaarthi";
import GPPricing from "../components/solutions/garage-payroll/GPPricing";
import GPFAQ from "../components/solutions/garage-payroll/GPFAQ";
import GPFinalCTA from "../components/solutions/garage-payroll/GPFinalCTA";

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
