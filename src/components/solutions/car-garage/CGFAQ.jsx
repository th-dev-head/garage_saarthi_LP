import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqData = [
  {
    q: "What is car garage management software?",
    a: "Car garage management software is a digital platform that helps car garage owners manage daily operations from a single system. It covers job cards, customer vehicle records, spare parts inventory, GST billing, service reminders, staff attendance, and financial reporting — replacing paper registers and disconnected tools.",
  },
  {
    q: "How does GarageSaarthi help manage a car garage?",
    a: "GarageSaarthi helps car garages manage the complete workflow — from recording a customer vehicle on arrival and creating a digital job card, to tracking repair progress, generating a GST invoice, processing payments, and sending an automated service reminder when the vehicle is next due.",
  },
  {
    q: "Can I create digital job cards for car repairs?",
    a: "Yes. GarageSaarthi replaces paper job cards with fast digital records. You can log the customer's name, vehicle registration number, complaints, mechanic assignment, parts used, and delivery estimate — all from a web browser or the Android app.",
  },
  {
    q: "Can GarageSaarthi maintain vehicle service history?",
    a: "Yes. Each vehicle is linked to a customer profile with a complete service history. When a car returns to your garage, your advisor can instantly view past repairs, spare parts replaced, amounts billed, and any recommendations made during previous visits.",
  },
  {
    q: "Can I manage spare parts inventory with GarageSaarthi?",
    a: "Yes. GarageSaarthi includes live inventory management for spare parts and accessories. You can track purchases, log parts used in job cards, manage counter sales, and set low-stock alerts to avoid running out of fast-moving items.",
  },
  {
    q: "Does GarageSaarthi support GST billing?",
    a: "Yes. GarageSaarthi generates GST-compliant invoices for car services and spare parts. It automatically calculates SGST, CGST, and IGST based on configured tax rates. Invoices can be printed or shared directly via a WhatsApp link.",
  },
  {
    q: "Can GarageSaarthi send automated service alerts on WhatsApp?",
    a: "Yes. GarageSaarthi tracks when each customer vehicle is next due for service and can send automated WhatsApp reminders to car owners. This helps your garage maintain regular contact with existing customers without manual follow-up calls.",
  },
  {
    q: "Can I manage mechanic attendance and payroll?",
    a: "Yes. GarageSaarthi includes attendance tracking, leave management, and payroll calculation for garage staff. Record daily clock-ins, approve leaves, and generate monthly salary summaries based on attendance and commission records.",
  },
  {
    q: "Can I manage multiple car garage branches?",
    a: "Yes. GarageSaarthi supports multi-branch management. You can add multiple car garage locations under one account, assign role-based access to staff at each branch, and view consolidated performance reports centrally.",
  },
  {
    q: "Is GarageSaarthi available as a mobile app?",
    a: "Yes. GarageSaarthi is available as an Android application on the Google Play Store, alongside the full desktop web version. The app lets garage owners and advisors manage job cards, check inventory, and send service reminders from their mobile phones.",
  },
  {
    q: "Is GarageSaarthi suitable for independent car garages?",
    a: "Yes. GarageSaarthi is designed for independent car garage owners as well as growing multi-branch workshop businesses. The platform is structured to work for single-location garages without requiring complex setup or technical expertise.",
  },
  {
    q: "How much does car garage management software cost?",
    a: "GarageSaarthi offers subscription plans in INR designed for single garages and workshop chains. Monthly, quarterly, and annual durations are available. Visit the pricing page for the latest plan details.",
  },
  {
    q: "Does GarageSaarthi offer a free trial?",
    a: "Yes. GarageSaarthi offers a 7-day free trial with full access to all features. No credit card is required to register and start using the platform for your car garage.",
  },
];

export default function CGFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Car Garage Management Software."
      faqs={faqData.map((item) => ({ question: item.q, answer: item.a }))}
    />
  );
}

