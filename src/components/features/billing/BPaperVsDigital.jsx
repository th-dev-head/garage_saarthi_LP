import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function BPaperVsDigital() {
  const comparisonData = [
    {
      label: "Invoice Speed",
      manual: "Handwriting paper bills, calculating GST manually on calculators",
      digital: "Instant 1-click invoice generation directly from completed job cards"
    },
    {
      label: "Tax Calculations",
      manual: "Mismatched CGST/SGST percentages and calculation errors on paper bills",
      digital: "Automated HSN/SAC code lookup with exact 5%, 12%, 18%, 28% tax math"
    },
    {
      label: "Customer Sharing",
      manual: "Handing paper receipts that get lost, grease-stained, or misplaced",
      digital: "Instant WhatsApp PDF sharing with itemized spare parts & labor summary"
    },
    {
      label: "Payment Tracking",
      manual: "Unrecorded partial payments, forgotten dues, and missing cash drawer totals",
      digital: "Log UPI, Cash, Card & split payments with real-time balance outstanding"
    },
    {
      label: "Discount & Offer Controls",
      manual: "Discretionary oral discounts leading to profit leaks and advisor disputes",
      digital: "Preset percentage or flat discount limits with full owner audit trails"
    },
    {
      label: "Accounting Sync",
      manual: "Re-keying paper bills into Tally or Excel every weekend or month-end",
      digital: "Export daily & monthly sales, GST returns, and collection reports in 1 click"
    }
  ];

  return (
    <ComparisonTable
      title="Upgrade Your Garage Billing with"
      titleHighlight="GST Invoicing Software"
      subtitle="Eliminate manual handwriting, tax calculation mistakes, and payment disputes. Compare paper bill books with GarageSaarthi digital billing:"
      manualHeader="Paper Bill Books & Registers"
      digitalHeader="GarageSaarthi GST Invoicing"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
