"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../common/Button";
import GradientUnderline from "../../common/GradientUnderline";

export default function VIDefinition() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-4xl 2xl:max-w-full w-full text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
          What is Digital Vehicle <GradientUnderline>Inspection Software?</GradientUnderline>
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          A Digital Vehicle Inspection (DVI) system replaces your paper checklists with a mobile-friendly 
          digital tool. Mechanics can go through predefined checkpoints—such as Engine, Tyres, Brakes, 
          and Exterior—and mark each part's health status (Good, Average, Bad) directly on their tablet 
          or smartphone. The software instantly generates a professional, color-coded health report 
          with mechanic remarks, building unparalleled transparency and trust with your customers.
        </p>
        <div className="flex justify-center">
          <Button
            variant="primary"
            onClick={() => router.push("/download-app/")}
          >
            Get the GarageSaarthi App
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
