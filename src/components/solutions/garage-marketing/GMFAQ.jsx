import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const gmFaqData = [
  {
    question: "What is garage marketing software?",
    answer: "Garage marketing software is software used by automotive workshops and garages to organize customer marketing, promotions, offers, WhatsApp communication, CRM lead follow-ups, and customer engagement activities connected with daily workshop operations.",
  },
  {
    question: "How can GarageSaarthi help market my garage?",
    answer: "GarageSaarthi helps you create and manage promotional offers, send WhatsApp customer messages, track lead enquiries inside a dedicated CRM, maintain searchable customer & vehicle records, and automate service alerts.",
  },
  {
    question: "Can I send garage offers to customers with GarageSaarthi?",
    answer: "Yes. The Offers & Promotions module allows you to create seasonal service discounts, checkup packages, and festive vouchers to share with your customer base.",
  },
  {
    question: "Does GarageSaarthi support WhatsApp customer communication?",
    answer: "Yes. GarageSaarthi integrates supported WhatsApp communication workflows so you can send job card estimates, GST invoices, offers, and service reminders directly to customers' WhatsApp numbers.",
  },
  {
    question: "Can GarageSaarthi help with customer follow-ups?",
    answer: "Yes. GarageSaarthi provides a dedicated Garage CRM to log new lead enquiries, record follow-up call notes, and schedule service due alerts for upcoming maintenance.",
  },
  {
    question: "Is GarageSaarthi a digital marketing tool?",
    answer: "No. GarageSaarthi is not a digital marketing agency, SEO service, or ad campaign manager. It is customer engagement and retention software connected directly to your workshop's daily operations and vehicle records.",
  },
  {
    question: "Can car and bike workshops use GarageSaarthi marketing tools?",
    answer: "Yes. Car repair garages, bike workshops, EV service centers, car detailing studios, truck repair shops, and multi-branch garage chains can all use GarageSaarthi's marketing tools.",
  },
  {
    question: "Can I manage customer and vehicle information together?",
    answer: "Yes. GarageSaarthi links customer contact profiles directly with vehicle registration codes, chassis numbers, odometer readings, and historical repair logs.",
  },
  {
    question: "Does GarageSaarthi support service reminders?",
    answer: "Yes. GarageSaarthi automatically tracks periodic maintenance due dates and sends WhatsApp alerts. Learn more on our dedicated Vehicle Service Reminder Software page.",
  },
  {
    question: "Does GarageSaarthi offer a free trial and how much does it cost?",
    answer: "Yes. GarageSaarthi offers a 7-day free trial with full feature access. Flexible subscription packages (1, 3, 6, 12, or 24 months) are available. Please visit our pricing page for details.",
  },
];

export default function GMFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Garage Marketing Software"
      faqs={gmFaqData}
      className="bg-white"
    />
  );
}
