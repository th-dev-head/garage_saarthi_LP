"use client";
import { FRONTEND_URL } from "@/src/config/env";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaTimes, FaArrowRight, FaChevronDown } from "react-icons/fa";
import Button from "./Button";
import GLogo from "../../assets/icons/Glogo.png";
import { trackEvent } from "../../utils/pixel";

const Header = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpenMobile, setIsSolutionsOpenMobile] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "#", isDropdown: true },
    { name: "Features", href: "/feature" },
    { name: "Download App", href: "/download-app" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
  ];

  const solutionsMegaMenu = {
    "Core Software": [
      { name: "Garage Job Card Software", href: "/solutions/garage-job-card-software" },
      { name: "Garage Billing Software", href: "/solutions/garage-billing-software" },
      { name: "Garage CRM Software", href: "/solutions/garage-crm-software" },
      { name: "Garage ERP Software", href: "/solutions/garage-erp-software" },
      { name: "Garage Inventory Software", href: "/solutions/garage-inventory-software" },
      { name: "Service Reminder Software", href: "/solutions/service-reminder-software" },
      { name: "Garage Customer Engagement", href: "/solutions/garage-customer-engagement-software" },
      { name: "Garage WhatsApp Notification", href: "/solutions/garage-whatsapp-notification-software" },
      { name: "Garage Automation Software", href: "/solutions/garage-automation-software" },
      { name: "Garage Finance Management", href: "/solutions/garage-finance-management-software" },
      { name: "Garage Accounting Software", href: "/solutions/garage-accounting-software" },
      { name: "Garage Payroll Software", href: "/solutions/garage-payroll-software" },
      { name: "Garage Attendance Software", href: "/solutions/garage-attendance-software" },
    ],
    "Workshop Solutions": [
      { name: "Workshop Management", href: "/solutions/workshop-management-software" },
      { name: "Automobile Workshop", href: "/solutions/automobile-workshop-software" },
      { name: "Auto Repair Shop", href: "/solutions/auto-repair-shop-software" },
      { name: "Car Garage Software", href: "/solutions/car-garage-software" },
      { name: "Car Workshop Software", href: "/solutions/car-workshop-software" },
      { name: "Bike Workshop Software", href: "/solutions/bike-workshop-software" },
      { name: "Truck Workshop Software", href: "/solutions/truck-workshop-software" },
      { name: "EV Garage Management Software", href: "/solutions/ev-garage-management-software" },
      { name: "Car Detailing Software", href: "/solutions/car-detailing-software" },
      { name: "Fleet Workshop Software", href: "/solutions/fleet-workshop-software" },
    ],
    "Buying & Business": [
      { name: "Best Garage Management Software", href: "/solutions/best-garage-management-software" },
      { name: "Best Workshop Management Software", href: "/solutions/best-workshop-management-software" },
      { name: "Garage Management Software India", href: "/solutions/garage-management-software-india" },
      { name: "Workshop Software India", href: "/solutions/workshop-software-india" },
      { name: "Garage Marketing Software", href: "/solutions/garage-marketing-software" },
      { name: "Multi Branch Garage Software", href: "/solutions/multi-branch-garage-software" },
      { name: "Vehicle Service History Software", href: "/solutions/vehicle-service-history-software" },
      { name: "Garage Reports & Analytics Software", href: "/solutions/garage-reports-analytics-software" },
    ],
    "Apps & Mobile": [
      { name: "Garage Management App", href: "/solutions/garage-management-app" },
      { name: "Workshop Management App", href: "/solutions/workshop-management-app" },
    ]
  };

  useEffect(() => {
    const cleanPath = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    if (cleanPath === "/pricing") {
      setActive("Pricing");
    } else if (cleanPath === "/feature" || cleanPath === "/features") {
      setActive("Features");
    } else if (cleanPath === "/download-app") {
      setActive("Download App");
    } else if (cleanPath === "/contact" || cleanPath === "/book-demo") {
      setActive("Contact");
    } else if (cleanPath.startsWith("/solutions/")) {
      setActive("Solutions");
    } else if (cleanPath === "/" || cleanPath === "/home") {
      setActive("Home");
    } else {
      setActive("");
    }
  }, [pathname]);

  const handleNavClick = (e, link) => {
    if (link.isDropdown) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const shouldScroll = link.href === "/pricing" || link.href === "/features";
    router.push(link.href, { scroll: shouldScroll });
    setIsMenuOpen(false);
  };

  const [isSolutionsOpenDesktop, setIsSolutionsOpenDesktop] = useState(false);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsSolutionsOpenDesktop(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleSolutionClick = (href) => {
    router.push(href);
    setIsMenuOpen(false);
    setIsSolutionsOpenMobile(false);
    setIsSolutionsOpenDesktop(false);
  };

  const scrollToHome = () => {
    router.push("/", { scroll: false });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 2xl:px-50">
      <div className="relative mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <nav className="bg-white/80 backdrop-blur-md rounded-full border border-white/20 px-4 py-3 flex items-center justify-between shadow-lg transition-all duration-300 relative z-10">
          {/*MOBILE / TABLET */}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/* Hamburger / Close Icon */}
            <button
              className="p-2 w-10 flex items-center justify-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <div className="space-y-1.5">
                  <span className="block w-[21px] h-[2px] bg-black rounded"></span>
                  <span className="block w-[21px] h-[2px] bg-black rounded"></span>
                  <span className="block w-[21px] h-[2px] bg-black rounded"></span>
                </div>
              )}
            </button>

            {/* Logo Center */}
            <div
              className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
              onClick={scrollToHome}
            >
              <img src={GLogo} alt="GarageSaarthi" className="h-10" />
            </div>

            {/* Login Button */}
            <div className="w-20 flex justify-end">
              <button
                onClick={() => {
                  trackEvent("InitiateCheckout");
                  window.open(
                    `${FRONTEND_URL}/login`,
                    "_blank",
                  );
                }}
                className="border border-black rounded-full px-4 py-1.5 text-xs font-semibold hover:bg-black hover:text-white transition-colors"
              >
                Login
              </button>
            </div>
          </div>

          {/* DESKTOP  */}
          <div className="hidden lg:flex items-center justify-between w-full px-4">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={scrollToHome}
            >
              <img src={GLogo} alt="GarageSaarthi" className="h-10 2xl:h-15" />
            </div>

            {/* Nav Links */}
            <ul className="flex items-center gap-4 xl:gap-8 2xl:gap-10">
              {navLinks.map((link) => {
                const isActive = active === link.name;
                if (link.isDropdown) {
                  return (
                    <li key={link.name} ref={dropdownRef} className="group">
                      <div className="relative inline-block">
                        <Link
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsSolutionsOpenDesktop((prev) => !prev);
                          }}
                          className="text-xs xl:text-sm 2xl:text-base font-semibold pb-2 hover:text-[#B02E0C] transition-colors cursor-pointer animate-none"
                        >
                          {link.name}
                          <FaChevronDown className={`w-2.5 h-2.5 ml-1 xl:ml-2 inline-block align-middle transition-transform duration-200 ${isSolutionsOpenDesktop ? "rotate-180" : "group-hover:rotate-180"}`} />
                        </Link>

                        {isActive && (
                          <span
                            className="absolute left-0 -right-0 -bottom-1 h-[5px] w-7 mx-auto rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, #B02E0C 0%, #FF643C 100%)",
                            }}
                          />
                        )}
                      </div>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 z-50 ${isSolutionsOpenDesktop ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
                        style={{ width: "980px" }}
                      >
                        <div
                          className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-6"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                            gap: "20px"
                          }}
                        >
                          {Object.entries(solutionsMegaMenu).map(([category, items]) => (
                            <div key={category} className="space-y-3">
                              <span className="text-[12px] font-bold text-primary bg-[#EFE9E7] px-3 py-1 rounded-full tracking-wider inline-block">
                                {category}
                              </span>
                              <div className="flex flex-col gap-1 border-t border-slate-100 pt-3">
                                {items.map((sol) => {
                                  const isCurrent = pathname.replace(/\/$/, '') === sol.href.replace(/\/$/, '');
                                  return (
                                    <button
                                      key={sol.name}
                                      onClick={() => handleSolutionClick(sol.href)}
                                      className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-start gap-2 ${isCurrent
                                        ? "bg-slate-50 text-primary"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                                        }`}
                                    >
                                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${isCurrent ? "bg-primary" : "bg-primary/45"
                                        }`} />
                                      <span className="whitespace-normal break-words leading-tight">{sol.name}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.name} className="relative">
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-xs xl:text-sm 2xl:text-base font-semibold pb-2 hover:text-[#B02E0C] transition-colors whitespace-nowrap"
                    >
                      {link.name}
                    </Link>

                    {isActive && (
                      <span
                        className="absolute left-0 -right-0 -bottom-1 h-[5px] w-7 mx-auto rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #B02E0C 0%, #FF643C 100%)",
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Buttons */}
            <div className="flex items-center gap-2 xl:gap-3">
              <button
                onClick={() => {
                  trackEvent("InitiateCheckout");
                  window.open(
                    `${FRONTEND_URL}/login`,
                    "_blank",
                  );
                }}
                className="text-xs xl:text-sm font-semibold border border-[#1e1e1e] rounded-full px-3 xl:px-4 py-1.5 xl:py-2 cursor-pointer whitespace-nowrap transition-colors hover:bg-black hover:text-white"
              >
                Login
              </button>
              <Button
                variant="hero"
                className="!px-3 xl:!px-4 !py-1.5 xl:!py-2 text-xs xl:text-sm whitespace-nowrap"
                onClick={() => {
                  trackEvent("Lead");
                  window.open(
                    `${FRONTEND_URL}/signup`,
                    "_blank",
                  );
                }}
              >
                Get Started
                <FaArrowRight className="w-3 h-3 xl:w-4 xl:h-4 ml-1 xl:ml-2" />
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay - Positioned Below */}
        <div
          className={`absolute left-0 right-0 mt-3 lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
            }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-[28px] shadow-2xl border border-gray-100 p-3 flex flex-col gap-1 max-h-[calc(100vh-120px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = active === link.name;
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsSolutionsOpenMobile(!isSolutionsOpenMobile)}
                      className={`px-6 py-3 rounded-2xl text-base font-semibold text-left transition-all duration-200 flex items-center justify-between ${isActive ? "bg-[#F5EAE7] text-[#B02E0C]" : "text-gray-700"
                        }`}
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSolutionsOpenMobile ? "rotate-180" : ""}`} />
                    </button>
                    {isSolutionsOpenMobile && (
                      <div className="pl-4 flex flex-col gap-3 mt-2 mb-2">
                        {Object.entries(solutionsMegaMenu).map(([category, items]) => (
                          <div key={category} className="space-y-1">
                            <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider pl-4 block mb-1">
                              {category}
                            </span>
                            <div className="flex flex-col gap-0.5 pl-2 border-l border-slate-100">
                              {items.map((sol) => {
                                const isCurrent = pathname.replace(/\/$/, '') === sol.href.replace(/\/$/, '');
                                return (
                                  <button
                                    key={sol.name}
                                    onClick={() => handleSolutionClick(sol.href)}
                                    className={`text-left px-4 py-2 rounded-xl text-xs font-semibold active:scale-[0.98] ${isCurrent
                                      ? "bg-slate-50 text-primary"
                                      : "text-gray-600 hover:bg-gray-50"
                                      }`}
                                  >
                                    {sol.name}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-6 py-3 rounded-2xl text-base font-semibold transition-all duration-200 ${isActive
                    ? "bg-[#F5EAE7] text-[#B02E0C]"
                    : "text-gray-700 hover:bg-gray-50 active:scale-[0.98]"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="mt-2 pt-2 border-t border-gray-50">
              <Button
                variant="hero"
                className="w-fit !justify-center !rounded-2xl py-2 shadow-lg"
                onClick={() => {
                  trackEvent("Lead");
                  window.open(
                    `${FRONTEND_URL}/signup`,
                    "_blank",
                  );
                }}
              >
                Get Started
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

