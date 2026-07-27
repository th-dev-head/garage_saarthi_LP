import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function CSPaperVsDigital() {
  const comparisonData = [
    {
      label: "Checkout Speed",
      manual: "Handwriting paper cash slips and calculating tax manually on paper",
      digital: "30-second digital POS checkout with auto-calculated GST & discounts"
    },
    {
      label: "Inventory Tracking",
      manual: "Sold spare parts remain unrecorded until manual end-of-month stock counts",
      digital: "Immediate automatic inventory deduction upon bill generation"
    },
    {
      label: "Tax Compliance",
      manual: "Unorganized cash slips making monthly GST returns stressful and error-prone",
      digital: "Compliant GST invoices with HSN/SAC codes and itemized tax breakdowns"
    },
    {
      label: "Walk-In Sales History",
      manual: "No customer contact details captured for repeat spare parts purchases",
      digital: "Save buyer profile & mobile number for WhatsApp receipts & marketing"
    },
    {
      label: "Payment Modes",
      manual: "Difficult to track partial UPI/cash combinations across cash drawer registers",
      digital: "Log UPI, Cash, Card, and Bank Transfer payments with instant receipt tags"
    },
    {
      label: "Stock Leak Prevention",
      manual: "Over-the-counter theft or missing parts without paper audit trails",
      digital: "Every counter sale is logged with itemized barcode/part number history"
    }
  ];

  return (
    <ComparisonTable
      title="Upgrade Your Cash Counter with a"
      titleHighlight="Garage POS & Billing Software"
      subtitle="Eliminate handwritten cash slips, inventory leaks, and billing friction. Compare traditional cash counters with GarageSaarthi POS software:"
      manualHeader="Manual Cash Register Slips"
      digitalHeader="GarageSaarthi Counter Sales POS"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
