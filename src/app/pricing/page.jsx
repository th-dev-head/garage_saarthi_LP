import PricingPage from "@/src/views/PricingPage";

export const metadata = {
  title: "Pricing – GarageSaarthi | Affordable Garage Management Plans India",
  description:
    "Explore GarageSaarthi pricing plans designed for Indian auto workshops. Start with a 7-day free trial. No credit card needed. GST billing, job cards, inventory & more.",
  keywords:
    "garage software pricing India, affordable garage management software, workshop management software plans, GST billing software price, cheap garage software India",
  alternates: {
    canonical: "https://garagesaarthi.com/pricing",
  },
  openGraph: {
    title: "GarageSaarthi Pricing – Start Free Trial Today",
    description:
      "Simple, transparent pricing for Indian garage owners. Get GST billing, digital job cards & WhatsApp alerts at an unbeatable price.",
    url: "https://garagesaarthi.com/pricing",
    images: [{ url: "https://garagesaarthi.com/garage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <PricingPage />;
}
