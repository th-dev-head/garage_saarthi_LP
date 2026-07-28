import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function SRManualVsDigital() {
  const comparisonData = [
    {
      label: "Service Due Tracking",
      manual: "Written on registers, forgotten in loose papers",
      digital: "Auto-calculated based on vehicle mileage & last service date"
    },
    {
      label: "Customer Follow-Up",
      manual: "Advisors waste hours making manual phone calls",
      digital: "1-Click automated WhatsApp due alerts sent directly"
    },
    {
      label: "Appointment Booking",
      manual: "Verbal phone calls leading to missed schedule slots",
      digital: "Instant online booking links included in reminder message"
    },
    {
      label: "Repeat Retention",
      manual: "Lost revenue due to irregular customer visits",
      digital: "Up to 35% higher repeat visits and steady monthly revenue"
    }
  ];

  return (
    <ComparisonTable
      title="Manual Follow-Ups vs"
      titleHighlight="Automated Service Reminders"
      subtitle="See how switching to automated digital reminders saves hours of staff effort and keeps customers coming back."
      manualHeader="Manual Phone Calls"
      digitalHeader="GarageSaarthi WhatsApp System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}

