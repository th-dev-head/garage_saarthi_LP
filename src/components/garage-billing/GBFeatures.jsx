import React from "react";
import Link from "next/link";
import { FaFileInvoice, FaPercent, FaCoins, FaUserLock, FaChevronRight } from "react-icons/fa";
import { trackEvent } from "@/src/utils/pixel";
import Button from "../common/Button";

export default function GBFeatures() {
  const handleFeatureClick = (featureName) => {
    trackEvent("billing_feature_click", {
      page_path: "/solutions/garage-billing-software",
      feature_name: featureName
    });
  };

  const billingFeatures = [
    {
      icon: <FaFileInvoice className="text-primary w-6 h-6" />,
      title: "GST and Custom Invoices",
      desc: "Generate professional GST bills with custom invoice numbers, HSN rates, and tax parameters.",
      link: "/features/payments"
    },
    {
      icon: <FaPercent className="text-primary w-6 h-6" />,
      title: "Labor and Spares Separated",
      desc: "Split service invoices into labor charges and spare parts replacement rows for transparent customer billing.",
      link: "/solutions/garage-job-card-software"
    },
    {
      icon: <FaCoins className="text-primary w-6 h-6" />,
      title: "Split Payment Management",
      desc: "Record split payments (Cash, UPI, Card, Net Banking) and track collections under specific registers.",
      link: "/features/payments"
    },
    {
      icon: <FaUserLock className="text-primary w-6 h-6" />,
      title: "Dedicated CA Access Login",
      desc: "Grant a secure login to your tax accountant to directly access GST reports and sales invoice logs.",
      link: "/features/ca-access"
    },
    {
      icon: <FaFileInvoice className="text-primary w-6 h-6" />,
      title: "Direct Counter Sales Invoices",
      desc: "Bill walk-in customers for parts and items directly without opening workshop job card logs.",
      link: "/features/counter-sales"
    },
    {
      icon: <FaCoins className="text-primary w-6 h-6" />,
      title: "Custom Service Estimates",
      desc: "Draft price quotes for customers and convert them into final invoices with a single tap.",
      link: "/solutions/garage-job-card-software"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center border-b border-slate-200/60">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Key Features
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Comprehensive Billing Features for Modern Workshops
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            From tax calculations to CA accounting registers, explore our specialized billing capabilities:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {billingFeatures.map((feat, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-150">
              <div>
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{feat.desc}</p>
              </div>
              <Link
                href={feat.link}
                onClick={() => handleFeatureClick(feat.title)}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline self-start mt-auto"
              >
                Explore Feature
                <FaChevronRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
