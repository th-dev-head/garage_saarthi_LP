import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqData = [
  {
    q: "What is fleet workshop management software?",
    a: "Fleet workshop management software is a digital system used to manage repair jobs, vehicle records, inventory, billing, customers, staff and daily workshop operations for a fleet of vehicles.",
  },
  {
    q: "What can I manage with GarageSaarthi fleet workshop software?",
    a: "You can manage the entire maintenance cycle — from creating repair job cards, vehicle service logs, and scheduled maintenance due lists, to parts stock inventory, mechanics payroll, and payment tracking.",
  },
  {
    q: "Can GarageSaarthi manage fleet vehicle service records?",
    a: "Yes. It creates a centralized profile for every vehicle, showing past repair details, mechanics assigned, and spare parts used over time.",
  },
  {
    q: "Can I create digital job cards for fleet vehicle repairs?",
    a: "Yes. You can generate digital job cards to record maintenance logs, track repair statuses, and document parts assigned to work orders.",
  },
  {
    q: "Does GarageSaarthi help manage fleet maintenance reminders?",
    a: "Yes. You can schedule periodic maintenance and trigger automated alerts or updates on WhatsApp to fleet contacts or vehicle managers.",
  },
  {
    q: "Can I manage spare parts inventory for a fleet workshop?",
    a: "Yes. The Inventory module lets you track spare parts levels, record consumption per vehicle job card, and handle counter sales for retail transactions.",
  },
  {
    q: "Can GarageSaarthi manage workshop mechanics and employees?",
    a: "Yes. You can manage employee attendance, log leave applications, define custom user access permissions, and track payroll and performance-based commissions.",
  },
  {
    q: "Can I manage multiple fleet workshop branches?",
    a: "Yes. The platform supports multiple workshop locations with centralized control, branch-wise stock mapping, and consolidated financial reports.",
  },
  {
    q: "Is GarageSaarthi GPS fleet tracking software?",
    a: "No. GarageSaarthi is focused on fleet workshop, vehicle repair, service and maintenance operations. It does not position itself as a GPS vehicle tracking or route management platform.",
  },
  {
    q: "Is GarageSaarthi available on mobile?",
    a: "Yes. It is available as an Android mobile app on the Google Play Store and as a web platform accessible on any device.",
  },
  {
    q: "Does GarageSaarthi offer a free trial?",
    a: "Yes. GarageSaarthi offers a 7-day free trial with full access to all features to let you check if it fits your fleet maintenance operations.",
  },
  {
    q: "How much does GarageSaarthi cost?",
    a: "Pricing options are clear and affordable. Please refer to our pricing page for subscription packages.",
  },
];

export default function FLFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Fleet Workshop Software"
      faqs={faqData.map((item) => ({ question: item.q, answer: item.a }))}
      className="bg-slate-50"
    />
  );
}
