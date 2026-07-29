import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

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
