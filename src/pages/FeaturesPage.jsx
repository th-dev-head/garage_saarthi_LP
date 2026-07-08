import React, { useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

// Icons
import JobIcon from "../assets/icons/Job.svg";
import DashboardIcon from "../assets/icons/Gdashboard.svg";
import FinanceIcon from "../assets/icons/Gfinance.svg";
import PortalIcon from "../assets/icons/Portal.svg";
import AnalyticsIcon from "../assets/icons/Analytics.svg";
import GarageIcon from "../assets/icons/Garage.svg";
import PaymentsIcon from "../assets/icons/Payments.svg";
import InventoryIcon from "../assets/icons/Inventory.svg";
import WhatsAppIcon from "../assets/icons/WhatsApp.svg";
import CartIcon from "../assets/icons/Cart.svg";
import RupeeIcon from "../assets/icons/Rupee.svg";
import MoneyBagIcon from "../assets/icons/MoneyBag.svg";
import ExpenseIcon from "../assets/icons/Expense.svg";
import ReportIcon from "../assets/icons/Report.svg";
import PayrollIcon from "../assets/icons/Payroll.svg";
import ClockIcon from "../assets/icons/Clock.svg";

const allFeaturesList = [
  {
    category: "Repairs & Operations",
    items: [
      { title: "Job Management", description: "Track repairs from start to finish with digital job cards.", icon: JobIcon },
      { title: "Estimates", description: "Send professional estimates in seconds. Get approvals faster and get to work sooner.", icon: FinanceIcon },
      { title: "Vehicle Management", description: "Track every vehicle and maintain detailed customer records.", icon: GarageIcon },
      { title: "Service Reminders", description: "Diagnose multiple systems with a single tool.", icon: DashboardIcon },
      { title: "Parts Requisition", description: "Reduce downtime with timely parts and accurate requisitions.", icon: InventoryIcon },
      { title: "Counter Sales", description: "Quick parts checkout, walk-in customer billing, and instant counter sales.", icon: CartIcon }
    ]
  },
  {
    category: "Billing & Finance",
    items: [
      { title: "Billing & Invoicing", description: "Generation and sending of bills for products or services rendered.", icon: PaymentsIcon },
      { title: "Finance Management", description: "Manage billing, payments, accounts ledger, and expense tracking in one place.", icon: RupeeIcon },
      { title: "Expenses", description: "Simplify budgeting and forecasting with clear insights.", icon: ExpenseIcon },
      { title: "Purchases", description: "Control spending and optimize parts purchases.", icon: InventoryIcon },
      { title: "Cash Management", description: "Manage petty cash and track expenses efficiently.", icon: MoneyBagIcon }
    ]
  },
  {
    category: "Staff & Workforce",
    items: [
      { title: "Staff & Payroll", description: "Track staff attendance, calculate commissions, and generate wage slips.", icon: PayrollIcon },
      { title: "Staff Tracking", description: "Monitoring and recording the duration of tasks or activities.", icon: PortalIcon },
      { title: "Technician Productivity", description: "Enhance Technician Efficiency Maximize output and optimize.", icon: AnalyticsIcon },
      { title: "Employee Attendance", description: "Boost accountability to promote punctuality and productivity.", icon: ClockIcon },
      { title: "Employee Payroll", description: "Employee Self-Service Access payroll and tax details.", icon: PortalIcon }
    ]
  },
  {
    category: "CRM & Customer Experience",
    items: [
      { title: "CRM & Lead Management", description: "Empower your team with effective lead management tools.", icon: PortalIcon },
      { title: "WhatsApp Notifications", description: "Auto-send bookings, service alerts, and invoice links directly to customer WhatsApp.", icon: WhatsAppIcon },
      { title: "Customer Management", description: "Online platform for customers to interact and access services.", icon: PortalIcon },
      { title: "Ratings & Reviews", description: "Respond to reviews and address customer concerns directly.", icon: AnalyticsIcon },
      { title: "Customer Complaints", description: "Track & analyze complaints gain insights to prevent future issues.", icon: AnalyticsIcon }
    ]
  },
  {
    category: "Administration & Control",
    items: [
      { title: "Real-time Dashboard", description: "Monitor operations with live analytics and insights.", icon: DashboardIcon },
      { title: "Reports & Analytics", description: "Data and insights compilation for analysis and decision-making.", icon: ReportIcon },
      { title: "Multi-Branch System", description: "Manage inventory, staff, and analytics across multiple branches.", icon: GarageIcon },
      { title: "Vendor Management", description: "Track vendor performance and identify partners.", icon: PortalIcon }
    ]
  }
];

const FeaturesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Header />
      
      {/* Page Header */}
      <section className="relative pt-48 pb-20 px-4 flex justify-center bg-slate-50 border-b border-[#EEE]">
        <div className="max-w-7xl w-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-text-dark mb-4">
            All Software{" "}
            <span className="relative inline-block">
              Features
              <span className="absolute -bottom-1 left-0 w-full h-1.5 rounded-full bg-[linear-gradient(90deg,#B02E0C_0%,#FF643C_100%)]"></span>
            </span>
          </h1>
          <p className="text-[#575757] text-base md:text-lg max-w-2xl mx-auto mt-6">
            Explore the comprehensive tools built to run your modern workshop and garage efficiently.
          </p>
        </div>
      </section>

      {/* Categories & Features Grid */}
      <section className="py-16 px-4 lg:px-15 2xl:px-50">
        <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full space-y-16">
          {allFeaturesList.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              {/* Category Title */}
              <h2 className="text-xl md:text-2xl font-bold text-text-dark border-l-4 border-[#B02E0C] pl-3">
                {cat.category}
              </h2>
              
              {/* Features Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="relative p-5 border border-[#EEE] bg-white transition-all duration-300 hover:shadow-sm hover:-translate-y-1 cursor-pointer rounded-lg"
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-9 h-9"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2">
                      {item.title.split(" ").slice(0, -1).join(" ")} <br />
                      {item.title.split(" ").slice(-1)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[#575757]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FeaturesPage;
