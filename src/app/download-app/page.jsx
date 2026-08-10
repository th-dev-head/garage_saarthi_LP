import Home from "@/src/views/Home";

export const metadata = {
  title: "Download GarageSaarthi App | Garage Management App for Android & iOS",
  description:
    "Download the GarageSaarthi app on Android and iOS. Manage your auto workshop on the go — job cards, billing, WhatsApp alerts & inventory from your smartphone.",
  keywords:
    "garage management app download, workshop management app India, auto repair app android iOS, GarageSaarthi app download, garage software mobile app India",
  alternates: {
    canonical: "https://garagesaarthi.com/download-app/",
  },
  openGraph: {
    title: "Download GarageSaarthi – Garage Management App India",
    description:
      "Manage your garage from your phone. Download GarageSaarthi for Android & iOS and stay on top of every job, bill and customer.",
    url: "https://garagesaarthi.com/download-app/",
    images: [{ url: "https://garagesaarthi.com/garage.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Home />;
}
