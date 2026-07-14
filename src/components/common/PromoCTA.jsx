import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";

export default function PromoCTA({
  title,
  subtitle,
  trialUrl
}) {
  const finalTrialUrl = trialUrl || `${FRONTEND_URL}/register`;

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-950 text-white py-20 px-4 lg:px-15 2xl:px-50 text-center flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-6 text-white">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center w-fit mx-auto">
          <Button
            variant="hero"
            onClick={() => window.open(finalTrialUrl, "_blank")}
          >
            Start 7-Day Free Trial
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Link
            href="/pricing"
            className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 transition-colors text-sm cursor-pointer"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
