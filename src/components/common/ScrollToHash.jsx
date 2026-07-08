import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const currentHash = hash || window.location.hash;
    if (currentHash) {
      let id = currentHash.replace("#", "");
      
      if (id === "book-demo") {
        id = "contact";
      }

      const scroll = () => {
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
  }, [pathname, hash]);

  return null;
}
