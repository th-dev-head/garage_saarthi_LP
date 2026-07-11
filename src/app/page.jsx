import Home from "@/src/views/Home";

export const metadata = {
  title: "GarageSaarthi – Garage Management Software India | Free Trial",
  description:
    "GarageSaarthi is India's leading garage management software. Manage job cards, GST billing, inventory, staff & customer history. Start your 7-day free trial today!",
  keywords:
    "garage management software India, workshop management software, auto repair shop software India, garage billing software, GST billing for garages, digital job card software, workshop CRM",
  alternates: {
    canonical: "https://garagesaarthi.com/",
  },
  openGraph: {
    title: "GarageSaarthi – Garage Management Software India",
    description:
      "Streamline your auto workshop with digital job cards, GST billing, inventory & WhatsApp alerts. Trusted by garages across India.",
    url: "https://garagesaarthi.com/",
    images: [{ url: "https://garagesaarthi.com/garage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Home />;
}