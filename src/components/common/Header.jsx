"use client";
import { FRONTEND_URL } from "@/src/config/env";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaTimes, FaArrowRight, FaChevronDown } from "react-icons/fa";
import Button from "./Button";
import GLogo from "../../assets/icons/Glogo.webp";
import { trackEvent } from "../../utils/pixel";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpenMobile, setIsSolutionsOpenMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const cleanPath = pathname?.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : (pathname || "");
  let active = "";
  if (cleanPath === "/pricing") {
    active = "Pricing";
  } else if (cleanPath === "/download-app") {
    active = "Download App";
  } else if (cleanPath === "/contact" || cleanPath === "/book-demo") {
    active = "Contact";
  } else if (cleanPath === "" || cleanPath === "/" || cleanPath === "/home") {
    active = "Home";
  } else if (cleanPath.startsWith("/solutions")) {
    active = "Solutions";
  } else if (cleanPath.startsWith("/features") || cleanPath.startsWith("/feature")) {
    active = "Features";
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "#", isDropdown: true, dropdownType: "solutions" },
    { name: "Features", href: "#", isDropdown: true, dropdownType: "features" },
    { name: "Download App", href: "/download-app/" },
    { name: "Contact", href: "/contact/" },
    { name: "Pricing", href: "/pricing/" },
  ];

  const solutionsMegaMenu = {
    "Core Modules": [
      { name: "Job Cards", href: "/solutions/garage-job-card-software/" },
      { name: "GST Billing", href: "/solutions/garage-billing-software/" },
      { name: "CRM", href: "/solutions/garage-crm-software/" },
      { name: "ERP", href: "/solutions/garage-erp-software/" },
      { name: "Inventory", href: "/solutions/garage-inventory-software/" },
      { name: "Service Reminders", href: "/solutions/service-reminder-software/" },
      { name: "Customer Engagement", href: "/solutions/garage-customer-engagement-software/" },
      { name: "WhatsApp Automation", href: "/solutions/garage-whatsapp-notification-software/" },
      { name: "Automation", href: "/solutions/garage-automation-software/" },
      { name: "Finance", href: "/solutions/garage-finance-management-software/" },
      { name: "Accounting", href: "/solutions/garage-accounting-software/" },
      { name: "Payroll", href: "/solutions/garage-payroll-software/" },
      { name: "Attendance", href: "/solutions/garage-attendance-software/" },
    ],
    "Workshop Solutions": [
      { name: "Workshop Management", href: "/solutions/workshop-management-software/" },
      { name: "Automobile Workshop", href: "/solutions/automobile-workshop-software/" },
      { name: "Auto Repair Shop", href: "/solutions/auto-repair-shop-software/" },
      { name: "Car Garage", href: "/solutions/car-garage-software/" },
      { name: "Car Workshop", href: "/solutions/car-workshop-software/" },
      { name: "Bike Workshop", href: "/solutions/bike-workshop-software/" },
      { name: "Truck Workshop", href: "/solutions/truck-workshop-software/" },
      { name: "EV Garage", href: "/solutions/ev-garage-management-software/" },
      { name: "Car Detailing", href: "/solutions/car-detailing-software/" },
      { name: "Fleet Workshop", href: "/solutions/fleet-workshop-software/" },
    ],
    "Buying & Business": [
      { name: "Best Garage Software", href: "/solutions/best-garage-management-software/" },
      { name: "Best Workshop Software", href: "/solutions/best-workshop-management-software/" },
      { name: "Software India (Garage)", href: "/solutions/garage-management-software-india/" },
      { name: "Software India (Workshop)", href: "/solutions/workshop-software-india/" },
      { name: "Marketing", href: "/solutions/garage-marketing-software/" },
      { name: "Multi-Branch", href: "/solutions/multi-branch-garage-software/" },
      { name: "Service History", href: "/solutions/vehicle-service-history-software/" },
      { name: "Reports & Analytics", href: "/solutions/garage-reports-analytics-software/" },
    ],
    "Apps & Mobile": [
      { name: "Garage App", href: "/solutions/garage-management-app/" },
      { name: "Workshop App", href: "/solutions/workshop-management-app/" },
    ]
  };

  const featuresMegaMenu = {
    "Workshop Operations": [
      { name: "Workshop Management Dashboard", href: "/features/workshop-management-dashboard/" },
      { name: "Job Card Management", href: "/features/job-card-management/" },
      { name: "Counter Sales", href: "/features/counter-sales/" },
      { name: "Billing & Invoicing", href: "/features/billing/" },
      { name: "Inventory Management", href: "/features/inventory/" },
      { name: "Vehicle Inspection", href: "/features/vehicle-inspection/" },
    ],
    "Customer & Vehicle": [
      { name: "CRM & Lead Management", href: "/features/crm/" },
      { name: "Customer Management", href: "/features/customers/" },
      { name: "Vehicle Management", href: "/features/vehicles/" },
      { name: "Vehicle Service History", href: "/features/service-history/" },
      { name: "Service Reminders", href: "/features/service-reminders/" },
      { name: "WhatsApp Automation", href: "/features/automation/" },
      { name: "Customer Review Collection", href: "/features/customer-reviews/" },
    ],
    "Business & Finance": [
      { name: "Finance Management", href: "/features/finance/" },
      { name: "Loan Management", href: "/features/loans/" },
      { name: "Reports & Analytics", href: "/features/reports/" },
      { name: "CA Access", href: "/features/ca-access/" },
    ],
    "Team Management": [
      { name: "Attendance Management", href: "/features/attendance/" },
      { name: "Payroll Management", href: "/features/payroll/" },
      { name: "Leave Management", href: "/features/leave-management/" },
      { name: "User Management", href: "/features/user-management/" },
      { name: "Role-Based Access", href: "/features/role-based-access/" },
      { name: "Multi-Branch Management", href: "/features/branches/" },
    ],
    "Marketing & Media": [
      { name: "Offers & Promotions", href: "/features/offers-promotions/" },
      { name: "Media Gallery (Before & After Photos)", href: "/features/media-gallery/" },
    ],
  };

  const handleNavClick = (e, link) => {
    if (link.isDropdown) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    const shouldScroll = link.href === "/pricing/" || link.href === "/features/";
    router.push(link.href, { scroll: shouldScroll });
    setIsMenuOpen(false);
  };

  const [isSolutionsOpenDesktop, setIsSolutionsOpenDesktop] = useState(false);
  const [isFeaturesOpenDesktop, setIsFeaturesOpenDesktop] = useState(false);
  const [isFeaturesOpenMobile, setIsFeaturesOpenMobile] = useState(false);

  const solutionsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setIsSolutionsOpenDesktop(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(e.target)) {
        setIsFeaturesOpenDesktop(false);
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

  const handleDropdownItemClick = (href) => {
    router.push(href);
    setIsMenuOpen(false);
    setIsSolutionsOpenMobile(false);
    setIsFeaturesOpenMobile(false);
    setIsSolutionsOpenDesktop(false);
    setIsFeaturesOpenDesktop(false);
  };

  const scrollToHome = () => {
    router.push("/", { scroll: false });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 2xl:px-50">
      <div className="relative mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full">
        <nav className="bg-white/80 backdrop-blur-md rounded-full border border-white/20 px-6 lg:px-8 py-3 flex items-center justify-between shadow-lg transition-all duration-300 relative z-10">
          {/*MOBILE / TABLET */}
          <div className="flex items-center justify-between w-full lg:hidden">
            {/* Hamburger / Close Icon */}
            <button
              className="p-2 w-10 flex items-center justify-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
              <img src={GLogo} alt="GarageSaarthi" className="h-10 w-auto" width={138} height={40} />
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
              <img src={GLogo} alt="GarageSaarthi" className="h-10 2xl:h-15 w-auto" width={138} height={40} />
            </div>

            {/* Nav Links */}
            <ul className="flex items-center gap-4 xl:gap-8 2xl:gap-10">
              {navLinks.map((link) => {
                const isActive = active === link.name;
                if (link.isDropdown) {
                  const isSolutions = link.dropdownType === "solutions";
                  const isOpenDesktop = isSolutions ? isSolutionsOpenDesktop : isFeaturesOpenDesktop;
                  const menuData = isSolutions ? solutionsMegaMenu : featuresMegaMenu;
                  const targetRef = isSolutions ? solutionsRef : featuresRef;
                  const toggleDesktop = () => {
                    if (isSolutions) {
                      setIsSolutionsOpenDesktop((prev) => !prev);
                      setIsFeaturesOpenDesktop(false);
                    } else {
                      setIsFeaturesOpenDesktop((prev) => !prev);
                      setIsSolutionsOpenDesktop(false);
                    }
                  };
                  const colCount = isSolutions ? 4 : 5;
                  const menuWidth = isSolutions ? "980px" : "1100px";

                  return (
                    <li key={link.name} ref={targetRef} className="group">
                      <div className="relative inline-block">
                        <Link
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleDesktop();
                          }}
                          className={`text-xs xl:text-sm 2xl:text-base font-semibold pb-2 transition-colors cursor-pointer animate-none ${
                            isActive ? "text-[#B02E0C]" : "hover:text-[#B02E0C]"
                          }`}
                        >
                          {link.name}
                          <FaChevronDown className={`w-2.5 h-2.5 ml-1 xl:ml-2 inline-block align-middle transition-transform duration-200 ${isOpenDesktop ? "rotate-180" : "group-hover:rotate-180"}`} />
                        </Link>

                        {isActive && (
                          <span
                            className="absolute left-0 -bottom-1 h-[5px] w-7 rounded-full"
                            style={{
                              background:
                                "linear-gradient(90deg, #B02E0C 0%, #FF643C 100%)",
                            }}
                          />
                        )}
                      </div>

                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 transition-all duration-200 z-50 ${isOpenDesktop ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
                        style={{ width: menuWidth, maxWidth: "calc(100vw - 32px)" }}
                      >
                        <div
                          className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-5 max-h-[calc(100vh-110px)] overflow-y-auto"
                          style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
                            gap: isSolutions ? "18px" : "14px"
                          }}
                        >
                          {Object.entries(menuData).map(([category, items]) => (
                            <div key={category} className="space-y-2.5">
                              <span className="text-[11.5px] font-bold text-primary bg-[#EFE9E7] px-3 py-1 rounded-full tracking-wider inline-block">
                                {category}
                              </span>
                              <div className="flex flex-col gap-1 border-t border-slate-100 pt-2.5">
                                {items.map((item) => {
                                  const isCurrent = pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '');
                                  return (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => handleDropdownItemClick(item.href)}
                                      className={`w-full text-left px-2.5 py-1.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer flex items-start gap-2 ${isCurrent
                                        ? "bg-slate-50 text-primary"
                                        : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                                        }`}
                                    >
                                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${isCurrent ? "bg-primary" : "bg-primary/45"
                                        }`} />
                                      <span className="whitespace-normal break-words leading-snug">{item.name}</span>
                                    </Link>
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
                      className={`text-xs xl:text-sm 2xl:text-base font-semibold pb-2 transition-colors whitespace-nowrap ${
                        isActive ? "text-[#B02E0C]" : "hover:text-[#B02E0C]"
                      }`}
                    >
                      {link.name}
                    </Link>

                    {isActive && (
                      <span
                        className="absolute left-0 -bottom-1 h-[5px] w-7 rounded-full"
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
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 p-3 flex flex-col gap-1 max-h-[calc(100vh-120px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = active === link.name;
              if (link.isDropdown) {
                const isSolutions = link.dropdownType === "solutions";
                const isOpenMobile = isSolutions ? isSolutionsOpenMobile : isFeaturesOpenMobile;
                const toggleMobile = () => {
                  if (isSolutions) {
                    setIsSolutionsOpenMobile(!isSolutionsOpenMobile);
                  } else {
                    setIsFeaturesOpenMobile(!isFeaturesOpenMobile);
                  }
                };
                const menuData = isSolutions ? solutionsMegaMenu : featuresMegaMenu;

                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={toggleMobile}
                      className={`px-6 py-3 rounded-2xl text-base font-semibold text-left transition-all duration-200 flex items-center justify-between ${isActive ? "bg-[#F5EAE7] text-[#B02E0C]" : "text-gray-700"
                        }`}
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpenMobile ? "rotate-180" : ""}`} />
                    </button>
                    {isOpenMobile && (
                      <div className="pl-4 flex flex-col gap-3 mt-2 mb-2">
                        {Object.entries(menuData).map(([category, items]) => (
                          <div key={category} className="space-y-1">
                            <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider pl-4 block mb-1">
                              {category}
                            </span>
                            <div className="flex flex-col gap-0.5 pl-2 border-l border-slate-100">
                              {items.map((item) => {
                                const isCurrent = pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '');
                                return (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => handleDropdownItemClick(item.href)}
                                    className={`text-left px-4 py-2 rounded-xl text-xs font-semibold active:scale-[0.98] ${isCurrent
                                      ? "bg-slate-50 text-primary"
                                      : "text-gray-600 hover:bg-gray-50"
                                      }`}
                                  >
                                    {item.name}
                                  </Link>
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

