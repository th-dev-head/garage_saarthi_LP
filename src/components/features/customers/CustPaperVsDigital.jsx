import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function CustPaperVsDigital() {
  const comparisonData = [
    {
      label: "Contact Retrieval",
      manual: "Flipping pages in physical check-in registers or registers to find mobile numbers",
      digital: "Search instantly by name, phone number, vehicle model, or license plate in 2s"
    },
    {
      label: "Vehicle Connection",
      manual: "No easy way to track multiple vehicles owned by a single customer or family",
      digital: "Map infinite cars or two-wheelers under one master customer contact profile"
    },
    {
      label: "Service Records",
      manual: "Greasy paper files that tear, get misplaced, or lost in cabinets",
      digital: "Digital repository showing all past service dates, invoices, and advisor remarks"
    },
    {
      label: "Outstanding Balances",
      manual: "Manually calculating pending credit dues from diary ledgers",
      digital: "Automated customer ledgers showing outstanding dues and payment logs"
    },
    {
      label: "Google Ratings Collection",
      manual: "Orally asking clients to review your shop, which they usually forget to do",
      digital: "Automatic post-billing WhatsApp link triggers for direct Google Review rating"
    },
    {
      label: "Customer Communication",
      manual: "Manual dialing causing long delays and workflow bottlenecks on busy days",
      digital: "1-click WhatsApp buttons for estimates, invoices, and vehicle delivery alerts"
    }
  ];

  return (
    <ComparisonTable
      title="Upgrade Customer Records with"
      titleHighlight="Digital Database Software"
      subtitle="Say goodbye to manual diary pages and lost client contacts. Compare paper register books with GarageSaarthi customer record management software:"
      manualHeader="Manual Paper Registers"
      digitalHeader="GarageSaarthi Database System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
