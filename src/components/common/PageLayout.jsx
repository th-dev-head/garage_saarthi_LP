"use client";

import React from "react";
import dynamic from "next/dynamic";
import Header from "./Header";
import Footer from "./Footer";

const ScrollToTop = dynamic(() => import("./ScrollToTop"), { ssr: false });

export default function PageLayout({ children, className = "bg-slate-50" }) {
  return (
    <div className={`min-h-screen ${className} flex flex-col font-sans`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
