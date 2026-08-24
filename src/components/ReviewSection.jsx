import React from "react";
import TestimonialsGrid from "./common/TestimonialsGrid";

const reviews = [
  {
    name: "Egun",
    role: "Owner, Egun",
    location: "Ahmedabad",
    initials: "EG",
    text: "GarageSaarthi has completely transformed how we track job cards. We used to lose paper cards, but now everything is digital. Our customers love getting invoice links directly on WhatsApp!"
  },
  {
    name: "Bhagwati Service Center",
    role: "Owner, Bhagwati Service Center",
    location: "Uttrakhand",
    initials: "BS",
    text: "The staff tracking and inventory alerts are absolute lifesavers. I get notifications when parts stock is low, so we never run out of critical items. Highly recommended to all workshop owners."
  },
  {
    name: "Rishabh",
    role: "Owner, The Big Wheels",
    location: "Madhya Pradesh",
    initials: "TBW",
    text: "Counter sales and instant billing have reduced customer wait times by half. The daily cash and online payment reconciliation screen makes tallying at the end of the day extremely simple."
  },
  {
    name: "Rajesh Patel",
    role: "Owner, Royal Auto Care (Surat)",
    location: "Vadodara",
    initials: "AT",
    text: "Managing multiple branches was a nightmare before. With GarageSaarthi, I can see branch-wise analytics and transfer parts inventory in seconds. The central control is amazing!"
  },
  {
    name: "Himmat Lal",
    role: "Owner, Khatu Shyam Automobiles",
    location: "West Bengal ",
    initials: "HL",
    text: "The GST billing feature is very simple to use. Generating invoices takes seconds and sending them straight to WhatsApp is very convenient. Our billing flow has never been this smooth."
  },
  {
    name: "Aditya Bhusan Rout",
    role: "Owner, Bikemech",
    location: "Odisha",
    initials: "ABR",
    text: "Customer service reminders are brilliant. It automatically sends service alerts, which has increased our repeat customers by 30%. Very happy with the platform!"
  }
];

export default function ReviewSection() {
  return (
    <TestimonialsGrid
      title="Garages Using GarageSaarthi"
      titleHighlight="to Manage Daily Operations."
      subtitle="Hear from workshop and garage owners across India who are growing their businesses and simplifying operations with GarageSaarthi."
      reviews={reviews}
      linkHref="/features/customer-reviews/"
      linkLabel="View All Customer Stories"
    />
  );
}
