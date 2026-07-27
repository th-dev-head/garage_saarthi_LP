"use client";

import PageLayout from "@/src/components/common/PageLayout";
import dynamic from 'next/dynamic';
import React from "react";

// Section Components
const EVHero = dynamic(() => import('../../components/solutions/ev-garage/EVHero'), { ssr: false });
const EVDefinition = dynamic(() => import('../../components/solutions/ev-garage/EVDefinition'), { ssr: false });
const EVJobCards = dynamic(() => import('../../components/solutions/ev-garage/EVJobCards'), { ssr: false });
const EVCustomerVehicle = dynamic(() => import('../../components/solutions/ev-garage/EVCustomerVehicle'), { ssr: false });
const EVInventory = dynamic(() => import('../../components/solutions/ev-garage/EVInventory'), { ssr: false });
const EVBillingFinance = dynamic(() => import('../../components/solutions/ev-garage/EVBillingFinance'), { ssr: false });
const EVServiceAlerts = dynamic(() => import('../../components/solutions/ev-garage/EVServiceAlerts'), { ssr: false });
const EVCRM = dynamic(() => import('../../components/solutions/ev-garage/EVCRM'), { ssr: false });
const EVStaff = dynamic(() => import('../../components/solutions/ev-garage/EVStaff'), { ssr: false });
const EVDashboardReports = dynamic(() => import('../../components/solutions/ev-garage/EVDashboardReports'), { ssr: false });
const EVCloudAccess = dynamic(() => import('../../components/solutions/ev-garage/EVCloudAccess'), { ssr: false });
const EVComparison = dynamic(() => import('../../components/solutions/ev-garage/EVComparison'), { ssr: false });
const EVWhyUs = dynamic(() => import('../../components/solutions/ev-garage/EVWhyUs'), { ssr: false });
const EVTestimonials = dynamic(() => import('../../components/solutions/ev-garage/EVTestimonials'), { ssr: false });
const EVPricing = dynamic(() => import('../../components/solutions/ev-garage/EVPricing'), { ssr: false });
const EVFAQ = dynamic(() => import('../../components/solutions/ev-garage/EVFAQ'), { ssr: false });
const EVFinalCTA = dynamic(() => import('../../components/solutions/ev-garage/EVFinalCTA'), { ssr: false });

export default function EVGarageSoftware() {
  return (
    <PageLayout>
      <EVHero />
      <EVDefinition />
      <EVJobCards />
      <EVCustomerVehicle />
      <EVInventory />
      <EVBillingFinance />
      <EVServiceAlerts />
      <EVCRM />
      <EVStaff />
      <EVDashboardReports />
      <EVCloudAccess />
      <EVComparison />
      <EVWhyUs />
      <EVTestimonials />
      <EVPricing />
      <EVFAQ />
      <EVFinalCTA />
    </PageLayout>
  );
}
