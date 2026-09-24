import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import { FaWrench, FaCarSide, FaBuilding, FaMotorcycle } from "react-icons/fa";

export default function MCWorkshopTypes() {
  const workshopTypes = [
    {
      icon: FaWrench,
      title: "Multi-Brand Auto Repair Garages",
      description: "Track 5-20 mechanics across multiple service bays, prevent bay bottlenecks, and calculate weekly labor earnings.",
    },
    {
      icon: FaCarSide,
      title: "Fast-Lube & Quick Service Centers",
      description: "Ensure standard 45-minute turnaround times on express periodic service, wheel alignment, and oil changes.",
    },
    {
      icon: FaBuilding,
      title: "Authorized Dealerships & Bodyshops",
      description: "Audit technician flat-rate standard hours vs actual clocking times for complex engine, electrical, and accidental work.",
    },
    {
      icon: FaMotorcycle,
      title: "Two-Wheeler Service Centers",
      description: "Track mechanics handling high-volume quick maintenance, tune-ups, and minor repairs with 1-tap mobile clocking.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-slate-50 flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Built For All Workshop Formats
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Ideal For Every <GradientUnderline>Auto Service Operation</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Whether you operate 2 lifts or a 30-bay workshop facility, GarageSaarthi scales seamlessly to your technician crew.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workshopTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
