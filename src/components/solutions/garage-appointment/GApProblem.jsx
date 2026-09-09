import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function GApProblem() {
  const comparisons = [
    {
      label: "Slot Scheduling",
      manual: "Chaotic phone calls, scribbled diary notes, double booked bays, and long customer wait times.",
      digital: "Centralized digital booking calendar with predefined morning, afternoon, and hourly slots.",
    },
    {
      label: "Pickup & Drop Logistics",
      manual: "Drivers calling customers repeatedly for directions and getting lost in traffic.",
      digital: "Direct 1-click Google Maps location link on driver phone for accurate doorstep navigation.",
    },
    {
      label: "Customer Communication",
      manual: "Manual phone updates, missed pickup reminders, and customer anxiety over vehicle safety.",
      digital: "Automated WhatsApp booking confirmations, driver contact sharing, and live status alerts.",
    },
    {
      label: "Job Card Creation",
      manual: "Writing customer details and complaints twice—once in booking diary, then again in job card register.",
      digital: "1-Click conversion from appointment to digital job card with zero redundant typing.",
    },
  ];

  return (
    <ComparisonTable
      title="Replace Diary Scheduling with"
      titleHighlight="Digital Appointment & Pickup Logistics"
      subtitle="Say goodbye to double-booked service bays, confused drivers, and frustrated car owners. Compare traditional workshop scheduling with GarageSaarthi:"
      manualHeader="Manual Paper & Phone Booking"
      digitalHeader="GarageSaarthi Appointment System"
      comparisons={comparisons}
      bgClass="bg-slate-50"
    />
  );
}
