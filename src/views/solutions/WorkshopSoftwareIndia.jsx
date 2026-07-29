import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import WSIHero from "../../components/solutions/workshop-software-india/WSIHero";
import WSIDefinition from "../../components/solutions/workshop-software-india/WSIDefinition";
import WSIOperations from "../../components/solutions/workshop-software-india/WSIOperations";
import WSIBusinessTypes from "../../components/solutions/workshop-software-india/WSIBusinessTypes";
import WSIIndianContext from "../../components/solutions/workshop-software-india/WSIIndianContext";
import WSIDigitalTransformation from "../../components/solutions/workshop-software-india/WSIDigitalTransformation";
import WSIJobCards from "../../components/solutions/workshop-software-india/WSIJobCards";
import WSIBillingInventory from "../../components/solutions/workshop-software-india/WSIBillingInventory";
import WSICustomerService from "../../components/solutions/workshop-software-india/WSICustomerService";
import WSIMultiBranch from "../../components/solutions/workshop-software-india/WSIMultiBranch";
import WSICloudAccess from "../../components/solutions/workshop-software-india/WSICloudAccess";
import WSIStaff from "../../components/solutions/workshop-software-india/WSIStaff";
import WSIFinance from "../../components/solutions/workshop-software-india/WSIFinance";
import WSIWhyUs from "../../components/solutions/workshop-software-india/WSIWhyUs";
import WSITestimonials from "../../components/solutions/workshop-software-india/WSITestimonials";
import WSIPricing from "../../components/solutions/workshop-software-india/WSIPricing";
import WSIFAQ from "../../components/solutions/workshop-software-india/WSIFAQ";
import WSIFinalCTA from "../../components/solutions/workshop-software-india/WSIFinalCTA";

export default function WorkshopSoftwareIndia() {
  return (
    <PageLayout>
      <WSIHero />
      <WSIDefinition />
      <WSIOperations />
      <WSIBusinessTypes />
      <WSIIndianContext />
      <WSIDigitalTransformation />
      <WSIJobCards />
      <WSIBillingInventory />
      <WSICustomerService />
      <WSIMultiBranch />
      <WSICloudAccess />
      <WSIStaff />
      <WSIFinance />
      <WSIWhyUs />
      <WSITestimonials />
      <WSIPricing />
      <WSIFAQ />
      <WSIFinalCTA />
    </PageLayout >
  );
}
