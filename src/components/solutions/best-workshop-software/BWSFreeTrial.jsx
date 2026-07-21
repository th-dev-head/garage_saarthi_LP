import { FRONTEND_URL } from "@/src/config/env";
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

const trialChecklist = [
  "Create a digital job card on vehicle arrival",
  "Add customer contact & vehicle registration details",
  "Check previous vehicle repair & service history",
  "Allocate spare parts from stock to active work order",
  "Generate a GST-compliant invoice with custom series",
  "Clock mechanic staff attendance & view commission logs",
  "Audit daily cash vs online collections on the dashboard",
  "Test job sheet creation on the Android mobile app",
];

export default function BWSFreeTrial() {
  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
              7-Day Free Trial
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
              Test Workshop Management Software with <GradientUnderline>Your Real Workflow</GradientUnderline>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Don't take our word for it. Test GarageSaarthi with your actual daily workshop tasks during our 7-day free trial. Experience how seamless digital job sheets, inventory deductions, and GST billing really are.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                icon={<FaArrowRight className="w-4 h-4" />}
                onClick={() => window.open(`${FRONTEND_URL}/signup`, "_blank")}
              >
                Start 7-Day Free Trial
              </Button>
            </div>
          </div>

          {/* Right Column - Checklist */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
            <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wide border-b border-slate-200/60 pb-3">
              Tasks to Execute During Trial
            </h4>
            <div className="space-y-2.5">
              {trialChecklist.map((task, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                  <FaCheckCircle className="text-primary w-3.5 h-3.5 flex-shrink-0" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
