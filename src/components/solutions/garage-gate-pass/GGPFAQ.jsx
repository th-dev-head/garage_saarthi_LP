import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GGPFAQ() {
  const faqData = [
    {
      question: "What is garage gate pass software?",
      answer: "Garage gate pass software is a vehicle release and perimeter security system designed for auto repair workshops. It issues digital QR-coded clearance slips upon job completion and payment settlement, enabling security guards to verify release eligibility on mobile devices."
    },
    {
      question: "How does QR gate pass verification work?",
      answer: "When a customer pays their invoice, a unique cryptographic QR pass is created. The security guard points any smartphone camera at the printed slip or customer's WhatsApp screen to verify payment status in 2 seconds and authorize exit."
    },
    {
      question: "Can guards verify vehicles without logging into the app?",
      answer: "Yes. GarageSaarthi uses a zero-login secure verification URL. Guards can scan and confirm exits from any standard mobile camera or browser without needing passwords or app installations."
    },
    {
      question: "What happens if a vehicle has unpaid dues?",
      answer: "The verification screen instantly displays a bright RED alert stating 'Exit Blocked: Payment Pending' and specifies the exact outstanding amount, preventing unauthorized drive-aways."
    },
    {
      question: "Does it support 2-inch and 3-inch thermal printers?",
      answer: "Yes. You can print thermal gate slips on standard 2-inch and 3-inch roll printers or generate A4 delivery receipts in 1-click."
    },
    {
      question: "Is every vehicle exit recorded in an audit ledger?",
      answer: "Yes. Every exit verification is permanently recorded in the cloud with guard name, vehicle number, exact timestamp, and odometer reading for complete auditability."
    },
    {
      question: "Does GarageSaarthi offer a free trial for gate pass software?",
      answer: "Yes! We offer a 7-day free trial with complete access to gate pass generation, QR verification, thermal slip printing, and audit logs with no credit card required."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Gate Pass Software"
      faqs={faqData}
      className="bg-white"
    />
  );
}
