import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqData = [
  {
    q: "What is bike workshop software?",
    a: "Bike workshop software helps organize workshop operations such as job cards, customers, bikes, service records, inventory, billing, staff and reports.",
  },
  {
    q: "Can GarageSaarthi be used by motorcycle garages?",
    a: "Yes. GarageSaarthi supports all types of motorcycle garages and two-wheeler workshops. You can manage spare parts inventory, generate bike job cards, track mechanic attendance and send customer notifications.",
  },
  {
    q: "Is GarageSaarthi suitable for two-wheeler service centres?",
    a: "Yes. It is fully suitable for multi-bay two-wheeler service centres, allowing you to manage customer service records, bike repair status and technician assignments.",
  },
  {
    q: "Can I create digital job cards for bike servicing?",
    a: "Yes. GarageSaarthi allows you to quickly generate digital job cards for two-wheelers on customer arrival, recording complaints and mechanic assignments.",
  },
  {
    q: "Can I manage bike spare parts inventory?",
    a: "Yes. You can log all parts, track stock levels, assign spares to active job cards, and manage direct counter sales.",
  },
  {
    q: "Can GarageSaarthi maintain bike service history?",
    a: "Yes. It stores customer and bike history automatically, allowing you to see past repair details and parts used on returning visits.",
  },
  {
    q: "Does GarageSaarthi support GST billing for bike workshops?",
    a: "Yes. It allows you to create GST-compliant bills and bills with multiple invoice series, saving financial summaries for easy tax computation.",
  },
  {
    q: "Can I send bike service reminders on WhatsApp?",
    a: "Yes. GarageSaarthi has built-in service due notifications that you can trigger directly to customers on WhatsApp.",
  },
  {
    q: "Can I manage mechanic attendance and payroll?",
    a: "Yes. You can track daily attendance, leaves, and calculate salaries and mechanic commissions based on active job card performance.",
  },
  {
    q: "Can I manage multiple bike workshop branches?",
    a: "Yes. GarageSaarthi features central multi-branch controls with role-based permissions and consolidated financial reporting.",
  },
  {
    q: "Is there a bike workshop management app?",
    a: "Yes. GarageSaarthi is available as an Android app on Google Play Store and as a web platform accessible on any device.",
  },
  {
    q: "Is GarageSaarthi bike workshop software available in India?",
    a: "Yes. It is custom-made for workshops in India with INR pricing, WhatsApp integrations, and GST invoice settings.",
  },
  {
    q: "Can I try GarageSaarthi before paying?",
    a: "Yes. We offer a 7-day free trial with access to all features. You can sign up without any credit card.",
  },
];

export default function BWFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Bike Workshop Software"
      faqs={faqData.map((item) => ({ question: item.q, answer: item.a }))}
      className="bg-slate-50"
    />
  );
}
