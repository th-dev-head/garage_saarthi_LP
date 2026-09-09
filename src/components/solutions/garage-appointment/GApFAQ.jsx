import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function GApFAQ() {
  const faqs = [
    {
      question: "What is GarageSaarthi Appointment & Pickup-Drop Software?",
      answer:
        "It is a specialized solution designed for Indian automotive garages to schedule service appointments, manage doorstep vehicle collections and returns, dispatch drivers with Google Maps navigation, and convert bookings into job cards in 1-click.",
    },
    {
      question: "How does driver navigation work for doorstep vehicle pickups?",
      answer:
        "When recording a pickup address, GarageSaarthi automatically generates a direct Google Maps link. The assigned driver can tap the link on their mobile to get live, turn-by-turn driving directions to the customer's exact location.",
    },
    {
      question: "Can I manage multiple service time slots per day?",
      answer:
        "Yes. You can configure morning, afternoon, evening, or hourly slots to match your workshop's technician capacity and physical bay count.",
    },
    {
      question: "Does the system automatically notify customers on WhatsApp?",
      answer:
        "Yes! When a booking is created or updated, GarageSaarthi automatically sends a WhatsApp confirmation message with the date, time slot, and assigned driver details.",
    },
    {
      question: "Can appointments be converted to job cards without retyping?",
      answer:
        "Yes. When the vehicle arrives at the workshop, click 'Convert to Job Card' to instantly transfer all customer, vehicle, and complaint details into an active digital repair order.",
    },
  ];

  return (
    <AccordionFAQ
      title="Garage Appointment & Pickup Software"
      titleHighlight="FAQs"
      subtitle="Everything you need to know about scheduling service bookings and managing doorstep vehicle pickups."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}
