import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

// Section Components
import TWHero from "../../components/solutions/truck-workshop/TWHero";
import TWDefinition from "../../components/solutions/truck-workshop/TWDefinition";
import TWJobCards from "../../components/solutions/truck-workshop/TWJobCards";
import TWCustomerVehicle from "../../components/solutions/truck-workshop/TWCustomerVehicle";
import TWInventory from "../../components/solutions/truck-workshop/TWInventory";
import TWBillingFinance from "../../components/solutions/truck-workshop/TWBillingFinance";
import TWServiceAlerts from "../../components/solutions/truck-workshop/TWServiceAlerts";
import TWStaff from "../../components/solutions/truck-workshop/TWStaff";
import TWDashboardReports from "../../components/solutions/truck-workshop/TWDashboardReports";
import TWCloudAccess from "../../components/solutions/truck-workshop/TWCloudAccess";
import TWBusinessType from "../../components/solutions/truck-workshop/TWBusinessType";
import TWComparison from "../../components/solutions/truck-workshop/TWComparison";
import TWWhyUs from "../../components/solutions/truck-workshop/TWWhyUs";
import TWTestimonials from "../../components/solutions/truck-workshop/TWTestimonials";
import TWPricing from "../../components/solutions/truck-workshop/TWPricing";
import TWFAQ from "../../components/solutions/truck-workshop/TWFAQ";
import TWFinalCTA from "../../components/solutions/truck-workshop/TWFinalCTA";

export default function TruckWorkshopSoftware() {
  return (
    <PageLayout>
      <TWHero />
      <TWDefinition />
      <TWJobCards />
      <TWCustomerVehicle />
      <TWInventory />
      <TWBillingFinance />
      <TWServiceAlerts />
      <TWStaff />
      <TWDashboardReports />
      <TWCloudAccess />
      <TWBusinessType />
      <TWComparison />
      <TWWhyUs />
      <TWTestimonials />
      <TWPricing />
      <TWFAQ />
      <TWFinalCTA />
    </PageLayout>
  );
}
