"use client";

import React from "react";
import AccordionFAQ from "@/src/components/common/AccordionFAQ";

export default function TrustFAQ() {
  const faqs = [
    {
      question: "Does GarageSaarthi share or sell customer contact information with third parties?",
      answer: "Never. Your customer database, vehicle registration records, and service histories belong exclusively to your workshop. We do not sell, broker, or monetize your customer records with parts manufacturers, insurance brokers, or marketing networks.",
    },
    {
      question: "What happens to our workshop data if we ever choose to cancel our subscription?",
      answer: "You can download your entire data set in CSV or Excel format at any point during your active subscription. If you cancel, your account is deactivated, and you can submit a written verification request to permanently wipe your database records from our active servers.",
    },
    {
      question: "Where is our workshop data hosted and how is it protected against cyber threats?",
      answer: "All GarageSaarthi systems are hosted in modern, enterprise-tier cloud data centers with continuous monitoring, redundant power, and firewalls. All data is encrypted in transit using TLS 1.3 and at rest with AES-256 standard encryption.",
    },
    {
      question: "Can our floor mechanics view our spare parts purchase costs and profit margins?",
      answer: "No. With GarageSaarthi's staff privacy controls, floor mechanics and technicians are restricted to bay-specific work orders, inspection photos, and technical repair checklists. They cannot see supplier purchase costs, margins, or overall financial reports.",
    },
    {
      question: "What happens if a workshop tablet or phone is lost or damaged?",
      answer: "Because GarageSaarthi is a secure cloud-native solution, no sensitive data is stored solely on local physical devices. If a smartphone or tablet breaks, simply log in from another browser or device to resume operations instantly without losing a single job card.",
    },
    {
      question: "How can I report a security question or request a formal data export?",
      answer: "For data export requests, privacy inquiries, or security disclosures, workshop owners can reach our specialized data protection team directly at security@garagesaarthi.com or through your dedicated account manager.",
    },
  ];

  return (
    <AccordionFAQ
      title="Frequently Asked Questions"
      titleHighlight="About Data Trust"
      subtitle="Clear answers about database custody, staff privacy controls, and cloud infrastructure."
      faqs={faqs}
      className="bg-slate-50"
    />
  );
}

