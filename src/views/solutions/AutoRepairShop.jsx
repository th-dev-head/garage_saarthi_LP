import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import ARSHero from "../../components/solutions/auto-repair-shop/ARSHero";
import ARSProductDefinition from "../../components/solutions/auto-repair-shop/ARSProductDefinition";

import ARSWorkflow from "../../components/solutions/auto-repair-shop/ARSWorkflow";
import ARSJobCards from "../../components/solutions/auto-repair-shop/ARSJobCards";
import ARSInventory from "../../components/solutions/auto-repair-shop/ARSInventory";
import ARSBillingFinance from "../../components/solutions/auto-repair-shop/ARSBillingFinance";
import ARSCustomerHistory from "../../components/solutions/auto-repair-shop/ARSCustomerHistory";
import ARSServiceReminders from "../../components/solutions/auto-repair-shop/ARSServiceReminders";
import ARSStaff from "../../components/solutions/auto-repair-shop/ARSStaff";
import ARSDashboardReports from "../../components/solutions/auto-repair-shop/ARSDashboardReports";
import ARSMultiBranch from "../../components/solutions/auto-repair-shop/ARSMultiBranch";
import ARSCloudAccess from "../../components/solutions/auto-repair-shop/ARSCloudAccess";
import ARSIndiaPositioning from "../../components/solutions/auto-repair-shop/ARSIndiaPositioning";
import ARSWhyUs from "../../components/solutions/auto-repair-shop/ARSWhyUs";
import ARSTestimonials from "../../components/solutions/auto-repair-shop/ARSTestimonials";
import ARSFreeTrialCTA from "../../components/solutions/auto-repair-shop/ARSFreeTrialCTA";
import ARSFAQ from "../../components/solutions/auto-repair-shop/ARSFAQ";
import ARSFinalCTA from "../../components/solutions/auto-repair-shop/ARSFinalCTA";

export default function AutoRepairShop() {
  return (
    <PageLayout>
      <ARSHero />
      <ARSProductDefinition />
      <ARSWorkflow />
      <ARSJobCards />
      <ARSInventory />
      <ARSBillingFinance />
      <ARSCustomerHistory />
      <ARSServiceReminders />
      <ARSStaff />
      <ARSDashboardReports />
      <ARSMultiBranch />
      <ARSCloudAccess />
      <ARSIndiaPositioning />
      <ARSWhyUs />
      <ARSTestimonials />
      <ARSFreeTrialCTA />
      <ARSFAQ />
      <ARSFinalCTA />
    </PageLayout>
  );
}
