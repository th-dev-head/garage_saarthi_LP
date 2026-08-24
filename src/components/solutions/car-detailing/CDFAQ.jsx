import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqData = [
  {
    q: "What is car detailing software?",
    a: "Car detailing software is a specialized business tool that helps detailing shops and studios manage daily operations such as job orders, customer records, vehicle database, coating and polishing inventory, staff attendance, invoicing and reminders.",
  },
  {
    q: "Can GarageSaarthi be used by car detailing shops?",
    a: "Yes. GarageSaarthi is an excellent fit for car detailing studios, auto detailing businesses, coating centers, and paint protection film (PPF) shops.",
  },
  {
    q: "Can I manage detailing jobs with GarageSaarthi?",
    a: "Yes. You can generate digital job cards to list detailing packages (interior wash, ceramic coating, paint polishing), assign tasks to specific detailers and monitor execution status.",
  },
  {
    q: "Can I manage detailing customers and their vehicles?",
    a: "Yes. You can maintain complete profiles of clients, organize their vehicle logs, and track full service history for returning visits.",
  },
  {
    q: "Does GarageSaarthi have CRM for detailing businesses?",
    a: "Yes. The built-in CRM Leads module allows detailing shops to log customer enquiries (e.g. ceramic coating quotes) and schedule follow-ups to close sales.",
  },
  {
    q: "Can I create bills and invoices for detailing services?",
    a: "Yes. GarageSaarthi supports professional GST invoices, custom invoice numbering series, partial payments, and counter sales for retail detailing sprays or microfibers.",
  },
  {
    q: "Can I manage detailing product inventory?",
    a: "Yes. You can keep track of shampoos, waxes, polishing pads, ceramic solutions, and other consumables, deducting stock as they are assigned to job cards.",
  },
  {
    q: "Can GarageSaarthi send service reminders to customers?",
    a: "Yes. It supports custom automated alerts (like wash follow-ups or coating inspections) sent directly to customers on WhatsApp.",
  },
  {
    q: "Can I manage detailing staff attendance and payroll?",
    a: "Yes. You can track daily staff attendance, leaves, mechanic/detailer payroll, and calculate job-based commissions.",
  },
  {
    q: "Can I manage multiple detailing branches?",
    a: "Yes. GarageSaarthi lets you manage multiple detailing studios with a centralized portal, branch-wise stock checks, and consolidated revenue reports.",
  },
  {
    q: "Is GarageSaarthi available as a car detailing app?",
    a: "Yes. We offer mobile apps on Google Play Store and Apple App Store, plus a web app accessible on any mobile, tablet or PC browser.",
  },
  {
    q: "Is there a free trial for GarageSaarthi?",
    a: "Yes. We offer a 7-day free trial with full access to all features to let you check if it fits your detailing shop operations.",
  },
  {
    q: "How much does car detailing software cost?",
    a: "Pricing is structured in clear, affordable subscription packages. You can find detailed information on our pricing page.",
  },
];

export default function CDFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Car Detailing Software"
      faqs={faqData.map((item) => ({ question: item.q, answer: item.a }))}
      className="bg-white"
    />
  );
}
