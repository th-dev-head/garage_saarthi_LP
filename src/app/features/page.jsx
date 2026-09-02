import FeaturesPage from "@/src/views/FeaturesPage";

export const metadata = {
  title: "Features – GarageSaarthi | Job Cards, GST Billing, Inventory & More",
  description:
    "Discover all GarageSaarthi features: digital job cards, GST-compliant billing, spare parts inventory, WhatsApp notifications, staff payroll, CRM & multi-branch management for Indian workshops.",
  keywords:
    "garage software features, digital job card software India, GST billing for auto workshop, spare parts inventory management, WhatsApp notification garage, staff payroll workshop India, multi-branch garage management, vehicle inward acknowledgement receipt, job card edit history audit log, complaint resolution mapping, 8 invoice themes software, vehicle insurance puc reminder whatsapp",
  alternates: {
    canonical: "https://www.garagesaarthi.com/features/",
  },
  openGraph: {
    title: "GarageSaarthi Features – Complete Workshop Management Solution",
    description:
      "From digital job cards to WhatsApp alerts & GST billing — GarageSaarthi has every feature your Indian auto workshop needs.",
    url: "https://www.garagesaarthi.com/features/",
    images: [{ url: "https://www.garagesaarthi.com/garage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <FeaturesPage />;
}
