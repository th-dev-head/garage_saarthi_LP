import React from "react";
import { FaCar, FaMotorcycle, FaBolt, FaTruck, FaStore, FaNetworkWired } from "react-icons/fa";
import GradientUnderline from "../../common/GradientUnderline";

export default function WMDBusinessTypes() {
  const types = [
    {
      icon: <FaCar className="w-6 h-6 text-primary" />,
      name: "Car Garage & Detailing Hubs",
      desc: "Track multi-stage car bodywork, paint jobs, ceramic coating, and periodic maintenance job cards on a car repair shop dashboard."
    },
    {
      icon: <FaMotorcycle className="w-6 h-6 text-emerald-600" />,
      name: "Two-Wheeler & Bike Workshops",
      desc: "Manage quick turnaround oil changes, engine tuning, and counter sales for high-volume 2-wheeler service centers."
    },
    {
      icon: <FaBolt className="w-6 h-6 text-amber-500" />,
      name: "EV Garage & Battery Hubs",
      desc: "Monitor EV battery health inspections, motor diagnostics, charging dock repairs, and electrical job cards."
    },
    {
      icon: <FaTruck className="w-6 h-6 text-purple-600" />,
      name: "Commercial Vehicle & Truck Workshops",
      desc: "Handle heavy vehicle repairs, fleet maintenance schedules, large spare parts requisitions, and long-form invoices."
    },
    {
      icon: <FaStore className="w-6 h-6 text-blue-600" />,
      name: "Independent Auto Repair Shops",
      desc: "All-in-one mechanic dashboard software designed for local repair shop owners to organize daily repairs and credit dues."
    },
    {
      icon: <FaNetworkWired className="w-6 h-6 text-teal-600" />,
      name: "Multi-Branch Garage Chains",
      desc: "Consolidated multi-branch garage dashboard software to monitor revenue, staff, and job orders across all city outlets."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Tailored For All Workshop Types
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6 leading-tight">
            Dashboard Solutions Built For <GradientUnderline>Your Workshop Type</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you run a single-bay bike service point or a multi-city car workshop network, GarageSaarthi dashboard software adapts to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-primary/50 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {b.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
