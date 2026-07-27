import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaArrowRight, FaTags, FaComments, FaUsers, FaCalendarCheck } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const marketingCards = [
  {
    icon: FaTags,
    title: "Offers & Discounts",
    desc: "Create and manage seasonal checkup offers, service discounts, and promotional campaigns."
  },
  {
    icon: FaComments,
    title: "WhatsApp Messaging",
    desc: "Connect with customers via supported WhatsApp communication workflows for offers and updates."
  },
  {
    icon: FaUsers,
    title: "Garage CRM",
    desc: "Organize new service lead enquiries, track quotations, and structure client follow-up calls."
  },
  {
    icon: FaCalendarCheck,
    title: "Service Due Alerts",
    desc: "Schedule automated service reminders to encourage timely repeat visits for routine maintenance."
  }
];

export default function GMDefinition() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Product Definition
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Marketing Software Built for Garages <GradientUnderline>and Automotive Workshops</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Garages already possess valuable customer relationships. Customers visit regularly for servicing, repairs, maintenance, parts, and vehicle care. The challenge is that customer data is often scattered across paper registers, phone contacts, WhatsApp chats, and separate spreadsheets.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketingCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] flex items-center justify-center text-primary text-base">
                  <Icon />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{card.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            variant="primary"
            icon={<FaArrowRight className="w-3.5 h-3.5" />}
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}

