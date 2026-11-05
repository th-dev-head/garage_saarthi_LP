"use client";

import { useState, useEffect } from "react";

// Timezone to Country Code Map (Instant 0ms resolution)
const TIMEZONE_COUNTRY_MAP = {
  // Middle East & GCC
  "Asia/Dubai": { code: "AE", name: "United Arab Emirates", shortName: "UAE" },
  "Asia/Riyadh": { code: "SA", name: "Saudi Arabia", shortName: "Saudi Arabia" },
  "Asia/Qatar": { code: "QA", name: "Qatar", shortName: "Qatar" },
  "Asia/Kuwait": { code: "KW", name: "Kuwait", shortName: "Kuwait" },
  "Asia/Bahrain": { code: "BH", name: "Bahrain", shortName: "Bahrain" },
  "Asia/Muscat": { code: "OM", name: "Oman", shortName: "Oman" },

  // South Asia
  "Asia/Kolkata": { code: "IN", name: "India", shortName: "India" },
  "Asia/Calcutta": { code: "IN", name: "India", shortName: "India" },
  "Asia/Dhaka": { code: "BD", name: "Bangladesh", shortName: "Bangladesh" },
  "Asia/Karachi": { code: "PK", name: "Pakistan", shortName: "Pakistan" },
  "Asia/Colombo": { code: "LK", name: "Sri Lanka", shortName: "Sri Lanka" },
  "Asia/Kathmandu": { code: "NP", name: "Nepal", shortName: "Nepal" },

  // Southeast Asia & Far East
  "Asia/Singapore": { code: "SG", name: "Singapore", shortName: "Singapore" },
  "Asia/Kuala_Lumpur": { code: "MY", name: "Malaysia", shortName: "Malaysia" },
  "Asia/Bangkok": { code: "TH", name: "Thailand", shortName: "Thailand" },
  "Asia/Jakarta": { code: "ID", name: "Indonesia", shortName: "Indonesia" },
  "Asia/Tokyo": { code: "JP", name: "Japan", shortName: "Japan" },
  "Asia/Seoul": { code: "KR", name: "South Korea", shortName: "South Korea" },
  "Asia/Hong_Kong": { code: "HK", name: "Hong Kong", shortName: "Hong Kong" },

  // Europe
  "Europe/London": { code: "GB", name: "United Kingdom", shortName: "UK" },
  "Europe/Berlin": { code: "DE", name: "Germany", shortName: "Germany" },
  "Europe/Paris": { code: "FR", name: "France", shortName: "France" },
  "Europe/Rome": { code: "IT", name: "Italy", shortName: "Italy" },
  "Europe/Madrid": { code: "ES", name: "Spain", shortName: "Spain" },
  "Europe/Amsterdam": { code: "NL", name: "Netherlands", shortName: "Netherlands" },
  "Europe/Brussels": { code: "BE", name: "Belgium", shortName: "Belgium" },
  "Europe/Vienna": { code: "AT", name: "Austria", shortName: "Austria" },
  "Europe/Zurich": { code: "CH", name: "Switzerland", shortName: "Switzerland" },
  "Europe/Stockholm": { code: "SE", name: "Sweden", shortName: "Sweden" },
  "Europe/Oslo": { code: "NO", name: "Norway", shortName: "Norway" },
  "Europe/Dublin": { code: "IE", name: "Ireland", shortName: "Ireland" },
  "Europe/Warsaw": { code: "PL", name: "Poland", shortName: "Poland" },
  "Europe/Athens": { code: "GR", name: "Greece", shortName: "Greece" },

  // Americas
  "America/New_York": { code: "US", name: "United States", shortName: "USA" },
  "America/Chicago": { code: "US", name: "United States", shortName: "USA" },
  "America/Denver": { code: "US", name: "United States", shortName: "USA" },
  "America/Los_Angeles": { code: "US", name: "United States", shortName: "USA" },
  "America/Phoenix": { code: "US", name: "United States", shortName: "USA" },
  "America/Toronto": { code: "CA", name: "Canada", shortName: "Canada" },
  "America/Vancouver": { code: "CA", name: "Canada", shortName: "Canada" },
  "America/Montreal": { code: "CA", name: "Canada", shortName: "Canada" },
  "America/Mexico_City": { code: "MX", name: "Mexico", shortName: "Mexico" },
  "America/Sao_Paulo": { code: "BR", name: "Brazil", shortName: "Brazil" },

  // Oceania
  "Australia/Sydney": { code: "AU", name: "Australia", shortName: "Australia" },
  "Australia/Melbourne": { code: "AU", name: "Australia", shortName: "Australia" },
  "Australia/Brisbane": { code: "AU", name: "Australia", shortName: "Australia" },
  "Australia/Perth": { code: "AU", name: "Australia", shortName: "Australia" },
  "Pacific/Auckland": { code: "NZ", name: "New Zealand", shortName: "New Zealand" },

  // Africa
  "Africa/Johannesburg": { code: "ZA", name: "South Africa", shortName: "South Africa" },
  "Africa/Cairo": { code: "EG", name: "Egypt", shortName: "Egypt" },
  "Africa/Nairobi": { code: "KE", name: "Kenya", shortName: "Kenya" },
  "Africa/Lagos": { code: "NG", name: "Nigeria", shortName: "Nigeria" },
};

const DEFAULT_COUNTRY = {
  code: "IN",
  name: "India",
  shortName: "India",
  inText: "in India",
  possessive: "India's"
};

export function useVisitorCountry() {
  const [visitor, setVisitor] = useState(DEFAULT_COUNTRY);

  useEffect(() => {
    try {
      const cached = sessionStorage.getItem("gs_visitor_country");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed.name) {
          setVisitor(parsed);
          return;
        }
      }
    } catch (e) {
    }

    let detected = null;
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && TIMEZONE_COUNTRY_MAP[tz]) {
        const item = TIMEZONE_COUNTRY_MAP[tz];
        detected = {
          code: item.code,
          name: item.name,
          shortName: item.shortName,
          inText: `in ${item.shortName}`,
          possessive: `${item.shortName}'s`
        };
        setVisitor(detected);
      }
    } catch (e) {
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    fetch("https://api.country.is", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        clearTimeout(timeoutId);
        if (data && data.country && typeof data.country === "string") {
          const code = data.country.toUpperCase();
          let fullName = code;
          try {
            fullName = new Intl.DisplayNames(["en"], { type: "region" }).of(code) || code;
          } catch (e) {
            fullName = code;
          }

          let shortName = fullName;
          if (code === "AE") shortName = "UAE";
          else if (code === "US") shortName = "USA";
          else if (code === "GB") shortName = "UK";

          const finalData = {
            code,
            name: fullName,
            shortName,
            inText: `in ${shortName}`,
            possessive: `${shortName}'s`
          };

          setVisitor(finalData);
          try {
            sessionStorage.setItem("gs_visitor_country", JSON.stringify(finalData));
          } catch (e) {}
        }
      })
      .catch(() => {
        if (detected) {
          try {
            sessionStorage.setItem("gs_visitor_country", JSON.stringify(detected));
          } catch (e) {}
        }
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return visitor;
}

