import { API_URL } from "@/src/config/env";

export const subscriptionApi = {
  getActivePlans: async () => {
    try {
      const response = await fetch(`${API_URL}/subscription/plans`);
      if (!response.ok) {
        return { success: false, data: [] };
      }
      return await response.json();
    } catch (err) {
      console.error("subscriptionApi.getActivePlans error:", err);
      return { success: false, data: [] };
    }
  },
  
  getActiveCreditPlans: async () => {
    try {
      const response = await fetch(`${API_URL}/subscription/credit-plans`);
      if (!response.ok) {
        return { success: false, data: [] };
      }
      return await response.json();
    } catch (err) {
      console.error("subscriptionApi.getActiveCreditPlans error:", err);
      return { success: false, data: [] };
    }
  },

  submitInterest: async (data) => {
    try {
      const response = await fetch(`${API_URL}/public/demo-inquiry`, {
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
