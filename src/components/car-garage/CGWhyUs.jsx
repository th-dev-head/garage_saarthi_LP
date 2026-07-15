import React from "react";
import {
  FaClipboardList, FaRoute, FaFileInvoiceDollar, FaBoxOpen,
  FaUserFriends, FaBell, FaWhatsapp, FaUsers, FaBuilding,
  FaLaptop, FaCheckCircle, FaComments,
} from "react-icons/fa";

const differentiators = [
  {
    icon: <FaClipboardList className="w-5 h-5" />,
    title: "Digital Car Repair Job Cards",
    desc: "Replace paper job cards with fast, searchable digital records for every car repair and service visit.",
  },
  {
    icon: <FaUserFriends className="w-5 h-5" />,
    title: "Customer and Vehicle Records",
    desc: "Connected customer profiles and vehicle records give your team a complete view of every car in your garage.",
  },
  {
    icon: <FaRoute className="w-5 h-5" />,
    title: "Vehicle Service History",
    desc: "Instantly view past service, parts replaced, and complaints for any returning customer vehicle.",
  },
  {
    icon: <FaBoxOpen className="w-5 h-5" />,
    title: "Inventory and Counter Sales",
    desc: "Manage spare parts stock and direct counter sales with live inventory tracking and automatic deductions.",
  },
  {
    icon: <FaFileInvoiceDollar className="w-5 h-5" />,
    title: "GST Billing",
    desc: "Generate GST-compliant invoices for car services and spare parts — shareable via WhatsApp in seconds.",
  },
  {
    icon: <FaBell className="w-5 h-5" />,
    title: "Automated Service Alerts",
    desc: "Track and send periodic service reminders to car owners to bring them back to your garage.",
  },
  {
    icon: <FaWhatsapp className="w-5 h-5 text-green-500" />,
    title: "WhatsApp Customer Follow-Up",
    desc: "Send personalized WhatsApp messages directly to car owners for service reminders and promotions.",
  },
  {
    icon: <FaComments className="w-5 h-5" />,
    title: "Garage CRM",
    desc: "Manage incoming car service leads and customer follow-ups from within GarageSaarthi.",
  },
  {
    icon: <FaUsers className="w-5 h-5" />,
    title: "Attendance and Payroll",
    desc: "Track mechanic and staff attendance, leaves, and payroll from the same platform as your garage operations.",
  },
  {
    icon: <FaBuilding className="w-5 h-5" />,
    title: "Multi-Branch Support",
    desc: "Manage multiple car garage locations from one account with centralized reporting and access control.",
  },
  {
    icon: <FaLaptop className="w-5 h-5" />,
    title: "Web and Android Access",
    desc: "Use GarageSaarthi from any browser or the GarageSaarthi Android app — no hardware dependency.",
  },
  {
    icon: <FaCheckCircle className="w-5 h-5" />,
    title: "7-Day Free Trial",
    desc: "Start with a full-access free trial. No credit card required. Set up your car garage in minutes.",
  },
];

export default function CGWhyUs() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Why GarageSaarthi?
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-6 leading-tight">
            Why Car Garage Owners{" "}
            <span className="relative inline-block">
              Use GarageSaarthi
              <span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]" />
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            GarageSaarthi is built for the specific operational reality of car garages — from independent workshops to multi-branch service centres managing hundreds of vehicles a month.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/20 group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#EFE9E7] text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-sm font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
