import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";
import { trackEvent } from "@/src/utils/pixel";

const reminderFeatures = [
  {
    title: "Vehicle Service Alerts",
    desc: "Log upcoming service alerts based on past check-in sheets. Explore ",
    href: "/features/service-reminders",
    label: "Service Alerts Feature Link",
    linkText: "Service Alerts"
  },
  {
    title: "WhatsApp Reminders",
    desc: "Send pre-populated WhatsApp reminder templates to clients with a single click. Explore ",
    href: "/features/automation",
    label: "WhatsApp Alerts Feature Link",
    linkText: "WhatsApp Alerts"
  }
];

export default function CWServiceReminders() {
  const handleLinkClick = (name, url) => {
    trackEvent("feature_click", {
      page_path: "/solutions/car-workshop-software",
      cta_location: "service_reminders_section",
      cta_label: name,
      destination: url
    });
  };

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Customer Retention
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
            Bring Customers Back with <GradientUnderline>Timely Service Reminders</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Stop losing track of repeat business. Many car workshop management software tools do not integrate with customer records to track due dates. GarageSaarthi compiles invoicing logs to predict next service dates, prompting alerts directly on your screen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {reminderFeatures.map((feature, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-base font-bold text-slate-800">{feature.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                  <Link
                    href={feature.href}
                    onClick={() => handleLinkClick(feature.label, feature.href)}
                    className="text-primary font-semibold hover:underline"
                  >
                    {feature.linkText}
                  </Link>.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50 border border-slate-200/50 rounded-3xl p-6 shadow-sm flex flex-col justify-between aspect-[4/3] relative">
          <div className="space-y-4 my-auto">
            <div className="border-b border-slate-200/60 pb-3">
              <span className="text-xs text-slate-500 font-medium">WhatsApp Notification</span>
              <p className="text-sm font-bold text-slate-800">Due Alert Template</p>
            </div>
            <p className="text-xs text-slate-600 leading-normal italic">
              "Hello Amit, your Hyundai i20 service is due. Book your slot today at Sunrise Motors."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
