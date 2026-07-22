import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GBFAQ() {
  const faqData = [
    {
      question: "What is garage billing software?",
      answer: "Garage billing software is a digital invoicing system designed to handle the specific operational requirements of vehicle workshops, separate labor and spare parts lines, automatically manage GST calculations, and link billing lists directly with job card details."
    },
    {
      question: "Does GarageSaarthi support GST billing?",
      answer: "Yes. GarageSaarthi compiles SGST, CGST, and IGST tax splits automatically, handles HSN tax rate codes, and compiles professional tax invoice reports."
    },
    {
      question: "Can I manage spare parts billing with GarageSaarthi?",
      answer: "Yes. Adding spare parts to a digital job card or counter sales bill issues materials directly from inventory, tracking unit costs and margins."
    },
    {
      question: "Does GarageSaarthi support split payments?",
      answer: "Yes, you can split payments across cash, UPI, cards, and bank transactions, log payments centrally, and track cash register details."
    },
    {
      question: "Can my accountant access my invoicing data?",
      answer: "Yes. You can grant secure login details to your CA to download invoice summaries directly, saving you the hassle of exporting spreadsheets."
    },
    {
      question: "Can I create invoice quotes or estimates?",
      answer: "Yes. Create customized service quotes and convert them into final invoices with a single click."
    },
    {
      question: "Can car and bike workshops use GarageSaarthi Billing?",
      answer: "Yes. We support custom invoicing parameters for cars, motorcycles, two-wheelers, auto repair centers, and multi-brand chains."
    },
    {
      question: "Is there a mobile billing application available?",
      answer: "Yes. Download our Android application from the Google Play Store to manage invoicing and payments from your mobile."
    },
    {
      question: "Does GarageSaarthi offer a free trial for billing software?",
      answer: "Yes, we provide a 7-day free trial with full dashboard access and no credit card required."
    },
    {
      question: "How much does workshop billing software cost?",
      answer: "Billing capability is a standard part of our main subscription plans billed in INR. Check the pricing page for the latest plan rates."
    },
    {
      question: "Can GarageSaarthi manage outstanding payments?",
      answer: "Yes. Log pending dues under the customer's permanent database profile. The system highlights outstanding balances on their next visit."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Billing Software"
      faqs={faqData}
    />
  );
}

