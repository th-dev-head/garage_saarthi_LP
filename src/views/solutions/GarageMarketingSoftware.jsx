import PageLayout from "@/src/components/common/PageLayout";
import React from "react";

import GMHero from "../../components/solutions/garage-marketing/GMHero";
import GMDefinition from "../../components/solutions/garage-marketing/GMDefinition";
import GMChallenges from "../../components/solutions/garage-marketing/GMChallenges";
import GMOverview from "../../components/solutions/garage-marketing/GMOverview";
import GMOffers from "../../components/solutions/garage-marketing/GMOffers";
import GMWhatsApp from "../../components/solutions/garage-marketing/GMWhatsApp";
import GMFollowUp from "../../components/solutions/garage-marketing/GMFollowUp";
import GMRetention from "../../components/solutions/garage-marketing/GMRetention";
import GMServiceReminder from "../../components/solutions/garage-marketing/GMServiceReminder";
import GMCRMConnection from "../../components/solutions/garage-marketing/GMCRMConnection";
import GMBusinessType from "../../components/solutions/garage-marketing/GMBusinessType";
import GMComparison from "../../components/solutions/garage-marketing/GMComparison";
import GMCloudAccess from "../../components/solutions/garage-marketing/GMCloudAccess";
import GMWhyUs from "../../components/solutions/garage-marketing/GMWhyUs";
import GMPricing from "../../components/solutions/garage-marketing/GMPricing";
import GMFAQ from "../../components/solutions/garage-marketing/GMFAQ";
import GMFinalCTA from "../../components/solutions/garage-marketing/GMFinalCTA";

export default function GarageMarketingSoftware() {
  return (
    < PageLayout >
      <GMHero />
      <GMDefinition />
      <GMChallenges />
      <GMOverview />
      <GMOffers />
      <GMWhatsApp />
      <GMFollowUp />
      <GMRetention />
      <GMServiceReminder />
      <GMCRMConnection />
      <GMBusinessType />
      <GMComparison />
      <GMCloudAccess />
      <GMWhyUs />
      <GMPricing />
      <GMFAQ />
      <GMFinalCTA />
    </PageLayout >
  );
}
