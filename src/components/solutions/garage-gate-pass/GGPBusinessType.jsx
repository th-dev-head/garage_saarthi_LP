import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCar, FaMotorcycle, FaTruck, FaWrench } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function GGPBusinessType() {
  const businessTypes = [
    {
      icon: <FaCar className="text-primary w-6 h-6" />,
      title: "Car Garages & Service Stations",
      desc: "Fast exit clearance for passenger cars, multi-bay repair facilities, and insurance claim deliveries.",
      link: "/solutions/car-garage-software/"
    },
    {
      icon: <FaMotorcycle className="text-primary w-6 h-6" />,
      title: "Two-Wheeler & Bike Workshops",
      desc: "High-speed checkout for fast service turnarounds and quick counter spare parts releases.",
      link: "/solutions/bike-workshop-software/"
    },
    {
      icon: <FaWrench className="text-primary w-6 h-6" />,
      title: "Multi-Brand Auto Repair Centers",
      desc: "Perimeter gate security, customer WhatsApp pass delivery, and zero unauthorized vehicle releases.",
      link: "/solutions/automobile-workshop-software/"
    },
    {
      icon: <FaTruck className="text-primary w-6 h-6" />,
      title: "Commercial Fleet & Truck Workshops",
      desc: "Multi-vehicle commercial release logs, driver identity verification, and odometer audit logs.",
      link: "/solutions/truck-workshop-software/"
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full">
            Workshop Profiles
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mt-4 mb-4 leading-tight">
            Tailored Gate Pass Security for <GradientUnderline>Every Auto Business</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you operate an independent single-bay garage or a multi-branch authorized service center:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessTypes.map((biz, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-150">
              <div>
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                  {biz.icon}
                </div>
                <h3 className="text-sm font-bold text-text-dark mb-2">{biz.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">{biz.desc}</p>
              </div>
              <Link
                href={biz.link}
                className="flex items-center gap-1 text-xs text-primary font-bold hover:underline self-start mt-auto"
              >
                Explore Solution
                <FaArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
