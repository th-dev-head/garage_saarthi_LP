import Home from "@/src/views/Home";

export const metadata = {
  title: "GarageSaarthi Features | Digital Garage Management Tools India",
  description:
    "Explore key features of GarageSaarthi — India's smart garage management platform. Digital job cards, GST billing, inventory tracking, WhatsApp alerts & more for auto workshops.",
  keywords:
    "garage software features India, workshop management tools, auto repair software features, garage billing features, digital job card garage India",
  alternates: {
    canonical: "https://garagesaarthi.com/feature",
  },
  openGraph: {
    title: "GarageSaarthi Features – Smart Tools for Auto Workshops",
    description:
      "See how GarageSaarthi's features help Indian garage owners save time, reduce paperwork and grow their business.",
    url: "https://garagesaarthi.com/feature",
    images: [{ url: "https://garagesaarthi.com/garage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Home />;
}
