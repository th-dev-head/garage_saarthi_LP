import React from "react";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";

export default function LocationFAQ({ location }) {
  return (
    <AccordionFAQ
      className="bg-slate-50"
      title="Frequently Asked Questions in"
      titleHighlight={location.countryName}
      subtitle={`Common questions about managing garage operations, tax invoicing, and cloud workflows in ${location.countryName}.`}
      faqs={location.faqs || []}
    />
  );
}

