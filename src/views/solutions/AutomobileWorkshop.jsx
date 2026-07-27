"use client";

import PageLayout from "@/src/components/common/PageLayout";
import React from "react";
import dynamic from "next/dynamic";

const AWHero = dynamic(() => import('../../components/solutions/automobile-workshop/AWHero'), { ssr: false });
const AWProblem = dynamic(() => import('../../components/solutions/automobile-workshop/AWProblem'), { ssr: false });
const AWProductDefinition = dynamic(() => import('../../components/solutions/automobile-workshop/AWProductDefinition'), { ssr: false });
const AWWorkflow = dynamic(() => import('../../components/solutions/automobile-workshop/AWWorkflow'), { ssr: false });
const AWJobCards = dynamic(() => import('../../components/solutions/automobile-workshop/AWJobCards'), { ssr: false });
const AWInventory = dynamic(() => import('../../components/solutions/automobile-workshop/AWInventory'), { ssr: false });
const AWCustomerHistory = dynamic(() => import('../../components/solutions/automobile-workshop/AWCustomerHistory'), { ssr: false });
const AWServiceReminders = dynamic(() => import('../../components/solutions/automobile-workshop/AWServiceReminders'), { ssr: false });
const AWCRM = dynamic(() => import('../../components/solutions/automobile-workshop/AWCRM'), { ssr: false });
const AWStaff = dynamic(() => import('../../components/solutions/automobile-workshop/AWStaff'), { ssr: false });
const AWBillingFinance = dynamic(() => import('../../components/solutions/automobile-workshop/AWBillingFinance'), { ssr: false });
const AWDashboardReports = dynamic(() => import('../../components/solutions/automobile-workshop/AWDashboardReports'), { ssr: false });
const AWMultiBranch = dynamic(() => import('../../components/solutions/automobile-workshop/AWMultiBranch'), { ssr: false });
const AWCloudAccess = dynamic(() => import('../../components/solutions/automobile-workshop/AWCloudAccess'), { ssr: false });
const AWBusinessTypes = dynamic(() => import('../../components/solutions/automobile-workshop/AWBusinessTypes'), { ssr: false });
const AWWhyUs = dynamic(() => import('../../components/solutions/automobile-workshop/AWWhyUs'), { ssr: false });
const AWReviews = dynamic(() => import('../../components/solutions/automobile-workshop/AWReviews'), { ssr: false });
const AWPricing = dynamic(() => import('../../components/solutions/automobile-workshop/AWPricing'), { ssr: false });
const AWFAQ = dynamic(() => import('../../components/solutions/automobile-workshop/AWFAQ'), { ssr: false });
const AWFinalCTA = dynamic(() => import('../../components/solutions/automobile-workshop/AWFinalCTA'), { ssr: false });

export default function AutomobileWorkshop() {
  return (
    <PageLayout>
        <AWHero />
        <AWProblem />
        <AWProductDefinition />
        <AWWorkflow />
        <AWJobCards />
        <AWInventory />
        <AWCustomerHistory />
        <AWServiceReminders />
        <AWCRM />
        <AWStaff />
        <AWBillingFinance />
        <AWDashboardReports />
        <AWMultiBranch />
        <AWCloudAccess />
        <AWBusinessTypes />
        <AWWhyUs />
        <AWReviews />
        <AWPricing />
        <AWFAQ />
        <AWFinalCTA />
    </PageLayout>
  );
}
