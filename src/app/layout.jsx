import Script from "next/script";
import ScrollToHash from "../components/common/ScrollToHash";
import "../index.css";

export const viewport = {
  themeColor: "#f97316",
};

export const metadata = {
  title: "GarageSaarthi – Your Digital Partner in Garage Management",
  description:
    "GarageSaarthi is a smart, all-in-one garage management platform that helps auto workshops streamline operations, manage customers, and grow their business effortlessly.",
  keywords:
    "garage management, auto workshop software, car service management, GarageSaarthi, vehicle repair software, garage billing, service center management",
  authors: [{ name: "GarageSaarthi" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://garagesaarthi.com/",
  },
  openGraph: {
    type: "website",
    url: "https://garagesaarthi.com/",
    siteName: "GarageSaarthi",
    title: "GarageSaarthi – Your Digital Partner in Garage Management",
    description:
      "GarageSaarthi is a smart, all-in-one garage management platform that helps auto workshops streamline operations, manage customers, and grow their business effortlessly.",
    images: [
      {
        url: "https://garagesaarthi.com/garage.png",
        width: 1200,
        height: 630,
        alt: "GarageSaarthi Preview Image",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://garagesaarthi.com/",
    title: "GarageSaarthi – Your Digital Partner in Garage Management",
    description:
      "GarageSaarthi is a smart, all-in-one garage management platform that helps auto workshops streamline operations, manage customers, and grow their business effortlessly.",
    images: ["https://garagesaarthi.com/garage.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/GS.svg" />
        <link rel="apple-touch-icon" href="/GS.svg" />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
              'gtm.start':
                new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-PQL6DKG6');`}
        </Script>

        {/* Google Ads Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18303165940"
          strategy="afterInteractive"
        />
        <Script id="google-ads-script" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18303165940');`}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
              n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1485087049745586');
          fbq('track', 'PageView');`}
        </Script>
      </head>
      <body>
        <ScrollToHash />
        {/* Meta Pixel Code (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1485087049745586&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQL6DKG6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        {/* UTM Param Injector and Window Open Interceptor */}
        <Script id="utm-param-injector" strategy="lazyOnload">
          {`window.addEventListener('load', function () {
            const urlParams = new URLSearchParams(window.location.search);
            let utmQueryString = "";

            urlParams.forEach((value, key) => {
              if (key.toLowerCase().startsWith('utm_') || key.toLowerCase().includes('clid')) {
                utmQueryString += (utmQueryString ? "&" : "") + key + "=" + encodeURIComponent(value);
              }
            });

            if (utmQueryString) {
              const appLinks = document.querySelectorAll('a[href*="platform.garagesaarthi.com"]');
              appLinks.forEach(link => {
                try {
                  const url = new URL(link.href);
                  const newParams = new URLSearchParams(utmQueryString);
                  newParams.forEach((value, key) => {
                    url.searchParams.set(key, value);
                  });
                  link.href = url.toString();
                } catch (e) {
                  console.error("Link update error:", e);
                }
              });

              const originalWindowOpen = window.open;
              window.open = function (url, target, features) {
                if (url && url.includes('platform.garagesaarthi.com')) {
                  try {
                    const newUrl = new URL(url.startsWith('http') ? url : window.location.origin + url);
                    const newParams = new URLSearchParams(utmQueryString);
                    newParams.forEach((value, key) => {
                      newUrl.searchParams.set(key, value);
                    });
                    url = newUrl.toString();
                  } catch (e) { }
                }
                return originalWindowOpen.call(this, url, target, features);
              };
            }
          });`}
        </Script>
      </body>
    </html>
  );
}
