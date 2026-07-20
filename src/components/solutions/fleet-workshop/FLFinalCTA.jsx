import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

export default function FLFinalCTA() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center text-center">
      <div className="mx-auto max-w-full lg:max-w-4xl w-full space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark leading-tight">
          Ready to Manage Your Fleet Workshop <GradientUnderline>Digitally?</GradientUnderline>
        </h2>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Get everything you need to manage your fleet maintenance business: digital job cards, vehicle maintenance logs, parts inventory, GST invoices, mechanic logs, and automated WhatsApp alerts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            variant="primary"
            icon={<FaArrowRight className="w-4 h-4" />}
            onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
          >
            Start 7-Day Free Trial
          </Button>
          <Link
            href="/pricing"
            className="rounded-full bg-transparent text-slate-700 border border-slate-300 hover:bg-slate-100 px-6 py-2.5 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap h-11"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
