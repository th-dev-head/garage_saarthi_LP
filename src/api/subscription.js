const getApiBaseUrl = () => {
  if (typeof window !== "undefined") {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return "http://localhost:3000/api";
    }
  }
  const base = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api-garagesaarthi.techifyhouse.in";
  return base.replace(/\/api\/?$/, "") + "/api";
};

export const subscriptionApi = {
  getActivePlans: async () => {
    const response = await fetch(`${getApiBaseUrl()}/subscription/plans`);
    return await response.json();
  },
  
  getActiveCreditPlans: async () => {
    const response = await fetch(`${getApiBaseUrl()}/subscription/credit-plans`);
    return await response.json();
  },

  submitInterest: async (data) => {
    try {
      const response = await fetch(`${getApiBaseUrl()}/public/demo-inquiry`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.name || data.fullName || data.full_name || "Subscriber",
          mobile: data.mobile || data.phone || "0000000000",
          garageName: data.garageName || data.garage_name || "Lifetime Plan Interest",
          message: data.message || `Interest in Lifetime Plan: ${data.plan || "Lifetime"}`,
          source: "Landing Page Lifetime Plan Modal",
        }),
      });
      const resData = await response.json();
      return response.ok && resData?.success;
    } catch (err) {
      console.error("submitInterest error:", err);
      return false;
    }
  },
};
