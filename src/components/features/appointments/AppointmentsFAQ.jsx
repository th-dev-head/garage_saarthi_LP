import React from "react";
import AccordionFAQ from "../../common/AccordionFAQ";

export default function AppointmentsFAQ() {
  const faqs = [
    {
      question: "How does GarageSaarthi appointment booking work?",
      answer:
        "GarageSaarthi gives workshops an interactive calendar to book and schedule customer vehicle services. You can assign time slots, select service types, note complaints, and manage doorstep vehicle pickup & drop details in under a minute.",
    },
    {
      question: "How does the Doorstep Pickup & Drop feature work for drivers?",
      answer:
        "When a pickup or drop is scheduled, you can enter the customer's doorstep address. GarageSaarthi provides a direct Google Maps navigation link that the assigned driver can open on their phone for turn-by-turn navigation.",
    },
    {
      question: "Can I convert an appointment directly into a job card?",
      answer:
        "Yes! When the vehicle arrives at your garage (either brought by the customer or picked up by your driver), simply click 'Convert to Job Card'. All customer, vehicle, and complaint details are instantly transferred without double data entry.",
    },
    {
      question: "Are customers notified via WhatsApp when an appointment is booked?",
      answer:
        "Yes! GarageSaarthi automatically sends a WhatsApp confirmation message to the customer with the date, time slot, service requested, and assigned driver details.",
    },
    {
      question: "Can I switch between Calendar View and List View?",
      answer:
        "Absolutely. You can view bookings in Day, Week, or Month calendar grids to visualize workshop load, or switch to an actionable table list with filters for 'Today's Pickups', 'In-Service', and 'Completed'.",
    },
  ];

  return (
    <AccordionFAQ
      title="Appointments & Pickup-Drop"
      titleHighlight="FAQs"
      subtitle="Frequently asked questions about workshop service scheduling and doorstep pickup logistics."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}
