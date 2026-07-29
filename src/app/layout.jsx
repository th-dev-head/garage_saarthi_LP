import { FRONTEND_URL } from "@/src/config/env";
import Script from "next/script";
import ScrollToHash from "../components/common/ScrollToHash";
import "../index.css";

export const viewport = {
  themeColor: "#B02E0C",
};

export const metadata = {
  title: "GarageSaarthi – Your Digital Partner in Garage Management",
  description:
    "GarageSaarthi is a smart, all-in-one garage management platform that helps auto workshops streamline operations, manage customers, and grow their business effortlessly.",
  keywords:
    "garage management, auto workshop software, car service management, GarageSaarthi, vehicle repair software, garage billing, service center management, garage management software free, free garage management software",
  authors: [{ name: "GarageSaarthi" }],
  robots: process.env.NEXT_PUBLIC_NO_INDEX === "true" ? "noindex, nofollow" : "index, follow",
  alternates: {
    canonical: "https://garagesaarthi.com/",
  },
  verification: {
    google: "jIZJKHDfWrzNp11N6RbFEM5wTDMr6QHZk6nyO7BG0X8",
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
        {/* Favicon - PNG required for Google Search to display favicon */}
        <link rel="icon" type="image/png" href="/garagesarthi.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/GS.png" sizes="192x192" />
        <link rel="icon" type="image/svg+xml" href="/GS.svg" />
        <link rel="shortcut icon" href="/garagesarthi.png" />
        <link rel="apple-touch-icon" href="/GS.png" />

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

        {/* JSON-LD Structured Data for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.garagesaarthi.com/#organization",
                  "name": "GarageSaarthi",
                  "url": "https://www.garagesaarthi.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.garagesaarthi.com/GS.svg"
                  },
                  "sameAs": [
                    "https://www.instagram.com/garagesaarthi/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.garagesaarthi.com/#website",
                  "name": "GarageSaarthi",
                  "url": "https://www.garagesaarthi.com/",
                  "publisher": {
                    "@id": "https://www.garagesaarthi.com/#organization"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "@id": "https://www.garagesaarthi.com/#software",
                  "name": "GarageSaarthi",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web, Android",
                  "description": "Manage job cards, billing, inventory, customers, vehicles, staff and finances with GarageSaarthi garage management software.",
                  "url": "https://www.garagesaarthi.com/",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR",
                    "description": "7-day free trial available"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "1250",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.garagesaarthi.com/#webpage",
                  "url": "https://www.garagesaarthi.com/",
                  "name": "Garage Management Software in India | GarageSaarthi",
                  "description": "Manage job cards, billing, inventory, customers, vehicles, staff and finances with GarageSaarthi garage management software. Start your 7-day free trial.",
                  "isPartOf": {
                    "@id": "https://www.garagesaarthi.com/#website"
                  },
                  "about": {
                    "@id": "https://www.garagesaarthi.com/#software"
                  }
                }
              ]
            }),
          }}
        />
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

        {/* UTM & Lead Source Injector and Interceptor */}
        <Script id="utm-param-injector" strategy="afterInteractive">
          {`(function () {
            try {
              var STORAGE_KEY = 'gs_lp_source_params';

              function getTrackingParams() {
                var params = {};

                // 1. Load any previously saved params from sessionStorage
                try {
                  var saved = sessionStorage.getItem(STORAGE_KEY);
                  if (saved) {
                    params = JSON.parse(saved) || {};
                  }
                } catch (e) {}

                // 2. Parse current URL search params
                var search = window.location.search;
                if (search) {
                  var urlParams = new URLSearchParams(search);
                  var hasNewParams = false;
                  urlParams.forEach(function (value, key) {
                    if (value && value.trim() !== '') {
                      params[key] = value.trim();
                      hasNewParams = true;
                    }
                  });
                  if (hasNewParams) {
                    try {
                      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
                    } catch (e) {}
                  }
                }

                // 3. Ensure source & utm_source are always populated
                var currentPath = window.location.pathname || '/';
                
                if (!params['source'] && params['utm_source']) {
                  params['source'] = params['utm_source'];
                } else if (params['source'] && !params['utm_source']) {
                  params['utm_source'] = params['source'];
                } else if (!params['source'] && !params['utm_source']) {
                  params['source'] = 'landing_page';
                  params['utm_source'] = 'landing_page';
                }

                if (!params['utm_medium']) {
                  params['utm_medium'] = 'website';
                }

                if (!params['lp_path']) {
                  params['lp_path'] = currentPath;
                }

                if (!params['referrer'] && document.referrer) {
                  try {
                    var refHost = new URL(document.referrer).hostname;
                    if (refHost && refHost !== window.location.hostname) {
                      params['referrer'] = refHost;
                    }
                  } catch (e) {}
                }

                return params;
              }

              function isTargetUrl(urlStr) {
                if (!urlStr || typeof urlStr !== 'string') return false;
                var lower = urlStr.toLowerCase();
                return (
                  lower.indexOf('signup') !== -1 ||
                  lower.indexOf('login') !== -1 ||
                  lower.indexOf('register') !== -1 ||
                  lower.indexOf('platform.garagesaarthi.com') !== -1 ||
                  lower.indexOf(':5173') !== -1
                );
              }

              function appendParams(urlStr) {
                if (!urlStr || typeof urlStr !== 'string') return urlStr;
                try {
                  var params = getTrackingParams();
                  var paramKeys = Object.keys(params);
                  if (paramKeys.length === 0) return urlStr;

                  var isAbsolute = urlStr.indexOf('http://') === 0 || urlStr.indexOf('https://') === 0 || urlStr.indexOf('//') === 0;
                  var base = window.location.origin;
                  var targetUrl = new URL(isAbsolute ? urlStr : (base + (urlStr.indexOf('/') === 0 ? '' : '/') + urlStr));

                  paramKeys.forEach(function (key) {
                    if (!targetUrl.searchParams.has(key)) {
                      targetUrl.searchParams.set(key, params[key]);
                    }
                  });

                  return isAbsolute ? targetUrl.toString() : (targetUrl.pathname + targetUrl.search + targetUrl.hash);
                } catch (e) {
                  return urlStr;
                }
              }

              // Intercept window.open calls immediately
              var originalOpen = window.open;
              window.open = function (url, target, features) {
                if (url && isTargetUrl(url)) {
                  url = appendParams(url);
                }
                return originalOpen.call(this, url, target, features);
              };

              // Intercept link clicks dynamically without pre-hydration DOM mutation
              document.addEventListener('click', function (e) {
                var target = e.target;
                while (target && target !== document) {
                  if (target.tagName === 'A' && target.href) {
                    if (isTargetUrl(target.href)) {
                      target.href = appendParams(target.href);
                    }
                    break;
                  }
                  target = target.parentNode;
                }
              }, true);
            } catch (e) {
              console.error('UTM tracking script error:', e);
            }
          })();`}
        </Script>
      </body>
    </html>
  );
}
