import Home from "@/src/views/Home";

export const metadata = {
  title: "Garage Management Software in India | GarageSaarthi",
  description:
    "Manage job cards, billing, inventory, customers, vehicles, staff and finances with GarageSaarthi garage management software. Start your 7-day free trial.",
  keywords:
    "garage management software, garage management system, garage management app, best garage management software, garage software, garage software india, garage management software india",
  alternates: {
    canonical: "https://www.garagesaarthi.com/",
  },
  openGraph: {
    title: "GarageSaarthi - Garage Management Software for Modern Workshops",
    description:
      "Manage your garage from one powerful platform. Handle job cards, inventory, customers, billing, staff, finances and service alerts with GarageSaarthi.",
    url: "https://www.garagesaarthi.com/",
    images: [{ url: "https://www.garagesaarthi.com/garage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Home />;
}