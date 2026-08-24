import React from "react";
import Link from "next/link";
import GradientUnderline from "../../common/GradientUnderline";

export default function SRConnected() {
  const links = [
    { name: "Customer Management", url: "/features/customers/" },
    { name: "Vehicle Records", url: "/features/vehicles/" },
    { name: "Digital Job Cards", url: "/features/job-card-management/" },
    { name: "Service Alerts", url: "/features/service-reminders/" },
    { name: "Garage CRM Software", url: "/features/crm/" },
    { name: "Offers & Promotions", url: "/features/offers-promotions/" },
    { name: "Performance Reports", url: "/features/reports/" }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full text-center space-y-6">
        <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
          All-in-One Integration
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Service Reminders Connected with Your <GradientUnderline>Garage Operations</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          GarageSaarthi is an all-in-one <Link href="/" className="text-primary font-semibold hover:underline">garage management software</Link> where customer reminders work seamlessly with job cards, inventory, billing, and accounting modules.
        </p>

        <div className="flex flex-wrap gap-3 justify-center pt-4">
          {links.map((link, idx) => (
            <Link key={idx} href={link.url} className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-5 py-2.5 rounded-full text-xs font-semibold transition-all">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}