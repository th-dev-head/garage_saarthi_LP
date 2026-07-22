import React from "react";
import Link from "next/link";
import { FaUserFriends, FaCar, FaFunnelDollar, FaGift, FaArrowRight } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GACustomerCRM() {
  const items = [
    {
      icon: <FaUserFriends className="text-blue-500 w-5 h-5" />,
      title: "Customer Management",
      desc: "Maintain profiles, logs, and preferences centrally.",
      link: "/features/customers"
    },
    {
      icon: <FaCar className="text-orange-500 w-5 h-5" />,
      title: "Vehicle & Service History",
      desc: "Log odometer parameters, insurance due dates, and past service invoices.",
      link: "/features/vehicles"
    },
    {
      icon: <FaFunnelDollar className="text-green-500 w-5 h-5" />,
      title: "Garage CRM & Lead Tracking",
      desc: "Organize walk-in leads, call notes, and schedule callbacks.",
      link: "/features/crm"
    },
    {
      icon: <FaGift className="text-purple-500 w-5 h-5" />,
      title: "Offers & Promotions",
      desc: "Configure coupons and seasonal discounts to re-engage previous clients.",
      link: "/features/offers-promotions"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            CRM & Relationships
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Organize Customers, Vehicles and <GradientUnderline>Garage Leads</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Stay close to customer relationships using integrated modules. Replacing registers with a centralized <strong className="text-primary capitalize">garage automation application</strong> workspace ensures no client detail is lost.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:shadow-sm transition-shadow duration-200">
              <div className="space-y-4">
                <div className="bg-white w-9 h-9 rounded-xl border border-slate-200/80 flex items-center justify-center shadow-xs">
                  {it.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-900">{it.title}</h3>
                <p className="text-[10px] text-slate-500 leading-relaxed">{it.desc}</p>
              </div>
              <div className="pt-4 mt-auto">
                <Link href={it.link} className="text-primary font-bold text-[10px] hover:underline flex items-center gap-1 whitespace-nowrap">
                  View Features <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
