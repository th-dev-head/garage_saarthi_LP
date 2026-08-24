"use client";

import React from "react";
import Link from "next/link";
import { FaUserPlus, FaCar, FaClipboardList, FaTools, FaBoxes, FaFileInvoiceDollar } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import GradientUnderline from "../../common/GradientUnderline";

export default function GJCWorkflow() {
  const steps = [
    {
      icon: <FaUserPlus className="text-primary w-5 h-5" />,
      title: "Create a New Digital Job Card",
      desc: "Instantly create a work order when a vehicle arrives. Retrieve previous customer data or add a new record.",
      keyword: "digital workshop job card"
    },
    {
      icon: <FaCar className="text-primary w-5 h-5" />,
      title: "Add Customer and Vehicle Details",
      desc: "Save the customer name, phone number, vehicle registration, and model specifications.",
      links: [
        { label: "Customer Management", href: "/features/customers/" },
        { label: "Vehicle Management", href: "/features/vehicles/" }
      ]
    },
    {
      icon: <FaClipboardList className="text-primary w-5 h-5" />,
      title: "Record Vehicle Complaints",
      desc: "Log exact vehicle complaints, symptoms, diagnostic notes, and fuel/inventory checklists.",
      keyword: "complaints"
    },
    {
      icon: <FaTools className="text-primary w-5 h-5" />,
      title: "Add Services and Repair Work",
      desc: "Add specific repair services, labor rates, and assign mechanic teams to the card.",
      keyword: "garage service job card software"
    },
    {
      icon: <FaBoxes className="text-primary w-5 h-5" />,
      title: "Add Parts or Inventory Items",
      desc: "Connect spare parts directly from your inventory. Keep track of materials used.",
      link: { label: "Garage Inventory Management", href: "/features/inventory/" }
    },
    {
      icon: <FaFileInvoiceDollar className="text-primary w-5 h-5" />,
      title: "Track & Complete the Job Card",
      desc: "Monitor ongoing tasks, update statuses, and generate a final GST-compliant invoice.",
      keyword: "repair job tracking software"
    }
  ];

  const handleLinkClick = (linkLabel) => {
    trackEvent("job_card_feature_link_click", {
      page_path: "/solutions/garage-job-card-software/",
      cta_location: "job_card_workflow",
      cta_label: linkLabel
    });
  };

  return (
    <section id="job-card-workflow" className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workflow Steps
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Manage the Complete{" "}
            <GradientUnderline>Workshop Job Card Workflow</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From arrival logs to vehicle delivery, learn how digital job cards organize your garage activities step-by-step:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
              <div>
                <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  {s.icon}
                </div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{s.desc}</p>
              </div>

              {s.links && (
                <div className="flex gap-4 border-t border-slate-50 pt-3 mt-auto">
                  {s.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      href={link.href}
                      onClick={() => handleLinkClick(link.label)}
                      className="text-xs text-primary font-bold hover:underline"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {s.link && (
                <div className="border-t border-slate-50 pt-3 mt-auto">
                  <Link
                    href={s.link.href}
                    onClick={() => handleLinkClick(s.link.label)}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    {s.link.label}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

