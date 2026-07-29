import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import AWHero from "../../components/solutions/automobile-workshop/AWHero";
import AWProblem from "../../components/solutions/automobile-workshop/AWProblem";
import AWProductDefinition from "../../components/solutions/automobile-workshop/AWProductDefinition";
import AWWorkflow from "../../components/solutions/automobile-workshop/AWWorkflow";
import AWJobCards from "../../components/solutions/automobile-workshop/AWJobCards";
import AWInventory from "../../components/solutions/automobile-workshop/AWInventory";
import AWCustomerHistory from "../../components/solutions/automobile-workshop/AWCustomerHistory";
import AWServiceReminders from "../../components/solutions/automobile-workshop/AWServiceReminders";
import AWCRM from "../../components/solutions/automobile-workshop/AWCRM";
import AWStaff from "../../components/solutions/automobile-workshop/AWStaff";
import AWBillingFinance from "../../components/solutions/automobile-workshop/AWBillingFinance";
import AWDashboardReports from "../../components/solutions/automobile-workshop/AWDashboardReports";
import AWMultiBranch from "../../components/solutions/automobile-workshop/AWMultiBranch";
import AWCloudAccess from "../../components/solutions/automobile-workshop/AWCloudAccess";
import AWBusinessTypes from "../../components/solutions/automobile-workshop/AWBusinessTypes";
import AWWhyUs from "../../components/solutions/automobile-workshop/AWWhyUs";
import AWReviews from "../../components/solutions/automobile-workshop/AWReviews";
import AWPricing from "../../components/solutions/automobile-workshop/AWPricing";
import AWFAQ from "../../components/solutions/automobile-workshop/AWFAQ";
import AWFinalCTA from "../../components/solutions/automobile-workshop/AWFinalCTA";

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
