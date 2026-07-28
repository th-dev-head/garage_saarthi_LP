import React from "react";
import Link from "next/link";
import { FaFileInvoiceDollar } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GABilling() {
  const invoiceItems = [
    { name: "Engine Oil Replacement", price: "₹1,850.00" },
    { name: "Oil Filter (Premium)", price: "₹350.00" },
    { name: "Labor Charge (Service)", price: "₹400.00" }
  ];

  const billingFeatures = [
    {
      title: "Create Garage Invoices",
      desc: "Compile invoices directly from active repair sheets, saving time and avoiding discrepancies."
    },
    {
      title: "Manage GST Billing",
      desc: "Generate invoices with custom CGST/SGST ratios, satisfying requirements for Indian workshop formats."
    },
    {
      title: "Create and Manage Invoice Series",
      desc: "Maintain unique custom series configurations matching your business branch details."
    },
    {
      title: "Track Payments",
      desc: (
        <>
          Log transaction records, check outstanding dues, and check lists in our dedicated{" "}
          <Link href="/features/billing" className="text-primary font-bold hover:underline">
            Payments
          </Link>{" "}
          and{" "}
          <Link href="/features/finance" className="text-primary font-bold hover:underline">
            Finance
          </Link>{" "}
          panels.
        </>
      )
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Mock Invoicing Representation (Visual Column Left) */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-4">
              GST Invoice Generator
            </span>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs text-xs font-sans text-slate-600">
              <div className="flex justify-between items-start pb-2 border-b border-slate-200">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">GST Tax Invoice</h4>
                  <p className="text-[9px] text-slate-400">Invoice No: GST-2026-9812</p>
                </div>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[8px] font-bold">Paid</span>
              </div>

              <div className="space-y-1.5 border-b border-slate-200 pb-3">
                {invoiceItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span>Subtotal</span>
                  <span>₹2,600.00</span>
                </div>
                <div className="flex justify-between text-[10px]">
                  <span>CGST (9%) + SGST (9%)</span>
                  <span>₹468.00</span>
                </div>
                <div className="flex justify-between font-bold text-slate-900 border-t border-slate-200 pt-1.5 text-xs">
                  <span>Total Amount Due</span>
                  <span>₹3,068.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column Right */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              Invoicing & Finance
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
              Digitize Garage Billing and <GradientUnderline>GST Invoices</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Compile job cards, parts consumed, and labor items into professional digital estimates. A dedicated <strong className="text-primary capitalize">garage automation software with billing</strong> dashboard prevents manual calculations.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              {billingFeatures.map((feat, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-slate-900 text-sm">{feat.title}</h3>
                  <div className="text-slate-600 text-xs mt-1 leading-relaxed">{feat.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
