import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

// Section Components
import FLHero from "../../components/solutions/fleet-workshop/FLHero";
import FLDefinition from "../../components/solutions/fleet-workshop/FLDefinition";
import FLProduct from "../../components/solutions/fleet-workshop/FLProduct";
import FLJobCards from "../../components/solutions/fleet-workshop/FLJobCards";
import FLCustomerVehicle from "../../components/solutions/fleet-workshop/FLCustomerVehicle";
import FLServiceAlerts from "../../components/solutions/fleet-workshop/FLServiceAlerts";
import FLInventory from "../../components/solutions/fleet-workshop/FLInventory";
import FLStaff from "../../components/solutions/fleet-workshop/FLStaff";
import FLBillingFinance from "../../components/solutions/fleet-workshop/FLBillingFinance";
import FLDashboardReports from "../../components/solutions/fleet-workshop/FLDashboardReports";
import FLMultiBranch from "../../components/solutions/fleet-workshop/FLMultiBranch";
import FLFleetTypes from "../../components/solutions/fleet-workshop/FLFleetTypes";
import FLComparison from "../../components/solutions/fleet-workshop/FLComparison";
import FLCloudAccess from "../../components/solutions/fleet-workshop/FLCloudAccess";
import FLWhyUs from "../../components/solutions/fleet-workshop/FLWhyUs";
import FLTestimonials from "../../components/solutions/fleet-workshop/FLTestimonials";
import FLPricing from "../../components/solutions/fleet-workshop/FLPricing";
import FLFAQ from "../../components/solutions/fleet-workshop/FLFAQ";
import FLFinalCTA from "../../components/solutions/fleet-workshop/FLFinalCTA";

export default function FleetWorkshopSoftware() {
  return (
    <PageLayout>
      <FLHero />
      <FLDefinition />
      <FLProduct />
      <FLJobCards />
      <FLCustomerVehicle />
      <FLServiceAlerts />
      <FLInventory />
      <FLStaff />
      <FLBillingFinance />
      <FLDashboardReports />
      <FLMultiBranch />
      <FLFleetTypes />
      <FLComparison />
      <FLCloudAccess />
      <FLWhyUs />
      <FLTestimonials />
      <FLPricing />
      <FLFAQ />
      <FLFinalCTA />
    </PageLayout>
  );
}
