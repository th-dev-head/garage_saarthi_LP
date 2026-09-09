import React from "react";
import PageLayout from "@/src/components/common/PageLayout";

import GApHero from "../../components/solutions/garage-appointment/GApHero";
import GApProblem from "../../components/solutions/garage-appointment/GApProblem";
import GApPickupDrop from "../../components/solutions/garage-appointment/GApPickupDrop";
import GApCalendarSlots from "../../components/solutions/garage-appointment/GApCalendarSlots";
import GApWorkshopTypes from "../../components/solutions/garage-appointment/GApWorkshopTypes";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import GApFAQ from "../../components/solutions/garage-appointment/GApFAQ";
import GApFinalCTA from "../../components/solutions/garage-appointment/GApFinalCTA";

export default function GarageAppointmentSoftware() {
  return (
    <PageLayout>
      <GApHero />
      <GApProblem />
      <GApPickupDrop />
      <GApCalendarSlots />
      <GApWorkshopTypes />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <GApFAQ />
      <GApFinalCTA />
    </PageLayout>
  );
}
