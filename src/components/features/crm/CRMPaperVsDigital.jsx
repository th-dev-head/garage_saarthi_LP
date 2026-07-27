import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function CRMPaperVsDigital() {
  const comparisonData = [
    {
      label: "Customer Records",
      manual: "Scattered paper diaries, lost business cards, and unorganized customer phone contacts",
      digital: "Centralized cloud customer database with complete contact details and vehicle profiles"
    },
    {
      label: "Lead Follow-Ups",
      manual: "Relying on memory or paper notes to call back customers who asked for repair quotes",
      digital: "Automated lead tracking pipeline with scheduled WhatsApp follow-up reminders"
    },
    {
      label: "Service History Access",
      manual: "Digging through old paper job card files to check what work was done 6 months ago",
      digital: "Instant 2-second search by customer phone number or vehicle registration plate"
    },
    {
      label: "Customer Retention",
      manual: "No system to identify customers who stopped visiting your workshop",
      digital: "Lapsed customer alerts and automated WhatsApp campaign reminders for service due"
    },
    {
      label: "Customer Communication",
      manual: "Manual phone calls during busy shop hours causing service delays",
      digital: "1-click WhatsApp job updates, estimates, GST invoices, and service reminders"
    },
    {
      label: "Feedback & Reviews",
      manual: "No way to collect Google reviews or customer satisfaction ratings after service",
      digital: "Automated post-service WhatsApp rating links to collect 5-star Google reviews"
    }
  ];

  return (
    <ComparisonTable
      title="Transform Customer Relationships with"
      titleHighlight="Garage CRM & Lead Software"
      subtitle="Eliminate lost phone numbers, forgotten follow-ups, and customer churn. Compare manual notebooks with GarageSaarthi CRM:"
      manualHeader="Notebooks & Memory"
      digitalHeader="GarageSaarthi CRM System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
