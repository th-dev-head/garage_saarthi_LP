import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function SRFAQ() {
  const faqs = [
    {
      question: "How does GarageSaarthi calculate service due dates?",
      answer: "GarageSaarthi calculates next service dates automatically whenever a job card is closed or invoice generated. You can configure standard intervals like 3 months, 6 months, or specific KM readings."
    },
    {
      question: "Can I customize the WhatsApp message sent to customers?",
      answer: "Yes! You can fully customize message text templates, insert custom discount codes, add booking links, and attach garage contact details."
    },
    {
      question: "Can service advisors manually log call back notes?",
      answer: "Absolutely. Service advisors can view due reminder lists daily, update customer call responses, mark calls as 'Rescheduled', or log specific customer preferences."
    },
    {
      question: "Does it support insurance and PUC renewal reminders?",
      answer: "Yes, you can log insurance policy expiry and PUC validation dates during vehicle intake to trigger timely renewal alerts."
    },
    {
      question: "Is WhatsApp messaging included in the free trial?",
      answer: "Yes! During your 7-day free trial, you can test service reminder workflows and send test WhatsApp notifications."
    }
  ];

  return (
    <AccordionFAQ
      title="Service Reminders"
      titleHighlight="FAQs"
      subtitle="Everything you need to know about GarageSaarthi automated service reminders."
      faqs={faqs}
      className="bg-white"
    />
  );
}

