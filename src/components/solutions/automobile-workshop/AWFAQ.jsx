import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqData = [
  {
    q: "What is automobile workshop software?",
    a: "Automobile workshop software is a dedicated digital management tool built specifically to help garage owners run their daily operations, including digital job card tracking, parts inventory, customer details, invoices, and staff commissions from a single platform.",
  },
  {
    q: "What does automobile workshop management software help manage?",
    a: "It helps manage your entire business lifecycle: recording customer vehicle entries, making service estimates, allocating tasks to mechanics, tracking spare parts stocks, generating GST invoices, processing payment records, sending auto WhatsApp service reminders, and monitoring branch reports.",
  },
  {
    q: "Can GarageSaarthi create digital job cards?",
    a: "Yes. GarageSaarthi replaces manual job card sheets with digital job cards. You can quickly select vehicle registration details, assign mechanics, log customer complaints, and track repair status from any web browser or Android phone.",
  },
  {
    q: "Does GarageSaarthi support GST billing for automobile workshops?",
    a: "Yes. GarageSaarthi supports full GST billing configurations. It automatically computes SGST, CGST, and IGST rates for spare parts sold and mechanic service labor charges during invoice generation.",
  },
  {
    q: "Can I manage spare parts inventory with GarageSaarthi?",
    a: "Yes. You can manage a live catalog of spare parts, track purchases, log parts requisitions for active job cards, and set low-stock thresholds to get warnings before you run out of fast-moving items.",
  },
  {
    q: "Does GarageSaarthi store customer and vehicle service history?",
    a: "Yes. A central registry links each customer to their registered vehicles and complete past service visits, allowing advisors to review past complaints and spare parts replaced instantly.",
  },
  {
    q: "Can GarageSaarthi send automatic service reminders?",
    a: "Yes. The system automatically tracks when a vehicle's next periodic service is due based on custom intervals and allows you to send automated reminders and PDF invoices via WhatsApp links.",
  },
  {
    q: "Can I manage workshop staff and payroll?",
    a: "Yes. GarageSaarthi allows you to track employee attendance, log leave requests, assign task allocations to calculate commissions, and manage fixed monthly payroll records.",
  },
  {
    q: "Is GarageSaarthi suitable for multi-branch automobile workshops?",
    a: "Yes. You can add and configure multiple outlets under a single account. Grant safe role-based credentials to staff and review consolidated sales reports centrally.",
  },
  {
    q: "Is GarageSaarthi available as an automobile workshop app?",
    a: "Yes. GarageSaarthi is available as an Android application downloadable from the Google Play Store, alongside a desktop web browser version for reception billing counters.",
  },
  {
    q: "Is GarageSaarthi cloud-based?",
    a: "Yes, it is 100% cloud-based. All database entries are securely stored in the cloud with automatic backups, ensuring zero data loss if your local device gets damaged.",
  },
  {
    q: "Does GarageSaarthi offer a free trial?",
    a: "Yes, we offer a 7-day free trial. You get full access to all features, options, and support modules without entering any credit card details.",
  },
  {
    q: "How much does automobile workshop software cost in India?",
    a: "GarageSaarthi offers affordable plans designed for single garages and growing workshop chains. We support monthly, quarterly, and annual subscription durations. Please visit our pricing page to check the latest plan rates.",
  },
];

export default function AWFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Automobile Workshop Software."
      faqs={faqData.map(item => ({ question: item.q, answer: item.a }))}
      className="bg-slate-50"
    />
  );
}

