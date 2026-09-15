import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function VehFAQ({ className = "bg-white" }) {
  const faqs = [
    {
      question: "What is workshop vehicle management software?",
      answer: "Workshop vehicle management software is a cloud-based system that allows garages to track complete vehicle records, including diagnostic history logs, past repair sheets, Odometer/KM readings, engine codes, and parts replaced."
    },
    {
      question: "How does AMC (Annual Maintenance Contract) management work in GarageSaarthi?",
      answer: "During vehicle intake or editing, you can record a 4-digit AMC contract number, contract start date, and end date. The system automatically tags the vehicle as active AMC, allowing advisors and mechanics to honor maintenance benefits and schedule timely checkups."
    },
    {
      question: "Can I store RC copies, insurance policies, and PUC certificates digitally?",
      answer: "Yes! Every vehicle has a dedicated Digital Document Locker. You can upload PDFs or images of Vehicle RC (Front/Back), Insurance Policies, Driving Licenses, PUC Certificates, and PAN cards up to 15MB each for lifetime access."
    },
    {
      question: "Does it support separate Own Damage (OD) and Third-Party (TP) insurance expiries?",
      answer: "Yes. In the Add Vehicle and Edit Vehicle dialogs, you can set separate dates for Insurance OD Expiry, Insurance TP Expiry, and PUC Expiry to trigger precise renewal alerts."
    },
    {
      question: "Can I track the full service history of returning customer vehicles?",
      answer: "Yes! Every repair, part replacement, and billing transaction is saved permanently under the vehicle's registration plate number, allowing you to access complete service histories in 2 seconds."
    },
    {
      question: "Can I map multiple vehicles under a single customer profile?",
      answer: "Absolutely. You can map any number of cars or two-wheelers to one customer profile, keeping all invoices and histories organized under a single family account."
    },
    {
      question: "Does it support different vehicle types like electric vehicles (EVs) or heavy trucks?",
      answer: "Yes. GarageSaarthi supports customized vehicle categories. Track EV battery serial numbers, EV two-wheeler security passcodes, warranty details, or heavy commercial truck wheel alignments."
    }
  ];

  return (
    <AccordionFAQ
      title="Garage Vehicle Management"
      titleHighlight="FAQs"
      subtitle="Got questions about tracking vehicle histories, Odometer logs, AMC contracts, and digital document lockers? We've got answers."
      faqs={faqs}
      className={className}
    />
  );
}
