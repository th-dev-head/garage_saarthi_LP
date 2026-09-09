import React from "react";
import PageLayout from "@/src/components/common/PageLayout";

import AppointmentsHero from "../../components/features/appointments/AppointmentsHero";
import AppointmentsDefinition from "../../components/features/appointments/AppointmentsDefinition";
import AppointmentsPickupDrop from "../../components/features/appointments/AppointmentsPickupDrop";
import AppointmentsCoreCapabilities from "../../components/features/appointments/AppointmentsCoreCapabilities";
import AppointmentsWorkflow from "../../components/features/appointments/AppointmentsWorkflow";
import CloudAccessCommon from "../../components/common/CloudAccessCommon";
import TestimonialsGrid from "../../components/common/TestimonialsGrid";
import AppointmentsFAQ from "../../components/features/appointments/AppointmentsFAQ";
import AppointmentsFinalCTA from "../../components/features/appointments/AppointmentsFinalCTA";

export default function AppointmentsFeature() {
  return (
    <PageLayout>
      <AppointmentsHero />
      <AppointmentsDefinition />
      <AppointmentsPickupDrop />
      <AppointmentsCoreCapabilities />
      <AppointmentsWorkflow />
      <CloudAccessCommon bgClass="bg-slate-50" />
      <TestimonialsGrid bgClass="bg-white" />
      <AppointmentsFAQ />
      <AppointmentsFinalCTA />
    </PageLayout>
  );
}
