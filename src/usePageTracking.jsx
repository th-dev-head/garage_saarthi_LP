import { useEffect } from "react";
import { usePathname } from "next/navigation";

const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);
};

export default usePageTracking;
