"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanPath = pathname.endsWith("/") && pathname.length > 1 ? pathname.slice(0, -1) : pathname;
    const validRoutes = [
      "/",
      "/home",
      "/pricing",
      "/feature",
      "/features",
      "/download-app",
      "/contact",
      "/privacy-policy",
      "/terms-and-conditions",
      "/404",
      "/_not-found"
    ];

    if (!validRoutes.includes(cleanPath)) {
      window.location.replace("/404/");
      return;
    }

    let id = "";
    if (cleanPath === "/contact" || cleanPath === "/book-demo") {
      id = "contact";
    } else if (cleanPath === "/download-app") {
      id = "download-app";
    } else if (cleanPath === "/feature") {
      id = "features";
    } else if (cleanPath === "/home" || cleanPath === "/") {
      id = "home";
    }

    if (id) {
      let attempts = 0;
      const scroll = () => {
        if (id === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const top =
            element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (attempts < 30) {
          attempts++;
          setTimeout(scroll, 50);
        }
      };

      const timer = setTimeout(scroll, 50);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
