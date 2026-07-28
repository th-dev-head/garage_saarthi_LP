import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function WAFAQ() {
  const faqs = [
    {
      question: "Do I need an official WhatsApp Business API account?",
      answer: "GarageSaarthi integrates seamlessly with WhatsApp messaging. You can send updates either via 1-click WhatsApp web/app integration or official API connections without technical hassle."
    },
    {
      question: "Can I send PDF invoices directly on WhatsApp?",
      answer: "Yes! When you click 'Share PDF' on any estimate or invoice inside GarageSaarthi, a clean downloadable PDF link is generated and attached to the WhatsApp message automatically."
    },
    {
      question: "Can customers pay directly through the WhatsApp message?",
      answer: "Yes. You can attach a Razorpay payment link or UPI QR code link directly in the WhatsApp message so customers can pay electronically before picking up their vehicle."
    },
    {
      question: "Is there a limit on how many WhatsApp messages I can send?",
      answer: "No! You can send unlimited job card updates, service reminders, and customer bills during your usage."
    },
    {
      question: "Is WhatsApp messaging included in the 7-day free trial?",
      answer: "Yes! During your 7-day free trial, you can test all WhatsApp notification features, estimate sharing, and customer alert workflows."
    }
  ];

  return (
    <AccordionFAQ
      title="WhatsApp Automation"
      titleHighlight="FAQs"
      subtitle="Everything you need to know about GarageSaarthi automated WhatsApp messaging."
      faqs={faqs}
      className="bg-white"
    />
  );
}
