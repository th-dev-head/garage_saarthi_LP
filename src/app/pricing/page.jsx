import PricingPage from "@/src/views/PricingPage";

export const metadata = {
  title: "GarageSaarthi Pricing Plans | Start Your 7-Day Free Trial Today!",
  description:
    "Explore affordable garage management software pricing plans starting at best rates for Indian auto workshops. Get GST billing, digital job cards & WhatsApp alerts.",
  keywords:
    "garage software pricing India, affordable garage management software, workshop management software plans, GST billing software price, cheap garage software India, garage software free trial",
  alternates: {
    canonical: "https://www.garagesaarthi.com/pricing/",
  },
  openGraph: {
    title: "GarageSaarthi Pricing – Start Free Trial Today",
    description:
      "Simple, transparent pricing for Indian garage owners. Get GST billing, digital job cards & WhatsApp alerts at an unbeatable price.",
    url: "https://www.garagesaarthi.com/pricing/",
    images: [{ url: "https://www.garagesaarthi.com/garage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <PricingPage />;
}
