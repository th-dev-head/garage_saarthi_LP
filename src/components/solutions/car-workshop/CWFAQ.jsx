import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function CWFAQ() {
  const data = [
    {
      question: "What is car workshop software?",
      answer: "Car workshop software is a digital system built to help auto repair shops, car service centers, and independent garages manage daily operations including digital job cards, customer details, vehicle records, spare parts inventory, GST billing, and automated service reminders."
    },
    {
      question: "Which software can I use to manage my car workshop?",
      answer: "A workshop owner should look for software built specifically for automotive repair workflows rather than generic billing or accounting tools. GarageSaarthi integrates check-ins, job progress tracking, stock registers, and payroll inside one unified cloud dashboard."
    },
    {
      question: "Can GarageSaarthi create digital job cards for cars?",
      answer: "Yes, you can generate detailed digital job cards on your desktop browser, Android, or iOS mobile app, adding customer complaints, vehicle details, and repair tasks."
    },
    {
      question: "Can I maintain vehicle service history in GarageSaarthi?",
      answer: "Yes. Every invoice and job card is linked to a permanent vehicle profile, creating a chronological service history ledger that you can check anytime."
    },
    {
      question: "Does GarageSaarthi support GST billing for car workshops?",
      answer: "Yes, you can generate GST-compliant invoices containing customized series prefixes, SGST, CGST, or IGST breakdowns. Direct return filing on the GSTN government portal is not supported."
    },
    {
      question: "Can I manage spare parts inventory for my workshop?",
      answer: "Yes. You can manage spare parts stock quantities, track warehouse movements, configure low stock alerts, and log direct walk-in counter sales."
    },
    {
      question: "Can GarageSaarthi send WhatsApp service reminders?",
      answer: "Yes, our automated service due alerts let you send pre-populated WhatsApp reminder messages to customers with a single click."
    },
    {
      question: "Can I manage mechanic attendance and payroll?",
      answer: "Yes, track daily shifts, log leave balances, set basic salaries, and manage monthly mechanic payroll schedules centrally."
    },
    {
      question: "Can I manage multiple car workshop branches?",
      answer: "Yes. Add multiple locations to your account, check branch-wise reports centrally, and restrict staff logins by branch."
    },
    {
      question: "Is GarageSaarthi available as a mobile app?",
      answer: "Yes, we maintain a live mobile apps on Google Play Store & Apple App Store alongside our web platform. iOS apps are fully available."
    },
    {
      question: "Is GarageSaarthi cloud-based?",
      answer: "Yes. All data synchronizes in real time between your mobile application and web browser dashboard."
    },
    {
      question: "Does GarageSaarthi offer a free trial?",
      answer: "Yes, we offer a 7-day free trial containing full access to job cards, billing, stock, and staff modules with no credit card required."
    },
    {
      question: "How much does car workshop software cost?",
      answer: "GarageSaarthi offers flexible subscription plans. Please check the pricing page for detailed quarterly and annual rates."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Car Workshop Software"
      faqs={data}
      className="bg-slate-50"
    />
  );
}
