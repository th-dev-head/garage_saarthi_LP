const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/api';

export const subscriptionApi = {
  getActivePlans: async () => {
    const response = await fetch(`${BASE_URL}/subscription/plans`);
    return await response.json();
  },
  
  getActiveCreditPlans: async () => {
    const response = await fetch(`${BASE_URL}/subscription/credit-plans`);
    return await response.json();
  },

  submitInterest: async (data) => {
    const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  },
};
