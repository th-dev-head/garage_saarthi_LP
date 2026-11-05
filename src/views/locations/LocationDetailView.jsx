"use client";

import React from "react";
import PageLayout from "@/src/components/common/PageLayout";
import LocationHero from "@/src/components/locations/LocationHero";
import LocationCapabilities from "@/src/components/locations/LocationCapabilities";
import LocationTaxCompliance from "@/src/components/locations/LocationTaxCompliance";
import LocationWorkshopTypes from "@/src/components/locations/LocationWorkshopTypes";
import LocationFAQ from "@/src/components/locations/LocationFAQ";
import LocationCTA from "@/src/components/locations/LocationCTA";

export default function LocationDetailView({ location }) {
  if (!location) return null;

  return (
    <PageLayout>
      <LocationHero location={location} />
      <LocationCapabilities location={location} />
      <LocationTaxCompliance location={location} />
      <LocationWorkshopTypes location={location} />
      <LocationFAQ location={location} />
      <LocationCTA location={location} />
    </PageLayout>
  );
}

