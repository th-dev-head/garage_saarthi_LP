"use client";import { FRONTEND_URL } from "@/src/config/env";


import React, { useState, useEffect } from "react";
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

  const solutionsList = [
    { name: "Workshop Management", href: "/workshop-management-software" },
    { name: "Automobile Workshop", href: "/automobile-workshop-software" },
    { name: "Auto Repair Shop", href: "/auto-repair-shop-software" },
  ];

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
    } else if (
      cleanPath.startsWith("/solutions/") ||
      cleanPath === "/workshop-management-software" ||
      cleanPath === "/automobile-workshop-software" ||
      cleanPath === "/auto-repair-shop-software"
    ) {
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

  const handleSolutionClick = (href) => {
    router.push(href);
    setIsMenuOpen(false);
    setIsSolutionsOpenMobile(false);
  };

  const scrollToContact = () => {
    router.push("/contact", { scroll: false });
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

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex items-center justify-between w-full px-4">
            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={scrollToHome}
            >
              <img src={GLogo} alt="GarageSaarthi" className="h-10 2xl:h-15" />
            </div>

            {/* Nav Links */}
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = active === link.name;
                if (link.isDropdown) {
                  return (
                    <li key={link.name} className="relative group">
                      <Link
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-md font-medium pb-2 hover:text-[#B02E0C] transition-colors cursor-pointer"
                      >
                        {link.name}
                        <FaChevronDown className="w-2.5 h-2.5 ml-2 inline-block align-middle transition-transform duration-200 group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-white border border-gray-100 rounded-2xl shadow-xl py-2 max-h-[380px] overflow-y-auto">
                          {solutionsList.map((sol) => (
                            <button
                              key={sol.name}
                              onClick={() => handleSolutionClick(sol.href)}
                              className="w-full text-left px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors cursor-pointer"
                            >
                              {sol.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      {isActive && (
                        <span
                          className="absolute left-0 right-0 -bottom-1 h-[5px] w-7 mx-auto rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #B02E0C 0%, #FF643C 100%)",
                          }}
                        />
                      )}
                    </li>
                  );
                }

                return (
                  <li key={link.name} className="relative">
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-md font-medium pb-2 hover:text-[#B02E0C] transition-colors"
                    >
                      {link.name}
                    </Link>

                    {isActive && (
                      <span
                        className="absolute left-0 right-0 -bottom-1 h-[5px] w-7 rounded-full"
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
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  trackEvent("InitiateCheckout");
                  window.open(
                    `${FRONTEND_URL}/login`,
                    "_blank",
                  );
                }}
                className="text-sm font-medium border border-[#1e1e1e] rounded-full px-4 py-2 cursor-pointer "
              >
                Login
              </button>
              <Button
                variant="hero"
                className="!px-4 !py-2 "
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
        </nav>

        {/* Mobile Menu Overlay - Positioned Below */}
        <div
          className={`absolute left-0 right-0 mt-3 lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-[28px] shadow-2xl border border-gray-100 p-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.name;
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsSolutionsOpenMobile(!isSolutionsOpenMobile)}
                      className={`px-6 py-3 rounded-2xl text-base font-semibold text-left transition-all duration-200 flex items-center justify-between ${
                        isActive ? "bg-[#F5EAE7] text-[#B02E0C]" : "text-gray-700"
                      }`}
                    >
                      <span>{link.name}</span>
                      <FaChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isSolutionsOpenMobile ? "rotate-180" : ""}`} />
                    </button>
                    {isSolutionsOpenMobile && (
                      <div className="pl-6 flex flex-col gap-1 mt-1 mb-2">
                        {solutionsList.map((sol) => (
                          <button
                            key={sol.name}
                            onClick={() => handleSolutionClick(sol.href)}
                            className="text-left px-6 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 active:scale-[0.98]"
                          >
                            {sol.name}
                          </button>
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
                  className={`px-6 py-3 rounded-2xl text-base font-semibold transition-all duration-200 ${
                    isActive
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

