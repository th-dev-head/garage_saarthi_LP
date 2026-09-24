import React from "react";
import GradientUnderline from "../../common/GradientUnderline";
import {
  FaStopwatch,
  FaPauseCircle,
  FaChartLine,
  FaClock,
  FaFileExport,
  FaUserCheck,
} from "react-icons/fa";

export default function MCCoreCapabilities() {
  const capabilities = [
    {
      icon: FaStopwatch,
      title: "1-Tap Mobile Clock In / Out",
      description: "Mechanics clock into assigned job tasks effortlessly from personal mobile devices or a dedicated shared workshop kiosk.",
    },
    {
      icon: FaPauseCircle,
      title: "Granular Pause Reason Tracking",
      description: "Log specific pauses for Parts Waiting, Lathe Machine Outsourcing, Additional Approval, or Lunch Breaks.",
    },
    {
      icon: FaChartLine,
      title: "Real-Time Productivity KPI Matrix",
      description: "Monitor each technician's Active Wrench Time %, Break Time %, Tasks Done, and Overall Efficiency percentage.",
    },
    {
      icon: FaClock,
      title: "Estimated vs Actual Labor Hours",
      description: "Track variances between standard estimated job hours and actual minutes spent by the mechanic in the service bay.",
    },
    {
      icon: FaUserCheck,
      title: "Technician Incentive & Bonus Engine",
      description: "Reward high-efficiency mechanics accurately with automatic calculations tied to completed labor volume.",
    },
    {
      icon: FaFileExport,
      title: "Managerial Time Audit & CSV Export",
      description: "Workshop managers and owners can filter by date, technician, job card, or bay and export complete audit logs to CSV/Excel.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 lg:px-15 2xl:px-50 bg-white flex justify-center">
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-primary font-bold bg-[#EFE9E7] px-3 py-1 rounded-full inline-block mb-3">
            Core Labor Intelligence
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-4 leading-tight">
            Comprehensive <GradientUnderline>Mechanic Time Tracking Features</GradientUnderline>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Gain complete transparency into technician efficiency, eliminate idle time, and boost workshop labor revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-text-dark mb-2">{item.title}</h3>
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
