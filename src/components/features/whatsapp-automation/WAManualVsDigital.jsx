import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function WAManualVsDigital() {
  const comparisonData = [
    {
      label: "Estimate Sharing",
      manual: "Paper notes or verbal phone calls leading to miscommunication",
      digital: "Instant PDF estimate link sent to WhatsApp with breakdown"
    },
    {
      label: "Customer Approvals",
      manual: "Hours wasted waiting for clients to answer phone calls",
      digital: "80% faster 1-click approvals right inside WhatsApp chat"
    },
    {
      label: "Billing & Invoices",
      manual: "Printed paper bills prone to getting lost or damaged",
      digital: "Digital PDF invoices with payment UPI QR codes attached"
    },
    {
      label: "Service Reminders",
      manual: "Paper diary logs forgotten by busy workshop staff",
      digital: "Automated scheduled service due alerts dispatched hassle-free"
    }
  ];

  return (
    <ComparisonTable
      title="Manual Phone & Paper vs"
      titleHighlight="WhatsApp Automation"
      subtitle="Compare traditional phone calls and paper bills with modern automated WhatsApp communication for garages."
      manualHeader="Manual Paper / Calls"
      digitalHeader="GarageSaarthi WhatsApp System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
