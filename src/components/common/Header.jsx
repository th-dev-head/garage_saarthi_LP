"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import GLogo from "../../assets/icons/Glogo.png";
import { trackEvent } from "../../utils/pixel";

const Header = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/feature" },
    { name: "Download App", href: "/download-app" },
    { name: "Contact", href: "/contact" },
    { name: "Pricing", href: "/pricing" },
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
    } else if (cleanPath === "/" || cleanPath === "/home") {
      setActive("Home");
    } else {
      setActive("");
    }
  }, [pathname]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const shouldScroll = link.href === "/pricing" || link.href === "/features";
    router.push(link.href, { scroll: shouldScroll });
    setIsMenuOpen(false);
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
        <nav className="bg-white/80 backdrop-blur-md rounded-full border border-white/20 px-4 py-3 flex items-center justify-between shadow-lg transition-all duration-300 overflow-hidden relative z-10">
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
                    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/login`,
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
                return (
                  <li key={link.name} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="text-md font-medium pb-2 hover:text-[#B02E0C] transition-colors"
                    >
                      {link.name}
                    </a>

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
                    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/login`,
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
                    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/signup`,
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
              return (
                <a
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
                </a>
              );
            })}
            <div className="mt-2 pt-2 border-t border-gray-50">
              <Button
                variant="hero"
                className="w-fit !justify-center !rounded-2xl py-2 shadow-lg"
                onClick={() => {
                  trackEvent("Lead");
                  window.open(
                    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/signup`,
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
