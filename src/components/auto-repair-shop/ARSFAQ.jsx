import React from "react";
import AccordionFAQ from "../common/AccordionFAQ";

const faqs = [
  {
    q: "What is auto repair shop software?",
    a: "Auto repair shop software is a specialized digital platform that helps garage owners manage vehicle check-in procedures, allocate mechanics, maintain spare parts stock, create estimates, print GST bills, track service histories, and follow up on client bookings."
  },
  {
    q: "What does auto repair software help manage?",
    a: "It manages the complete automotive repair lifecycle: registering vehicles, tracking spare components issued to job sheets, organizing labor bill items, generating professional invoices, and scheduling future service alerts."
  },
  {
    q: "Can GarageSaarthi create digital job cards?",
    a: "Yes, you can create digital job cards in under 60 seconds on any web browser or Android mobile app. Track diagnostic complaints, allocate workers, and attach spare parts."
  },
  {
    q: "Does GarageSaarthi support GST billing for auto repair shops?",
    a: "Yes. The platform provides localized GST invoicing setups. Generate tax bills with proper CGST/SGST details, parts/labor splits, and custom bill series."
  },
  {
    q: "Can I manage spare parts inventory with GarageSaarthi?",
    a: "Yes. Track spare parts catalogues, stock counts, purchase bills, and counter sales. Update inventory counts dynamically as parts are issued to job cards."
  },
  {
    q: "Can GarageSaarthi track vehicle repair history?",
    a: "Yes, a secure and lifetime service log registry is automatically maintained for every vehicle registration plate, make, and model."
  },
  {
    q: "Does GarageSaarthi send automatic service reminders?",
    a: "Yes. The system schedules future service dates based on previous visits and lets you broadcast alerts directly to customer WhatsApp profiles."
  },
  {
    q: "Can I manage mechanics and staff with GarageSaarthi?",
    a: "Yes. Log daily staff shifts, track worker commission percentages on completed jobs, and manage leaves or wage payrolls."
  },
  {
    q: "Can I manage multiple auto repair shop branches?",
    a: "Yes, you can scale to multiple service locations. Transfer inventory items between sites and check consolidated chain sales."
  },
  {
    q: "Is GarageSaarthi available on mobile?",
    a: "Yes, a responsive mobile web interface is available for all smartphones, along with a dedicated Android app downloadable from the Google Play Store."
  },
  {
    q: "Is GarageSaarthi cloud-based?",
    a: "Yes, your data is securely backed up on cloud databases, ensuring 100% remote accessibility from any device."
  },
  {
    q: "Does GarageSaarthi offer a free trial?",
    a: "Yes, we provide a full, unrestricted 7-day free trial of all modules for you to experience its features."
  },
  {
    q: "How much does auto repair shop software cost?",
    a: "GarageSaarthi plans are very affordable. Please visit our pricing page to check subscription rates."
  }
];

export default function ARSFAQ() {
  return (
    <AccordionFAQ
      title={
        <>
          Frequently Asked Questions About{" "}
          <span className="relative inline-block">
            Auto Repair Shop Software.
            <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
          </span>
        </>
      }
      subtitle="Everything you need to know about GarageSaarthi auto repair management software features and configurations."
      faqs={faqs.map(item => ({ question: item.q, answer: item.a }))}
    />
  );
}