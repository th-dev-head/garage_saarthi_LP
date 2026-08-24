import React from "react";
import Link from "next/link";
import { FaUserShield, FaCalendarAlt, FaSearchPlus, FaWhatsapp, FaTasks } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GWNWorkflow() {
  const steps = [
    {
      icon: <FaUserShield />,
      title: "Organized Records",
      desc: (
        <>
          Store contact parameters and vehicle profiles in one system. Link customer data under our{" "}
          <Link href="/features/customers/" className="text-primary font-bold hover:underline">
            Customer Management
          </Link>{" "}
          hub and{" "}
          <Link href="/features/vehicles/" className="text-primary font-bold hover:underline">
            Vehicle Management
          </Link>{" "}
          registers.
        </>
      )
    },
    {
      icon: <FaCalendarAlt />,
      title: "Track Due Dates",
      desc: (
        <>
          Log periodic servicing milestones and keep maintenance dates linked with vehicle profiles. Refer to details in{" "}
          <Link href="/features/service-reminders/" className="text-primary font-bold hover:underline">
            Service Alerts
          </Link>.
        </>
      )
    },
    {
      icon: <FaSearchPlus />,
      title: "Identify Pending Actions",
      desc: "Check the service reminder dashboard daily to see which vehicle check-ups are approaching their scheduled dates."
    },
    {
      icon: <FaWhatsapp />,
      title: "Send WhatsApp Alerts",
      desc: "Select template configurations and trigger WhatsApp service reminders to the owner's phone instantly."
    },
    {
      icon: <FaTasks />,
      title: "Monitor Results",
      desc: "Track delivery status and update CRM follow-up logs, ensuring customer communication history remains consolidated."
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Our Flowchart
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            How Garage WhatsApp Service Notifications Work with <GradientUnderline>GarageSaarthi</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Replace manual reminder books with an integrated 5-step operational workflow that connects customer profiles with WhatsApp messages.
          </p>
        </div>

        {/* Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col hover:shadow-md transition-shadow duration-200">
              <div className="bg-orange-100 text-primary w-11 h-11 rounded-full flex items-center justify-center text-lg mb-4 flex-shrink-0">
                {st.icon}
              </div>
              <h3 className="text-xs font-bold text-slate-900 mb-2">{st.title}</h3>
              <div className="text-[10px] text-slate-500 leading-relaxed">{st.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
