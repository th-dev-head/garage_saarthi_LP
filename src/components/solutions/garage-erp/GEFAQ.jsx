import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GEFAQ() {
  const faqs = [
    {
      question: "What is a garage ERP software?",
      answer: "A garage ERP (Enterprise Resource Planning) software is an all-in-one system designed specifically for workshops to manage everything from service bookings, digital job cards, spare parts inventory control, customer relations, employee attendance, and invoicing within a single cloud-based interface."
    },
    {
      question: "Can I manage multiple workshop branches using GarageSaarthi?",
      answer: "Yes! GarageSaarthi provides complete multi-branch management features. You can monitor daily sales, check inventory, and assign user roles for multiple centers through a single unified owner dashboard."
    },
    {
      question: "How does the spare parts inventory sync with job cards?",
      answer: "When a mechanic is assigned a job card, any spare parts needed can be allocated from the digital inventory. The stock count reduces automatically in real-time, preventing parts leakage and discrepancies during final billing."
    },
    {
      question: "Can my accountant or CA access our invoicing logs?",
      answer: "Yes. You can create a dedicated secure login for your Chartered Accountant or finance auditor. They can view, review, and export GST-taxable invoices and payment records directly, saving you time."
    },
    {
      question: "Does GarageSaarthi run on smartphones?",
      answer: "Yes. In addition to a web browser layout on laptops, GarageSaarthi has an Android mobile application available on the Google Play Store, providing real-time data sync on-the-go."
    }
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked"
      titleHighlight="Questions"
      subtitle="Get answers to common queries about GarageSaarthi's workshop ERP platform."
      faqs={faqs}
    />
  );
}

