import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function UMManualVsDigital() {
  const comparisonData = [
    {
      label: "Shared Passwords",
      manual: "Sharing a single login profile, leading to unaccountable actions and billing mistakes",
      digital: "Unique credentials for each mechanic, manager, advisor, and receptionist"
    },
    {
      label: "Financial Protection",
      manual: "Staff cashiers viewing net shop profits, monthly income tables, and expense audits",
      digital: "Pre-set role filters that hide net profits, financial charts, and billing metrics"
    },
    {
      label: "Action Auditing",
      manual: "No way to verify which service advisor applied a discount or altered a spare price",
      digital: "Chronological history logs highlighting exactly who modified or created bills"
    },
    {
      label: "Unauthorized Edits",
      manual: "Staff deleting historical job cards, invoices, or customer logs without owner consent",
      digital: "Owner-controlled permissions that block editing or deleting closed accounts"
    },
    {
      label: "Worksite Boundaries",
      manual: "Staff logging into the workshop system from home to view client databases remotely",
      digital: "Network restriction settings that secure access to the physical workshop building Wi-Fi"
    }
  ];

  return (
    <ComparisonTable
      title="Secure Your Workshop with Role-Based"
      titleHighlight="Access Control Software"
      subtitle="Say goodbye to unaccountable operations, deleted cash registers, and data leakages. Compare shared workspace setups with GarageSaarthi secure user management:"
      manualHeader="Shared Passwords & Accounts"
      digitalHeader="GarageSaarthi Role Permissions"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
