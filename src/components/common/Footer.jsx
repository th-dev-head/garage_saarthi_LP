import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import GLogo from "../../assets/icons/Glogo.svg";
import Button from "./Button";
import BgVector1 from "../../assets/icons/Bgvector-1.svg";
import BgVector2 from "../../assets/icons/Bgvector-2.svg";

import { trackEvent } from "../../utils/pixel";

const Footer = () => {
  return (
    <footer className="relative px-4 lg:px-15 2xl:px-50 py-12 bg-white overflow-hidden">
      {/* Bottom Left Shadow Vector */}
      <img
        src={BgVector1}
        alt=""
        className="pointer-events-none select-none absolute -bottom-20 -left-20 w-[700px] max-w-none opacity-80 z-0"
      />

      {/* Bottom Right Shadow Vector */}
      <img
        src={BgVector2}
        alt=""
        className="pointer-events-none select-none absolute -bottom-20 -right-20 w-[700px] max-w-none opacity-80 z-0"
      />

      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-white via-white/80 to-transparent" />

      {/* Content */}
      <div className="mx-auto max-w-full lg:max-w-6xl 2xl:max-w-full relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Col 1: Brand */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <img src={GLogo} alt="GarageSaarthi" className="h-14" />
            <p className="text-[#575757] text-sm font-medium leading-relaxed">
              GarageSaarthi is a complete Garage Management Software for car workshops. Manage Job Cards, GST Billing, Inventory, Customer History, Service Reminders &amp; Reports from one platform.
            </p>
            <p className="text-sm font-medium">
              Product By{" "}
              <a
                href="http://www.techifyhouse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B02E0C] font-bold hover:underline"
              >
                TechifyHouse
              </a>
            </p>
            <div className="pt-2">
              <Button
                variant="hero"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                }
                onClick={() => {
                  trackEvent("InitiateCheckout");
                  window.open("https://platform.garagesaarthi.com/login", "_blank");
                }}
              >
                Access Platform
              </Button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-text-dark font-bold text-sm tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-2.5 ">
              {[
                { label: "Home", link: "/" },
                { label: "Features", link: "/feature" },
                { label: "Pricing", link: "/pricing" },
                { label: "Book Demo", link: "/contact" },
                { label: "Contact", link: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.link} className="text-sm text-[#575757] hover:text-[#B02E0C] transition-colors font-medium cursor-pointer">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Features */}
          <div className="space-y-4">
            <h3 className="text-text-dark font-bold text-sm tracking-wide uppercase">Features</h3>
            <ul className="space-y-2.5">
              {["Job Cards", "GST Billing", "Inventory", "Reports", "Customer History"].map((f) => (
                <li key={f}>
                  <Link to="/features" className="text-sm text-[#575757] hover:text-[#B02E0C] transition-colors font-medium">
                    {f}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Social */}
          <div className="space-y-5">
            <div className="space-y-4">
              <h3 className="text-text-dark font-bold text-sm tracking-wide uppercase">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+917574045260" className="flex items-start gap-2 text-sm text-[#575757] hover:text-[#B02E0C] transition-colors font-medium group">
                    <Phone className="w-4 h-4 mt-0.5 shrink-0 text-[#B02E0C]" />
                    +91 7574045260
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@garagesaarthi.com" className="flex items-start gap-2 text-sm text-[#575757] hover:text-[#B02E0C] transition-colors font-medium">
                    <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#B02E0C]" />
                    contact@garagesaarthi.com
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/4T1CfS1xF22QC2Qk6" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[#575757] hover:text-[#B02E0C] transition-colors font-medium">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#B02E0C]" />
                    241-Royal Square, Utran, Surat, Gujarat
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-text-dark font-bold text-sm tracking-wide uppercase">Follow Us</h3>
              <div className="flex gap-3 flex-wrap">
                {/* Facebook */}
                <a href="https://www.facebook.com/people/GarageSaarthi/61586923957162/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-[#EEE] bg-orange-50 flex items-center justify-center hover:bg-[#B02E0C] hover:border-[#B02E0C] group transition-all">
                  <FaFacebook className="w-4 h-4 text-[#B02E0C] group-hover:text-white" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/garagesaarthi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-[#EEE] bg-orange-50 flex items-center justify-center hover:bg-[#B02E0C] hover:border-[#B02E0C] group transition-all">
                  <FaInstagram className="w-4 h-4 text-[#B02E0C] group-hover:text-white" />
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@GarageSaarthi" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                  className="w-8 h-8 rounded-full border border-[#EEE] bg-orange-50 flex items-center justify-center hover:bg-[#B02E0C] hover:border-[#B02E0C] group transition-all">
                  <FaYoutube className="w-4 h-4 text-[#B02E0C] group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm 2xl:text-sm">
            © {new Date().getFullYear()} GarageSaarthi. All rights reserved by{" "}
            <a
              href="http://www.techifyhouse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B02E0C] font-medium hover:underline"
            >
              Techifyhouse.
            </a>
          </p>

          <div className="flex items-center gap-8">
            <Link to="/privacy-policy" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
