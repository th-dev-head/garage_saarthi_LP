import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GFMHero from "../../components/solutions/garage-finance/GFMHero";
import GFMDefinition from "../../components/solutions/garage-finance/GFMDefinition";
import GFMIncomeExpense from "../../components/solutions/garage-finance/GFMIncomeExpense";
import GFMPayments from "../../components/solutions/garage-finance/GFMPayments";
import GFMVisibility from "../../components/solutions/garage-finance/GFMVisibility";
import GFMAccounting from "../../components/solutions/garage-finance/GFMAccounting";
import GFMBilling from "../../components/solutions/garage-finance/GFMBilling";
import GFMLoans from "../../components/solutions/garage-finance/GFMLoans";
import GFMCaAccess from "../../components/solutions/garage-finance/GFMCaAccess";
import GFMConnected from "../../components/solutions/garage-finance/GFMConnected";
import GFMWorkshopTypes from "../../components/solutions/garage-finance/GFMWorkshopTypes";
import GFMManualVsSystem from "../../components/solutions/garage-finance/GFMManualVsSystem";
import GFMWebMobile from "../../components/solutions/garage-finance/GFMWebMobile";
import GFMWhySaarthi from "../../components/solutions/garage-finance/GFMWhySaarthi";
import GFMPricing from "../../components/solutions/garage-finance/GFMPricing";
import GFMFAQ from "../../components/solutions/garage-finance/GFMFAQ";
import GFMFinalCTA from "../../components/solutions/garage-finance/GFMFinalCTA";

export default function GarageFinanceManagementSoftware() {
  return (
    <PageLayout>
      <GFMHero />
      <GFMDefinition />
      <GFMIncomeExpense />
      <GFMPayments />
      <GFMVisibility />
      <GFMAccounting />
      <GFMBilling />
      <GFMLoans />
      <GFMCaAccess />
      <GFMConnected />
      <GFMWorkshopTypes />
      <GFMManualVsSystem />
      <GFMWebMobile />
      <GFMWhySaarthi />
      <GFMPricing />
      <GFMFAQ />
      <GFMFinalCTA />
    </PageLayout>
  );
}
