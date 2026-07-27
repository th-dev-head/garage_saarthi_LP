import React from "react";
import { useRouter } from "next/navigation";
import { HiArrowRight } from "react-icons/hi";
import JobIcon from "../assets/icons/Job.svg";
import DashboardIcon from "../assets/icons/Gdashboard.svg";
import FinanceIcon from "../assets/icons/Gfinance.svg";
import PortalIcon from "../assets/icons/Portal.svg";
import PaymentsIcon from "../assets/icons/Payments.svg";
import InventoryIcon from "../assets/icons/Inventory.svg";
import WhatsAppIcon from "../assets/icons/WhatsApp.svg";
import Button from "./common/Button";

const features = [
  {
    title: "Digital Job Cards",
    description: "Create, manage, and track professional repair orders digitally in under a minute.",
    icon: JobIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    link: "/features/job-card-management"
  },
  {
    title: "Real-time Dashboard",
    description: "Monitor operations with live analytics, revenues, and active mechanics.",
    icon: DashboardIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    link: "/features/workshop-management-dashboard"
  },
  {
    title: "Counter Sales",
    description: "Sell spare parts and items directly to walk-in clients without a job card.",
    icon: PaymentsIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    link: "/features/counter-sales"
  },
  {
    title: "Inventory Management",
    description: "Track spare parts, stock levels, set low-stock alerts, and manage purchases.",
    icon: InventoryIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    link: "/features/inventory"
  },
  {
    title: "Garage CRM",
    description: "Manage customer records, inquiries, bookings, and marketing campaigns.",
    icon: WhatsAppIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    link: "/features/crm"
  },
  {
    title: "Staff & Payroll",
    description: "Track check-in, check-out times, leaves, and calculate salaries automatically.",
    icon: PortalIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    link: "/features/attendance"
  },
  {
    title: "Service Alerts",
    description: "Send service reminders and booking updates directly to customer WhatsApp.",
    icon: WhatsAppIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    link: "/features/service-alerts"
  },
  {
    title: "Reports & Analytics",
    description: "Export GST billing, sales logs, and mechanic productivity metrics in Excel.",
    icon: FinanceIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
    link: "/features/reports"
  }
];

const DashboardFeatures = () => {
  const router = useRouter();

  return (
    <div id="features" className="bg-white">
      {/* Dashboard Preview Section */}
      <section className="relative z-20 pt-10 lg:pt-20 pb-10 px-4 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-text-dark mb-6">
              Manage Your Entire Garage <span className="relative inline-block">from One Platform.<span className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span></span>
            </h2>
            <p className="text-sm md:text-base mb-6 text-slate-600">
              GarageSaarthi is a cloud-based platform for automotive workshops to manage job cards, GST billing, inventory, CRM, staff, and service alerts - all in one place.
            </p>
            <div className="flex justify-center">
              <Button
                variant="hero"
                className="cursor-pointer"
                onClick={() => {
                  router.push("/features");
                }}
              >
                Explore Features
                <HiArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-10 lg:pb-20 px-4 lg:px-15 2xl:px-50 bg-white">
        <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => router.push(feature.link)}
                className="relative p-6 border border-slate-100 bg-white transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 cursor-pointer rounded-lg flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center mb-6">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-9 h-9"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-950 mb-2 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <span className="text-primary text-xs font-bold mt-4 inline-flex items-center gap-1">
                  Explore Feature <HiArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            ))}
          </div>

          {/* View All Features Button */}
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => router.push("/features")}
              className="cursor-pointer"
            >
              View All Features
              <HiArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardFeatures;
