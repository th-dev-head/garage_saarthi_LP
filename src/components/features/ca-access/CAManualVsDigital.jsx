import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function CAManualVsDigital() {
  const comparisonData = [
    {
      label: "Monthly Bill Handover",
      manual: "Delivering physical bill boxes or photo-scanning hundreds of paper bills",
      digital: "24/7 direct read-only cloud portal login for your Chartered Accountant"
    },
    {
      label: "GST Return Data Export",
      manual: "Manual Excel compilation causing GSTR-1 vs GSTR-3B mismatch errors",
      digital: "Automated GSTR-1 & 3B CSV/Excel export ready for GST portal upload"
    },
    {
      label: "Admin Password Sharing",
      manual: "Sharing master admin password risking accidental deletion of job cards",
      digital: "Dedicated role-based read-only permission restricting master access"
    },
    {
      label: "Tax Audit & P&L Verification",
      manual: "Waiting weeks for CA to calculate quarterly profit and tax liability",
      digital: "Instant real-time profit & loss ledger inspection for accurate tax advice"
    }
  ];

  return (
    <ComparisonTable
      title="Physical Paper Handover vs"
      titleHighlight="Read-Only CA Portal"
      subtitle="Compare traditional physical bill submission with automated cloud accountant login."
      manualHeader="Physical Paper & Photos"
      digitalHeader="GarageSaarthi CA Access"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
