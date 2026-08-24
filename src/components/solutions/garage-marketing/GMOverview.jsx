"use client";

import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import {
  FaTags,
  FaWhatsapp,
  FaUsers,
  FaAddressBook,
  FaCar,
  FaBell,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaArrowRight,
} from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const featureCards = [
  {
    icon: <FaTags />,
    title: "Offers & Promotions",
    desc: "Create and manage seasonal checkup offers, holiday service discounts, and garage promotional campaigns.",
    link: "/features/offers-promotions/",
    anchor: "Explore Offers & Promotions",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Customer Communication",
    desc: "Share promotional offers, job estimates, and service reminders directly to customers' WhatsApp numbers.",
    link: "/features/service-reminders/",
    anchor: "Explore WhatsApp Alerts",
  },
  {
    icon: <FaUsers />,
    title: "Garage CRM",
    desc: "Organize new service lead enquiries, log call records, and follow up with prospective garage clients.",
    link: "/solutions/garage-crm-software/",
    anchor: "Explore Garage CRM",
  },
  {
    icon: <FaAddressBook />,
    title: "Customer Management",
    desc: "Maintain structured customer profiles to power personalized follow-up communication and promotional messages.",
    link: "/features/customers/",
    anchor: "Explore Customer Management",
  },
  {
    icon: <FaCar />,
    title: "Vehicle Management",
    desc: "Link vehicle model, chassis, and historical repair records to give real context to customer communications.",
    link: "/features/vehicles/",
    anchor: "Explore Vehicle Management",
  },
  {
    icon: <FaBell />,
    title: "Service Alerts",
    desc: "Automate service due notifications to encourage repeat maintenance visits. Also see dedicated reminder tools.",
    link: "/solutions/service-reminder-software/",
    anchor: "Garage Service Reminder Software",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Lead Follow-Ups",
    desc: "Maintain structured follow-up call logs and reminders for pending customer service quotations.",
    link: "/solutions/garage-crm-software/",
    anchor: "Explore Lead Follow-Ups",
  },
  {
    icon: <FaEnvelopeOpenText />,
    title: "Customer Notifications",
    desc: "Keep garage clients updated on repair progress, billing totals, and upcoming maintenance schedules.",
    link: "/features/service-reminders/",
    anchor: "Explore Notifications",
  },
];

export default function GMOverview() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Feature Suite
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Everything You Need to Manage <GradientUnderline>Garage Customer Marketing</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            GarageSaarthi provides all the core modules required to market to existing and prospective garage customers.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featureCards.map((card, idx) => (
            <Link
              key={idx}
              href={card.link}
              className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group text-left"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors duration-300">{card.title}</h3>
                <p className="text-xs text-slate-500 leading-normal">{card.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <span className="text-xs font-bold text-primary group-hover:underline flex items-center gap-2">
                  {card.anchor} <FaArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
          >
            Start Marketing to Your Garage Customers
          </Button>
        </div>
      </div>
    </section>
  );
}
