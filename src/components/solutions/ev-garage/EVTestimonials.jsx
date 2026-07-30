import React from "react";
import TestimonialsGrid from "../../common/TestimonialsGrid";

const reviews = [
  {
    name: "Rajesh Patel",
    role: "Owner, Ever Garage",
    location: "Surat, Gujarat",
    initials: "SK",
    text: "Automated service reminders send WhatsApp notification due messages to clients, bringing them back precisely on schedule. It has significantly improved our repeat business count."
  },
  {
    name: "Gurpreet Singh",
    role: "Proprietor, G.S. Car Care",
    location: "Delhi, NCR",
    initials: "GS",
    text: "The digital job cards are excellent. We log scratches and complaints right beside the vehicle on an Android phone. Customer trust has grown significantly."
  },
  {
    name: "Ramesh Malaviya",
    role: "Founder, Sodhi Auto Garage",
    location: "Pune, Maharashtra",
    initials: "RM",
    text: "Managing spare parts inventory and GST billing is very easy. The parts requisitions are mapped directly to job cards, which prevents part leakage."
  }
];

export default function EVTestimonials() {
  return (
    <TestimonialsGrid
      title="See How EV Workshops Manage Daily"
      titleHighlight="Operations with GarageSaarthi"
      subtitle="Hear from real independent garage owners, car detailing spas, and auto service center operators across India who trust GarageSaarthi."
      reviews={reviews}
      linkLabel="View Customer Stories"
      linkHref="/features/customer-reviews"
      bgClass="bg-slate-50"
    />
  );
}
