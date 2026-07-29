import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GAHero from "../../components/solutions/garage-automation/GAHero";
import GAProblem from "../../components/solutions/garage-automation/GAProblem";
import GAWorkflow from "../../components/solutions/garage-automation/GAWorkflow";
import GAManualVsAuto from "../../components/solutions/garage-automation/GAManualVsAuto";
import GAConnected from "../../components/solutions/garage-automation/GAConnected";
import GAServiceReminders from "../../components/solutions/garage-automation/GAServiceReminders";
import GABilling from "../../components/solutions/garage-automation/GABilling";
import GAInventory from "../../components/solutions/garage-automation/GAInventory";
import GACustomerCRM from "../../components/solutions/garage-automation/GACustomerCRM";
import GAMultiBranch from "../../components/solutions/garage-automation/GAMultiBranch";
import GABusinessTypes from "../../components/solutions/garage-automation/GABusinessTypes";
import GAMobileAccess from "../../components/solutions/garage-automation/GAMobileAccess";
import GAWhySaarthi from "../../components/solutions/garage-automation/GAWhySaarthi";
import GAProof from "../../components/solutions/garage-automation/GAProof";
import GAFreeTrial from "../../components/solutions/garage-automation/GAFreeTrial";
import GAFAQ from "../../components/solutions/garage-automation/GAFAQ";
import GAFinalCTA from "../../components/solutions/garage-automation/GAFinalCTA";

export default function GarageAutomationSoftware() {
  return (
    <PageLayout>      
      <GAHero />
      <GAProblem />
      <GAWorkflow />
      <GAManualVsAuto />
      <GAConnected />
      <GAServiceReminders />
      <GABilling />
      <GAInventory />
      <GACustomerCRM />
      <GAMultiBranch />
      <GABusinessTypes />
      <GAMobileAccess />
      <GAWhySaarthi />
      <GAProof />
      <GAFreeTrial />
      <GAFAQ />
      <GAFinalCTA />
    </PageLayout>
  );
}
