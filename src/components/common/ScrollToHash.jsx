import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    let id = "";
    if (pathname === "/contact" || pathname === "/book-demo") {
      id = "contact";
    } else if (pathname === "/download-app") {
      id = "download-app";
    } else if (pathname === "/feature") {
      id = "features";
    } else if (pathname === "/home" || pathname === "/") {
      id = "home";
    }

    if (id) {
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
        }
      };

      const timer = setTimeout(scroll, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
}
