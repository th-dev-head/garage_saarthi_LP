import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

const comparisons = [
  {
    label: "Customer Records",
    manual: "Isolated customer phone lists disconnected from repair history.",
    digital: "Customer profiles linked directly to vehicle service history.",
  },
  {
    label: "Vehicle Context",
    manual: "No knowledge of vehicle model, odometer reading, or last oil change date.",
    digital: "Real vehicle service records informing targeted maintenance alerts.",
  },
  {
    label: "Operational Connection",
    manual: "Marketing tools completely separate from daily workshop job cards.",
    digital: "Promotions and offer vouchers integrated into garage operations.",
  },
  {
    label: "Lead Management",
    manual: "Separate spreadsheets or unorganized notebook lead reminders.",
    digital: "Integrated Garage CRM tracking quotes, calls, and follow-up dates.",
  },
  {
    label: "Service Due Alerts",
    manual: "Manual phone calling that gets forgotten during busy workshop hours.",
    digital: "Automated WhatsApp service due reminders triggered by interval rules.",
  },
  {
    label: "Promotions & Offers",
    manual: "Paper discount flyers that are difficult to track or evaluate.",
    digital: "Digital Offers & Promotions module to manage seasonal deals.",
  },
];

export default function GMComparison() {
  return (
    <ComparisonTable
      title="Why Use Marketing Software Built for"
      titleHighlight="Garage Operations?"
      subtitle="GarageSaarthi's advantage is operational context. It understands your customers, vehicles, repair jobs, and service intervals."
      manualHeader="Generic Disconnected Tools"
      digitalHeader="GarageSaarthi Connected Platform"
      comparisons={comparisons}
      bgClass="bg-white"
    />
  );
}
