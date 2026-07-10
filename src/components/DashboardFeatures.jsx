import React from "react";
import { useRouter } from "next/navigation";
import { HiArrowRight } from "react-icons/hi";
import JobIcon from "../assets/icons/Job.svg";
import DashboardIcon from "../assets/icons/Gdashboard.svg";
import FinanceIcon from "../assets/icons/Gfinance.svg";
import PortalIcon from "../assets/icons/Portal.svg";
import GarageIcon from "../assets/icons/Garage.svg";
import PaymentsIcon from "../assets/icons/Payments.svg";
import InventoryIcon from "../assets/icons/Inventory.svg";
import WhatsAppIcon from "../assets/icons/WhatsApp.svg";
import Button from "./common/Button";

const features = [
  {
    title: "Job Management",
    description: "Track repairs from start to finish with digital job cards",
    icon: JobIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Real-time Dashboard",
    description: "Monitor operations with live analytics and insights",
    icon: DashboardIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Finance & Counter Sales",
    description: "Manage billing, payments, counter sales, and invoices in one place",
    icon: PaymentsIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Multi-Branch System",
    description: "Manage inventory, staff, and analytics across multiple branches",
    icon: GarageIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Inventory & CRM",
    description: "Track parts stock levels, manage low-stock and upcoming service alerts",
    icon: InventoryIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Staff & Payroll",
    description: "Track staff attendance, calculate commissions, and generate wage slips",
    icon: PortalIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "WhatsApp Notifications",
    description: "Auto-send bookings, service alerts, and invoice links directly to customer WhatsApp",
    icon: WhatsAppIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
  {
    title: "Estimates",
    description: "Send professional estimates in seconds. Get approvals faster and get to work sooner.",
    icon: FinanceIcon,
    bgColor: "bg-orange-50",
    iconColor: "#D13F26",
  },
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
              Your Entire Workshop. <br />
              One Powerf
              <span className="relative">
                ul Dashboard.
                <span className="absolute bottom-0 left-0 w-full rounded-full hidden md:block  h-1 bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)] "></span>
              </span>
            </h2>
            <p className="text-sm md:text-base mb-6">
              GarageSaarthi by Techifyhouse is a cloud-based platform for
              automobile workshops to manage jobs, billing, inventory,
              customers, and staff - all in one place.
            </p>
            <div className="flex justify-center">
              <Button
                variant="hero"
                className="cursor-pointer"
                onClick={() => {
                  const showcaseSection = document.getElementById('showcase');
                  if (showcaseSection) {
                    const offset = 100;
                    const top = showcaseSection.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }}
              >
                Explore Now
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
                className="relative p-4 border border-[#EEE] bg-white transition-all duration-300 hover:shadow-sm hover:-translate-y-1 cursor-pointer rounded-lg"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mb-6">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-9 h-9"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {feature.title.split(" ").slice(0, -1).join(" ")} <br />
                  {feature.title.split(" ").slice(-1)}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed">
                  {feature.description}
                </p>
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
