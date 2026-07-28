import React from "react";
import ComparisonTable from "../../common/ComparisonTable";

export default function CRManualVsDigital() {
  const comparisonData = [
    {
      label: "Review Request Method",
      manual: "Asking customers verbally at billing counter (often forgotten)",
      digital: "Automated WhatsApp feedback link sent post-invoice generation"
    },
    {
      label: "Google Rating Growth",
      manual: "Slow, irregular review collection (1-2 reviews per month)",
      digital: "Consistent growth (20-50+ new 5-star reviews every month)"
    },
    {
      label: "Negative Feedback Handling",
      manual: "Angry customers post 1-star reviews publicly on Google Maps",
      digital: "Dissatisfied feedback routed privately to garage owner for resolution"
    },
    {
      label: "Local Search Ranking",
      manual: "Garage stays buried on page 2 or 3 of Google search results",
      digital: "Rank in Top 3 Google Local Pack for car & bike repair searches"
    }
  ];

  return (
    <ComparisonTable
      title="Verbal Requests vs"
      titleHighlight="Automated Review Collection"
      subtitle="Compare traditional manual review asking with automated WhatsApp review collection for garages."
      manualHeader="Verbal Counter Asking"
      digitalHeader="GarageSaarthi Review System"
      comparisons={comparisonData}
      bgClass="bg-slate-50"
    />
  );
}
