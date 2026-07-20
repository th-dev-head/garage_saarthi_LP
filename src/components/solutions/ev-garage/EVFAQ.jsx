import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqData = [
  {
    q: "What is EV garage management software?",
    a: "EV garage management software is a digital system that helps electric vehicle workshops manage operational processes such as job cards, customers, vehicle records, inventory, billing, staff and service follow-ups.",
  },
  {
    q: "Can GarageSaarthi be used by EV workshops?",
    a: "Yes. GarageSaarthi supports the workflows of EV workshops and electric vehicle service centres, allowing you to manage customer vehicles, job cards, parts stock, billing, and staff operations.",
  },
  {
    q: "Can I create digital job cards for EV service jobs?",
    a: "Yes. GarageSaarthi allows you to create digital job cards for electric scooters, bikes, and cars, listing general service tasks, electrical checks, or battery installations.",
  },
  {
    q: "Can I manage EV customer and vehicle records?",
    a: "Yes. You can store complete profiles of EV owners, details of their vehicle makes and models, and review service histories automatically.",
  },
  {
    q: "Does GarageSaarthi support EV workshop inventory management?",
    a: "Yes. You can manage spare parts, consumables, charging accessories, and other products in stock, tracking them from checkout to customer billing.",
  },
  {
    q: "Can I create GST bills for my EV workshop?",
    a: "Yes. GarageSaarthi allows you to generate GST-compliant billing, set custom invoice prefixes, log payments, and track workshop expenses.",
  },
  {
    q: "Can GarageSaarthi send EV service reminders on WhatsApp?",
    a: "Yes. It supports custom service due reminders that you can send directly to customer phones via WhatsApp.",
  },
  {
    q: "Does GarageSaarthi include CRM for EV workshops?",
    a: "Yes. It has a Leads module where you can record enquiries from EV clients and schedule follow-ups to convert them.",
  },
  {
    q: "Can I manage EV workshop employees?",
    a: "Yes. It features mechanic tracking, daily attendance, leave records, salary computations, and custom permissions for staff roles.",
  },
  {
    q: "Can I manage multiple EV workshop branches?",
    a: "Yes. The platform provides multi-branch controls so you can manage inventory and view centralized sales reports for all locations.",
  },
  {
    q: "Is GarageSaarthi available as an EV workshop app?",
    a: "Yes. It is accessible on computers through a web browser and offers a native Android app on Google Play Store.",
  },
  {
    q: "Does GarageSaarthi diagnose EV batteries or BMS faults?",
    a: "No. GarageSaarthi is workshop management software designed to help manage garage operations such as job cards, customers, vehicles, inventory, billing, staff, CRM, service alerts and reports. EV diagnostics and battery or BMS fault scanning require dedicated diagnostic equipment and tools.",
  },
  {
    q: "Does GarageSaarthi offer a free trial for EV garages?",
    a: "Yes. You can test all features of GarageSaarthi for 7 days with our free trial. No credit card is required to register.",
  },
];

export default function EVFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="EV Garage Management Software"
      faqs={faqData.map((item) => ({ question: item.q, answer: item.a }))}
      className="bg-slate-50"
    />
  );
}
