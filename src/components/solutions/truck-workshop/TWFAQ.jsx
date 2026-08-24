import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

const faqData = [
  {
    q: "What is truck workshop software?",
    a: "Truck workshop software is a digital system used to manage repair jobs, vehicle records, inventory, billing, customers, staff and daily workshop operations.",
  },
  {
    q: "Can GarageSaarthi be used by heavy vehicle workshops?",
    a: "Yes. GarageSaarthi is highly adaptable and can be configured to manage heavy vehicle garages, commercial workshops and truck repair hubs, handling large parts inventory and multi-branch jobs.",
  },
  {
    q: "Can I create digital job cards for truck repairs?",
    a: "Yes. You can replace paper registers with digital job cards to log vehicles, detail repair issues, assign jobs to mechanics and monitor job status.",
  },
  {
    q: "Can I manage truck spare parts and workshop inventory?",
    a: "Yes. You can manage specialized heavy truck parts, track stock levels, assign parts to active job cards, and perform direct counter sales billing.",
  },
  {
    q: "Does GarageSaarthi support GST billing for truck workshops?",
    a: "Yes. It supports GST billing, customized invoice series, payment tracking, and lets you generate clean invoices for transport fleets and commercial clients.",
  },
  {
    q: "Can I maintain truck repair and service history?",
    a: "Yes. It automatically records every repair task and spare part used on a vehicle, building a digital service timeline for future reference.",
  },
  {
    q: "Can GarageSaarthi send WhatsApp service alerts?",
    a: "Yes. You can set service intervals and send service due reminders or invoice updates directly to your clients on WhatsApp.",
  },
  {
    q: "Can I manage mechanics and staff with GarageSaarthi?",
    a: "Yes. You can manage team attendance, track leave records, define role-based access, and automatically compute salaries and commissions.",
  },
  {
    q: "Can I manage multiple truck workshop branches?",
    a: "Yes. GarageSaarthi supports multi-branch controls, allowing you to check inventory across branches and view consolidated business analytics.",
  },
  {
    q: "Is GarageSaarthi available as a truck workshop app?",
    a: "Yes. GarageSaarthi offers a mobile apps on Google Play Store & Apple App Store as well as a cloud-based web application for tablets and computers.",
  },
  {
    q: "How much does truck workshop software cost?",
    a: "GarageSaarthi offers transparent, affordable pricing options depending on your setup. Please refer to our pricing page for details.",
  },
  {
    q: "Does GarageSaarthi offer a free trial?",
    a: "Yes. We offer a 7-day free trial with no card required, giving you access to all features to test with your daily truck repair workflow.",
  },
];

export default function TWFAQ() {
  return (
    <AccordionFAQ
      title="Frequently Asked Questions About"
      titleHighlight="Truck Workshop Software"
      faqs={faqData.map((item) => ({ question: item.q, answer: item.a }))}
      className="bg-white"
    />
  );
}
