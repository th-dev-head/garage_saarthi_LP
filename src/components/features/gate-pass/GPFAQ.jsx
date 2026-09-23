import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GPFAQ({ className = "bg-white" }) {
  const faqs = [
    {
      question: "What is a digital workshop gate pass and how does it work?",
      answer: "A digital gate pass is an encrypted electronic clearance slip generated when a vehicle repair job is completed and billing is settled. It contains a unique QR code that security guards scan at the exit gate to confirm payment clearance and authorize the vehicle to leave."
    },
    {
      question: "Does the security guard need to log in or download an app?",
      answer: "No! Security guards can scan the QR code using any smartphone camera or standard browser. The verification screen opens instantly without requiring any password, login credentials, or app installation."
    },
    {
      question: "How does the system prevent unauthorized or unpaid vehicle exits?",
      answer: "If an invoice balance is unpaid, or if payment settlement is pending at the cashier desk, the guard's mobile screen immediately flashes a bold RED alert with 'Exit Blocked: Payment Pending' and displays the exact dues amount, preventing drive-away loss."
    },
    {
      question: "Can I print thermal slips for gate passes?",
      answer: "Yes. GarageSaarthi supports 1-click thermal printing on standard 2-inch and 3-inch POS roll printers as well as full-page A4 delivery receipts."
    },
    {
      question: "Can customers receive gate passes directly on WhatsApp?",
      answer: "Yes! When an invoice is settled, the customer automatically receives their digital Gate Pass along with the GST tax invoice PDF on their WhatsApp."
    },
    {
      question: "How does it handle insurance claim vehicles or partial payments?",
      answer: "For insurance cashless repair jobs or approved credit accounts, the service manager can issue an authorized Gate Pass with notes, ensuring guards allow clearance while tracking the claim settlement."
    },
    {
      question: "Is there a permanent record of all vehicle exits?",
      answer: "Yes. Every exit verification is permanently recorded in the cloud security ledger with guard name, vehicle registration number, exact timestamp, and odometer reading for 100% auditability."
    }
  ];

  return (
    <AccordionFAQ
      title="Workshop Gate Pass &amp; Vehicle Release"
      titleHighlight="FAQs"
      subtitle="Frequently asked questions about implementing QR-enabled digital gate passes and securing your workshop exit perimeter."
      faqs={faqs}
      className={className}
    />
  );
}
